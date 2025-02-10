import { motion } from "motion/react";
import { useState } from "react";
interface NavBarProps {
  currentLayout: number;
}
const NavBar = ({ currentLayout }: NavBarProps) => {
  const [isActiveMenu, setIsActiveMenu] = useState({ name: "", state: false });
  return (
    <>
      <nav
        className={`flex font-main text-base 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl  ${
          currentLayout === 2
            ? "flex-col h-4/6 items-end px-4"
            : "flex-row w-full sm:w-[50%] justify-center sm:justify-end items-center sm:items-start sm:py-12 sm:px-8"
        }`}
      >
        <ul
          className={`flex font-[600] ${
            currentLayout === 2 ? "flex-col items-end gap-6" : "flex-row gap-8"
          }`}
        >
          <motion.a
            href="#about"
            className="relative cursor-pointer text-main hover:text-alt ease-in duration-300 transition"
            onHoverStart={() => setIsActiveMenu({ name: "about", state: true })}
            onHoverEnd={() => setIsActiveMenu({ name: "", state: false })}
          >
            About
            <motion.div
              animate={
                isActiveMenu.name === "about" && isActiveMenu.state
                  ? { width: 0 }
                  : ""
              }
              className="absolute bottom-1 right-0 w-full h-[2px] bg-main"
            ></motion.div>
          </motion.a>
          <motion.a
            href="#work"
            className="relative cursor-pointer text-main hover:text-alt ease-in duration-300 transition-all"
            onHoverStart={() => setIsActiveMenu({ name: "work", state: true })}
            onHoverEnd={() => setIsActiveMenu({ name: "", state: false })}
          >
            Work
            <motion.div
              animate={
                isActiveMenu.name === "work" && isActiveMenu.state
                  ? { width: 0 }
                  : ""
              }
              className="absolute bottom-1 right-0 w-full h-[2px] bg-main"
            ></motion.div>
          </motion.a>
          <motion.a
            href="#testimonials"
            className="relative cursor-pointer text-main hover:text-alt ease-in duration-300 transition-all"
            onHoverStart={() =>
              setIsActiveMenu({ name: "testimonials", state: true })
            }
            onHoverEnd={() => setIsActiveMenu({ name: "", state: false })}
          >
            Testimonials
            <motion.div
              animate={
                isActiveMenu.name === "testimonials" && isActiveMenu.state
                  ? { width: 0 }
                  : ""
              }
              className="absolute bottom-1 right-0 w-full h-[2px] bg-main"
            ></motion.div>
          </motion.a>
          <motion.a
            href="#contact"
            className="relative cursor-pointer text-main hover:text-alt ease-in duration-300 transition-all"
            onHoverStart={() =>
              setIsActiveMenu({ name: "contact", state: true })
            }
            onHoverEnd={() => setIsActiveMenu({ name: "", state: false })}
          >
            Contact
            <motion.div
              animate={
                isActiveMenu.name === "contact" && isActiveMenu.state
                  ? { width: 0 }
                  : ""
              }
              className="absolute bottom-1 right-0 w-full h-[2px] bg-main"
            ></motion.div>
          </motion.a>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
