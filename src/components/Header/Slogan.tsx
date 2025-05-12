import { motion } from "motion/react";
// Solgan component that displays a slogan with animated text.
// The slogan is split into words, and certain words are animated to scale up and change opacity when hovered over.
const Slogan = () => {
  const slogan: string =
    "Unleashing Raw Talent, Dominating the Game, and Turning Rising Stars, Into Football Legends!";
  const sloganArrayed: string[] = slogan.split(" ");
  return (
    <>
      <div className="font-bold text-base 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-title text-alt px-4 md:px-12 h-8/10 flex flex-col justify-center">
        <div className="quote w-full">
          <svg
            className="w-4 h-4 text-alt mb-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
        <div className="flex flex-row w-full justify-center flex-wrap gap-0">
          {sloganArrayed.map((e, i) => (
            <motion.div
              initial={{ opacity: 0.7 }}
              animate={
                e === "Talent," ||
                e === "Game," ||
                e === "Stars," ||
                e === "Legends!"
                  ? {
                      opacity: 1,
                      scale: 1.1,
                      transition: {
                        delay: 3 + i * 0.1,
                        duration: 0.2,
                      },
                    }
                  : ""
              }
              key={i}
            >
              {e + String.fromCharCode(160)}
            </motion.div>
          ))}
        </div>
        <div className="quote w-full flex justify-end">
          <svg
            className="w-4 h-4 text-alt mt-1 -rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
      </div>
    </>
  );
};
export default Slogan;
