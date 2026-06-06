"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./AboutTheo.module.css";

const AboutTheo = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      heading: "Handled Directly by Someone Who Understands Visual & Broadcast",
      body: "Colorize Visual dikembangkan oleh Theo Filus, seorang videography enthusiast yang aktif dalam dunia audio visual, live streaming, dan sistem multimedia. Dalam setiap project, Theo ikut memahami kebutuhan acara, merancang alur teknis, dan memastikan proses broadcast atau instalasi berjalan sesuai kebutuhan klien.",
      highlight: "Not just equipment rental. We help you design the right visual workflow.",
    },
    en: {
      heading: "Directly Handled by a Visual & Broadcast Enthusiast",
      body: "Colorize Visual is led by Theo Filus, a videography enthusiast with strong interest in audio visual systems, live streaming, and multimedia technology. Every project is approached with technical planning, visual understanding, and practical execution.",
      highlight: "Not just equipment rental. We help you design the right visual workflow.",
    }
  };

  const t = content[language];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <div className={styles.placeholderImage}>
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.imageAccent}></div>
          </div>
        </div>
        
        <div className={styles.textColumn}>
          <h2 className={styles.heading}>{t.heading}</h2>
          <p className={styles.body}>{t.body}</p>
          
          <div className={styles.highlightBox}>
            <div className={styles.highlightLine}></div>
            <p className={styles.highlightText}>{t.highlight}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTheo;
