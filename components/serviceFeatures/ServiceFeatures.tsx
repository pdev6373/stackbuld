"use client";
import { useState, useRef, useEffect } from "react";
import { Images, ServiceFeatures as ServiceConstant } from "@/constants";
import Image from "next/image";
import styles from "./ServiceFeatures.module.css";
import { ServicePageType } from "@/types";
import { SectionWrapper } from "..";

type ServiceFeaturesType = {
  serviceFeatures: ServicePageType;
};

export default function ServiceFeatures({
  serviceFeatures,
}: ServiceFeaturesType) {
  const mainRef = useRef<any>();
  const firstRef = useRef<any>();
  const secondRef = useRef<any>();
  const thirdRef = useRef<any>();

  const [showSteps, setShowSteps] = useState(false);
  const [isFirstShown, setIsFirstShown] = useState(false);
  const [isSecondShown, setIsSecondShowm] = useState(false);
  const [isThirdShown, setIsThirdShown] = useState(false);

  const getVerticalCoordinates = () => {
    const mainCoordinates = mainRef?.current?.getBoundingClientRect();
    const firstCoordinates = firstRef?.current?.getBoundingClientRect();
    const secondCoordinates = secondRef?.current?.getBoundingClientRect();
    const thirdCoordinates = thirdRef?.current?.getBoundingClientRect();

    if (mainCoordinates?.y <= 10) setShowSteps(true);
    else setShowSteps(false);
    if (mainCoordinates?.bottom <= 350) setShowSteps(false);

    if (firstCoordinates?.y <= 150) setIsFirstShown(true);
    else setIsFirstShown(false);

    if (secondCoordinates?.y <= 150) setIsSecondShowm(true);
    else setIsSecondShowm(false);

    if (thirdCoordinates?.y <= 150) setIsThirdShown(true);
    else setIsThirdShown(false);
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
    <section className={styles.container} ref={mainRef}>
      <div className={`${styles.steps} ${showSteps ? styles.stepsShow : ""}`}>
        <div className={styles.stepsInner}>
          <div className={styles.line}>
            <div
              className={`${styles.lineInner} ${
                isFirstShown && styles.lineInner1
              } ${isSecondShown && styles.lineInner2} ${
                isThirdShown && styles.lineInner3
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
          </div>

          <div className={styles.stepWrapper}>
            {handleImageToDisplay(isFirstShown)}
          </div>

          <div className={styles.stepWrapper}>
            {handleImageToDisplay(isSecondShown)}
          </div>

          <div className={styles.stepWrapper}>
            {handleImageToDisplay(isThirdShown)}
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        {serviceFeatures.content.map((item, index) => (
          <div
            className={styles.feature}
            key={index}
            ref={
              index === 0
                ? firstRef
                : index === 1
                ? secondRef
                : index === 2
                ? thirdRef
                : null
            }
          >
            <div className={styles.featureMain}>
              <SectionWrapper>
                <Image src={item.topIcon} alt="icon" width={56} height={56} />
              </SectionWrapper>

              <div className={styles.featureTextsWrapper}>
                <SectionWrapper>
                  <h3 className={styles.featureHeader}>{item.title}</h3>
                </SectionWrapper>
                <SectionWrapper>
                  <p className={styles.featureBody}>{item.text1}</p>
                </SectionWrapper>{" "}
                <SectionWrapper>
                  <p className={styles.featureBody}>{item.text2}</p>
                </SectionWrapper>
              </div>

              <div
                className={styles.toolsWrapper}
                style={{
                  backgroundColor: serviceFeatures.bottomBackground,
                }}
              >
                <Image
                  src={serviceFeatures.bottomIcon}
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
            </div>

            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt="image"
                fill
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
