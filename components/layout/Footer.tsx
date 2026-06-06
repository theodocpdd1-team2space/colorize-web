"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./Footer.module.css";

const whatsappUrl =
  "https://wa.me/62895345902896?text=Halo%2C%20saya%20...%20butuh%20layanan%20Live%20Streaming%20dan%20Multicam%20boleh%20dibantu%20lebih%20lanjut%3F";

const Footer = () => {
  const { language } = useLanguage();
  
  const t = {
    desc: language === "id" 
      ? "Vendor live streaming dan multimedia berbasis Surabaya dengan pendekatan profesional, modern, dan teknis." 
      : "Surabaya-based live streaming and multimedia vendor providing professional solutions for events.",
    links: language === "id" ? "Tautan" : "Quick Links",
    contact: language === "id" ? "Kontak" : "Contact",
    rights: language === "id" ? "Hak Cipta Dilindungi" : "All Rights Reserved",
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandSection}>
          <Link href="/" className={styles.logo}>
            Colorize<span className={styles.logoAccent}>Visual</span>
          </Link>
          <p className={styles.description}>{t.desc}</p>
        </div>
        
        <div className={styles.linksSection}>
          <h4 className={styles.heading}>{t.links}</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/works">Portfolio</Link></li>
          </ul>
        </div>
        
        <div className={styles.contactSection}>
          <h4 className={styles.heading}>{t.contact}</h4>
          <ul className={styles.linkList}>
            <li>Surabaya, East Java, Indonesia</li>
            <li><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: 0895-3459-02896</a></li>
            <li><a href="mailto:hello@colorizevisual.com">hello@colorizevisual.com</a></li>
            <li><a href="https://instagram.com/colorizevisual" target="_blank" rel="noreferrer">Instagram: @colorizevisual</a></li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Colorize Visual. {t.rights}.</p>
      </div>
    </footer>
  );
};

export default Footer;
