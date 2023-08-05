import { HeroType } from "@/types";
import { Header, SectionWrapper } from "..";
import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";

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
  contactRoute,
}: HeroType) {
  return (
    <div className={styles.container}>
      <Header
        type={type}
        invertButton={invertButton}
        contactRoute={contactRoute}
      />

      <section className={styles.heroWrapper}>
        <div
          className={
            type === "services"
              ? styles.heroContentServices
              : styles.heroContent
          }
        >
          {type === "services" && (
            <SectionWrapper type="fade-in" nodelay={true}>
              <p
                className={styles.serviceType}
                style={{
                  background: serviceTitleBackground,
                  color: serviceTitleColor,
                }}
              >
                {serviceTitleText}
              </p>
            </SectionWrapper>
          )}
          <SectionWrapper type="fade-in" nodelay={true}>
            <h3
              className={`${styles.heroTitle} ${
                type === "services" && styles.heroServiceTitle
              }`}
              style={titleStyles}
            >
              {title}
              <span className={styles.dot}>.</span>
            </h3>
          </SectionWrapper>

          {type !== "about" && type !== "services" && (
            <SectionWrapper type="fade-in" nodelay={true}>
              <p className={styles.heroBody}>{content}</p>
            </SectionWrapper>
          )}

          {type !== "about" && (
            <SectionWrapper type="fade-in" nodelay={true}>
              <Link className={styles.heroButton} href={contactRoute}>
                Contact us
              </Link>
            </SectionWrapper>
          )}
        </div>
      </section>

      <div
        className={`${styles.heroImageWrapper} ${
          showImage ? "" : styles.invisble
        }`}
        style={imageStyles ? imageStyles : {}}
      >
        <Image src={heroImage} alt="logo" className={styles.heroImage} fill />
      </div>
    </div>
  );
}
