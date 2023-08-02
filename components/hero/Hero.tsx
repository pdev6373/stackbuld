import Image from "next/image";
import styles from "./Hero.module.css";
import { HeroType } from "@/types";
import { Header } from "..";

export default function Hero({
  title,
  type,
  titleStyles,
  heroImage,
  showImage = true,
  invertButton = false,
  imageStyles,
}: HeroType) {
  return (
    <div className={styles.container}>
      <Header type={type} invertButton={invertButton} />
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

        <div
          className={`${styles.heroImageWrapper} ${
            showImage ? "" : styles.invisble
          }`}
          style={imageStyles ? imageStyles : {}}
        >
          <Image src={heroImage} alt="logo" className={styles.heroImage} fill />
        </div>
      </section>
    </div>
  );
}
