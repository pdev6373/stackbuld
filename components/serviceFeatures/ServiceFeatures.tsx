import { Images, ServiceFeatures as ServiceConstant } from "@/constants";
import Image from "next/image";
import styles from "./ServiceFeatures.module.css";
import { ServicePageType } from "@/types";

type ServiceFeaturesType = {
  serviceFeatures: ServicePageType;
};

export default function ServiceFeatures({
  serviceFeatures,
}: ServiceFeaturesType) {
  return (
    <section className={styles.container}>
      <div className={styles.steps}>
        <div className={styles.line}></div>
        <div className={styles.stepWrapper}>
          <Image src={Images.selected} alt="selected" width={16} height={16} />
        </div>

        <div className={styles.stepWrapper}>
          <Image
            src={Images.unselected}
            alt="selected"
            width={16}
            height={16}
          />
        </div>

        <div className={styles.stepWrapper}>
          <Image
            src={Images.unselected}
            alt="selected"
            width={16}
            height={16}
          />
        </div>

        <div className={styles.stepWrapper}>
          <Image
            src={Images.unselected}
            alt="selected"
            width={16}
            height={16}
          />
        </div>
      </div>

      <div className={styles.wrapper}>
        {serviceFeatures.content.map((item, index) => (
          <div className={styles.feature} key={index}>
            <div className={styles.featureMain}>
              <Image src={item.topIcon} alt="icon" width={56} height={56} />

              <div className={styles.featureTextsWrapper}>
                <h3 className={styles.featureHeader}>{item.title}</h3>
                <p className={styles.featureBody}>{item.text1}</p>
                <p className={styles.featureBody}>{item.text2}</p>
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
