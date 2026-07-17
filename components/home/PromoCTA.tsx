"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import Reveal from "@/components/common/Reveal";
import styles from "./PromoCTA.module.css";

const whatsappUrl =
  "https://wa.me/62895345902896?text=Halo%2C%20saya%20...%20butuh%20layanan%20Live%20Streaming%20dan%20Multicam%20boleh%20dibantu%20lebih%20lanjut%3F";

const PromoCTA = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      eyebrow: "Penawaran pertama",
      headline: "Diskon 10% untuk project pertama.",
      body: "Konsultasikan kebutuhan live streaming, multimedia, broadcasting, atau instalasi Anda bersama Colorize Visual dan dapatkan penawaran khusus untuk project pertama.",
      note: "*Syarat dan ketentuan berlaku. Diskon mengikuti scope project dan hasil konsultasi kebutuhan teknis.",
      cta: "Klaim via WhatsApp",
      link: whatsappUrl
    },
    en: {
      eyebrow: "First project offer",
      headline: "Get 10% Discount for Your First Project",
      body: "Talk to Colorize Visual about your live streaming, broadcasting, multimedia, or installation needs and get a special offer for your first project.",
      note: "*Terms and conditions apply. Discount availability depends on project scope and technical requirements.",
      cta: "Claim Discount via WhatsApp",
      link: whatsappUrl
    }
  };

  const t = content[language];

  return (
    <section className={styles.section}>
      <Reveal className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h2 className={styles.headline}>{t.headline}</h2>
          <p className={styles.body}>{t.body}</p>
          <p className={styles.note}>{t.note}</p>
          <a href={t.link} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
            {t.cta}
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default PromoCTA;
