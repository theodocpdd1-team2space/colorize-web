"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./FloatingWhatsApp.module.css";

const whatsappUrl =
  "https://wa.me/62895345902896?text=Halo%2C%20saya%20...%20butuh%20layanan%20Live%20Streaming%20dan%20Multicam%20boleh%20dibantu%20lebih%20lanjut%3F";

export default function FloatingWhatsApp() {
  const { language } = useLanguage();
  const label = language === "id" ? "Chat WhatsApp" : "Chat WhatsApp";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={styles.button}
      aria-label={label}
      title={label}
    >
      <span className={styles.icon} aria-hidden="true" />
      <span className={styles.text}>WA</span>
    </a>
  );
}
