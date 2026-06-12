import styles from "./NetflixDocumentation.module.css";

const whatsappUrl =
  "https://wa.me/62895345902896?text=Halo%2C%20saya%20...%20butuh%20layanan%20Live%20Streaming%20dan%20Multicam%20boleh%20dibantu%20lebih%20lanjut%3F";

const NetflixDocumentation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Make Your Documentation Look Like Netflix
          </h2>
          <p className={styles.subtitle}>
            Clean visuals, professional multicam workflow, and polished live
            production for every important moment.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.cta}
          >
            Konsultasi Sekarang
          </a>
        </div>

        <div className={styles.videoFrame}>
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video2.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay} />
        </div>
      </div>
    </section>
  );
};

export default NetflixDocumentation;
