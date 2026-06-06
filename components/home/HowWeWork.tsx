"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./HowWeWork.module.css";

const HowWeWork = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      heading: "How We Work",
      steps: [
        {
          num: "01",
          title: "Consultation",
          desc: "Klien menjelaskan kebutuhan acara, lokasi, platform streaming, jumlah kamera, output, dan kebutuhan display."
        },
        {
          num: "02",
          title: "Technical Planning",
          desc: "Tim Colorize Visual merancang kebutuhan alat, crew, workflow video, audio, dan output."
        },
        {
          num: "03",
          title: "Setup & Testing",
          desc: "Peralatan dipasang dan diuji sebelum acara dimulai untuk mengurangi risiko teknis."
        },
        {
          num: "04",
          title: "Live Operation",
          desc: "Tim menjalankan proses live streaming, switching, monitoring, dan troubleshooting selama acara."
        },
        {
          num: "05",
          title: "Delivery",
          desc: "Jika dibutuhkan, hasil rekaman atau dokumentasi dapat diberikan setelah acara selesai."
        }
      ]
    },
    en: {
      heading: "How We Work",
      steps: [
        {
          num: "01",
          title: "Consultation",
          desc: "Client explains event details, location, streaming platform, camera count, output, and display needs."
        },
        {
          num: "02",
          title: "Technical Planning",
          desc: "Colorize Visual team designs equipment requirements, crew, video workflow, audio, and output routing."
        },
        {
          num: "03",
          title: "Setup & Testing",
          desc: "Equipment is installed and thoroughly tested before the event starts to minimize technical risks."
        },
        {
          num: "04",
          title: "Live Operation",
          desc: "The team executes the live stream, switching, monitoring, and troubleshooting during the event."
        },
        {
          num: "05",
          title: "Delivery",
          desc: "If needed, event recordings or documentation will be handed over after completion."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t.heading}</h2>
        
        <div className={styles.timeline}>
          {t.steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
