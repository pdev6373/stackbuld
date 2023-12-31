import { Images } from "@/constants";
import { ServicesType } from "@/types";
import Image from "next/image";
import styles from "./Service.module.css";
import Link from "next/link";
import { SectionWrapper } from "..";

type ServiceType = {
  service: ServicesType;
};

export default function Service({ service }: ServiceType) {
  return (
    <SectionWrapper
      type="fade-in"
      width="100%"
      amount="some"
      margin="0px 0px -25% 0px"
      duration={0.7}
    >
      <div
        className={styles.wrapper}
        style={{
          backgroundColor: service.backgroundColor,
        }}
      >
        <Image
          src={service.iconBig}
          alt="service icon big"
          width={156}
          height={145}
          className={styles.bigIcon}
        />

        <div className={styles.content}>
          <Image src={service.icon} alt="service icon" width={56} height={56} />
          <h3 className={styles.title}>{service.title}</h3>

          <div className={styles.pointsWraper}>
            {service.points.map((point, index) => (
              <div className={styles.pointWraper} key={index}>
                <div
                  className={styles.dot}
                  style={{ backgroundColor: service.dotColor }}
                ></div>
                <p className={styles.point}>{point}</p>
              </div>
            ))}
          </div>
        </div>

        <Link href={service.route} className={styles.button}>
          <p className={styles.buttonText}>Learn more</p>
          <Image
            src={Images.learnMore}
            alt="learn more icon"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </SectionWrapper>
  );
}
