import { motion } from "motion/react";
import { useState } from "react";
const SocialMedia = () => {
  const [isActiveSocial, setIsActiveSocial] = useState({
    name: "",
    state: false,
  });
  return (
    <>
      <div className="flex flex-col justify-end items-end text-right w-full text-base xl:text-xl lg:text-lg  text-main">
        <motion.div
          className="instagram cursor-pointer relative"
          onHoverStart={() =>
            setIsActiveSocial({ name: "instagram", state: true })
          }
          onHoverEnd={() => setIsActiveSocial({ name: "", state: false })}
        >
          <motion.div
            animate={
              isActiveSocial.name === "instagram" && isActiveSocial.state
                ? { width: 0 }
                : ""
            }
            className="absolute bottom-1 right-0 w-full h-[1px] bg-main"
          ></motion.div>
          Instagram
        </motion.div>
        <motion.div
          className="linkedin cursor-pointer relative"
          onHoverStart={() =>
            setIsActiveSocial({ name: "linkedin", state: true })
          }
          onHoverEnd={() => setIsActiveSocial({ name: "", state: false })}
        >
          <motion.div
            animate={
              isActiveSocial.name === "linkedin" && isActiveSocial.state
                ? { width: 0 }
                : ""
            }
            className="absolute bottom-1 right-0 w-full h-[1px] bg-main"
          ></motion.div>
          LinkedIn
        </motion.div>
        <motion.div
          className="email cursor-pointer relative"
          onHoverStart={() => setIsActiveSocial({ name: "email", state: true })}
          onHoverEnd={() => setIsActiveSocial({ name: "", state: false })}
        >
          <motion.div
            animate={
              isActiveSocial.name === "email" && isActiveSocial.state
                ? { width: 0 }
                : ""
            }
            className="absolute bottom-1 right-0 w-full h-[1px] bg-main"
          ></motion.div>
          contact@prokick.com
        </motion.div>
      </div>
    </>
  );
};
export default SocialMedia;
