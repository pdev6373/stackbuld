import { Images, Footer as FooterNav } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import { SectionWrapper } from "..";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightWrapper}>
        <SectionWrapper type="fade-in">
          <Link href="/">
            <Image
              src={Images.logo}
              alt="logo"
              width={67}
              height={64}
              className={styles.footerLogo}
            />
          </Link>
        </SectionWrapper>
        <SectionWrapper type="fade-in">
          <Link href="/">
            <Image
              src={Images.logo}
              alt="logo"
              width={44.667}
              height={42.667}
              className={styles.footerLogoMobile}
            />
          </Link>
        </SectionWrapper>

        <SectionWrapper type="fade-in">
          <p className={styles.copyright}>
            © 2023 Stackbuld, All rights reserved
          </p>
        </SectionWrapper>
      </div>

      <div className={styles.footerNavsWrapper}>
        {FooterNav.map((nav, index) => (
          <div className={styles.footerNavsWrapperInner} key={index}>
            <SectionWrapper type="fade-in">
              <h3 className={styles.footerHeader}>{nav.name}</h3>
            </SectionWrapper>

            <div className={styles.footerNavs}>
              {nav.links.map((link, index) =>
                link.route ? (
                  <SectionWrapper type="fade-in">
                    <Link
                      href={link.route}
                      className={styles.footerLink}
                      key={index}
                    >
                      {link.name}
                    </Link>
                  </SectionWrapper>
                ) : (
                  <SectionWrapper type="fade-in">
                    <p className={styles.footerLink} key={index}>
                      {link.name}
                    </p>
                  </SectionWrapper>
                )
              )}
            </div>

            {index === FooterNav.length - 1 ? (
              <>
                <div className={styles.socialIconsMobile}>
                  <SectionWrapper type="fade-in">
                    <Image
                      src={Images.twitter}
                      alt="social icon"
                      width={32}
                      height={32}
                      className={styles.socialIcon}
                    />
                  </SectionWrapper>
                  <SectionWrapper type="fade-in">
                    <Image
                      src={Images.facebook}
                      alt="social icon"
                      width={32}
                      height={32}
                      className={styles.socialIcon}
                    />
                  </SectionWrapper>
                  <SectionWrapper type="fade-in">
                    <Image
                      src={Images.linkedin}
                      alt="social icon"
                      width={32}
                      height={32}
                      className={styles.socialIcon}
                    />
                  </SectionWrapper>
                </div>

                <div className={styles.socialIcons}>
                  <SectionWrapper type="fade-in">
                    <Image
                      src={Images.twitter}
                      alt="social icon"
                      width={40}
                      height={40}
                      className={styles.socialIcon}
                    />
                  </SectionWrapper>

                  <SectionWrapper type="fade-in">
                    <Image
                      src={Images.facebook}
                      alt="social icon"
                      width={40}
                      height={40}
                      className={styles.socialIcon}
                    />
                  </SectionWrapper>

                  <SectionWrapper type="fade-in">
                    <Image
                      src={Images.linkedin}
                      alt="social icon"
                      width={40}
                      height={40}
                      className={styles.socialIcon}
                    />
                  </SectionWrapper>
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </footer>
  );
}
