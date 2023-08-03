"use client";
import { useState, useEffect } from "react";
import {
  Hero,
  Projects,
  ServiceFeatures,
  Video,
  WhyStackbuld,
} from "@/components";
import styles from "./page.module.css";
import { ServiceFeatures as ServiceConstants } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { ServicePageType } from "@/types";

const routes = [
  "/maintenance",
  "/startup-solutions",
  "/outsourcing",
  "/ai-and-ml",
  "/blockchain",
  "/product-design",
  "/software-development",
];

export default function page() {
  const pathname = usePathname();
  const router = useRouter();

  if (!routes.some((route) => pathname === route)) {
    router.push("/");
    return;
  }

  const serviceHandler = () =>
    ServiceConstants.find(
      (service) => service.route === pathname
    ) as ServicePageType;

  const [currentService, setCurrentService] = useState(serviceHandler());

  useEffect(() => {
    setCurrentService(serviceHandler());
  }, [pathname]);

  // return {
  //   notFound: true,
  // };

  return (
    <main>
      <Hero
        heroImage={currentService.heroImage}
        title={currentService.heroTitle}
        type="services"
        titleStyles={{ maxWidth: "1500px", marginBlock: "32px" }}
        imageStyles={{ paddingTop: "393px" }}
        serviceTitleBackground={currentService.heroBackground}
        serviceTitleColor={currentService.heroColor}
        serviceTitleText={currentService.heroTopTitle}

        // showImage={currentService.heroBackground}
        // heroColor={currentService.heroColor}
      />
      <div className={styles.wrapper}>
        <div className={styles.sectionTitleWrapper}>
          <span className={styles.sectionTitle}>
            {currentService.bodyTitle}
          </span>
          <span className={`${styles.sectionTitle} ${styles.dot}`}>.</span>
        </div>
      </div>
      <div className={styles.videoWrapper}>
        <Video />
      </div>
      <div className={styles.wrapper}>
        <ServiceFeatures serviceFeatures={currentService} />
      </div>
      <Projects />
      <WhyStackbuld />
    </main>
  );
}
