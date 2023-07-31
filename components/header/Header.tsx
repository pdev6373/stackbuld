import styles from "./Header.module.css";
import Image from "next/image";
import { Images } from "@/constants";
import { Navs } from "@/constants";
import Link from "next/link";

export default function Header() {
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
            width={50.25}
            height={48}
            className={styles.logo}
          />
        </Link>

        <div className={styles.links}>
          {Navs.map((nav) =>
            nav.route ? (
              <Link href={nav.route} className={styles.link}>
                {nav.name}
              </Link>
            ) : (
              <p className={styles.link}>{nav.name}</p>
            )
          )}
        </div>

        <button className={styles.headerButton}>Contact us</button>
      </header>
    </div>
  );
}
