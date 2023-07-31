import { AttributeType } from "@/types";
import { Images } from ".";

const Attributes: AttributeType[] = [
  {
    image: Images.attributeOne,
    headerTitle: "Customer-centric:",
    header: "Your Success, Our Mission",
    text1:
      "We immerse ourselves in your vision, tailoring our solutions to meet your specific requirements.",
    text2:
      "Our relentless dedication to delivering high-quality software is what sets us apart.",
  },

  {
    image: Images.attributeTwo,
    headerTitle: "Integrity:",
    header: "Building Trust, Inspiring Confidence",
    text1:
      "Integrity is the bedrock of our company. We uphold the highest ethical standards, ensuring transparency and honesty in all our interactions.",
    text2:
      "You can trust us to prioritize your interests and deliver on our promises with unwavering dedication.",
  },

  {
    image: Images.attributeThree,
    headerTitle: "Excellence:",
    header: "Pursuing Perfection",
    text1:
      "Excellence is not just an aspiration; it's our commitment to achieving the highest standards. From project initiation to completion, we strive for perfection in every detail of our work.",
    text2:
      "Our pursuit of excellence drives us to continuously deliver tailor-made solutions to your unique requirements.",
  },
];

export default Attributes;
