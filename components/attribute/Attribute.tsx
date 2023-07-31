import { AttributeType } from "@/types";
import Image from "next/image";
import styles from "./Attribute.module.css";

export default function Attribute({
  headerTitle,
  header,
  text1,
  text2,
  image,
  shouldReverse,
}: AttributeType) {
  return (
    <div className={`${styles.wrapper} ${shouldReverse ? styles.reverse : ""}`}>
      <div className={styles.imageWrapper}>
        <Image
          alt="attribute image"
          src={image}
          className={styles.image}
          fill
        />
      </div>

      <div className={styles.texts}>
        <h3 className={styles.title}>
          {headerTitle} <span className={styles.titleInner}>{header}</span>
          <span className={styles.dot}>.</span>
        </h3>
        <p className={styles.text}>{text1}</p>
        <p className={styles.text}>{text2}</p>
      </div>
    </div>
  );
}
