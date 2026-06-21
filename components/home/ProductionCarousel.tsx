"use client";

import Image from "next/image";
import type { PointerEvent, TransitionEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./ProductionCarousel.module.css";

const photos = [
  {
    src: "/carouselbaru/1.jpg",
    alt: "Colorize Visual production workflow photo 1",
  },
  {
    src: "/carouselbaru/2.jpg",
    alt: "Colorize Visual production workflow photo 2",
  },
  {
    src: "/carouselbaru/3.jpg",
    alt: "Colorize Visual production workflow photo 3",
  },
  {
    src: "/carouselbaru/4.jpg",
    alt: "Colorize Visual production workflow photo 4",
  },
  {
    src: "/carouselbaru/5.jpg",
    alt: "Colorize Visual production workflow photo 5",
  },
] as const;

const loopedPhotos = [...photos, ...photos, ...photos];
const photoCount = photos.length;
const autoplayDelay = 4000;
const swipeThreshold = 44;

const ProductionCarousel = () => {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLElement | null>(null);
  const pointerStartXRef = useRef<number | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState<number>(photoCount);
  const [slideStep, setSlideStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const goToNext = useCallback(() => {
    setTransitionEnabled(true);
    setActiveIndex((current) => (current + 1) % photoCount);
    setTrackIndex((current) => current + 1);
  }, []);

  const goToPrevious = useCallback(() => {
    setTransitionEnabled(true);
    setActiveIndex((current) => (current - 1 + photoCount) % photoCount);
    setTrackIndex((current) => current - 1);
  }, []);

  const goToSlide = (index: number) => {
    setTransitionEnabled(true);
    setActiveIndex(index);
    setTrackIndex(photoCount + index);
  };

  useEffect(() => {
    const updateSlideStep = () => {
      const card = firstCardRef.current;
      const track = trackRef.current;

      if (!card || !track) {
        return;
      }

      const trackStyle = window.getComputedStyle(track);
      const gap = Number.parseFloat(trackStyle.columnGap || trackStyle.gap || "0");

      setSlideStep(card.getBoundingClientRect().width + gap);
    };

    updateSlideStep();

    const resizeObserver = new ResizeObserver(updateSlideStep);

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    window.addEventListener("resize", updateSlideStep);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSlideStep);
    };
  }, []);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const autoplay = window.setInterval(goToNext, autoplayDelay);

    return () => window.clearInterval(autoplay);
  }, [goToNext, isPaused]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.currentTarget !== event.target) {
      return;
    }

    if (trackIndex >= photoCount * 2) {
      setTransitionEnabled(false);
      setTrackIndex(photoCount);
      window.requestAnimationFrame(() => setTransitionEnabled(true));
    }

    if (trackIndex <= photoCount - 1) {
      setTransitionEnabled(false);
      setTrackIndex(photoCount + photoCount - 1);
      window.requestAnimationFrame(() => setTransitionEnabled(true));
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStartXRef.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStartXRef.current === null) {
      return;
    }

    const swipeDistance = event.clientX - pointerStartXRef.current;
    pointerStartXRef.current = null;

    if (Math.abs(swipeDistance) < swipeThreshold) {
      return;
    }

    if (swipeDistance < 0) {
      goToNext();
      return;
    }

    goToPrevious();
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Behind Every Clean Broadcast, There&apos;s a Solid Workflow
          </h2>
          <p className={styles.subtitle}>
            From camera setup, switching, monitoring, to live output — our team
            prepares every detail so your event looks professional on screen.
          </p>
        </div>

        <div
          className={styles.carousel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            type="button"
            onClick={goToPrevious}
            aria-label="Previous production photo"
          >
            <span aria-hidden="true">‹</span>
          </button>

          <div
            ref={viewportRef}
            className={styles.viewport}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerEnd}
            onPointerCancel={() => {
              pointerStartXRef.current = null;
            }}
          >
            <div
              ref={trackRef}
              className={`${styles.track} ${
                transitionEnabled ? "" : styles.noTransition
              }`}
              style={{
                transform: `translate3d(-${trackIndex * slideStep}px, 0, 0)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {loopedPhotos.map((photo, index) => (
                <article
                  className={styles.card}
                  key={`${photo.src}-${index}`}
                  ref={index === 0 ? firstCardRef : undefined}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 90vw, (max-width: 1100px) 45vw, 380px"
                    priority={index >= photoCount && index < photoCount + 3}
                  />
                </article>
              ))}
            </div>
          </div>

          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            type="button"
            onClick={goToNext}
            aria-label="Next production photo"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div className={styles.dots} aria-label="Production carousel controls">
          {photos.map((photo, index) => (
            <button
              className={`${styles.dot} ${
                activeIndex === index ? styles.activeDot : ""
              }`}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Show production photo ${index + 1}`}
              aria-current={activeIndex === index}
              key={photo.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionCarousel;
