"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { cinemaPackages, flashDriveMinimum, streamingPackages, type Package } from "@/lib/packages";
import styles from "./PackagePreview.module.css";

const whatsappUrl =
  "https://wa.me/62895345902896?text=Halo%2C%20saya%20ingin%20konsultasi%20paket%20live%20streaming%20Colorize%20Visual.%20Boleh%20dibantu%3F";

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
      <li className={styles.featureItem}>
        <span className={styles.check} aria-hidden="true">✓</span>
        <span>{language === "id" ? "Semua file rekaman via Google Drive" : "All recording files via Google Drive"}</span>
      </li>
    </ul>
    <p className={styles.deliveryLabel}>
      {pkg.priceAmount < flashDriveMinimum
        ? language === "id" ? "Flashdisk tidak termasuk" : "Flash drive not included"
        : language === "id" ? "Flashdisk termasuk" : "Flash drive included"}
    </p>
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
          <p className={styles.eyebrow}>{isId ? "Pricelist / Oktober 2026" : "Pricing / October 2026"}</p>
          <h1 className={styles.heading}>
            {isId ? "Paket live streaming untuk setiap skala acara." : "Live streaming packages for every event scale."}
          </h1>
          <p className={styles.body}>
            {isId
              ? "Paket live streaming menggunakan kamera mirrorless; pilihan produksi premium tersedia dengan Sony Cinema Line. Pilih paket berdasarkan kebutuhan produksi. Setiap harga di bawah adalah harga mulai dan dapat disesuaikan dengan venue, rundown, durasi, lokasi, serta kebutuhan teknis acara."
              : "Live streaming packages use mirrorless cameras, with Sony Cinema Line available for premium productions. Choose a package based on your production needs. Every price below is a starting price and can be adjusted to the venue, rundown, duration, location, and technical requirements."}
          </p>
        </div>

        <section className={styles.deliveryPanel} aria-labelledby="recording-delivery-title">
          <div>
            <p className={styles.noteEyebrow}>{isId ? "Penyerahan rekaman" : "Recording delivery"}</p>
            <h2 id="recording-delivery-title">{isId ? "File acara, mudah diakses." : "Your event files, easy to access."}</h2>
          </div>
          <div>
            <h3>Google Drive</h3>
            <p>{isId ? "Semua file rekaman akan diunggah ke Google Drive dan tautannya dibagikan kepada klien." : "All recording files will be uploaded to Google Drive, with the link shared with the client."}</p>
          </div>
          <div>
            <h3>{isId ? "Salin setelah acara" : "Copy after the event"}</h3>
            <p>{isId ? "File juga dapat disalin ke harddisk atau flashdisk milik klien setelah acara selesai. Siapkan media dengan ruang penyimpanan yang cukup." : "Files can also be copied to the client's hard drive or flash drive after the event. Please bring a drive with enough available storage."}</p>
          </div>
          <p className={styles.deliveryPolicy}>{isId ? "Paket di bawah Rp3,8 juta tidak termasuk flashdisk. Flashdisk disertakan untuk paket mulai Rp3,8 juta." : "Packages below Rp3.8 million do not include a flash drive. A flash drive is included for packages from Rp3.8 million."}</p>
        </section>

        <div className={styles.sectionHeading}>
          <span>01</span>
          <h2>{isId ? "Paket Live Streaming" : "Live Streaming Packages"}</h2>
          <p>{isId ? "Untuk event, wedding, birthday, sekolah, ibadah, dan corporate." : "For events, weddings, birthdays, schools, worship services, and corporate productions."}</p>
        </div>
        <div className={styles.grid}>
          {streamingPackages.map((pkg) => (
            <PackageCard key={pkg.title} pkg={pkg} language={language} />
          ))}
        </div>

        <div className={styles.sectionHeading}>
          <span>02</span>
          <h2>Cinema Line &amp; Professional</h2>
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
