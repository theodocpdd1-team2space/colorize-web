"use client";

import Image from "next/image";
import { events, whatsappUrl } from "./eventData";
import styles from "./FeaturedWorks.module.css";

type FeaturedWorksProps = {
  heading?: string;
  subtitle?: string;
};

const FeaturedWorks = ({
  heading = "Our Works",
  subtitle = "A selection of live streaming, multicam, wedding, graduation, and sport event productions handled by Colorize Visual.",
}: FeaturedWorksProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        
        <div className={styles.grid}>
          {events.map((event) => (
            <article key={event.title} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              </div>
              <div className={styles.content}>
                <p className={styles.category}>{event.category}</p>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.cta}
                >
                  Konsultasi Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
