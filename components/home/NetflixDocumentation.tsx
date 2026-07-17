"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import Reveal from "@/components/common/Reveal";
import styles from "./NetflixDocumentation.module.css";

const whatsappUrl =
  "https://wa.me/62895345902896?text=Halo%2C%20saya%20...%20butuh%20layanan%20Live%20Streaming%20dan%20Multicam%20boleh%20dibantu%20lebih%20lanjut%3F";

const NetflixDocumentation = () => {
  const { language } = useLanguage();
  const content = {
    id: {
      eyebrow: "DOKUMENTASI SINEMATIK",
      heading: "Make Your Documentation Look Like Netflix",
      subtitle:
        "Visual bersih, multicam rapi, dan produksi live yang terasa matang.",
      cta: "Konsultasi Project",
    },
    en: {
      eyebrow: "CINEMATIC DOCUMENTATION",
      heading: "Make Your Documentation Look Like Netflix",
      subtitle:
        "Clean visuals, polished multicam workflow, and live production that feels premium.",
      cta: "Discuss Project",
    },
  };
  const t = content[language];

  return (
    <section className={styles.section} aria-labelledby="netflix-title">
      <div className={styles.videoLayer} aria-hidden="true">
        <video className={styles.video} autoPlay muted loop playsInline>
          <source src="/video2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.videoOverlay} />

      <Reveal className={styles.content}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h2 id="netflix-title" className={styles.heading}>
          {t.heading}
        </h2>
        <p className={styles.subtitle}>{t.subtitle}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.cta}
        >
          {t.cta}
        </a>
      </Reveal>
    </section>
  );
};

export default NetflixDocumentation;
