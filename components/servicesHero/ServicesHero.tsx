import Image from "next/image";
import styles from "./ServicesHero.module.css";
import { ServicesHeroType } from "@/types";
import { Images, Navs } from "@/constants";
import Link from "next/link";

export default function ServicesHero({
  heroBackground,
  heroColor,
  heroImage,
  heroTitle,
}: ServicesHeroType) {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <Link href="/">
            <Image
              src={Images.logoFull}
              alt="logo"
              width={178.61}
              height={40}
              className={styles.logoFull}
            />

            <Image
              src={Images.logo}
              alt="logo"
              width={50.25}
              height={48}
              className={styles.logo}
            />
          </Link>

          <div className={styles.links}>
            {Navs.map((nav, index) =>
              nav.route ? (
                <Link href={nav.route} className={styles.link} key={index}>
                  {nav.name}
                </Link>
              ) : (
                <p className={styles.link} key={index}>
                  {nav.name}
                </p>
              )
            )}
          </div>

          <button className={styles.headerButton}>Contact us</button>
        </header>
      </div>

      <section className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <h3 className={styles.heroTitle}>
            {heroTitle}
            <span className={styles.dot}>.</span>
          </h3>

          <button className={styles.heroButton}>Contact us</button>
        </div>

        <div className={styles.heroBottomImageWrapper}>
          <Image
            src={heroImage}
            alt="hero image"
            className={styles.heroBottomImage}
            fill
          />
        </div>
      </section>
    </div>
  );
}
