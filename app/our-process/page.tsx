import { Contact, FAQ, Header, Hero, HowWeWork } from "@/components";
import { Images } from "@/constants";

export default function page() {
  return (
    <main>
      <Hero
        heroImage={Images.processBackground}
        title="Transforming Ideas into Digital Reality"
        type="process"
        titleStyles={{ maxWidth: "920px" }}
      />
      <HowWeWork />
      <FAQ />
      <Contact />
    </main>
  );
}
