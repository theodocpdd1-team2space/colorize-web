"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = {
    home: language === "id" ? "Beranda" : "Home",
    about: language === "id" ? "Tentang Kami" : "About",
    services: language === "id" ? "Layanan" : "Services",
    works: language === "id" ? "Karya" : "Works",
    contact: language === "id" ? "Hubungi Kami" : "Contact Us",
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logo}>
        Colorize<span className={styles.logoAccent}>Visual</span>
      </Link>

      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>{t.home}</Link>
        <Link href="/about" className={styles.navLink}>{t.about}</Link>
        <Link href="/services" className={styles.navLink}>{t.services}</Link>
        <Link href="/works" className={styles.navLink}>{t.works}</Link>
      </div>

      <div className={styles.rightControls}>
        <div className={styles.langToggle}>
          <button 
            className={`${styles.langBtn} ${language === "id" ? styles.active : ""}`}
            onClick={() => setLanguage("id")}
          >
            ID
          </button>
          <span>/</span>
          <button 
            className={`${styles.langBtn} ${language === "en" ? styles.active : ""}`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>
        
        <Link href="/contact" className={styles.ctaBtn}>
          {t.contact}
        </Link>
        
        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown (Basic setup) */}
      {mobileMenuOpen && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: 0,
          width: "100%",
          background: "var(--bg-primary)",
          borderBottom: "1px solid var(--glass-border)",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>{t.home}</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>{t.about}</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>{t.services}</Link>
          <Link href="/works" onClick={() => setMobileMenuOpen(false)}>{t.works}</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ color: "var(--accent-primary)" }}>{t.contact}</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
