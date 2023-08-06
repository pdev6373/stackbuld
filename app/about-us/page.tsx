import { Attributes, Companies, Hero, Industries, Video } from "@/components";
import { Metadata } from "next";
import { Images } from "@/constants";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About - Stackbuld",
  description: "We transform businesses with technology.",
};

export default function About() {
  return (
    <main>
      <Hero
        contactRoute="/#contact"
        title="We transform businesses with technology"
        type="about"
        heroImage={Images.heroImage}
        showImage={false}
        titleStyles={{ maxWidth: "935px" }}
        invertButton={true}
      />
      <div className={styles.videoWrapper}>
        <Video />
      </div>
      <Companies />
      <Attributes />
      <Industries />
    </main>
  );
}
