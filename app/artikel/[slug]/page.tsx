import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CameraCards from "@/components/articles/CameraCards";
import CameraCTA from "@/components/articles/CameraCTA";
import JsonLd from "@/components/seo/JsonLd";
import { siteUrl } from "@/app/seo";
import { articleDate, cameraArticles, getCameraArticle, readingMinutes } from "../cameras";
import styles from "@/components/articles/Articles.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cameraArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getCameraArticle((await params).slug);
  if (!article) notFound();
  return {
    title: article.title, description: article.summary,
    alternates: { canonical: `/artikel/${article.slug}` },
    openGraph: { title: article.title, description: article.summary, type: "article", url: `/artikel/${article.slug}`, publishedTime: articleDate, authors: ["Colorize Visual"], images: [{ url: article.image, alt: article.camera }] },
    twitter: { card: "summary_large_image", title: article.title, description: article.summary, images: [article.image] },
  };
}

export default async function CameraArticlePage({ params }: Props) {
  const article = getCameraArticle((await params).slug);
  if (!article) notFound();
  const url = `${siteUrl}/artikel/${article.slug}`;
  const sections = [["kenapa", "Kenapa kami memilihnya"], ["kelebihan", "Kelebihan"], ["kekurangan", "Kekurangan"], ["penggunaan", "Contoh penggunaan"], ...(article.netflix ? [["netflix", "Tentang Netflix approved"]] : []), ["kesimpulan", "Pilihan untuk event-mu"], ["sumber", "Sumber & referensi"]];

  return (
    <main className={styles.page} lang="id">
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.summary, image: `${siteUrl}${article.image}`, datePublished: `${articleDate}T09:00:00+07:00`, dateModified: `${articleDate}T09:00:00+07:00`, inLanguage: "id-ID", author: { "@type": "Organization", name: "Colorize Visual", url: siteUrl }, publisher: { "@type": "Organization", name: "Colorize Visual", url: siteUrl }, mainEntityOfPage: url },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Beranda", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Artikel", item: `${siteUrl}/artikel` }, { "@type": "ListItem", position: 3, name: article.camera, item: url }] },
      ]} />
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Beranda</Link><span aria-hidden="true">/</span><Link href="/artikel">Artikel</Link><span aria-hidden="true">/</span><span aria-current="page">{article.camera}</span></nav>
        <article>
          <header className={styles.articleHero}>
            <div className={styles.articleIntro}>
              <p className={styles.eyebrow}>{article.category}</p>
              <h1>{article.title}</h1>
              <p className={styles.dek}>{article.summary}</p>
              <div className={styles.byline}><span className={styles.authorMark} aria-hidden="true">CV</span><div><strong>Tim Colorize Visual</strong><p><time dateTime={articleDate}>3 Oktober 2026</time><span> · {readingMinutes(article)} menit baca</span></p></div></div>
            </div>
            <figure className={styles.heroFigure}>
              <div className={styles.heroImage}><Image src={article.image} alt={`Kamera ${article.camera}`} fill sizes="(max-width: 900px) 90vw, 45vw" preload /><span className={styles.figureLabel}>{article.camera}</span></div>
              <figcaption>{article.imageCredit} {article.imageSource && <a href={article.imageSource} target="_blank" rel="noreferrer">Lihat sumber gambar ↗</a>}</figcaption>
            </figure>
          </header>
          <dl className={styles.specs}>{article.specs.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>
          <div className={styles.readingLayout}>
            <aside className={styles.toc}><nav aria-label="Daftar isi artikel"><p className={styles.eyebrow}>DALAM ARTIKEL INI</p>{sections.map(([id, label], index) => <a href={`#${id}`} key={id}><span>0{index + 1}</span>{label}</a>)}</nav><Link className={styles.textLink} href="/artikel#panduan">Bandingkan semua kamera ↗</Link></aside>
            <div className={styles.prose}>
              <p className={styles.lead}>{article.intro}</p>
              <section id="kenapa"><p className={styles.sectionNumber}>01 / ALASAN KAMI</p><h2>Kenapa kami menggunakan {article.camera}?</h2>{article.why.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
              <section id="kelebihan"><p className={styles.sectionNumber}>02 / NILAI TAMBAH</p><h2>Kelebihan yang terasa di lapangan.</h2><ul className={styles.pointList}>{article.strengths.map((item) => <li key={item.title}><span className={styles.plus} aria-hidden="true">+</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ul></section>
              <section id="kekurangan"><p className={styles.sectionNumber}>03 / PERTIMBANGAN</p><h2>Kekurangan yang perlu kamu tahu.</h2><ul className={styles.pointList}>{article.limitations.map((item) => <li key={item.title}><span className={styles.minus} aria-hidden="true">−</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ul></section>
              <section id="penggunaan" className={styles.scenario}><p className={styles.eyebrow}>CONTOH PENGGUNAAN</p><h2>{article.scenario.title}</h2><p>{article.scenario.text}</p><p className={styles.scenarioNote}>Ilustrasi setup; komposisi kamera disesuaikan dengan kebutuhan acara.</p></section>
              {article.netflix && <section id="netflix" className={styles.note}><p className={styles.eyebrow}>CATATAN CINEMA LINE</p><h2>Apa arti “Netflix approved”?</h2><p>{article.netflix}</p><a href={article.sources.find((source) => source.label.startsWith("Sony Cine"))?.url} target="_blank" rel="noreferrer">Baca pengumuman resmi Sony Cine ↗</a></section>}
              <section id="kesimpulan"><h2>Jadi, cocok untuk event kamu?</h2><p>{article.takeaway}</p><p>Kamera yang tepat adalah bagian dari produksi yang tepat. Kami mempertimbangkan pencahayaan, audio, posisi operator, serta format hasil akhir agar dokumentasi sesuai dengan kebutuhanmu.</p></section>
              <section id="sumber" className={styles.sources}><h2>Sumber & referensi</h2><p>Spesifikasi mengacu pada sumber produsen berikut. Rekomendasi penggunaan merupakan pertimbangan editorial Colorize Visual. Fitur dan mode tertentu mengikuti firmware, aksesori, serta pengaturan yang digunakan.</p><ul>{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} <span aria-hidden="true">↗</span></a></li>)}</ul><p>{article.imageCredit} {article.imageSource && <a href={article.imageSource} target="_blank" rel="noreferrer">Sumber gambar resmi ↗</a>}</p></section>
            </div>
          </div>
        </article>
        <CameraCTA camera={article.camera} />
        <section className={styles.related} aria-labelledby="related-title"><div className={styles.sectionHeading}><h2 id="related-title">Kenali pilihan lainnya.</h2><Link href="/artikel" className={styles.textLink}>Semua artikel ↗</Link></div><CameraCards articles={cameraArticles.filter((item) => item.slug !== article.slug)} /></section>
      </div>
    </main>
  );
}
