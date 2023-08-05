import Image from "next/image";
import styles from "./Review.module.css";
import { Images } from "@/constants";
import { SectionWrapper } from "..";

export default function Review() {
  return (
    <div className={styles.reviewOuter}>
      <SectionWrapper
        type="fade-in"
        width="100%"
        amount="some"
        margin="0px 0px -25% 0px"
        duration={0.7}
      >
        <div className={styles.review}>
          <div className={styles.reviewContent}>
            <SectionWrapper>
              <p className={styles.quote}>
                “Quote from a satisfied customer that speaks good about our
                services and lends social proof to what we do”
              </p>
            </SectionWrapper>

            <SectionWrapper>
              <div className={styles.reviewBody}>
                <Image
                  src={Images.profile}
                  alt="profile image"
                  width={56}
                  height={56}
                  className={styles.profileImage}
                />

                <Image
                  src={Images.profile}
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

          <div className={styles.reviewImageWrapper}>
            <Image
              src={Images.services}
              alt="profile image"
              fill
              className={styles.reviewImage}
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
