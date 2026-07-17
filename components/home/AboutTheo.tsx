"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import Reveal from "@/components/common/Reveal";
import styles from "./AboutTheo.module.css";

const AboutTheo = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      eyebrow: "Tentang Theo",
      heading: "Ditangani langsung oleh orang yang memahami visual dan broadcast.",
      body: "Colorize Visual dikembangkan oleh Theo Filus, seorang videography enthusiast yang aktif di dunia audio visual, live streaming, dan sistem multimedia. Dalam setiap project, Theo ikut memahami kebutuhan acara, merancang alur teknis, dan memastikan proses produksi berjalan sesuai kebutuhan klien.",
      highlight: "Bukan sekadar sewa alat. Kami bantu merancang workflow visual yang tepat.",
    },
    en: {
      eyebrow: "About Theo",
      heading: "Directly Handled by a Visual & Broadcast Enthusiast",
      body: "Colorize Visual is led by Theo Filus, a videography enthusiast with strong interest in audio visual systems, live streaming, and multimedia technology. Every project is approached with technical planning, visual understanding, and practical execution.",
      highlight: "Not just equipment rental. We help you design the right visual workflow.",
    }
  };

  const t = content[language];

  return (
    <section className={styles.section}>
      <Reveal className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/fototheo.jpg"
              alt="Theo Filus dari Colorize Visual"
              fill
              className={styles.image}
              sizes="(max-width: 992px) 90vw, 44vw"
            />
            <div className={styles.overlay}></div>
          </div>
        </div>
        
        <div className={styles.textColumn}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h2 className={styles.heading}>{t.heading}</h2>
          <p className={styles.body}>{t.body}</p>
          
          <div className={styles.highlightBox}>
            <div className={styles.highlightLine}></div>
            <p className={styles.highlightText}>{t.highlight}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default AboutTheo;
