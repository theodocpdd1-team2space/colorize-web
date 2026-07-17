"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./HeroVideo.module.css";

const whatsappUrl =
  "https://wa.me/62895345902896?text=Halo%2C%20saya%20...%20butuh%20layanan%20Live%20Streaming%20dan%20Multicam%20boleh%20dibantu%20lebih%20lanjut%3F";

const HeroVideo = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      label: "Creative Production / Broadcast Studio",
      location: "Surabaya Based",
      cta: "Konsultasi Project",
    },
    en: {
      label: "Creative Production / Broadcast Studio",
      location: "Surabaya Based",
      cta: "Discuss Project",
    },
  };

  const t = content[language];

  return (
    <section className={styles.heroSection}>
      <div className={styles.videoContainer}>
        <video className={styles.heroVideo} autoPlay muted loop playsInline>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className={styles.gradientOverlay}></div>
      </div>

      <div className={styles.content}>
        <p className={styles.label}>{t.label}</p>
        <p className={styles.location}>{t.location}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.cta}
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
};

export default HeroVideo;
