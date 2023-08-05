"use client";
import { useState, useEffect } from "react";
import {
  Hero,
  Projects,
  SectionWrapper,
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

export default function Service() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setCurrentService(
      ServiceConstants.find(
        (service) => service.route === pathname
      ) as ServicePageType
    );
  }, [pathname]);

  const serviceHandler = () =>
    ServiceConstants.find(
      (service) => service.route === pathname
    ) as ServicePageType;

  const [currentService, setCurrentService] = useState(serviceHandler());

  if (!routes.some((route) => pathname === route)) {
    router.push("/");
    return;
  }

  return (
    <main>
      <Hero
        contactRoute="/#contact"
        heroImage={currentService.heroImage}
        title={currentService.heroTitle}
        type="services"
        titleStyles={{ maxWidth: "1500px" }}
        imageStyles={{ paddingTop: "27.2919vw" }}
        serviceTitleBackground={currentService.heroBackground}
        serviceTitleColor={currentService.heroColor}
        serviceTitleText={currentService.heroTopTitle}
      />
      <div className={styles.sectionTitleWrapper}>
        <SectionWrapper>
          <>
            <span className={styles.sectionTitle}>
              {currentService.bodyTitle}
            </span>
            <span className={`${styles.sectionTitle} ${styles.dot}`}>.</span>
          </>
        </SectionWrapper>
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
