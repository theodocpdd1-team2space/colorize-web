"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import Reveal from "@/components/common/Reveal";
import styles from "./PackagePreview.module.css";

const whatsappUrl =
  "https://wa.me/62895345902896?text=Halo%2C%20saya%20...%20butuh%20layanan%20Live%20Streaming%20dan%20Multicam%20boleh%20dibantu%20lebih%20lanjut%3F";

const PackagePreview = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      eyebrow: "Preview paket",
      heading: "Pilih kebutuhan, bukan sekadar daftar alat.",
      body: "Setiap paket bisa disesuaikan dengan venue, durasi acara, jumlah kamera, platform streaming, dan kebutuhan output visual.",
      packages: [
        {
          title: "Basic Stream",
          desc: "Untuk event sederhana yang butuh siaran rapi dan rekaman aman.",
          features: ["1-2 kamera", "Streaming basic", "Operator", "Rekaman"],
          cta: "Tanya Basic Stream",
          link: whatsappUrl
        },
        {
          title: "Standard Stream",
          desc: "Untuk acara sekolah, seminar, ibadah, dan corporate event skala menengah.",
          features: ["Multicam ringan", "Switcher", "Integrasi audio", "YouTube / Zoom"],
          cta: "Tanya Standard Stream",
          link: whatsappUrl
        },
        {
          title: "Pro Stream",
          desc: "Untuk momen utama yang membutuhkan switching, crew, dan monitoring lebih matang.",
          features: ["Multicam", "Preview monitor", "Crew khusus", "Output program"],
          cta: "Tanya Pro Stream",
          isPopular: true,
          link: whatsappUrl
        },
        {
          title: "Event Broadcast",
          desc: "Untuk produksi acara yang butuh workflow broadcast dari venue ke layar dan online.",
          features: ["Routing broadcast", "Output layar", "Rekaman", "Technical run"],
          cta: "Diskusi Event Broadcast",
          link: whatsappUrl
        },
        {
          title: "Cinema Stream",
          desc: "Untuk wedding dan event premium dengan rasa visual lebih cinematic.",
          features: ["Arahan visual", "Multicam cinematic", "Framing rapi", "Rekaman siap highlight"],
          cta: "Tanya Cinema Stream",
          link: whatsappUrl
        },
        {
          title: "Custom Setup",
          desc: "Untuk venue, gereja, studio, videotron, LED display, dan kebutuhan teknis khusus.",
          features: ["Perencanaan custom", "Instalasi", "Integrasi sistem", "Dukungan teknis"],
          cta: "Diskusi Custom Setup",
          link: whatsappUrl
        }
      ]
    },
    en: {
      eyebrow: "Package preview",
      heading: "Choose the need, not just a list of gear.",
      body: "Each package can be adjusted to your venue, event duration, camera count, streaming platform, and visual output needs.",
      packages: [
        {
          title: "Basic Stream",
          desc: "For simple events that need clean streaming and reliable recording.",
          features: ["1-2 cameras", "Basic streaming", "Operator", "Recording"],
          cta: "Ask About Basic Stream",
          link: whatsappUrl
        },
        {
          title: "Standard Stream",
          desc: "For school events, seminars, worship services, and mid-scale corporate events.",
          features: ["Light multicam", "Switcher", "Audio integration", "YouTube / Zoom"],
          cta: "Ask About Standard Stream",
          link: whatsappUrl
        },
        {
          title: "Pro Stream",
          desc: "For key moments that need better switching, crew, and monitoring.",
          features: ["Multicam", "Preview monitor", "Dedicated crew", "Program output"],
          cta: "Ask About Pro Stream",
          isPopular: true,
          link: whatsappUrl
        },
        {
          title: "Event Broadcast",
          desc: "For productions that need a broadcast workflow from venue to screen and online.",
          features: ["Broadcast routing", "Screen output", "Recording", "Technical run"],
          cta: "Discuss Event Broadcast",
          link: whatsappUrl
        },
        {
          title: "Cinema Stream",
          desc: "For weddings and premium events with a more cinematic visual feel.",
          features: ["Visual direction", "Cinematic multicam", "Clean framing", "Highlight-ready recording"],
          cta: "Ask About Cinema Stream",
          link: whatsappUrl
        },
        {
          title: "Custom Setup",
          desc: "For venues, churches, studios, videotron, LED display, and special technical needs.",
          features: ["Custom planning", "Installation", "System integration", "Technical support"],
          cta: "Discuss Custom Setup",
          link: whatsappUrl
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className={styles.section}>
      <Reveal className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h2 className={styles.heading}>{t.heading}</h2>
          <p className={styles.body}>{t.body}</p>
        </div>
        
        <div className={styles.grid}>
          {t.packages.map((pkg, index) => (
            <div key={index} className={`${styles.card} ${pkg.isPopular ? styles.popular : ""}`}>
              {pkg.isPopular && (
                <div className={styles.badge}>
                  {language === "id" ? "Paling Populer" : "Most Popular"}
                </div>
              )}
              
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
      </Reveal>
    </section>
  );
};

export default PackagePreview;
