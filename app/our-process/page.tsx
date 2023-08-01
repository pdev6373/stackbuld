import { Contact, FAQ, Header, Hero, HowWeWork } from "@/components";
import { Images } from "@/constants";

export default function page() {
  return (
    <main>
      <Header />
      <Hero
        heroImage={Images.processBackground}
        title="Transforming Ideas into Digital Reality"
        type="our-process"
        titleStyles={{ maxWidth: "920px" }}
      />
      <HowWeWork />
      <FAQ />
      <Contact />
    </main>
  );
}
