import Image from "next/image";
import styles from "./Review.module.css";
import { Images } from "@/constants";

export default function Review() {
  return (
    <div className={styles.review}>
      <div className={styles.reviewContent}>
        <p className={styles.quote}>
          “Quote from a satisfied customer that speaks good about our services
          and lends social proof to what we do”
        </p>

        <div className={styles.reviewBody}>
          <Image
            src={Images.profile}
            alt="profile image"
            width={56}
            height={56}
          />

          <div>
            <p className={styles.reviewName}>Firstname Lastname</p>
            <p className={styles.reviewRole}>Role, Company</p>
          </div>
        </div>
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
  );
}