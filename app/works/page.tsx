import FeaturedWorks from "@/components/home/FeaturedWorks";
import styles from "./works.module.css";

const whatsappUrl =
  "https://wa.me/62895345902896?text=Halo%2C%20saya%20...%20butuh%20layanan%20Live%20Streaming%20dan%20Multicam%20boleh%20dibantu%20lebih%20lanjut%3F";

export default function Works() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="Colorize Visual works hero">
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            We Deliver Our Professional Crew to Your Event
          </h1>
          <p className={styles.subtitle}>
            Live streaming, multicam, broadcasting, and multimedia production
            handled with a professional workflow.
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
      <FeaturedWorks />
    </main>
  );
}
