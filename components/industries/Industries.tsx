import styles from "./Industries.module.css";
import { Industries as IndustriesComponent } from "@/constants";

export default function Industries() {
  return (
    <section className={styles.industries}>
      <div className={styles.industriesHeader}>
        <h3 className={styles.sectionTitleDark}>
          Key industries
          <span className={`${styles.sectionTitleDark} ${styles.dot}`}>.</span>
        </h3>
        <p className={styles.sectionBodyDark}>
          Domains we have mastered and conquered
        </p>
      </div>

      <div className={styles.industriesWrapper}>
        {IndustriesComponent.map((industry, index) => (
          <div className={styles.industry} key={index}>
            <h3 className={styles.industryNameAlone}>{industry.name}</h3>

            <div className={styles.industryOverlay}></div>
            <div className={styles.industryDetails}>
              <h3 className={styles.industryName}>{industry.name}</h3>
              <p className={styles.industryDescription}>
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
