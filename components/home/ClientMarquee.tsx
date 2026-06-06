"use client";

import Image from "next/image";
import styles from "./ClientMarquee.module.css";

const logos = [
  "/corporate/1.png",
  "/corporate/2.png",
  "/corporate/3.png",
  "/corporate/4.png",
  "/corporate/5.png",
  "/corporate/6.png",
];

export default function ClientMarquee() {
  const repeatedLogos = [...logos, ...logos];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            A Trusted Creative Partner for Schools, Brands, and Event Leaders
          </h2>
          <p className={styles.subheading}>
            Colorize Visual has supported live streaming, multicam, and multimedia production for schools, brands, weddings, and event partners.
          </p>
        </div>

        <div className={styles.logoMarquee}>
          <div className={styles.logoTrack}>
            {repeatedLogos.map((logo, index) => (
              <div className={styles.logoCard} key={`${logo}-${index}`}>
                <Image
                  src={logo}
                  alt={`Colorize Visual client logo ${(index % logos.length) + 1}`}
                  width={220}
                  height={110}
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
