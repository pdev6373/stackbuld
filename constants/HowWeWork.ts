import { HowItWorksType } from "@/types";
import { Images } from ".";

const HowItWorks: HowItWorksType[] = [
  {
    heading: "Research and Validation",
    text1:
      "Our meticulous research dives deep into understanding your vision and business goals, ensuring your project is carefully validated.",
    text2:
      "By aligning our expertise with your aspirations, we set the stage for a development process that brings your dreams to life.",
    deliverables: {
      title: "Deliverables",
      list: [
        "Clear business goals.",
        "Clear product goals and documentation.",
        "Clear user needs and goals.",
        "Product Roadmap.",
      ],
    },
    teamMemebers: {
      title: "Team members",
      list: [
        "Product Owner",
        "UX Designer",
        "Project Manager",
        "Business Analyst",
      ],
    },
    image: Images.howItWorksOne,
    tools: ["Google forms", "Miro", "Google docs", "Notion"],
  },

  {
    heading: "Design",
    text1:
      "During this phase, we provide brainstorm different solutions, prototype and test out different approach to solutions ideas with your users in mind.",
    text2:
      "Our great attention to detail and love for beautifully designed products/processes ensures we serve you and your customers with the best solutions.",
    deliverables: {
      title: "Deliverables",
      list: [
        "UI and UX Design files",
        "Clickable prototypes in Figma or Protopie",
        "Animated files where necessary",
      ],
    },
    teamMemebers: {
      title: "Team members",
      list: [
        "Product Owner",
        "Project Manager",
        "UI Design Lead",
        "UX Design Lead",
      ],
    },
    image: Images.howItWorksTwo,
    tools: ["Figma", "Invision", "Protopie", "Rive"],
  },

  {
    heading: "Development",
    text1:
      "With your ideas in place, we embark on the development phase where innovation and creativity come to life. Our engineers collaborate with you to transform your ideas into functional and user-centric solutions.",
    text2:
      "By adhering to the latest industry standards, we guarantee the delivery of top-notch software that leaves a lasting impact on your audience.",
    deliverables: {
      title: "Deliverables",
      list: [
        "Responsive Websites",
        "Web applications",
        "Mobile applications",
        "API documentation",
      ],
    },
    teamMemebers: {
      title: "Team members",
      list: [
        "Product Owner",
        "Project Manager",
        "Frontend Developers",
        "Backend Developers",
        "QA Engineers",
      ],
    },
    image: Images.howItWorksThree,
    tools: ["HTML", "CSS", "JavaScript", "ReactJs", "VueJs"],
  },

  {
    heading: "Maintenance and Support",
    text1:
      "At Stackbuld, our relationship doesn't end with the project launch. We stand beside you as your software's caretakers, providing regular maintenance and updates that keep your application ahead of competitors.",
    text2:
      "Our seamless support ensures your business thrives and achieves new heights of excellence.",
    deliverables: {
      title: "Deliverables",
      list: [
        "A line of this step’s deliverable.",
        "Detailed technical specification",
        "Project plan with detailed information.",
        "Project plan with detailed information.",
      ],
    },
    teamMemebers: {
      title: "Team members",
      list: [
        "Product Owner",
        "Business Analyst",
        "Project Manager",
        "Product Owner",
        "Business Analyst",
      ],
    },
    image: Images.howItWorksFour,
    tools: [
      "tools",
      "tools",
      "tools",
      "tools",
      "tools",
      "tools",
      "tools",
      "tools",
    ],
  },
];

export default HowItWorks;
