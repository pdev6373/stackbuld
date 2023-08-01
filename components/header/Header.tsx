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
            src={Images.logo}
            alt="logo"
            width={44.667}
            height={42.667}
            className={styles.logo}
          />
        </Link>

        <nav className={styles.links}>
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
              <p className={styles.link} key={index}>
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
          width={36}
          height={36}
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
        <Image
          src={Images.close}
          width={36}
          height={36}
          alt="menu icon"
          onClick={() => setOpenSideNav(false)}
        />

        <div className={styles.navMobileWrapper}>
          {Navs.map((nav, index) =>
            nav.route ? (
              <Link href={nav.route} className={styles.linkMobile} key={index}>
                {nav.name}
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
