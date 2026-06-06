"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      heading: "What They Say",
      testimonials: [
        {
          quote: "Timnya komunikatif, setup rapi, dan hasil live streaming berjalan lancar.",
          author: "Wedding Organizer Partner"
        },
        {
          quote: "Sangat membantu untuk kebutuhan acara hybrid. Teknis dijelaskan dengan jelas dari awal.",
          author: "Corporate Seminar"
        },
        {
          quote: "Hasil broadcast terlihat profesional dan sesuai kebutuhan acara.",
          author: "Church Event"
        }
      ]
    },
    en: {
      heading: "What They Say",
      testimonials: [
        {
          quote: "The team is communicative, the setup is neat, and the live streaming ran smoothly.",
          author: "Wedding Organizer Partner"
        },
        {
          quote: "Very helpful for our hybrid event needs. Technical details were explained clearly from the start.",
          author: "Corporate Seminar"
        },
        {
          quote: "The broadcast output looks professional and exactly what the event needed.",
          author: "Church Event"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t.heading}</h2>
        
        <div className={styles.grid}>
          {t.testimonials.map((testi, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.quoteIcon}>&ldquo;</div>
              <p className={styles.quote}>{testi.quote}</p>
              <div className={styles.authorSection}>
                <div className={styles.authorAvatar}></div>
                <div className={styles.authorName}>{testi.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
