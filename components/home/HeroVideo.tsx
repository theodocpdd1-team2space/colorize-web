"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./HeroVideo.module.css";

const HeroVideo = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      headline: "Live Streaming & Multimedia Production Based in Surabaya",
      subheadline: "Colorize Visual membantu event Anda tampil profesional melalui live streaming, broadcasting, videotron, dan instalasi multimedia yang rapi, modern, dan siap kebutuhan lapangan.",
      ctaPrimary: "Konsultasi Sekarang",
      ctaSecondary: "Lihat Portfolio",
      runningText: "Live Streaming • Broadcasting • Multimedia Installation • Videotron • Hybrid Event • Camera System • Visual Engineering"
    },
    en: {
      headline: "Professional Live Streaming & Multimedia Production",
      subheadline: "Based in Surabaya, Colorize Visual delivers broadcast-ready solutions for events, worship, corporate meetings, weddings, and multimedia installations.",
      ctaPrimary: "Contact Us Now",
      ctaSecondary: "View Our Works",
      runningText: "Live Streaming • Broadcasting • Multimedia Installation • Videotron • Hybrid Event • Camera System • Visual Engineering"
    }
  };

  const t = content[language];

  return (
  <section className={styles.heroSection}>
    {/* Video Background */}
    <div className={styles.videoContainer}>
      <video
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className={styles.gradientOverlay}></div>
    </div>

    <div className={styles.content}>
      <h1 className={styles.headline}>{t.headline}</h1>
      <p className={styles.subheadline}>{t.subheadline}</p>

      <div className={styles.ctaGroup}>
        <Link href="/contact" className={styles.primaryBtn}>
          {t.ctaPrimary}
        </Link>
        <Link href="/works" className={styles.secondaryBtn}>
          {t.ctaSecondary}
        </Link>
      </div>
    </div>

    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        <span>{t.runningText}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>{t.runningText}</span>
      </div>
    </div>
  </section>
);
};

export default HeroVideo;
