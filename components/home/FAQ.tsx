"use client";

import React, { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const content = {
    id: {
      heading: "Frequently Asked Questions",
      faqs: [
        {
          q: "Apakah bisa live streaming ke YouTube?",
          a: "Bisa. Kami dapat membantu live streaming ke YouTube, Zoom, Instagram, TikTok, atau platform lain sesuai kebutuhan teknis acara."
        },
        {
          q: "Apakah bisa untuk acara wedding?",
          a: "Bisa. Kami melayani live streaming wedding, mulai dari akad, pemberkatan, resepsi, hingga kebutuhan hybrid guest."
        },
        {
          q: "Apakah bisa ke luar kota Surabaya?",
          a: "Bisa. Untuk area luar Surabaya akan menyesuaikan biaya transportasi dan kebutuhan teknis acara."
        },
        {
          q: "Apakah bisa tambah videotron, projector, atau TV?",
          a: "Bisa. Kami dapat membantu kebutuhan output visual seperti projector, TV, LED screen, atau videotron sesuai kebutuhan venue."
        },
        {
          q: "Apakah dapat rekaman acara?",
          a: "Bisa. Rekaman dapat diberikan sesuai kesepakatan teknis, format file, dan kebutuhan penyimpanan."
        },
        {
          q: "Apakah bisa custom paket?",
          a: "Bisa. Setiap acara memiliki kebutuhan yang berbeda, sehingga paket dapat disesuaikan dengan jumlah kamera, platform, crew, dan output."
        }
      ]
    },
    en: {
      heading: "Frequently Asked Questions",
      faqs: [
        {
          q: "Can you live stream to YouTube?",
          a: "Yes. We can help you stream to YouTube, Zoom, Instagram, TikTok, or other platforms based on your technical needs."
        },
        {
          q: "Do you handle wedding events?",
          a: "Yes. We provide live streaming for weddings, covering ceremonies, receptions, and hybrid guest setups."
        },
        {
          q: "Are you available outside Surabaya?",
          a: "Yes. For events outside Surabaya, transportation costs and technical requirements will be adjusted accordingly."
        },
        {
          q: "Can we add a videotron, projector, or TV?",
          a: "Yes. We can accommodate visual output needs like projectors, TVs, LED screens, or videotrons as required by the venue."
        },
        {
          q: "Do we get the event recording?",
          a: "Yes. Recordings can be provided based on the agreed technical specs, file format, and storage needs."
        },
        {
          q: "Can we customize the package?",
          a: "Yes. Every event has different needs, so packages can be tailored regarding camera count, platform, crew, and output."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t.heading}</h2>
        
        <div className={styles.faqList}>
          {t.faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ""}`}
            >
              <button 
                className={styles.faqQuestion} 
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.q}</span>
                <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
              </button>
              <div 
                className={styles.faqAnswer}
                style={{ maxHeight: openIndex === index ? "200px" : "0" }}
              >
                <div className={styles.answerContent}>
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
