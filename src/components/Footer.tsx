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
        className="relative top-[100vh] font-main bg-bg"
      >
        <Contact displayed={displayed} />
        <SubContact />
        <Copyright />
      </motion.footer>
    </>
  );
};
export default Footer;
