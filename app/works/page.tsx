import type { Metadata } from "next";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import WorksShowcase from "@/components/works/WorksShowcase";
import JsonLd from "@/components/seo/JsonLd";
import { siteUrl } from "../seo";
import styles from "./works.module.css";

const whatsappUrl =
  "https://wa.me/62895345902896?text=Halo%2C%20saya%20...%20butuh%20layanan%20Live%20Streaming%20dan%20Multicam%20boleh%20dibantu%20lebih%20lanjut%3F";

export const metadata: Metadata = {
  title: "Portfolio Live Streaming Surabaya, Wedding & Corporate Event",
  description:
    "Lihat portfolio Colorize Visual untuk live streaming, multicam, wedding, graduation, sport event, corporate event, dan broadcasting production di Surabaya.",
  alternates: {
    canonical: "/works",
  },
  openGraph: {
    url: `${siteUrl}/works`,
    title: "Portfolio Live Streaming Surabaya - Colorize Visual",
    description:
      "Dokumentasi project live streaming, multicam, dan broadcasting production Colorize Visual di Surabaya.",
    images: [
      {
        url: "/works/bannernew1.JPG",
        width: 1200,
        height: 800,
        alt: "Portfolio live streaming Colorize Visual Surabaya",
      },
    ],
  },
};

const worksJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfolio Live Streaming Surabaya - Colorize Visual",
  url: `${siteUrl}/works`,
  inLanguage: ["id-ID", "en-US"],
  description:
    "Portfolio jasa live streaming, multicam, wedding, graduation, corporate event, dan broadcasting production di Surabaya.",
};

export default function Works() {
  return (
    <main className={styles.page}>
      <JsonLd data={worksJsonLd} />
      <section className={styles.hero} aria-label="Colorize Visual works hero">
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Karya produksi event Colorize Visual.
          </h1>
          <p className={styles.subtitle}>
            Dokumentasi project live streaming, multicam, wedding, graduation,
            sport event, dan broadcast production.
          </p>
          <a
            className={styles.cta}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Konsultasi Project
          </a>
        </div>
      </section>
      <WorksShowcase />
      <FeaturedWorks />
    </main>
  );
}
