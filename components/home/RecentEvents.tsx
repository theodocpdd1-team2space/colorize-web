"use client";

import Image from "next/image";
import { events, whatsappUrl } from "./eventData";
import styles from "./RecentEvents.module.css";

const RecentEvents = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Latest Event</h2>
          <p className={styles.subtitle}>
            A selection of live streaming, multicam, wedding, graduation, and sport event productions handled by Colorize Visual.
          </p>
        </div>
        
        <div className={styles.grid}>
          {events.map((event) => (
            <article key={event.title} className={styles.eventCard}>
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
                <span className={styles.category}>{event.category}</span>
                <h3 className={styles.title}>{event.title}</h3>
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

export default RecentEvents;
