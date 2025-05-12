import { motion } from "motion/react";
import WorkContent from "./Work/WorkContent";
import WorkUp from "./Work/WorkUp";
import { useState } from "react";
//Interface of the content displayed in work section
export interface workContentProps {
  ID: number;
  Title: string;
  Subtitle: string;
  Content: string[];
}
//The content displayed in work section
const workContent: workContentProps[] = [
  {
    ID: 1,
    Title: "Talent Identification & Scouting",
    Subtitle: "Discovering Emerging Talent Globally",
    Content: [
      "Our scouts travel across the world to find emerging talent, from local leagues to international tournaments.",
      "We use advanced analytics and data-driven insights to assess player potential and performance.",
    ],
  },
  {
    ID: 2,
    Title: "Player Development Programs",
    Subtitle: "Building Comprehensive Training Regimes",
    Content: [
      "Comprehensive training programs tailored to individual needs, focusing on technical skills, mental toughness, and sports psychology.",
      "Partnership with top academies to provide players with elite training environments.",
    ],
  },
  {
    ID: 3,
    Title: "Academy Partnerships",
    Subtitle: "Creating Pathways for Young Athletes",
    Content: [
      "Collaborations with renowned soccer clubs and youth academies to create pathways for young athletes.",
      "Providing resources and support to help academy teams build sustainable success.",
    ],
  },
  {
    ID: 4,
    Title: "International Recruitment & Placement",
    Subtitle: "Expanding Opportunities Across Borders",
    Content: [
      "Helping young talents move from their home countries to seek opportunities in Europe, North America, and beyond.",
      "Assisting in the transition process by offering guidance on training camps, trials, and integration into new environments.",
    ],
  },
  {
    ID: 5,
    Title: "Sponsorship & Branding Opportunities",
    Subtitle: "Enhancing Player Growth through Partnerships",
    Content: [
      "Connecting players with brands that can help them grow both personally and professionally.",
      "Creating marketing campaigns to highlight player stories and achievements.",
    ],
  },
];
//Work component where each section is shown in a 3D perspective way
const Work = () => {
  const [displayed, setDisplayed] = useState<boolean>(false);
  return (
    <motion.div
      onViewportEnter={() => setDisplayed(true)}
      onViewportLeave={() => setDisplayed(false)}
      id="work"
      className="relative top-[100dvh] z-40 bg-bg flex flex-col font-main text-main pb-20"
    >
      <WorkUp displayed={displayed} />
      <WorkContent data={workContent} />
    </motion.div>
  );
};

export default Work;
