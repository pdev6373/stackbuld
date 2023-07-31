export type ServicesType = {
  backgroundColor: string;
  title: string;
  points: string[];
  icon: string;
  iconBig: string;
  dotColor: string;
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

export type HeroType = {
  title: string;
  heroImage: string;
  type: "home" | "about" | "our-process" | "services";
  titleStyles?: object;
};

export type AttributeType = {
  image: string;
  headerTitle: string;
  header: string;
  text1: string;
  text2: string;
  shouldReverse?: boolean;
};
