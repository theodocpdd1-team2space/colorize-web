"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./PackagePreview.module.css";

const whatsappUrl =
  "https://wa.me/62895345902896?text=Halo%2C%20saya%20...%20butuh%20layanan%20Live%20Streaming%20dan%20Multicam%20boleh%20dibantu%20lebih%20lanjut%3F";

const PackagePreview = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      heading: "Flexible Packages for Every Event",
      body: "Setiap acara memiliki kebutuhan teknis yang berbeda. Kami menyediakan paket fleksibel mulai dari kebutuhan sederhana hingga sistem multimedia yang lebih kompleks.",
      packages: [
        {
          title: "Basic Streaming",
          desc: "Untuk acara sederhana.",
          features: ["1–2 camera setup", "Basic streaming", "Operator", "Recording"],
          cta: "Ask for Basic Package",
          link: whatsappUrl
        },
        {
          title: "Professional Broadcast",
          desc: "Untuk wedding, seminar, ibadah, dan event hybrid.",
          features: ["Multi-camera", "Video switcher", "Audio integration", "YouTube / Zoom support", "Crew"],
          cta: "Ask for Professional Package",
          isPopular: true,
          link: whatsappUrl
        },
        {
          title: "Custom Multimedia Setup",
          desc: "Untuk instalasi, videotron, gereja, studio, dan kebutuhan khusus.",
          features: ["Custom planning", "Installation", "Broadcast workflow", "Technical support"],
          cta: "Discuss Custom Setup",
          link: whatsappUrl
        }
      ]
    },
    en: {
      heading: "Flexible Packages for Every Event",
      body: "Every event has unique technical requirements. We offer flexible packages ranging from simple setups to complex multimedia systems.",
      packages: [
        {
          title: "Basic Streaming",
          desc: "For simple events.",
          features: ["1–2 camera setup", "Basic streaming", "Operator", "Recording"],
          cta: "Ask for Basic Package",
          link: whatsappUrl
        },
        {
          title: "Professional Broadcast",
          desc: "For weddings, seminars, worship, and hybrid events.",
          features: ["Multi-camera", "Video switcher", "Audio integration", "YouTube / Zoom support", "Crew"],
          cta: "Ask for Professional Package",
          isPopular: true,
          link: whatsappUrl
        },
        {
          title: "Custom Multimedia Setup",
          desc: "For installations, videotron, churches, studios, and custom needs.",
          features: ["Custom planning", "Installation", "Broadcast workflow", "Technical support"],
          cta: "Discuss Custom Setup",
          link: whatsappUrl
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>{t.heading}</h2>
          <p className={styles.body}>{t.body}</p>
        </div>
        
        <div className={styles.grid}>
          {t.packages.map((pkg, index) => (
            <div key={index} className={`${styles.card} ${pkg.isPopular ? styles.popular : ""}`}>
              {pkg.isPopular && <div className={styles.badge}>Most Popular</div>}
              
              <h3 className={styles.title}>{pkg.title}</h3>
              <p className={styles.desc}>{pkg.desc}</p>
              
              <ul className={styles.features}>
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.check}>✓</span> {feature}
                  </li>
                ))}
              </ul>
              
              <a href={pkg.link} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagePreview;
