"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      heading: "Kenapa Memilih Colorize Visual?",
      cards: [
        {
          title: "Value to Money",
          desc: "Kami membantu Anda mendapatkan hasil broadcast yang profesional dengan paket yang tetap masuk akal dan disesuaikan dengan kebutuhan acara.",
          icon: "💰"
        },
        {
          title: "Professional Workflow",
          desc: "Setiap kebutuhan teknis dirancang dari awal, mulai dari alur kamera, audio, output layar, hingga platform streaming.",
          icon: "⚙️"
        },
        {
          title: "Newest Gear",
          desc: "Kami menggunakan perangkat yang terus disesuaikan dengan kebutuhan produksi modern, mulai dari kamera, switcher, capture system, hingga broadcast tools.",
          icon: "🎥"
        },
        {
          title: "Direct Technical Handling",
          desc: "Theo Filus sebagai videography enthusiast akan ikut menangani kebutuhan teknis, programming broadcast, dan instalasi agar hasil sesuai kebutuhan acara.",
          icon: "👨‍💻"
        }
      ]
    },
    en: {
      heading: "Why Choose Colorize Visual?",
      cards: [
        {
          title: "Value for Money",
          desc: "We deliver professional broadcast quality with practical packages tailored to your event needs.",
          icon: "💰"
        },
        {
          title: "Professional Workflow",
          desc: "Every technical detail is planned carefully, from camera flow and audio routing to screen output and streaming platform.",
          icon: "⚙️"
        },
        {
          title: "Newest Gear",
          desc: "We use updated production tools, including cameras, switchers, capture systems, and broadcast-ready equipment.",
          icon: "🎥"
        },
        {
          title: "Direct Technical Handling",
          desc: "Theo Filus, a videography enthusiast, directly handles broadcast programming and installation planning for your event needs.",
          icon: "👨‍💻"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          {t.heading}
        </h2>
        
        <div className={styles.grid}>
          {t.cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{card.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
