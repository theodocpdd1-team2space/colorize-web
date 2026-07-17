"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const t = {
    home: language === "id" ? "Beranda" : "Home",
    about: language === "id" ? "Tentang Kami" : "About",
    services: language === "id" ? "Layanan" : "Services",
    works: language === "id" ? "Karya" : "Works",
    email: language === "id" ? "Email" : "Email",
    whatsapp: language === "id" ? "WhatsApp" : "WhatsApp",
    location: language === "id" ? "Lokasi" : "Location",
    close: language === "id" ? "Tutup menu" : "Close menu",
    open: language === "id" ? "Buka menu" : "Open menu",
    studio: "Colorize Visual",
  };

  const links = [
    { href: "/", label: t.home },
    { href: "/about", label: t.about },
    { href: "/services", label: t.services },
    { href: "/works", label: t.works },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Colorize<span className={styles.logoAccent}>Visual</span>
        </Link>

        <div className={styles.rightControls}>
          <div className={styles.langToggle}>
            <button
              className={`${styles.langBtn} ${language === "id" ? styles.active : ""}`}
              onClick={() => setLanguage("id")}
              type="button"
            >
              ID
            </button>
            <span>/</span>
            <button
              className={`${styles.langBtn} ${language === "en" ? styles.active : ""}`}
              onClick={() => setLanguage("en")}
              type="button"
            >
              EN
            </button>
          </div>

          <button
            className={`${styles.menuButton} ${menuOpen ? styles.menuOpen : ""}`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? t.close : t.open}
            aria-expanded={menuOpen}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.overlayTop}>
          <Link href="/" className={styles.overlayLogo} onClick={closeMenu}>
            {t.studio}
          </Link>
          <button
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label={t.close}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>

        <div className={styles.overlayGrid}>
          <div className={styles.overlayIntro}>
            <p>Creative Production / Broadcast Studio</p>
            <strong>Surabaya Based</strong>
          </div>

          <div className={styles.menuLinks}>
            {links.map((link, index) => (
              <Link
                href={link.href}
                className={styles.overlayLink}
                onClick={closeMenu}
                style={{ transitionDelay: `${index * 70 + 120}ms` }}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.contactInfo}>
            <div>
              <span>{t.email}</span>
              <a href="mailto:theofilus267@gmail.com">theofilus267@gmail.com</a>
            </div>
            <div>
              <span>{t.whatsapp}</span>
              <a href="https://wa.me/62895345902896?text=Halo%2C%20saya%20...%20butuh%20layanan%20Live%20Streaming%20dan%20Multicam%20boleh%20dibantu%20lebih%20lanjut%3F">
                0895345902896
              </a>
            </div>
            <div>
              <span>{t.location}</span>
              <p>Surabaya, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
