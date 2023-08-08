"use client";
import { HeroType } from "@/types";
import { Header, SectionWrapper } from "..";
import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";
import Particles from "react-tsparticles";
import ParticlesConfig from "@/config/particle-config";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Typed from "react-typed";

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
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div className={styles.container}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesConfig}
      />
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
            <h3 className={styles.textCenter} style={titleStyles}>
              <Typed
                className={`${styles.heroTitle} ${
                  type === "services" && styles.heroServiceTitle
                }`}
                strings={[title]}
                typeSpeed={50}
                cursorChar="."
                autoInsertCss={true}
              />
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
        <Image
          src={heroImage}
          alt="hero image"
          className={styles.heroImage}
          fill
        />
      </div>
    </div>
  );
}
