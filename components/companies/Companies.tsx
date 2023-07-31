import { Achievements, Companies as CompaniesConstant } from "@/constants";
import Image from "next/image";
import styles from "./Companies.module.css";

export default function Companies() {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.header}>
        We have the privilege of working with ambitious companies to create
        world-class solutions.
      </h3>

      <div className={styles.imagesWrapper}>
        {CompaniesConstant.map((company) => (
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
        ))}
      </div>

      <div className={styles.achievements}>
        {Achievements.map((achievement, index) => (
          <div
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
            />
          </div>
        ))}
      </div>
    </section>
  );
}
