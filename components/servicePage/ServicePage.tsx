"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Hero,
  Projects,
  SectionWrapper,
  ServiceFeatures,
  Video,
  WhyStackbuld,
} from "..";
import { ServicePageType } from "@/types";
import { ServiceFeatures as ServiceConstants } from "@/constants";
import styles from "./ServicePage.module.css";

const routes = [
  "/maintenance",
  "/startup-solutions",
  "/outsourcing",
  "/ai-and-ml",
  "/blockchain",
  "/product-design",
  "/software-development",
];

export default function ServicePage() {
  const pathname = usePathname();
  const router = useRouter();

  const serviceHandler = () =>
    ServiceConstants.find(
      (service) => service.route === pathname
    ) as ServicePageType;

  const [currentService, setCurrentService] = useState(serviceHandler());

  useEffect(() => {
    setCurrentService(
      ServiceConstants.find(
        (service) => service.route === pathname
      ) as ServicePageType
    );
  }, [pathname]);

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
