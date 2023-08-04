import { Contact, FAQ, Hero, HowWeWork } from "@/components";
import { Images } from "@/constants";

export default function page() {
  return (
    <main>
      <Hero
        heroImage={Images.processBackground}
        title="Transforming Ideas into Digital Reality"
        type="process"
        titleStyles={{ maxWidth: "920px" }}
        imageStyles={{ paddingTop: "8.3333vw" }}
        content="We harness the boundless power of technology and innovation and elevate your business performance. Your Vision brought to life by Our Expertise."
      />
      <HowWeWork />
      <FAQ />
      <Contact />
    </main>
  );
}
