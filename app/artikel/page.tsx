import type { Metadata } from "next";
import Link from "next/link";
import CameraCards from "@/components/articles/CameraCards";
import CameraCTA from "@/components/articles/CameraCTA";
import { cameraArticles } from "./cameras";
import styles from "@/components/articles/Articles.module.css";

const title = "Artikel Kamera untuk Event & Produksi Video";
const description = "Kenali Sony FX3, FX6, NX100, dan LUMIX S5II di Colorize Visual: alasan penggunaan, kelebihan, kekurangan, serta pilihan kamera sesuai kebutuhan event.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/artikel" },
  openGraph: { title, description, url: "/artikel", type: "website", images: [{ url: "/cameras/sony-fx3.png", alt: "Sony FX3 di Colorize Visual" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/cameras/sony-fx3.png"] },
};

export default function ArticlesPage() {
  return (
    <main className={styles.page} lang="id">
      <div className={styles.container}>
        <header className={styles.indexHero}>
          <p className={styles.eyebrow}>COLORIZE JOURNAL / 01 — EQUIPMENT</p>
          <h1>Di balik gambar,<br /><span>ada pilihan yang tepat.</span></h1>
          <div className={styles.heroBottom}><p>Kenali kamera yang kami gunakan. Dari event dengan budget efisien sampai cerita sinematik, setiap kamera punya perannya.</p><a href="#panduan" className={styles.textLink}>Bandingkan kamera <span aria-hidden="true">↓</span></a></div>
        </header>
        <section className={styles.collection} aria-labelledby="collection-title">
          <div className={styles.collectionLabel}><h2 id="collection-title">Kamera di Colorize Visual</h2><span>04 ARTIKEL / BAHASA INDONESIA</span></div>
          <CameraCards articles={cameraArticles} />
        </section>
        <section id="panduan" className={styles.comparison} aria-labelledby="comparison-title">
          <p className={styles.eyebrow}>MULAI DARI KEBUTUHANMU</p>
          <h2 id="comparison-title">Mana yang cocok<br />untuk event kamu?</h2>
          <p>Ini panduan awal dari tim Colorize Visual. Pilihan akhir menyesuaikan venue, cahaya, alur acara, anggaran, dan format hasil yang kamu butuhkan.</p>
          <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Perbandingan kamera, geser horizontal pada layar kecil">
            <table><caption className={styles.srOnly}>Perbandingan empat kamera Colorize Visual</caption><thead><tr><th scope="col">Kamera</th><th scope="col">Kebutuhan yang cocok</th><th scope="col">Pertimbangkan</th></tr></thead><tbody>{cameraArticles.map((article) => <tr key={article.slug}><th scope="row"><Link href={`/artikel/${article.slug}`}>{article.camera} <span aria-hidden="true">↗</span></Link></th><td>{article.bestFor}</td><td>{article.consideration}</td></tr>)}</tbody></table>
          </div>
          <p className={styles.finePrint}>Resolusi rekam kamera berbeda dengan resolusi hasil akhir atau live stream. Output, jumlah kamera, lensa, dan ketersediaan untuk tanggal acara dikonfirmasi saat konsultasi.</p>
        </section>
        <CameraCTA />
      </div>
    </main>
  );
}
