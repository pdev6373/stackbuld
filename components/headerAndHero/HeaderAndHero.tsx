import Image from "next/image";
import styles from "./HeaderAndHero.module.css";
import { HeroType } from "@/types";
import { Images, Navs } from "@/constants";
import Link from "next/link";

export default function HeaderAndHero({
  titleStyles,
  type,
  heroImage,
  title,
}: HeroType) {
  return (
    <>
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
              {Navs.map((nav) =>
                nav.route ? (
                  <Link href={nav.route} className={styles.link}>
                    {nav.name}
                  </Link>
                ) : (
                  <p className={styles.link}>{nav.name}</p>
                )
              )}
            </div>

            <button className={styles.headerButton}>Contact us</button>
          </header>
        </div>

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
        </section>
      </div>
      <div className={styles.heroImageWrapper}>
        <Image
          src={heroImage}
          alt="hero image"
          className={styles.heroImage}
          fill
        />
      </div>
    </>
  );
}
