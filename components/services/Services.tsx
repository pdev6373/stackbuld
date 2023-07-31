import { Review, Service } from "..";
import { Services as ServicesConstant } from "@/constants";
import styles from "./Services.module.css";

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
        {ServicesConstant.map((service) => (
          <Service service={service} />
        ))}
      </div>

      {ServicesConstant.map((service) => (
        <div className={styles.serviceDesktop}>
          <Service service={service} />
        </div>
      ))}

      <Review />
    </section>
  );
}
