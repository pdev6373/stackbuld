import { Review, Service } from "..";
import { Services as ServicesConstant } from "@/constants";
import styles from "./Services.module.css";
import { Fragment } from "react";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.servicesHeader}>
        <h3 className={styles.sectionTitle}>
          Services we offer<span className={styles.dot}>.</span>
        </h3>
        <p className={styles.sectionBody}>
          End-to-end solutions for your business
        </p>
      </div>

      <div className={styles.servicesMobile}>
        {ServicesConstant.map((service, index) => (
          <Fragment key={index}>
            <Service service={service} />
          </Fragment>
        ))}
      </div>

      {ServicesConstant.map((service, index) => (
        <div className={styles.serviceDesktop} key={index}>
          <Service service={service} />
        </div>
      ))}

      <Review />
    </section>
  );
}
