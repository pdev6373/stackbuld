import { Images } from "@/constants";
import Image from "next/image";
import React from "react";
import styles from "./Video.module.css";

export default function Video() {
  return (
    <section className={styles.video}>
      <div className={styles.thumbnailWrapper}>
        <Image
          src={Images.thumbnail}
          alt="background image"
          className={styles.thumbnailImage}
          fill
        />
      </div>

      <Image
        src={Images.play}
        alt="play icon"
        className={styles.playIcon}
        width={80}
        height={80}
      />
    </section>
  );
}
