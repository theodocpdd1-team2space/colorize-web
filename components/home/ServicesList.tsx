"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import Reveal from "@/components/common/Reveal";
import styles from "./ServicesList.module.css";

const ServicesList = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      eyebrow: "Layanan produksi",
      heading: "Satu tim untuk visual, siaran, dan sistem event.",
      body:
        "Pilih kebutuhan utama. Kami susun workflow yang pas untuk venue, rundown, dan output acara.",
      services: [
        {
          title: "Live Streaming",
          desc: "Siaran live untuk wedding, sekolah, ibadah, seminar, launching, dan event hybrid.",
          features: ["YouTube, Zoom, Instagram, TikTok", "Rekaman", "Operator dan crew"],
        },
        {
          title: "Multicam Production",
          desc: "Produksi multi-kamera dengan switching rapi untuk momen penting dan acara berdurasi panjang.",
          features: ["Switching kamera", "Preview monitor", "Output program"],
        },
        {
          title: "Broadcasting System",
          desc: "Workflow broadcast untuk venue, corporate studio, gereja, sekolah, atau ruang produksi.",
          features: ["Routing video", "Monitoring multiview", "Perencanaan output"],
        },
        {
          title: "Multimedia Installation",
          desc: "Instalasi audio visual, kamera, display, dan sistem kontrol untuk kebutuhan jangka panjang.",
          features: ["Sistem kamera", "Output display", "Manajemen kabel"],
        },
        {
          title: "Videotron & LED Display",
          desc: "Output visual untuk layar LED, videotron, projector, TV, dan kebutuhan display event.",
          features: ["Setup LED", "Output visual", "Kontrol layar"],
        },
        {
          title: "Hybrid Event Solution",
          desc: "Setup acara offline dan online dalam satu sistem agar audience venue dan online tetap terhubung.",
          features: ["Integrasi Zoom", "Display speaker", "Output streaming"],
        },
      ],
    },
    en: {
      eyebrow: "Production services",
      heading: "One team for visuals, broadcast, and event systems.",
      body:
        "Choose the core need. We build the right workflow for your venue, rundown, and event output.",
      services: [
        {
          title: "Live Streaming",
          desc: "Live broadcast for weddings, schools, worship services, seminars, launches, and hybrid events.",
          features: ["YouTube, Zoom, Instagram, TikTok", "Recording", "Operator and crew"],
        },
        {
          title: "Multicam Production",
          desc: "Multi-camera production with clean switching for important moments and long-form events.",
          features: ["Camera switching", "Preview monitor", "Program output"],
        },
        {
          title: "Broadcasting System",
          desc: "Broadcast workflows for venues, corporate studios, churches, schools, or production rooms.",
          features: ["Video routing", "Multiview monitoring", "Output planning"],
        },
        {
          title: "Multimedia Installation",
          desc: "Audio visual, camera, display, and control system installation for long-term needs.",
          features: ["Camera system", "Display output", "Cable management"],
        },
        {
          title: "Videotron & LED Display",
          desc: "Visual output for LED screens, videotron, projectors, TVs, and event display needs.",
          features: ["LED setup", "Visual output", "Screen control"],
        },
        {
          title: "Hybrid Event Solution",
          desc: "Offline and online event setup in one system so venue and remote audiences stay connected.",
          features: ["Zoom integration", "Speaker display", "Streaming output"],
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className={styles.section} id="services">
      <Reveal className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h2 className={styles.heading}>{t.heading}</h2>
          <p className={styles.body}>{t.body}</p>
        </div>
        
        <div className={styles.serviceList}>
          {t.services.map((service, index) => (
            <article key={service.title} className={styles.serviceItem}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.serviceCopy}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
              </div>
              <ul className={styles.featureList}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default ServicesList;
