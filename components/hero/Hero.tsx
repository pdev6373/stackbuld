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
  content,
  serviceTitleBackground,
  serviceTitleColor,
  serviceTitleText,
}: HeroType) {
  return (
    <div className={styles.container}>
      <Header type={type} invertButton={invertButton} />
      <section className={styles.heroWrapper}>
        <div
          className={
            type === "services"
              ? styles.heroContentServices
              : styles.heroContent
          }
        >
          {type === "services" && (
            <p
              className={styles.serviceType}
              style={{
                background: serviceTitleBackground,
                color: serviceTitleColor,
              }}
            >
              {serviceTitleText}
            </p>
          )}
          <h3
            className={`${styles.heroTitle} ${
              type === "services" && styles.heroServiceTitle
            }`}
            style={titleStyles}
          >
            {title}
            <span className={styles.dot}>.</span>
          </h3>

          {type !== "about" && type !== "services" && (
            <p className={styles.heroBody}>{content}</p>
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
