"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./ContactSection.module.css";

const whatsappUrl =
  "https://wa.me/62895345902896?text=Halo%2C%20saya%20...%20butuh%20layanan%20Live%20Streaming%20dan%20Multicam%20boleh%20dibantu%20lebih%20lanjut%3F";

const ContactSection = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      heading: "Ready to Make Your Event Look Professional?",
      body: "Ceritakan detail acara Anda dan kami akan membantu merancang setup live streaming atau multimedia yang tepat.",
      cta: "Chat WhatsApp Now",
      whatsappUrl
    },
    en: {
      heading: "Ready to Make Your Event Look Professional?",
      body: "Tell us your event details and we will help you design the right live streaming or multimedia setup.",
      cta: "Chat WhatsApp Now",
      whatsappUrl
    }
  };

  const t = content[language];

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{t.heading}</h2>
          <p className={styles.body}>{t.body}</p>
          
          <a href={t.whatsappUrl} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
            <span className={styles.waIcon}>💬</span> {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
