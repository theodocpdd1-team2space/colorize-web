import Link from "next/link";
import CameraCards from "@/components/articles/CameraCards";
import { cameraArticles } from "@/app/artikel/cameras";
import styles from "@/components/articles/Articles.module.css";

export default function CameraJournal() {
  return (
    <section className={styles.journal} lang="id" aria-labelledby="camera-journal-title">
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <div><p className={styles.eyebrow}>DI BALIK GAMBAR · ARTIKEL KAMERA</p><h2 id="camera-journal-title">Kenali kamera.<br /><span>Temukan karakternya.</span></h2></div>
          <div><p>Empat kamera, kebutuhan berbeda. Cari tahu alasan kami memilihnya untuk cerita event kamu.</p><Link className={styles.textLink} href="/artikel">Jelajahi semua artikel <span aria-hidden="true">↗</span></Link></div>
        </div>
        <CameraCards articles={cameraArticles} />
      </div>
    </section>
  );
}
