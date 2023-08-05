import { Why } from "@/constants";
import styles from "./WhyStackbuld.module.css";
import Link from "next/link";
import { SectionWrapper } from "..";

export default function WhyStackbuld() {
  return (
    <section className={styles.wrapper}>
      <SectionWrapper>
        <h3 className={styles.header}>
          Why Stackbuld<span className={styles.questionMark}>?</span>
        </h3>
      </SectionWrapper>

      <div className={styles.whyWrapper}>
        {Why.map((item, index) => (
          <div className={styles.why} key={index}>
            <div className={styles.whyNumberWrapper}>
              <SectionWrapper>
                <p className={styles.whyNumber}>{index + 1}</p>
              </SectionWrapper>
            </div>

            <div className={styles.whyWrapperInner}>
              <SectionWrapper>
                <h3 className={styles.whyHeader}>{item.header}</h3>
              </SectionWrapper>
              <SectionWrapper>
                <p className={styles.whyBody}>{item.body}</p>
              </SectionWrapper>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomText}>
          <SectionWrapper>
            <h3 className={styles.header}>
              Let’s get started<span className={styles.questionMark}>.</span>
            </h3>
          </SectionWrapper>
          <SectionWrapper>
            <p className={styles.sectionBody}>
              Work with us to transform your business ideas
            </p>
          </SectionWrapper>
        </div>

        <SectionWrapper>
          <Link href="/#contact" className={styles.bottomButton}>
            Start your project
          </Link>
        </SectionWrapper>
      </div>
    </section>
  );
}
