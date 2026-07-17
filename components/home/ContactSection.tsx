"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import Reveal from "@/components/common/Reveal";
import styles from "./ContactSection.module.css";

const whatsappUrl =
  "https://wa.me/62895345902896?text=Halo%2C%20saya%20...%20butuh%20layanan%20Live%20Streaming%20dan%20Multicam%20boleh%20dibantu%20lebih%20lanjut%3F";

const ContactSection = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      eyebrow: "Mulai dari brief",
      heading: "Siap bikin event terlihat lebih profesional?",
      body: "Ceritakan detail acara Anda. Kami bantu susun setup yang tepat.",
      cta: "Hubungi Kami",
      whatsappUrl
    },
    en: {
      eyebrow: "Start with a brief",
      heading: "Ready to Make Your Event Look Professional?",
      body: "Tell us your event details. We will help design the right setup.",
      cta: "Contact Us",
      whatsappUrl
    }
  };

  const t = content[language];

  return (
    <section className={styles.section} id="contact">
      <Reveal className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h2 className={styles.heading}>{t.heading}</h2>
          <p className={styles.body}>{t.body}</p>
          
          <a href={t.whatsappUrl} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
            {t.cta}
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default ContactSection;
