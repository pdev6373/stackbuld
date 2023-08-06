import { Contact, FAQ, Hero, HowWeWork } from "@/components";
import { Images } from "@/constants";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process - Stackbuld",
  description:
    "We harness the boundless power of technology and innovation and elevate your business performance. Your Vision brought to life by Our Expertise.",
};

export default function OurProcess() {
  return (
    <main>
      <Hero
        heroImage={Images.processBackground}
        title="Transforming Ideas into Digital Reality"
        type="process"
        titleStyles={{ maxWidth: "920px" }}
        imageStyles={{ paddingTop: "8.3333vw" }}
        content="We harness the boundless power of technology and innovation and elevate your business performance. Your Vision brought to life by Our Expertise."
        contactRoute="#contact"
      />
      <HowWeWork />
      <FAQ />
      <Contact />
    </main>
  );
}
