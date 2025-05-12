import { motion } from "motion/react";
import { useState } from "react";
import AboutWelcomeSvg from "./AboutWelcomeSvg";
import AboutDirectionSvg from "./AboutDirectionSvg";
import AboutStartSvg from "./AboutStartSvg";
// Interface for the about card data
export interface CardType {
  title: string;
  content: string;
  id: number;
}
// AboutCard component
// This component displays a card with an SVG and text content
// It uses Framer Motion for animations and transitions
const AboutCard = ({ card }: { card: CardType }) => {
  const [titleShown, setTitleShown] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <motion.div className="flex flex-col sm:flex-row items-center justify-center sm:justify-baseline bg-bg rounded-4xl px-3 sm:p-6 sm:gap-5 min-w-[100%] w-[100%] 2xl:text-4xl xl:text-3xl lg:text-2xl">
      <div className="w-full sm:w-2/4 px-6 sm:px-4 text-alt">
        <div className="svg max-w-full max-h-full">
          {card.id === 1 && <AboutWelcomeSvg isActive={isActive} />}
          {card.id === 2 && <AboutDirectionSvg isActive={isActive} />}
          {card.id === 3 && <AboutStartSvg isActive={isActive} />}
        </div>
      </div>
      <div className="w-full sm:w-2/4 text-main px-6 sm:px-4">
        <motion.div
          onViewportEnter={() => setTitleShown(true)}
          onViewportLeave={() => setTitleShown(false)}
          className="py-2 text-alt font-bold flex"
        >
          <div className="relative">
            {card.title}
            <motion.div
              animate={
                titleShown
                  ? {
                      width: "100%",
                      transition: {
                        delay: 0.5,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 50,
                      },
                    }
                  : { width: 0 }
              }
              className="absolute bottom-0 left-0 h-[2px] bg-alt "
            ></motion.div>
          </div>
        </motion.div>
        <motion.div
          onViewportEnter={() => setIsActive(true)}
          onViewportLeave={() => setIsActive(false)}
          className="flex items-center justify-center grow-1 2xl:text-2xl xl:text-xl lg:text-lg sm:text-xs text-justify"
        >
          {card.content}
        </motion.div>
      </div>
    </motion.div>
  );
};
export default AboutCard;
