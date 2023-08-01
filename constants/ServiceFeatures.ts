import { ServicePageType } from "@/types";
import { Images } from ".";

const ServiceConstant: ServicePageType[] = [
  {
    bottomIcon: Images.serviceOneIcon,
    bottomBackground: "#F9F1FF",
    content: [
      {
        image: Images.serviceOneOne,
        text1:
          "We empower customers to develop scalable web solutions from scratch or transform legacy systems into cutting-edge solutions that work seamlessly across all devices. Our clients benefit from complete transparency and the flexibility of dedicated teams that prioritize the highest levels of web solution security.",
        text2:
          "From rapid MVPs to large-scale platforms, we deliver excellence in software development.",
        title: "Website development",
        tools: ["HTML", "CSS", "JavaScript", "ReactJs", "VueJs", "bla bla bla"],
        topIcon: Images.global,
      },
      {
        image: Images.serviceOneTwo,
        text1:
          "Boost your productivity and streamline your operations by seamlessly integrating custom applications into your workflow. Our expertise in software development empowers us to enhance work performance, automate processes, and facilitate seamless team collaboration.",
        text2:
          "With our robust framework, your web application will operate at peak performance even under heavy workloads, ensuring a flawless user experience that drives customer satisfaction and builds trust.",
        title: "Web app development",
        tools: [
          "HTML",
          "CSS",
          "JavaScript",
          "ReactJs",
          "NodeJs",
          "VueJs",
          "PHP",
          "MySQL",
          "bla bla bla",
        ],
        topIcon: Images.monitor,
      },
      {
        image: Images.serviceOneThree,
        text1:
          "Experience accelerated development timelines and cost-effectiveness with our highly customized mobile app solutions. Whether you need an iOS app, an Android app, or a hybrid application, our skilled developers will create a visually appealing interface that prioritizes user experience and accessibility.",
        text2: "",
        title: "Mobile app development",
        tools: [
          "XML",
          "Java",
          "React Native",
          "Flutter",
          "Kotlin",
          "Python",
          "Swift",
        ],
        topIcon: Images.mobile,
      },
    ],
  },
];

export default ServiceConstant;
