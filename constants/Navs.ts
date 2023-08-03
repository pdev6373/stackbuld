import { NavsType } from "@/types";
import { Images } from ".";

const Navs: NavsType[] = [
  {
    name: "About us",
    route: "/about-us",
  },

  {
    name: "Our process",
    route: "/our-process",
  },

  {
    name: "Services",
    links: [
      {
        icon: Images.serviceOneIcon,
        route: "/software-development",
        text: "Custom Software Development",
      },

      {
        icon: Images.serviceThreeIcon,
        route: "/blockchain",
        text: "Blockchain Development",
      },

      {
        icon: Images.serviceTwoIcon,
        route: "/product-design",
        text: "User Research & Product Design",
      },

      {
        icon: Images.serviceFourIcon,
        route: "/ai-and-ml",
        text: "AI & ML Development",
      },

      {
        icon: Images.serviceFiveIcon,
        route: "/outsourcing",
        text: "Outsourcing & Recruitment Services",
      },

      {
        icon: Images.serviceSixIcon,
        route: "/maintenance",
        text: "Software Maintenance & Support",
      },

      {
        icon: Images.serviceSevenIcon,
        route: "/startup-solutions",
        text: "Startup & Small Business Solutions",
      },
    ],
  },
];

export default Navs;
