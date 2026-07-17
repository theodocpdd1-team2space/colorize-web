"use client";

import React, { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import Reveal from "@/components/common/Reveal";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const content = {
    id: {
      heading: "Pertanyaan yang Sering Ditanyakan",
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
          q: "Apakah Colorize Visual melayani area luar Surabaya?",
          a: "Ya. Colorize Visual melayani Surabaya dan sekitarnya seperti Sidoarjo, Malang, Mojokerto, dan kota-kota lain di Jawa Timur. Kami juga bisa melayani project ke seluruh Indonesia dengan penyesuaian biaya transportasi dan akomodasi sesuai kebutuhan acara."
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
          q: "Does Colorize Visual serve areas outside Surabaya?",
          a: "Yes. Colorize Visual serves Surabaya and nearby areas such as Sidoarjo, Malang, Mojokerto, and other cities across East Java. We can also support projects throughout Indonesia with adjusted transportation and accommodation costs based on the event requirements."
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
      <Reveal className={styles.container}>
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
                style={{ maxHeight: openIndex === index ? "360px" : "0" }}
              >
                <div className={styles.answerContent}>
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default FAQ;
