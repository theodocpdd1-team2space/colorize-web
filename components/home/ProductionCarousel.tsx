import Image from "next/image";
import styles from "./ProductionCarousel.module.css";

const photos = [
  {
    src: "/carouselbaru/1.jpg",
    alt: "Colorize Visual production workflow photo 1",
    variant: "wide",
  },
  {
    src: "/carouselbaru/2.jpg",
    alt: "Colorize Visual production workflow photo 2",
    variant: "portrait",
  },
  {
    src: "/carouselbaru/3.jpg",
    alt: "Colorize Visual production workflow photo 3",
    variant: "wide",
  },
  {
    src: "/carouselbaru/4.jpg",
    alt: "Colorize Visual production workflow photo 4",
    variant: "standard",
  },
  {
    src: "/carouselbaru/5.jpg",
    alt: "Colorize Visual production workflow photo 5",
    variant: "wide",
  },
] as const;

const ProductionCarousel = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Behind Every Clean Broadcast, There&apos;s a Solid Workflow
          </h2>
          <p className={styles.subtitle}>
            From camera setup, switching, monitoring, to live output — our team
            prepares every detail so your event looks professional on screen.
          </p>
        </div>
      </div>

      <div className={styles.carousel} aria-label="Production workflow photos">
        <div className={styles.track}>
          {[0, 1].map((groupIndex) => (
            <div
              className={styles.slideGroup}
              aria-hidden={groupIndex === 1}
              key={groupIndex}
            >
              {photos.map((photo) => (
                <article
                  className={`${styles.card} ${styles[photo.variant]}`}
                  key={`${groupIndex}-${photo.src}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 78vw, (max-width: 1200px) 44vw, 520px"
                  />
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionCarousel;
