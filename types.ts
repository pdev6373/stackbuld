export type ServicesType = {
  backgroundColor: string;
  title: string;
  points: string[];
  icon: string;
  iconBig: string;
  dotColor: string;
  route: string;
};

export type NavsType = {
  name: string;
  route?: string;
};

export type FooterType = {
  name: string;
  links: NavsType[];
};

export type IndustryType = {
  name: string;
  description: string;
  image: string;
};

export type AchievementType = {
  title: string;
  body: string;
  image: string;
};

export type FormFieldType = {
  label: string;
  value: string;
  isRequired: boolean;
  type: string;
};

export type ProjectType = {
  id: number;
  image: string;
  title: string;
  content: string;
  headingId: string;
  contentId: string;
  isExpanded: "true" | "false";
  isHidden: "true" | "false";
};

export type HeaderType = {
  type: "home" | "about" | "process" | "services";
  invertButton?: boolean;
};

export type HeroType = {
  title: string;
  heroImage: string;
  type: "home" | "about" | "process" | "services";
  titleStyles?: object;
  showImage?: boolean;
  invertButton?: boolean;
};

export type AttributeType = {
  image: string;
  headerTitle: string;
  header: string;
  text1: string;
  text2: string;
  shouldReverse?: boolean;
};

export type FAQType = {
  question: string;
  answer: string;
};

type HowItWorksListType = {
  title: string;
  list: string[];
};

export type HowItWorksType = {
  heading: string;
  text1: string;
  text2: string;
  deliverables: HowItWorksListType;
  teamMemebers: HowItWorksListType;
  image: string;
  tools: string[];
};

type ServicePageContent = {
  topIcon: string;
  title: string;
  text1: string;
  text2: string;
  image: string;

  tools: string[];
};

export type ServicePageType = {
  bottomIcon: string;
  bottomBackground: string;
  content: ServicePageContent[];
};

export type WhyType = {
  header: string;
  body: string;
};

export type ServicesHeroType = {
  heroTitle: string;
  heroImage: string;
  heroBackground: string;
  heroColor: string;
};
