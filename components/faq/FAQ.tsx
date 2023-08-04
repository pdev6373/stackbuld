"use client";
import { FAQs, Images } from "@/constants";
import styles from "./FAQ.module.css";
import Image from "next/image";
import { useState } from "react";
import { FAQType } from "@/types";

export default function FAQ() {
  const [currentFAQ, setCurrentFAQ] = useState<FAQType>(FAQs[0]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.faqHeader}>
        <h3 className={styles.sectionTitleDark}>
          FAQs
          <span className={`${styles.sectionTitleDark} ${styles.dot}`}>.</span>
        </h3>
        <p className={styles.sectionBodyDark}>Our frequently asked questions</p>
      </div>

      <div className={styles.faqs}>
        {FAQs.map((faq) => (
          <div className={styles.faqOuter} key={faq.question}>
            <div
              className={`${styles.faq} ${
                currentFAQ.question == faq.question && styles.faqCurrent
              }`}
              onClick={() => setCurrentFAQ(faq)}
            >
              <div className={styles.questionWrapper}>
                <h2 className={styles.question}>{faq.question}</h2>
                <Image
                  src={Images.expand}
                  alt="faq icon"
                  width={24}
                  height={24}
                  className={
                    faq.question === currentFAQ.question
                      ? styles.faqIcon
                      : styles.faqIconCurrent
                  }
                />
              </div>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
