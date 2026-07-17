import Image from "next/image";
import Reveal from "@/components/common/Reveal";
import styles from "./WorksShowcase.module.css";

const carouselShots = [
  {
    src: "/carouselbaru/1.jpg",
    alt: "Production setup at an event venue",
  },
  {
    src: "/carouselbaru/2.jpg",
    alt: "Camera and livestream equipment prepared for an event",
  },
  {
    src: "/carouselbaru/3.jpg",
    alt: "Crew operating a live streaming production desk",
  },
  {
    src: "/carouselbaru/4.jpg",
    alt: "Live program output and monitoring screens",
  },
  {
    src: "/carouselbaru/5.jpg",
    alt: "Production monitor showing an event audience view",
  },
] as const;

const movingShots = [...carouselShots, ...carouselShots];

export default function WorksShowcase() {
  return (
    <section className={styles.section} aria-labelledby="works-showcase-title">
      <Reveal className={styles.intro}>
        <h2 id="works-showcase-title" className={styles.heading}>
          Galeri produksi
        </h2>
        <p className={styles.copy}>
          Dokumentasi singkat dari workflow produksi Colorize Visual.
        </p>
      </Reveal>

      <div className={styles.movingGallery} aria-label="Production workflow photos">
        <div className={styles.galleryTrack}>
          {movingShots.map((shot, index) => (
            <figure className={styles.galleryCard} key={`${shot.src}-${index}`}>
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className={styles.galleryImage}
                sizes="(max-width: 768px) 72vw, 32vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
