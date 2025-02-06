import { motion } from "motion/react";
import { useState } from "react";

const Contact = ({ displayed }: { displayed: boolean }) => {
  const [labelHover, setLabelHover] = useState(0);
  const [buttonHover, setButtonHover] = useState(0);
  return (
    <>
      <motion.div className="flex flex-col py-30 items-center justify-center w-[90%] max-w-[1500px] mx-auto text-main">
        <motion.div className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl w-full flex flex-col items-center overflow-hidden mb-20">
          <motion.div
            initial={{ y: "100%" }}
            animate={
              displayed
                ? {
                    y: 0,
                    transition: {
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                    },
                  }
                : {}
            }
          >
            Let's get in touch
          </motion.div>
        </motion.div>
        <div className="w-11/12 md:w-10/12 max-w-[1200px]">
          <form method="post">
            <motion.div className="relative flex flex-col text-xl py-6 w-full">
              <motion.label
                className="absolute top-[12px] left-10 text-sm font-bold px-4 py-0.5 bg-bg border-1 overflow-hidden"
                htmlFor="name"
              >
                <div className="relative z-10">Name</div>
                <motion.div
                  initial={{ x: -200 }}
                  animate={labelHover === 1 ? { x: 0 } : {}}
                  className="absolute left-0 top-0 bg-sec h-full w-full"
                ></motion.div>
              </motion.label>
              <motion.input
                onFocus={() => setLabelHover(1)}
                onBlur={() => setLabelHover(0)}
                className="px-6 py-4 border-1 border-main transition text-lg delay-150 duration-300 ease-in-out focus:outline-0 focus:shadow-xs focus:shadow-main"
                type="text"
                name="name"
                id="name"
                required
              />
            </motion.div>
            <motion.div className="relative flex flex-col text-xl py-6 w-full">
              <motion.label
                className="absolute top-[12px] left-10 text-sm font-bold px-4 py-0.5 bg-bg border-1 overflow-hidden"
                htmlFor="email"
              >
                <div className="relative z-10">Email</div>
                <motion.div
                  initial={{ x: -200 }}
                  animate={labelHover === 2 ? { x: 0 } : {}}
                  className="absolute left-0 top-0 bg-sec h-full w-full"
                ></motion.div>
              </motion.label>
              <motion.input
                onFocus={() => setLabelHover(2)}
                onBlur={() => setLabelHover(0)}
                className="px-6 py-4 border-1 border-main transition text-lg delay-150 duration-300 ease-in-out focus:outline-0 focus:shadow-xs focus:shadow-main"
                type="email"
                name="email"
                id="email"
                required
              />
            </motion.div>
            <motion.div className="relative flex flex-col text-xl py-6 w-full">
              <motion.label
                className="absolute top-[12px] left-10 text-sm font-bold px-4 py-0.5 bg-bg border-1 overflow-hidden"
                htmlFor="message"
              >
                <div className="relative z-10">What's on your mind</div>
                <motion.div
                  initial={{ x: -200 }}
                  animate={labelHover === 3 ? { x: 0 } : {}}
                  className="absolute left-0 top-0 bg-sec h-full w-full"
                ></motion.div>
              </motion.label>
              <motion.textarea
                onFocus={() => setLabelHover(3)}
                onBlur={() => setLabelHover(0)}
                className="px-6 py-4 resize-none border-1 border-main transition text-lg delay-150 duration-300 ease-in-out focus:outline-0 focus:shadow-xs focus:shadow-main"
                name="message"
                id="message"
                rows={8}
                required
              ></motion.textarea>
            </motion.div>
            <motion.button
              onHoverStart={() => setButtonHover(1)}
              onHoverEnd={() => setButtonHover(0)}
              className="relative px-4 py-0.5 bg-bg border-1 overflow-hidden cursor-pointer"
            >
              <motion.div
                initial={{ x: 100 }}
                animate={buttonHover === 1 ? { x: 0 } : {}}
                className="absolute top-0 left-0 h-full w-full bg-sec"
              ></motion.div>
              <div className="relative z-30 font-bold text-lg">Send</div>
            </motion.button>
          </form>
        </div>
      </motion.div>
    </>
  );
};
export default Contact;
