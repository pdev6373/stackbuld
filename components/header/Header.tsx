"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import { Images } from "@/constants";
import { Navs } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { HeaderType } from "@/types";

export default function Header({ type, invertButton }: HeaderType) {
  const [openSideNav, setOpenSideNav] = useState(false);

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Link href="/">
          <Image
            src={Images.logoFull}
            alt="logo"
            width={178.61}
            height={40}
            className={styles.logoFull}
          />

          <Image
            src={Images.logoFull}
            alt="logo"
            width={142.89}
            height={32}
            className={styles.logo}
          />
        </Link>

        <nav className={styles.links}>
          <div className={styles.servicesNavWrapperOuter}>
            <div className={styles.servicesNavWrapper}>
              <h3 className={styles.servicesNavHeader}>
                Services we offer<span className={styles.dot}>.</span>
              </h3>

              <div className={styles.servicesNav}>
                {Navs.find((nav) => nav.name === "Services")!.links?.map(
                  (nav) => (
                    <Link href={nav.route} className={styles.servicesLink}>
                      <div className={styles.servicesLinkInner}>
                        <Image
                          alt="nav image"
                          src={nav.icon}
                          width={20}
                          height={20}
                        />
                        <p className={styles.serviceLinkText}>{nav.text}</p>
                        <Image
                          src={Images.learnMore}
                          alt="nav icon"
                          width={20}
                          height={20}
                          className={styles.servicesLinkArrow}
                        />
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          {Navs.map((nav, index) =>
            nav.route ? (
              <Link
                href={nav.route}
                className={`${styles.link} ${
                  nav.name.toLowerCase().includes(type.toLowerCase())
                    ? styles.linkActive
                    : ""
                }`}
                key={index}
              >
                {nav.name}
              </Link>
            ) : (
              <p className={`${styles.link} ${styles.linkMulti}`} key={index}>
                {nav.name}
              </p>
            )
          )}
        </nav>

        <button
          className={`${styles.headerButton} ${
            invertButton ? styles.headerButtonInvert : ""
          }`}
        >
          Contact us
        </button>
        <Image
          src={Images.menu}
          width={40}
          height={40}
          alt="menu icon"
          className={styles.menuOpen}
          onClick={() => setOpenSideNav(true)}
        />
      </header>

      <nav
        className={`${styles.mobileNav} ${
          openSideNav ? styles.mobileNavOpen : ""
        }`}
      >
        <div className={styles.mobileTop}>
          <Link href="/">
            <Image
              src={Images.logoFull}
              alt="logo"
              width={142.89}
              height={32}
              className={styles.logo}
            />
          </Link>

          <Image
            src={Images.close}
            width={40}
            height={40}
            alt="menu icon"
            onClick={() => setOpenSideNav(false)}
          />
        </div>

        <div className={styles.navMobileWrapper}>
          {Navs.map((nav, index) =>
            nav.links?.length ? (
              <div>
                <h2 className={styles.mobileServiceHeader}>Services</h2>
                <div className={styles.innerNavs}>
                  {nav.links.map((link) => (
                    <Link
                      href={link.route}
                      className={styles.linkMobile}
                      key={index}
                      onClick={() => setOpenSideNav(false)}
                    >
                      <Image
                        alt="icon"
                        src={Images.right}
                        width={19}
                        height={19}
                      />
                      <p className={styles.linkMobileText}>{link.text}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : nav.route ? (
              <Link
                href={nav.route}
                className={styles.linkMobile}
                key={index}
                onClick={() => setOpenSideNav(false)}
              >
                <Image alt="icon" src={Images.right} width={19} height={19} />
                <p className={styles.linkMobileText}>{nav.name}</p>
              </Link>
            ) : (
              <p className={styles.linkMobile} key={index}>
                {nav.name}
              </p>
            )
          )}
        </div>

        <button className={styles.headerButtonMobile}>Contact us</button>
      </nav>
    </div>
  );
}
