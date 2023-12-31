import {
  Contact,
  Hero,
  Projects,
  Quotes,
  Services,
  Video,
  Industries,
} from "@/components";
import { Images } from "@/constants";

export default function Home() {
  return (
    <main>
      <Hero
        title="Innovate and grow through advanced web solutions"
        type="home"
        heroImage={Images.heroImage}
        content="Harness the power of scalable software solutions to elevate your business performance and profitability."
        contactRoute="#contact"
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
