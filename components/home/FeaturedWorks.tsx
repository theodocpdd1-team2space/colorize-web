"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import Reveal from "@/components/common/Reveal";
import { events, whatsappUrl } from "./eventData";
import styles from "./FeaturedWorks.module.css";

type FeaturedWorksProps = {
  heading?: string;
  subtitle?: string;
};

const FeaturedWorks = ({
  heading,
  subtitle,
}: FeaturedWorksProps) => {
  const { language } = useLanguage();
  const fallback = {
    id: {
      eyebrow: "Karya terpilih",
      heading: "Event nyata, workflow nyata, hasil yang siap ditonton.",
      subtitle:
        "Pilihan event live streaming, multicam, wedding, graduation, dan sport production.",
      cta: "Konsultasi Project",
      categories: [
        "Live streaming graduation",
        "Broadcast event sekolah",
        "Live streaming wedding",
        "Live streaming graduation",
        "Produksi multicam olahraga",
        "Produksi live olahraga",
      ],
    },
    en: {
      eyebrow: "Featured works",
      heading: "Real events, real workflows, broadcast-ready results.",
      subtitle:
        "Selected live streaming, multicam, wedding, graduation, and sport productions.",
      cta: "Discuss Project",
      categories: [
        "Graduation live streaming",
        "School event broadcast",
        "Wedding live streaming",
        "Graduation live streaming",
        "Sport event multicam",
        "Sport event live production",
      ],
    },
  };
  const t = fallback[language];

  return (
    <section className={styles.section}>
      <Reveal className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h2 className={styles.heading}>{heading ?? t.heading}</h2>
          <p className={styles.subtitle}>{subtitle ?? t.subtitle}</p>
        </div>
        
        <div className={styles.grid}>
          {events.map((event, index) => (
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
                <p className={styles.index}>{String(index + 1).padStart(2, "0")}</p>
                <p className={styles.category}>{t.categories[index]}</p>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.cta}
                >
                  {t.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default FeaturedWorks;
