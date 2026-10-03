import { consultationUrl } from "@/app/artikel/cameras";
import styles from "./Articles.module.css";

export default function CameraCTA({ camera }: { camera?: string }) {
  return (
    <section className={styles.cta} aria-labelledby="camera-cta-title">
      <div>
        <p className={styles.eyebrow}>SEMUA TERSEDIA DI COLORIZE VISUAL</p>
        <h2 id="camera-cta-title">Event kamu.<br />Kami bantu ceritakan.</h2>
        <p>Dari Full HD yang efisien sampai produksi cinema full-frame. Sony FX3, FX6, NX100, dan LUMIX S5II tersedia di Colorize Visual. Ceritakan tanggal, konsep, dan budget event-mu; kami bantu memilih setup yang tepat.</p>
      </div>
      <a className={styles.button} href={consultationUrl(camera)} target="_blank" rel="noreferrer">Kerjakan event-mu bersama kami <span aria-hidden="true">↗</span></a>
    </section>
  );
}
