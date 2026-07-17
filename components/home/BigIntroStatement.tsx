"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import Reveal from "@/components/common/Reveal";
import styles from "./BigIntroStatement.module.css";

const whatsappUrl =
  "https://wa.me/62895345902896?text=Halo%2C%20saya%20...%20butuh%20layanan%20Live%20Streaming%20dan%20Multicam%20boleh%20dibantu%20lebih%20lanjut%3F";

const content = {
  id: {
    label: "Live Streaming Surabaya",
    statement: "Jasa Live Streaming Surabaya",
    support:
      "Colorize Visual membantu kebutuhan live streaming, multicam, broadcasting, videotron, dan instalasi multimedia untuk wedding, sekolah, gereja, corporate, hingga sport event. Kami merancang workflow visual yang rapi agar acara siap ditayangkan dengan hasil clean dan profesional.",
    primary: "Konsultasi Project",
    secondary: "Lihat Karya",
  },
  en: {
    label: "Live Streaming Surabaya",
    statement: "Live Streaming Service in Surabaya",
    support:
      "Colorize Visual supports live streaming, multicam production, broadcasting, videotron, and multimedia installation for weddings, schools, churches, corporate events, and sport productions. We design a clean visual workflow so your event is ready to be broadcast professionally.",
    primary: "Discuss Project",
    secondary: "View Works",
  },
};

export default function BigIntroStatement() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className={styles.section} aria-labelledby="big-intro-title">
      <Reveal className={styles.container} variant="text">
        <p className={styles.label}>{t.label}</p>
        <h1 id="big-intro-title" className={styles.statement}>
          {t.statement}
        </h1>
        <p className={styles.support}>{t.support}</p>
        <div className={styles.actions}>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            {t.primary}
          </a>
          <Link href="/works">{t.secondary}</Link>
        </div>
      </Reveal>
    </section>
  );
}
