import { Images } from ".";
import { ServicesType } from "@/types";

const Services: ServicesType[] = [
  {
    backgroundColor: "#F9F1FF",
    title: "Custom Software Development",
    points: [
      "Website development",
      "Web app development",
      "Mobile app development",
    ],
    icon: Images.serviceOne,
    iconBig: Images.serviceOneBig,
    dotColor: "#B25BF6",
    route: "/software-development",
  },

  {
    backgroundColor: "#FFFAF0",
    title: "Blockchain Development",
    points: [
      "Custom blockchain solutions",
      "Smart contracts",
      "Cryptocurrency integration",
    ],
    icon: Images.serviceTwo,
    iconBig: Images.serviceTwoBig,
    dotColor: "#FBB939",
    route: "/blockchain",
  },

  {
    backgroundColor: "#FFF2F1",
    title: "User Research & Product Design",
    points: [
      "User-centered design",
      "Prototyping and wireframing",
      "Usability testing",
    ],
    icon: Images.serviceThree,
    iconBig: Images.serviceThreeBig,
    dotColor: "#F6655B",
    route: "/product-design",
  },

  {
    backgroundColor: "#F6F7F9",
    title: "AI & Machine Learning Development",
    points: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision",
    ],
    icon: Images.serviceFour,
    iconBig: Images.serviceFourBig,
    dotColor: "#4B5E71",
    route: "/ai-and-ml",
  },

  {
    backgroundColor: "#F1F5FF",
    title: "Outsourcing & Recruitment Services",
    points: [
      "Dedicated engineering teams",
      "Short-term project support",
      "Managed recruitment services",
    ],
    icon: Images.serviceFive,
    iconBig: Images.serviceFiveBig,
    dotColor: "#5B87F6",
    route: "/outsourcing",
  },

  {
    backgroundColor: "#F0FFF5",
    title: "Software Maintenance & Support",
    points: [
      "Bug fixes and updates",
      "Performance optimization",
      "Security enhancements",
    ],
    icon: Images.serviceSix,
    iconBig: Images.serviceSixBig,
    dotColor: "#05C948",
    route: "/maintenance",
  },

  {
    backgroundColor: "#F0F9FF",
    title: "Startup & Small Business Solutions",
    points: [
      "Go-to-market strategy",
      "Market validation",
      "Marketing advice & strategy",
    ],
    icon: Images.serviceSeven,
    iconBig: Images.serviceSevenBig,
    dotColor: "#39AAFB",
    route: "/startup-solutions",
  },
];

export default Services;
