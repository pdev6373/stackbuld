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
          Key industries<span className={styles.dot}>.</span>
        </h3>
        <p className={styles.sectionBodyDark}>
          Domains we have mastered and conquered
        </p>
      </div>

      <div className={styles.faqs}>
        {FAQs.map((faq) => (
          <div
            key={faq.question}
            className={styles.faq}
            onClick={() => setCurrentFAQ(faq)}
          >
            <div className={styles.questionWrapper}>
              <h2 className={styles.question}>{faq.question}</h2>
              <Image
                src={Images.expand}
                alt="faq icon"
                width={24}
                height={24}
              />
            </div>
            {currentFAQ.question == faq.question && (
              <p className={styles.answer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
