import {
  Attributes,
  Companies,
  HeaderAndHero,
  Industries,
  Video,
} from "@/components";
import styles from "./page.module.css";
import { Images } from "@/constants";

export default function page() {
  return (
    <main>
      <HeaderAndHero
        heroImage={Images.heroBackground}
        title="We transform businesses with technology"
        type="about"
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
