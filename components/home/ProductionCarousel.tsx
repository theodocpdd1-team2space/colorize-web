"use client";

import Image from "next/image";
import type { PointerEvent, TransitionEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import Reveal from "@/components/common/Reveal";
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
  const { language } = useLanguage();
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

  const copy = {
    id: {
      heading: "Dibangun dari setup sampai live.",
      subtitle:
        "Setup dibuat jelas dari kamera, audio, preview monitor, sampai output streaming.",
      stats: [
        ["01", "Brief & rundown"],
        ["02", "Setup multicam"],
        ["03", "Live operation"],
      ],
      previous: "Foto produksi sebelumnya",
      next: "Foto produksi berikutnya",
      show: "Tampilkan foto produksi",
    },
    en: {
      heading: "Built from setup to live.",
      subtitle:
        "Camera, audio, preview monitor, and streaming output are prepared as one clear workflow.",
      stats: [
        ["01", "Brief & rundown"],
        ["02", "Multicam setup"],
        ["03", "Live operation"],
      ],
      previous: "Previous production photo",
      next: "Next production photo",
      show: "Show production photo",
    },
  };

  const t = copy[language];

  return (
    <section className={styles.section}>
      <Reveal className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.heading}>{t.heading}</h2>
          </div>
          <div className={styles.headerAside}>
            <p className={styles.subtitle}>{t.subtitle}</p>
            <dl className={styles.stats}>
              {t.stats.map(([number, text]) => (
                <div className={styles.stat} key={number}>
                  <dt>{number}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
          </div>
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
            aria-label={t.previous}
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
            aria-label={t.next}
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
              aria-label={`${t.show} ${index + 1}`}
              aria-current={activeIndex === index}
              key={photo.src}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default ProductionCarousel;
