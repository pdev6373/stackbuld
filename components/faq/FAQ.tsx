"use client";
import { Images } from "@/constants";
import styles from "./FAQ.module.css";
import Image from "next/image";
import { useState } from "react";
import { FAQType } from "@/types";
import { SectionWrapper } from "..";

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQType[]>([
    {
      isHidden: false,
      question: "How can Stackbuld's engineering team benefit my business?",
      answer:
        "A dedicated engineering team from Stackbuld becomes an extension of your in-house team, providing expertise, skills, and additional resources. With our efficient recruitment process, we ensure that your team is up and running in no time, ready to tackle challenges and drive your project forward to success.",
    },

    {
      isHidden: true,
      question: "How does UI/UX design impact my business success?",
      answer:
        "User-centered design is the cornerstone of our approach and we believe that happy users lead to loyal customers. Our team of talented designers focuses on creating intuitive and visually appealing interfaces that resonate with your audience. By putting users at the centre of the design process, we ensure that every interaction with your product is seamless, engaging, and memorable, ultimately driving business growth and building brand loyalty.",
    },

    {
      isHidden: true,
      question: "What is the process for web development at Stackbuld?",
      answer:
        "Our web development process begins with thorough requirement gathering and analysis, followed by wireframing and design. Once approved, our engineers bring the design to life, and our QA team ensures a bug-free and seamless experience before launch. After deployment, we provide ongoing support and maintenance to keep your website running.",
    },

    {
      isHidden: true,
      question:
        "How does Stackbuld ensure the security of my sensitive data during the development process?",
      answer:
        "At Stackbuld, safeguarding your sensitive data is of utmost importance to us. We follow a rigorous security protocol to ensure the highest level of confidentiality throughout the development process. Our team strictly adheres to industry best practices, utilizing encrypted communication channels and secure servers to protect your valuable information from any potential threats. Regular audits and constant monitoring further reinforce our commitment to maintaining the integrity and confidentiality of your data.",
    },

    {
      isHidden: true,
      question:
        "Can Stackbuld optimize my website for mobile devices to reach a wider audience?",
      answer:
        "Absolutely! As part of our web development process, we prioritize mobile responsiveness to ensure that your website is accessible and user-friendly on all devices. We conduct rigorous testing across various screen sizes and devices, optimizing the user experience for mobile users, and expanding your reach to a wider audience.",
    },
  ]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.faqHeader}>
        <SectionWrapper>
          <h3 className={styles.sectionTitleDark}>
            FAQs
            <span className={`${styles.sectionTitleDark} ${styles.dot}`}>
              .
            </span>
          </h3>
        </SectionWrapper>
        <SectionWrapper>
          <p className={styles.sectionBodyDark}>
            Our frequently asked questions
          </p>
        </SectionWrapper>
      </div>

      <div className={styles.faqs}>
        {faqs.map((faq) => (
          <div className={styles.faqOuter} key={faq.question}>
            <div
              className={styles.faq}
              onClick={() =>
                setFaqs((prev) =>
                  prev.map((item) =>
                    item.question === faq.question
                      ? { ...item, isHidden: false }
                      : { ...item, isHidden: true }
                  )
                )
              }
            >
              <h2 className={styles.questionWrapper}>
                <button className={styles.question}>{faq.question}</button>

                <Image
                  src={Images.expand}
                  alt="faq icon"
                  width={24}
                  height={24}
                  className={
                    faq.isHidden ? styles.faqIcon : styles.faqIconCurrent
                  }
                />
              </h2>

              <div
                className={styles.answerWrapper}
                role="region"
                aria-hidden={faq.isHidden}
              >
                <div className={styles.answerWrapperInner}>
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  // return (
  //       {FAQs.map((faq) => (
  //         <div className={styles.faqOuter} key={faq.question}>
  //           <div
  //             className={`${styles.faq} ${
  //               currentFAQ.question == faq.question && styles.faqCurrent
  //             }`}
  //             onClick={() => setCurrentFAQ(faq)}
  //           >
  //             <div className={styles.questionWrapper}>
  //               <h2 className={styles.question}>{faq.question}</h2>
  //               <Image
  //                 src={Images.expand}
  //                 alt="faq icon"
  //                 width={24}
  //                 height={24}
  //                 className={
  //                   faq.question === currentFAQ.question
  //                     ? styles.faqIcon
  //                     : styles.faqIconCurrent
  //                 }
  //               />
  //             </div>
  //             <p className={styles.answer}>{faq.answer}</p>
  //           </div>
  //         </div>
  //       ))}
  // );
}
