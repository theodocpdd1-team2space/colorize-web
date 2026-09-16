"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./PackagePreview.module.css";

const whatsappUrl =
  "https://wa.me/62895345902896?text=Halo%2C%20saya%20ingin%20konsultasi%20paket%20live%20streaming%20Colorize%20Visual.%20Boleh%20dibantu%3F";

type Package = {
  title: string;
  price: { id: string; en: string };
  description: { id: string; en: string };
  features: { id: string; en: string }[];
  featured?: boolean;
};

const streamingPackages: Package[] = [
  {
    title: "Essential",
    price: { id: "Start Rp1,75 juta", en: "Starting at Rp1.75M" },
    description: {
      id: "Untuk event sederhana dengan kebutuhan siaran yang rapi dan rekaman lokal.",
      en: "For simple events that need clean streaming and local recording.",
    },
    features: [
      { id: "1 kamera (Sony NX100)", en: "1 camera (Sony NX100)" },
      { id: "1 operator", en: "1 operator" },
      { id: "Maks. durasi kerja 4 jam (rundown)", en: "Max. 4-hour working duration (rundown)" },
      { id: "Live streaming YouTube", en: "YouTube live streaming" },
      { id: "Flashdisk 16 GB (output video)", en: "16 GB flash drive (video output)" },
    ],
  },
  {
    title: "Standard",
    price: { id: "Start Rp2,8 juta", en: "Starting at Rp2.8M" },
    description: {
      id: "Untuk wedding, sekolah, seminar, ibadah, dan corporate event skala menengah.",
      en: "For weddings, schools, seminars, worship services, and mid-scale corporate events.",
    },
    features: [
      { id: "2 kamera (2 Sony HXR NX100)", en: "2 cameras (2 Sony HXR NX100)" },
      { id: "2 cameramen + 1 operator", en: "2 camera operators + 1 operator" },
      { id: "1 switcher 4 channel", en: "1 four-channel switcher" },
      { id: "Intercom 5 pcs", en: "5 intercom units" },
      { id: "Maks. durasi kerja 6 jam", en: "Max. 6-hour working duration" },
      { id: "YouTube + flashdisk 16 GB", en: "YouTube + 16 GB flash drive" },
    ],
  },
  {
    title: "Signature",
    price: { id: "Start Rp3,3 juta", en: "Starting at Rp3.3M" },
    description: {
      id: "Multicam yang lebih fleksibel untuk momen penting dan coverage acara yang lebih lengkap.",
      en: "A more flexible multicam setup for key moments and broader event coverage.",
    },
    features: [
      { id: "3 kamera (3 Sony HXR NX100)", en: "3 cameras (3 Sony HXR NX100)" },
      { id: "2 cameramen + 1 operator", en: "2 camera operators + 1 operator" },
      { id: "1 switcher 4 channel", en: "1 four-channel switcher" },
      { id: "1 Hollyland wireless video transmitter", en: "1 Hollyland wireless video transmitter" },
      { id: "Intercom 5 pcs", en: "5 intercom units" },
      { id: "Maks. durasi kerja 6 jam", en: "Max. 6-hour working duration" },
      { id: "YouTube + flashdisk 16 GB", en: "YouTube + 16 GB flash drive" },
    ],
  },
  {
    title: "Premium",
    price: { id: "Start Rp3,6 juta", en: "Starting at Rp3.6M" },
    description: {
      id: "Paket dengan graphic dan gimbal untuk produksi event yang terasa lebih dinamis.",
      en: "Adds graphics and a gimbal for a more dynamic event production.",
    },
    features: [
      { id: "3 kamera (1 mirrorless, 2 Sony HXR NX100)", en: "3 cameras (1 mirrorless, 2 Sony HXR NX100)" },
      { id: "1 operator + graphic", en: "1 operator + graphics" },
      { id: "1 switcher 4 channel", en: "1 four-channel switcher" },
      { id: "1 gimbal stabilizer", en: "1 gimbal stabilizer" },
      { id: "1 Hollyland wireless video transmitter", en: "1 Hollyland wireless video transmitter" },
      { id: "Intercom 5 pcs", en: "5 intercom units" },
      { id: "Maks. durasi kerja 6 jam", en: "Max. 6-hour working duration" },
      { id: "YouTube + flashdisk 16 GB", en: "YouTube + 16 GB flash drive" },
    ],
  },
  {
    title: "Premier",
    price: { id: "Start Rp5 juta", en: "Starting at Rp5M" },
    description: {
      id: "Coverage empat kamera dengan Jimmy Jib dan moving camera untuk produksi yang lebih sinematik.",
      en: "Four-camera coverage with Jimmy Jib and moving camera for a more cinematic production.",
    },
    features: [
      { id: "4 kamera: Jimmy Jib, moving, mirrorless, Sony HXR NX100", en: "4 cameras: Jimmy Jib, moving, mirrorless, Sony HXR NX100" },
      { id: "4 cameramen + 1 operator", en: "4 camera operators + 1 operator" },
      { id: "1 switcher 4 channel", en: "1 four-channel switcher" },
      { id: "1 gimbal stabilizer", en: "1 gimbal stabilizer" },
      { id: "1 Hollyland wireless video transmitter", en: "1 Hollyland wireless video transmitter" },
      { id: "Intercom 5 pcs", en: "5 intercom units" },
      { id: "Maks. durasi kerja 6 jam", en: "Max. 6-hour working duration" },
      { id: "YouTube + flashdisk 16 GB", en: "YouTube + 16 GB flash drive" },
    ],
  },
  {
    title: "Cinematic",
    price: { id: "Start Rp5,7 juta", en: "Starting at Rp5.7M" },
    description: {
      id: "Empat kamera mirrorless dengan dua wireless transmitter untuk visual event yang lebih imersif.",
      en: "Four mirrorless cameras with two wireless transmitters for a more immersive event visual.",
    },
    features: [
      { id: "4 kamera mirrorless + 4 cameramen", en: "4 mirrorless cameras + 4 camera operators" },
      { id: "1 operator + 1 switcher 4 channel", en: "1 operator + 1 four-channel switcher" },
      { id: "1 gimbal stabilizer", en: "1 gimbal stabilizer" },
      { id: "2 Hollyland wireless video transmitter", en: "2 Hollyland wireless video transmitters" },
      { id: "Intercom 5 pcs", en: "5 intercom units" },
      { id: "Maks. durasi kerja 6 jam", en: "Max. 6-hour working duration" },
      { id: "YouTube + flashdisk 16 GB", en: "YouTube + 16 GB flash drive" },
    ],
  },
];

const cinemaPackages: Package[] = [
  {
    title: "Cinema Line / Netflix",
    price: { id: "Start Rp10 jutaan", en: "Starting at Rp10M" },
    description: {
      id: "Paket live streaming premium dengan kamera Sony Cinema Line untuk kebutuhan visual berstandar tinggi.",
      en: "Premium live streaming with Sony Cinema Line cameras for high-standard visual production.",
    },
    features: [
      { id: "Kamera Sony Cinema Line (Netflix approved)", en: "Sony Cinema Line cameras (Netflix approved)" },
      { id: "Output 4K Ultra HD", en: "4K Ultra HD output" },
      { id: "Workflow produksi premium", en: "Premium production workflow" },
      { id: "Detail crew dan setup melalui konsultasi", en: "Crew and setup details confirmed during consultation" },
    ],
    featured: true,
  },
  {
    title: "Cinematic Elite",
    price: { id: "Start Rp15,9 juta", en: "Starting at Rp15.9M" },
    description: {
      id: "Setup produksi paling lengkap di pricelist untuk event yang membutuhkan coverage dan kontrol visual tingkat lanjut.",
      en: "The most complete setup in the pricelist for events that need advanced coverage and visual control.",
    },
    features: [
      { id: "4 kamera Cinema Line: 1 FX6, 2 FX3, 1 NX100 (Jimmy Jib)", en: "4 Cinema Line cameras: 1 FX6, 2 FX3, 1 NX100 (Jimmy Jib)" },
      { id: "Lensa 70-600mm GM, 70-200mm GM, 50mm f/1.2 GM", en: "70-600mm GM, 70-200mm GM, 50mm f/1.2 GM lenses" },
      { id: "4 cameramen + 1 operator", en: "4 camera operators + 1 operator" },
      { id: "1 switcher 4 channel + 1 Jimmy Jib", en: "1 four-channel switcher + 1 Jimmy Jib" },
      { id: "Gimbal stabilizer DJI Ronin 3 Pro", en: "DJI Ronin 3 Pro gimbal stabilizer" },
      { id: "3 Hollyland wireless video transmitter 4K", en: "3 Hollyland 4K wireless video transmitters" },
      { id: "Ninja Atomos Record Full HD ProRes LT", en: "Ninja Atomos Full HD ProRes LT recorder" },
      { id: "Intercom 5 pcs + maksimal durasi kerja 6 jam", en: "5 intercom units + max. 6-hour working duration" },
      { id: "YouTube + flashdisk 32 GB", en: "YouTube + 32 GB flash drive" },
      { id: "2 laptop + 1 monitor", en: "2 laptops + 1 monitor" },
    ],
    featured: true,
  },
];

const PackageCard = ({ pkg, language }: { pkg: Package; language: "id" | "en" }) => (
  <article className={`${styles.card} ${pkg.featured ? styles.featured : ""}`}>
    <div className={styles.cardTopline}>
      <span className={styles.category}>{pkg.featured ? "Cinema Line" : "Live Streaming"}</span>
      <span className={styles.startPrice}>{pkg.price[language]}</span>
    </div>
    <h3 className={styles.title}>{pkg.title}</h3>
    <p className={styles.desc}>{pkg.description[language]}</p>
    <div className={styles.specLabel}>{language === "id" ? "Spesifikasi paket" : "Package specifications"}</div>
    <ul className={styles.features}>
      {pkg.features.map((feature) => (
        <li key={feature.id} className={styles.featureItem}>
          <span className={styles.check}>✓</span>
          <span>{feature[language]}</span>
        </li>
      ))}
    </ul>
    <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.ctaBtn}>
      {language === "id" ? `Konsultasi ${pkg.title}` : `Ask About ${pkg.title}`}
    </a>
  </article>
);

const PackagePreview = () => {
  const { language } = useLanguage();
  const isId = language === "id";

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Pricelist 2026 / September</p>
          <h2 className={styles.heading}>
            {isId ? "Paket produksi untuk setiap skala acara." : "Production packages for every event scale."}
          </h2>
          <p className={styles.body}>
            {isId
              ? "Pilih paket berdasarkan kebutuhan produksi. Setiap harga di bawah adalah harga mulai dan dapat disesuaikan dengan venue, rundown, durasi, lokasi, serta kebutuhan teknis acara."
              : "Choose a package based on your production needs. Every price below is a starting price and can be adjusted to the venue, rundown, duration, location, and technical requirements."}
          </p>
        </div>

        <div className={styles.sectionHeading}>
          <span>01</span>
          <h3>Live Streaming Packages</h3>
          <p>{isId ? "Untuk event, wedding, birthday, sekolah, ibadah, dan corporate." : "For events, weddings, birthdays, schools, worship services, and corporate productions."}</p>
        </div>
        <div className={styles.grid}>
          {streamingPackages.map((pkg) => (
            <PackageCard key={pkg.title} pkg={pkg} language={language} />
          ))}
        </div>

        <div className={styles.sectionHeading}>
          <span>02</span>
          <h3>Cinema Line &amp; Professional</h3>
          <p>{isId ? "Untuk produksi premium dengan kebutuhan kamera dan kontrol visual yang lebih tinggi." : "For premium productions that need advanced cameras and visual control."}</p>
        </div>
        <div className={styles.premiumGrid}>
          {cinemaPackages.map((pkg) => (
            <PackageCard key={pkg.title} pkg={pkg} language={language} />
          ))}
        </div>

        <aside className={styles.notePanel}>
          <div>
            <span className={styles.noteEyebrow}>{isId ? "Catatan harga" : "Pricing notes"}</span>
            <h3>{isId ? "Yang perlu diketahui sebelum booking" : "Before you book"}</h3>
          </div>
          <ul className={styles.notes}>
            <li>{isId ? "Harga sudah termasuk transportasi area Surabaya." : "Prices include transportation within Surabaya."}</li>
            <li>{isId ? "Durasi paket mencakup loading-in, setup, technical check, gladi, acara, hingga loading-out." : "Package duration covers loading-in, setup, technical check, rehearsal, event, and loading-out."}</li>
            <li>{isId ? "Luar Surabaya, setup H-1, extra time, kebutuhan listrik, dan item tambahan dihitung terpisah dalam quotation." : "Out-of-area work, H-1 setup, extra time, power requirements, and add-ons are quoted separately."}</li>
            <li>{isId ? "DP minimal 50% diperlukan untuk mengunci tanggal produksi." : "A minimum 50% deposit is required to secure the production date."}</li>
          </ul>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.noteCta}>
            {isId ? "Minta quotation sesuai event" : "Request an event quotation"}
            <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </div>
    </section>
  );
};

export default PackagePreview;
