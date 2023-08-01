import {
  Contact,
  Hero,
  Projects,
  Quotes,
  Services,
  Video,
  Industries,
  Header,
} from "@/components";
import { Images } from "@/constants";

export default function Home() {
  return (
    <main>
      <Hero
        title="Innovate and grow through advanced web solutions"
        type="home"
        heroImage={Images.heroImage}
      />
      <Video />
      <Services />
      <Projects />
      <Industries />
      <Quotes />
      <Contact />
    </main>
  );
}
