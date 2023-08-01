import Image from "next/image";
import styles from "./Hero.module.css";
import { HeroType } from "@/types";

export default function Hero({
  title,
  type,
  titleStyles,
  heroImage,
}: HeroType) {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        <h3 className={styles.heroTitle} style={titleStyles}>
          {title}
          <span className={styles.dot}>.</span>
        </h3>

        {type !== "about" && (
          <p className={styles.heroBody}>
            Harness the power of scalable software solutions to elevate your
            business performance and profitability.
          </p>
        )}

        {type !== "about" && (
          <button className={styles.heroButton}>Contact us</button>
        )}
      </div>

      <div className={styles.heroImageWrapper}>
        <Image src={heroImage} alt="logo" className={styles.heroImage} fill />
      </div>
    </section>
  );
}
