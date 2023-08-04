import { Attributes, Companies, Hero, Industries, Video } from "@/components";
import styles from "./page.module.css";
import { Images } from "@/constants";

export default function page() {
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
