import { SectionWrapper } from "..";
import styles from "./Industries.module.css";
import { Industries as IndustriesComponent } from "@/constants";

export default function Industries() {
  return (
    <section className={styles.industries}>
      <div className={styles.industriesHeader}>
        <SectionWrapper>
          <h3 className={styles.sectionTitleDark}>
            Key industries
            <span className={`${styles.sectionTitleDark} ${styles.dot}`}>
              .
            </span>
          </h3>
        </SectionWrapper>
        <SectionWrapper>
          <p className={styles.sectionBodyDark}>
            Domains we have mastered and conquered
          </p>
        </SectionWrapper>
      </div>

      <div className={styles.industriesWrapper}>
        {IndustriesComponent.map((industry, index) => (
          <SectionWrapper
            type="fade-in"
            width="100%"
            amount="some"
            margin="0px 0px -25% 0px"
            duration={0.7}
          >
            <div
              className={`${styles.industry} ${
                styles[industry.id.toLowerCase()]
              }`}
              key={index}
            >
              <h3 className={styles.industryNameAlone}>{industry.name}</h3>

              <div className={styles.industryOverlay}></div>
              <div className={styles.industryDetails}>
                <h3 className={styles.industryName}>{industry.name}</h3>
                <p className={styles.industryDescription}>
                  {industry.description}
                </p>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </section>
  );
}
