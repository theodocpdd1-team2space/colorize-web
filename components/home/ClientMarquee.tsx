"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./ClientMarquee.module.css";

const logos = [
  "/corporate/1.png",
  "/corporate/2.png",
  "/corporate/3.png",
  "/corporate/4.png",
  "/corporate/5.png",
  "/corporate/6.png",
];

export default function ClientMarquee() {
  const { language } = useLanguage();
  const repeatedLogos = [...logos, ...logos];
  const copy = {
    id: {
      label: "Dipercaya oleh partner event dan institusi",
      heading: "Workflow broadcast yang sudah hadir di berbagai event.",
      subheading:
        "Sekolah, brand, wedding, sport event, dan partner produksi mempercayakan kebutuhan live streaming, multicam, dan multimedia pada Colorize Visual.",
    },
    en: {
      label: "Trusted by event partners and institutions",
      heading: "Broadcast workflows built for real events.",
      subheading:
        "Schools, brands, weddings, sport events, and production partners trust Colorize Visual for live streaming, multicam, and multimedia needs.",
    },
  };
  const t = copy[language];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>{t.label}</p>
          <h2 className={styles.heading}>{t.heading}</h2>
          <p className={styles.subheading}>{t.subheading}</p>
        </div>

        <div className={styles.logoMarquee}>
          <div className={styles.logoTrack}>
            {repeatedLogos.map((logo, index) => (
              <div className={styles.logoCard} key={`${logo}-${index}`}>
                <Image
                  src={logo}
                  alt={`Colorize Visual client logo ${(index % logos.length) + 1}`}
                  width={220}
                  height={110}
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
