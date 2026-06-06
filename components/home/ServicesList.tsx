"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./ServicesList.module.css";

const ServicesList = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      heading: "Our Services",
      services: [
        {
          title: "Live Streaming Production",
          desc: "Untuk wedding, ibadah, seminar, hybrid meeting, graduation, launching, dan event lainnya.",
          features: ["Multi-camera live streaming", "YouTube / Zoom / Instagram / TikTok support", "Audio routing", "Recording", "Operator & crew"]
        },
        {
          title: "Broadcasting System",
          desc: "Untuk kebutuhan produksi visual yang lebih kompleks.",
          features: ["Camera switching", "Video routing", "Program output", "Multiview monitoring", "Broadcast workflow planning"]
        },
        {
          title: "Multimedia Installation",
          desc: "Untuk gereja, kantor, aula, sekolah, dan venue.",
          features: ["Camera system installation", "Display output planning", "Audio visual integration", "Cable management", "Operator training"]
        },
        {
          title: "Videotron & LED Display",
          desc: "Untuk event dan instalasi display visual.",
          features: ["LED screen setup", "Visual output management", "Media server support", "Presentation display", "Event screen control"]
        },
        {
          title: "Hybrid Event Solution",
          desc: "Untuk acara yang butuh offline dan online bersamaan.",
          features: ["Zoom integration", "YouTube live", "Projector / LED output", "Speaker display", "Recording & documentation"]
        },
        {
          title: "Custom Broadcast Setup",
          desc: "Untuk kebutuhan khusus.",
          features: ["Church broadcast", "Corporate studio", "Podcast video setup", "Training room streaming", "Remote production planning"]
        }
      ]
    },
    en: {
      heading: "Our Services",
      services: [
        {
          title: "Live Streaming Production",
          desc: "For weddings, worships, seminars, hybrid meetings, graduations, product launches, and other events.",
          features: ["Multi-camera live streaming", "YouTube / Zoom / Instagram / TikTok support", "Audio routing", "Recording", "Operator & crew"]
        },
        {
          title: "Broadcasting System",
          desc: "For more complex visual production needs.",
          features: ["Camera switching", "Video routing", "Program output", "Multiview monitoring", "Broadcast workflow planning"]
        },
        {
          title: "Multimedia Installation",
          desc: "For churches, offices, halls, schools, and venues.",
          features: ["Camera system installation", "Display output planning", "Audio visual integration", "Cable management", "Operator training"]
        },
        {
          title: "Videotron & LED Display",
          desc: "For events and visual display installations.",
          features: ["LED screen setup", "Visual output management", "Media server support", "Presentation display", "Event screen control"]
        },
        {
          title: "Hybrid Event Solution",
          desc: "For events requiring simultaneous offline and online engagement.",
          features: ["Zoom integration", "YouTube live", "Projector / LED output", "Speaker display", "Recording & documentation"]
        },
        {
          title: "Custom Broadcast Setup",
          desc: "For specialized and custom requirements.",
          features: ["Church broadcast", "Corporate studio", "Podcast video setup", "Training room streaming", "Remote production planning"]
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>{t.heading}</h2>
          <div className={styles.headingAccent}></div>
        </div>
        
        <div className={styles.grid}>
          {t.services.map((service, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <ul className={styles.featureList}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
