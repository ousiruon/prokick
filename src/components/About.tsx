import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import AboutCard, { CardType } from "./About/AboutCard";
const cards: CardType[] = [
  {
    title: "Welcome to ProKick",
    content:
      "A premier destination for discovering and nurturing young football talents around the globe! Our mission is simple: to connect passionate and talented players with top-tier clubs and academies that can help them achieve their dreams on the field.",
    id: 1,
  },
  {
    title: "Our Mission and Values",
    content:
      "Founded in 2024, ProKick has grown into a trusted name within the soccer community. We pride ourselves on our extensive network, deep industry knowledge, and unwavering commitment to player welfare. Our team comprises former professionals who understand the challenges young athletes face as they navigate their career paths.",
    id: 2,
  },
  {
    title: "Player Potential Belief",
    content:
      "We believe that every player, regardless of background or nationality, has the potential to shine on the world stage. Whether it's through our scouting programs, training camps, or personalized coaching services, we're dedicated to helping you reach your full potential.",
    id: 3,
  },
];
const About = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"], {
    clamp: false,
  });
  return (
    <div id="about" className="relative top-[100dvh] font-main">
      <section
        ref={targetRef}
        className="relative h-[500dvh] md:h-[300dvh] bg-main p-5"
      >
        <div className="sticky top-0 left-0 flex w-full h-screen items-center justify-center overflow-hidden scroll-smooth">
          <div className="flex w-[90%] max-w-[900px] items-center justify-center">
            <motion.div
              style={{ x }}
              className="relative flex flex-row flex-nowrap gap-2 md:gap-6 justify-around min-w-full w-full"
            >
              {cards.map((card) => (
                <AboutCard card={card} key={card.id} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
