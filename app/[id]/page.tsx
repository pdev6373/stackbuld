import {
  Projects,
  ServiceFeatures,
  ServicesHero,
  Video,
  WhyStackbuld,
} from "@/components";
import styles from "./page.module.css";
import { ServicesHero as ServicesHeroConstant } from "@/constants";

export default function page() {
  const currentService = ServicesHeroConstant[0];

  return (
    <main>
      <ServicesHero
        heroImage={currentService.heroImage}
        heroTitle={currentService.heroTitle}
        heroBackground={currentService.heroBackground}
        heroColor={currentService.heroColor}
      />
      <div className={styles.wrapper}>
        <p className={styles.sectionTitle}>
          We deliver long-term digital value to business owners and startups.
        </p>
      </div>
      <div className={styles.videoWrapper}>
        <Video />
      </div>
      <div className={styles.wrapper}>
        <ServiceFeatures />
      </div>
      <Projects />
      <WhyStackbuld />
    </main>
  );
}
