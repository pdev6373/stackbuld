import { FooterType } from "@/types";

const Footer: FooterType[] = [
  {
    name: "Company",
    links: [
      {
        name: "About us",
        route: "/about-us",
      },

      {
        name: "Our process",
        route: "/our-process",
      },

      {
        name: "Privacy Policy",
        // route: "/privacy-policy",
      },

      {
        name: "Terms of service",
        // route: "/terms-of-service",
      },
    ],
  },

  {
    name: "Services",
    links: [
      {
        name: "Custom Software Development",
        route: "/software-development",
      },

      {
        name: "Blockchain Development",
        route: "/blockchain",
      },

      {
        name: "Product Design",
        route: "/product-design",
      },

      {
        name: "AI and ML Development",
        route: "/ai-and-ml",
      },

      {
        name: "Outsourcing & Recruitment",
        route: "/outsourcing",
      },

      {
        name: "Software Maintenance",
        route: "/maintenance",
      },

      {
        name: "Startup Solutions",
        route: "/startup-solutions",
      },
    ],
  },

  {
    name: "Contact info",
    links: [
      {
        name: "12, ring road, kings estate, Ajah, Lagos, Nigeria",
      },

      {
        name: "+2348034423444",
      },
    ],
  },
];

export default Footer;
