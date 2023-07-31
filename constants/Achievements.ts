import { AchievementType } from "@/types";
import { Images } from ".";

const Achievements: AchievementType[] = [
  {
    title: "14+",
    body: "years in business",
    image: Images.calendar,
  },

  {
    title: "100+",
    body: "solutions delivered",
    image: Images.ranking,
  },
  {
    title: "$4M+",
    body: "business delivered",
    image: Images.coin,
  },
];

export default Achievements;
