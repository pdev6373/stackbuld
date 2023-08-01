import { Images, Footer as FooterNav } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightWrapper}>
        <Image
          src={Images.logo}
          alt="logo"
          width={67}
          height={64}
          className={styles.footerLogo}
        />
        <Image
          src={Images.logo}
          alt="logo"
          width={44.667}
          height={42.667}
          className={styles.footerLogoMobile}
        />
        <p className={styles.copyright}>
          © 2023 Stackbuld, All rights reserved
        </p>
      </div>

      <div className={styles.footerNavsWrapper}>
        {FooterNav.map((nav, index) => (
          <div className={styles.footerNavsWrapperInner} key={index}>
            <h3 className={styles.footerHeader}>{nav.name}</h3>

            <div className={styles.footerNavs}>
              {nav.links.map((link) =>
                link.route ? (
                  <Link
                    href={link.route}
                    className={styles.footerLink}
                    key={index}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <p className={styles.footerLink} key={index}>
                    {link.name}
                  </p>
                )
              )}
            </div>

            {index === FooterNav.length - 1 ? (
              <>
                <div className={styles.socialIconsMobile}>
                  <Image
                    src={Images.twitter}
                    alt="social icon"
                    width={32}
                    height={32}
                    className={styles.socialIcon}
                  />

                  <Image
                    src={Images.facebook}
                    alt="social icon"
                    width={32}
                    height={32}
                    className={styles.socialIcon}
                  />

                  <Image
                    src={Images.linkedin}
                    alt="social icon"
                    width={32}
                    height={32}
                    className={styles.socialIcon}
                  />
                </div>

                <div className={styles.socialIcons}>
                  <Image
                    src={Images.twitter}
                    alt="social icon"
                    width={40}
                    height={40}
                    className={styles.socialIcon}
                  />

                  <Image
                    src={Images.facebook}
                    alt="social icon"
                    width={40}
                    height={40}
                    className={styles.socialIcon}
                  />

                  <Image
                    src={Images.linkedin}
                    alt="social icon"
                    width={40}
                    height={40}
                    className={styles.socialIcon}
                  />
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </footer>
  );
}
