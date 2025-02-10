import { useState } from "react";
import Contact from "./Footer/Contact";
import { motion } from "motion/react";
import SubContact from "./Footer/SubContact";
import Copyright from "./Footer/Copyright";
const Footer = () => {
  const [displayed, setDisplayed] = useState(false);
  return (
    <>
      <motion.footer
        onViewportEnter={() => setDisplayed(true)}
        onViewportLeave={() => setDisplayed(false)}
        id="contact"
        className="relative top-[100dvh] min-h-[100dvh] flex flex-col items-center justify-center font-main bg-bg"
      >
        <Contact displayed={displayed} />
        <SubContact />
        <Copyright />
      </motion.footer>
    </>
  );
};
export default Footer;
