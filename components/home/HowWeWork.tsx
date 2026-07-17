"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import Reveal from "@/components/common/Reveal";
import styles from "./HowWeWork.module.css";

const HowWeWork = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      eyebrow: "Cara kerja",
      heading: "Proses yang rapi membuat hari-H lebih tenang.",
      steps: [
        {
          num: "01",
          title: "Konsultasi",
          desc: "Kami memahami detail acara, venue, rundown, platform streaming, jumlah kamera, dan kebutuhan display."
        },
        {
          num: "02",
          title: "Perencanaan Teknis",
          desc: "Tim Colorize Visual merancang kebutuhan alat, crew, workflow video, audio, dan output."
        },
        {
          num: "03",
          title: "Setup & Testing",
          desc: "Peralatan dipasang dan diuji sebelum acara dimulai untuk mengurangi risiko teknis."
        },
        {
          num: "04",
          title: "Operasional Live",
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
      eyebrow: "How we work",
      heading: "A clean process keeps event day calmer.",
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
      <Reveal className={styles.container}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
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
      </Reveal>
    </section>
  );
};

export default HowWeWork;
