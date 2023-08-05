import { Achievements, Companies as CompaniesConstant } from "@/constants";
import Image from "next/image";
import styles from "./Companies.module.css";
import { SectionWrapper } from "..";
import { Fragment } from "react";

export default function Companies() {
  return (
    <section className={styles.wrapper}>
      <SectionWrapper>
        <h3 className={styles.header}>
          We have the privilege of working with ambitious companies to create
          world-class solutions.
        </h3>
      </SectionWrapper>

      <div className={styles.imagesWrapper}>
        {CompaniesConstant.map((company, index) => (
          <Fragment key={index}>
            <SectionWrapper>
              <div className={styles.imageWrapperOuter}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={company}
                    alt="company image"
                    className={styles.image}
                    fill
                  />
                </div>
              </div>
            </SectionWrapper>
          </Fragment>
        ))}
      </div>

      <div className={styles.achievements}>
        {Achievements.map((achievement, index) => (
          <div
            key={index}
            className={`${styles.achievement} ${
              index === 1 ? styles.borderBlock : ""
            }`}
          >
            <div className={styles.achievementTitleWrapper}>
              <p className={styles.achievementTitle}>{achievement.title}</p>
              <p className={styles.achievementText}>{achievement.body}</p>
            </div>

            <Image
              src={achievement.image}
              alt="achievement image"
              width={96}
              height={96}
              className={styles.achievementIcon}
            />

            <Image
              src={achievement.image}
              alt="achievement image"
              width={72}
              height={72}
              className={styles.achievementIconMobile}
            />

            <Image
              src={achievement.image}
              alt="achievement image"
              width={48}
              height={48}
              className={styles.achievementIconMobile2}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
