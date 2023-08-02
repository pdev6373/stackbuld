"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HowWeWork.module.css";
import { HowWeWork as HowWeWorkConstant, Images } from "@/constants";

export default function HowWeWork() {
  const mainRef = useRef<any>();
  const designRef = useRef<any>();
  const developRef = useRef<any>();
  const supportRef = useRef<any>();

  const [showSteps, setShowSteps] = useState(false);
  const [isDesignShown, setIsDesignShown] = useState(false);
  const [isDevelopedShown, setIsDevelopedShown] = useState(false);
  const [isSupportShown, setIsSupportShown] = useState(false);

  const getVerticalCoordinates = () => {
    const mainCoordinates = mainRef.current.getBoundingClientRect();
    const designCoordinates = designRef.current.getBoundingClientRect();
    const developCoordinates = developRef.current.getBoundingClientRect();
    const supportCoordinates = supportRef.current.getBoundingClientRect();

    if (mainCoordinates.y <= 40) setShowSteps(true);
    else setShowSteps(false);
    if (mainCoordinates.bottom <= 300) setShowSteps(false);

    if (designCoordinates.y <= 200) setIsDesignShown(true);
    else setIsDesignShown(false);

    if (developCoordinates.y <= 200) setIsDevelopedShown(true);
    else setIsDevelopedShown(false);

    if (supportCoordinates.y <= 200) setIsSupportShown(true);
    else setIsSupportShown(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", getVerticalCoordinates);
  }, []);

  const handleImageToDisplay = (condition: boolean) =>
    condition ? (
      <Image src={Images.selected} alt="selected" width={16} height={16} />
    ) : (
      <Image src={Images.unselected} alt="selected" width={16} height={16} />
    );

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.sectionTitle}>
          How we work<span className={styles.dot}>.</span>
        </h3>
        <p className={styles.sectionBody}>
          The steps we take to help you achieve your goals.
        </p>
      </div>

      <div className={styles.mainWrapper} ref={mainRef}>
        <div className={`${styles.steps} ${showSteps ? styles.stepsShow : ""}`}>
          <div className={styles.stepsInner}>
            <div className={styles.line}>
              <div
                className={`${styles.lineInner} ${
                  isDesignShown && styles.lineInner1
                } ${isDevelopedShown && styles.lineInner2} ${
                  isSupportShown && styles.lineInner3
                }`}
              ></div>
            </div>
            <div className={styles.stepWrapper}>
              <Image
                src={Images.selected}
                alt="selected"
                width={16}
                height={16}
              />
              <p>Research</p>
            </div>

            <div className={styles.stepWrapper}>
              {handleImageToDisplay(isDesignShown)}
              <p>Design</p>
            </div>

            <div className={styles.stepWrapper}>
              {handleImageToDisplay(isDevelopedShown)}
              <p>Develop</p>
            </div>

            <div className={styles.stepWrapper}>
              {handleImageToDisplay(isSupportShown)}
              <p>Support</p>
            </div>
          </div>
        </div>

        <div className={styles.allProcesses}>
          {HowWeWorkConstant.map((item, index) => (
            <div
              className={styles.process}
              key={index}
              ref={
                item.heading.toLowerCase().includes("design")
                  ? designRef
                  : item.heading.toLowerCase().includes("develop")
                  ? developRef
                  : item.heading.toLowerCase().includes("support")
                  ? supportRef
                  : null
              }
            >
              <div className={styles.headerTexts}>
                <p className={styles.headerText}>{index + 1}.</p>
                <h3 className={styles.headerText}>{item.heading}</h3>
              </div>

              <div className={styles.processSection}>
                <p className={styles.headerBodyText}>{item.text1}</p>
                <p className={styles.headerBodyText}>{item.text2}</p>
              </div>

              <div className={styles.processSection}>
                <h3 className={styles.processTitle}>
                  {item.deliverables.title}
                </h3>

                <div className={styles.processList}>
                  {item.deliverables.list.map((item, index) => (
                    <div className={styles.processItem} key={index}>
                      <p className={styles.processItemText}>{index + 1}.</p>
                      <h3 className={styles.processItemText}>{item}</h3>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.processSection}>
                <h3 className={styles.processTitle}>
                  {item.teamMemebers.title}
                </h3>

                <div className={styles.processListGrid}>
                  {item.teamMemebers.list.map((item, index) => (
                    <div className={styles.processItem} key={index}>
                      <p className={styles.processItemText}>{index + 1}.</p>
                      <h3 className={styles.processItemText}>{item}</h3>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.toolsWrapper}>
                <Image
                  src={Images.tools}
                  alt="tool icon"
                  width={32}
                  height={32}
                />

                <div className={styles.tools}>
                  {item.tools.map((tool, index, array) => (
                    <p className={styles.tool} key={index}>
                      {tool}
                      {index !== array.length - 1 ? "," : ""}
                    </p>
                  ))}
                </div>
              </div>

              <div className={styles.processImageWrapper}>
                <Image
                  src={item.image}
                  alt="process image"
                  fill
                  className={styles.processImage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
