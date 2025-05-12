import { motion } from "motion/react";
// kickAnimate is an animation object for the logo component.
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
// Interface LogoProps is an interface that defines the props for the Logo component.
interface LogoProps {
  currentLayout: number;
}
// Logo component is a functional component that displays the logo of the application.
// It takes currentLayout as a prop to determine the layout of the logo.
// The logo consists of two parts: "Pro" and "Kick", which are styled differently based on the currentLayout prop.
// The component uses the motion library to animate the "Kick" part of the logo.
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
        <div onClick={() => window.location.reload()} className="firstPart">
          Pro
        </div>
        <motion.div
          onClick={() => window.location.reload()}
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
