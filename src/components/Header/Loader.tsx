import { motion } from "motion/react";
const Loader = () => {
  const headerVariants = {
    topSideInitial: {
      top: 0,
    },
    topSideAnimate: {
      top: "-100vh",
    },
    bottomSideInitial: {
      bottom: 0,
    },
    bottomSideAnimate: {
      bottom: "-100vh",
    },
    sidesTransition: {
      duration: 1,
      delay: 2,
      ease: "easeOut",
    },
    letterInitial: {
      scale: 1,
      opacity: 0.5,
    },
    letterAnimate: {
      scale: 1.05,
      opacity: 1,
    },
  };
  const titleArray = ["P", "r", "o", "K", "i", "c", "k"];
  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100vw" }}
        transition={{ delay: 3 }}
        className="openingScene h-full w-full fixed top-0 left-0 overflow-hidden text-sec font-title italic z-50 text-5xl 2xl:text-8xl xl:text-7xl lg:text-6xl"
      >
        <motion.div
          variants={headerVariants}
          initial="topSideInitial"
          animate="topSideAnimate"
          transition={headerVariants.sidesTransition}
          className="up absolute left-0 h-[50%] w-full overflow-hidden flex items-end"
        >
          <div className="relative w-full flex justify-center">
            <div className="absolute bottom-0 translate-y-[50%] flex">
              {titleArray.map((letter, index) => (
                <motion.div
                  key={index}
                  variants={headerVariants}
                  initial="letterInitial"
                  animate="letterAnimate"
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  {letter}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={headerVariants}
          initial="bottomSideInitial"
          animate="bottomSideAnimate"
          transition={headerVariants.sidesTransition}
          className="down absolute left-0 h-[50%] w-full overflow-hidden flex items-start"
        >
          <div className="relative w-full flex justify-center">
            <div className="absolute top-0 translate-y-[-50%] flex">
              {titleArray.map((letter, index) => (
                <motion.div
                  key={index}
                  variants={headerVariants}
                  initial="letterInitial"
                  animate="letterAnimate"
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  {letter}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
export default Loader;
