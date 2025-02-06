import { motion } from "motion/react";
const kickAnimate = {
  animate: {
    scale: 1.05,
    transition: {
      delay: 3,
      duration: 0.5,
      type: "spring",
      stiffness: 300,
    },
  },
};
interface LogoProps {
  currentLayout: number;
}
const Logo = ({ currentLayout }: LogoProps) => {
  return (
    <>
      <div
        className={`flex  text-sec font-title italic cursor-pointer ${
          currentLayout === 2
            ? "h-1/6 items-center justify-end px-4 py-4 text-7xl 2xl:text-9xl xl:text-8xl"
            : currentLayout === 3
            ? "w-full justify-center text-4xl px-2"
            : "py-2 sm:py-8 w-full sm:w-[50%] px-4  justify-center sm:items-start sm:justify-start text-7xl 2xl:text-9xl xl:text-8xl"
        }`}
      >
        <div className="firstPart">Pro</div>
        <motion.div
          variants={kickAnimate}
          animate="animate"
          className="secondPart"
        >
          Kick
        </motion.div>
      </div>
    </>
  );
};
export default Logo;
