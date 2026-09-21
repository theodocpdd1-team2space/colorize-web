"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./OurClients.module.css";

const clients = [
  { name: "SEKOLAH CIPUTRA", logo: "/corporate/1.png" },
  { name: "Surabaya Intercultural School", logo: "/corporate/2.png" },
  { name: "GeprekIn", logo: "/corporate/3.png" },
  { name: "Pusaka Beruang", logo: "/corporate/4.png" },
  { name: "Zhang Palace", logo: "/corporate/5.png" },
  { name: "Synnex Metrodata", logo: "/corporate/6.png" },
  { name: "Angkasa Pura", logo: "/corporate/logo tambahan/angkasa pura.png" },
  { name: "PT ASA", logo: "/corporate/logo tambahan/asa.png" },
  { name: "Tirto ID", logo: "/corporate/logo tambahan/tirto.png" },
  { name: "PT Properindo Enviro Tech", logo: "/corporate/logo tambahan/PET.png" },
];

export default function OurClients() {
  const { language } = useLanguage();
  const copy = {
    id: {
      label: "Dipercaya oleh partner event dan institusi",
      subheading:
        "Sekolah, brand, wedding, sport event, dan partner produksi mempercayakan kebutuhan live streaming, multicam, dan multimedia pada Colorize Visual.",
    },
    en: {
      label: "Trusted by event partners and institutions",
      subheading:
        "Schools, brands, weddings, sport events, and production partners trust Colorize Visual for live streaming, multicam, and multimedia needs.",
    },
  };
  const t = copy[language];

  return (
    <section className={styles.section} aria-labelledby="our-clients-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>{t.label}</p>
          <h2 id="our-clients-heading" className={styles.heading}>
            Our Clients
          </h2>
          <p className={styles.subheading}>{t.subheading}</p>
        </div>

        <ul className={styles.logoGrid} role="list">
          {clients.map((client) => (
            <li className={styles.logoCard} key={client.name}>
              <Image
                src={client.logo}
                alt={client.name}
                width={1080}
                height={1080}
                sizes="(max-width: 480px) 40vw, 180px"
                className={styles.logo}
              />
              <p className={styles.clientName}>{client.name}</p>
            </li>
          ))}
        </ul>
        <p className={styles.moreClients}>And many more…</p>
      </div>
    </section>
  );
}
