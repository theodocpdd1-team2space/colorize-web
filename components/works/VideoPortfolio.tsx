"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { portfolioVideos } from "@/lib/portfolio";
import styles from "./VideoPortfolio.module.css";

export default function VideoPortfolio() {
  const { language } = useLanguage();
  const isId = language === "id";
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className={styles.section} aria-labelledby="video-portfolio-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>{isId ? "Portofolio / Live streaming" : "Portfolio / Live streaming"}</p>
            <h2 id="video-portfolio-title">{isId ? "Lihat acara. Rasakan ceritanya." : "Watch the event. Feel the story."}</h2>
          </div>
          <p>{isId ? "Dua produksi, dua cerita. Tonton rekaman acara yang menjadi bagian dari portofolio Colorize Visual." : "Two productions, two stories. Watch event recordings from the Colorize Visual portfolio."}</p>
        </header>
        <div className={styles.grid}>
          {portfolioVideos.map((video, index) => (
            <article key={video.id} className={styles.card}>
              <div className={styles.player}>
                {activeVideo === video.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                    title={`${video.title} — ${video.client}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <button type="button" onClick={() => setActiveVideo(video.id)} aria-label={`${isId ? "Putar video" : "Play video"}: ${video.title}`} className={styles.playButton}>
                    <Image src={video.image} alt={`${video.title} — ${video.client}`} fill sizes="(max-width: 768px) 90vw, 45vw" className={styles.thumbnail} />
                    <span className={styles.playIcon} aria-hidden="true">▶</span>
                    <span className={styles.playLabel}>{isId ? "Putar rekaman" : "Play recording"}</span>
                  </button>
                )}
              </div>
              <div className={styles.cardHeading}><span aria-hidden="true">0{index + 1}</span><p>{video.client}</p></div>
              <h3>{video.title}</h3>
              <p className={styles.description}>{video.description[language]}</p>
              <div className={styles.cardFooter}>
                <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer">{isId ? "Tonton di YouTube" : "Watch on YouTube"} <span aria-hidden="true">↗</span></a>
                <p>Video &amp; thumbnail: {video.channel}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
