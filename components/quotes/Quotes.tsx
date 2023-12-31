import { Achievements, Images } from "@/constants";
import Image from "next/image";
import styles from "./Quotes.module.css";
import { SectionWrapper } from "..";

export default function Quotes() {
  return (
    <section className={styles.quotes}>
      <SectionWrapper>
        <h3 className={styles.sectionTitleDark}>
          Just don’t take our word for it, hear from others
          <span className={`${styles.sectionTitleDark} ${styles.dot}`}>.</span>
        </h3>
      </SectionWrapper>

      <div className={styles.quotesWrapper}>
        <div className={styles.achievements}>
          {Achievements.map((achievement, index) => (
            <div
              key={index}
              className={`${styles.achievement} ${
                index === 1 ? styles.achievementBorder : ""
              }`}
            >
              <div className={styles.achievementTitleWrapper}>
                <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                <p className={styles.achievementText}>{achievement.body}</p>
              </div>

              <Image
                src={achievement.image}
                alt="achievement icon"
                width={96}
                height={96}
                className={styles.achievementIcon}
              />

              <Image
                src={achievement.image}
                alt="achievement icon"
                width={72}
                height={72}
                className={styles.achievementIconMobile}
              />

              <Image
                src={achievement.image}
                alt="achievement icon"
                width={48}
                height={48}
                className={styles.achievementIconMobile2}
              />
            </div>
          ))}
        </div>

        <div className={styles.quotesDisplay}>
          <div className={styles.displayOverlay}></div>
          <div className={styles.quotesHeader}>
            <SectionWrapper>
              <p className={styles.quoteTitle}>
                “Quote from a satisfied customer that speaks good about our
                services and lends social proof to what we do”
              </p>
            </SectionWrapper>

            <SectionWrapper>
              <div className={styles.reviewBody}>
                <Image
                  src={Images.profileTwo}
                  alt="profile image"
                  width={56}
                  height={56}
                  className={styles.profileImage}
                />

                <Image
                  src={Images.profileTwo}
                  alt="profile image"
                  width={40}
                  height={40}
                  className={styles.profileImageMobile}
                />

                <div className={styles.reviewDetails}>
                  <p className={styles.reviewName}>Firstname Lastname</p>
                  <p className={styles.reviewRole}>Role, Company</p>
                </div>
              </div>
            </SectionWrapper>
          </div>

          <div className={styles.quotesBottom}>
            <div className={styles.quotesBottomMain}>
              <SectionWrapper>
                <p className={styles.quotesBottomTitle}>
                  FirstNation & Sons International
                </p>
              </SectionWrapper>
              <SectionWrapper>
                <p className={styles.quotesBottomText}>
                  UI/UX Design, Software Development, Maintenance
                </p>
              </SectionWrapper>
              <SectionWrapper>
                <div className={styles.quoteTime}>
                  <Image
                    src={Images.clock}
                    alt="profile image"
                    width={24}
                    height={24}
                  />
                  <p className={styles.quotesBottomText}>4 weeks</p>
                </div>
              </SectionWrapper>
            </div>

            <div className={styles.quotesNavigation}>
              <Image
                src={Images.arrowLeftLight}
                alt="navigation icon"
                width={32}
                height={32}
                className={styles.navigationIcon}
              />
              <Image
                src={Images.arrowRightLight}
                alt="navigation icon"
                width={32}
                height={32}
                className={styles.navigationIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
