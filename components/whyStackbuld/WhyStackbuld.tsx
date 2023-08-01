import { Why } from "@/constants";
import styles from "./WhyStackbuld.module.css";

export default function WhyStackbuld() {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.header}>
        Why Stackbuld<span className={styles.questionMark}>?</span>
      </h3>

      <div className={styles.whyWrapper}>
        {Why.map((item, index) => (
          <div className={styles.why} key={index}>
            <p className={styles.whyNumber}>{index + 1}</p>
            <div className={styles.whyWrapperInner}>
              <h3 className={styles.whyHeader}>{item.header}</h3>
              <p className={styles.whyBody}>{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomText}>
          <h3 className={styles.header}>
            Let’s get started<span className={styles.questionMark}>.</span>
          </h3>
          <p className={styles.sectionBody}>
            Work with us to transform your business ideas
          </p>
        </div>

        <button className={styles.bottomButton}>Start your project</button>
      </div>
    </section>
  );
}
