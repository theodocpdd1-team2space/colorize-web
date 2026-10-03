import Image from "next/image";
import Link from "next/link";
import { type CameraArticle, readingMinutes } from "@/app/artikel/cameras";
import styles from "./Articles.module.css";

export default function CameraCards({ articles }: { articles: CameraArticle[] }) {
  return (
    <div className={styles.cardGrid}>
      {articles.map((article, index) => (
        <article className={styles.card} key={article.slug}>
          <Link href={`/artikel/${article.slug}`} className={styles.cardLink}>
            <div className={styles.cardImage}>
              <span className={styles.cardNumber}>0{index + 1}</span>
              <Image src={article.image} alt={article.camera} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 44vw, 42vw" />
              <span className={styles.imageArrow} aria-hidden="true">↗</span>
            </div>
            <div className={styles.cardCopy}>
              <p className={styles.eyebrow}>{article.category}</p>
              <h3>{article.title}</h3>
              <p className={styles.cardSummary}>{article.summary}</p>
              <div className={styles.tags}>{article.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className={styles.cardBottom}><span>Baca artikel <span aria-hidden="true">↗</span></span><span>{readingMinutes(article)} menit baca</span></div>
            </div>
          </Link>
          <p className={styles.cardCredit}>{article.imageCredit} {article.imageSource && <a href={article.imageSource} target="_blank" rel="noreferrer">Sumber ↗</a>}</p>
        </article>
      ))}
    </div>
  );
}
