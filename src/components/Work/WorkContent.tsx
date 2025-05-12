import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { workContentProps } from "../Work";
import { useTransform } from "motion/react";
// WorkContent component is a functional component that displays a list of work sections.
// It takes data as a prop, which is an array of workContentProps.
const WorkContent = ({ data }: { data: workContentProps[] }) => {
  const [workActive, setWorkActive] = useState<boolean>(false);
  const [fixedDivs, setFixedDivs] = useState<number[]>([]);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (workActive) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        //Scrolling down
        if (currentScrollY > lastScrollY.current) {
          const stickyElements = document.querySelectorAll(".work-section");
          stickyElements.forEach((stickyElement) => {
            const { top } = stickyElement.getBoundingClientRect();
            const currentValue = Number(stickyElement.getAttribute("data-id"));
            if (top <= 60 && top >= 0) {
              setFixedDivs((prev: number[]) => {
                return prev.includes(currentValue)
                  ? prev
                  : [...prev, currentValue];
              });
            }
          });
        }
        //Scrolling Up
        else {
          const stickyElements = document.querySelectorAll(".work-section");
          stickyElements.forEach((stickyElement) => {
            const { top } = stickyElement.getBoundingClientRect();
            const currentValue = Number(stickyElement.getAttribute("data-id"));
            if (top > 60) {
              setFixedDivs((prev: number[]) => {
                return prev.includes(currentValue)
                  ? prev.filter((item) => item !== currentValue)
                  : prev;
              });
            }
          });
        }
        lastScrollY.current = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [workActive]);
  return (
    <>
      <motion.div
        onViewportEnter={() => setWorkActive(true)}
        onViewportLeave={() => setWorkActive(false)}
        className="relative perspective-midrange xl:perspective-distant"
      >
        {data.map((singleData) => {
          const articleRef = useRef<HTMLDivElement | null>(null);

          const { scrollYProgress } = useScroll({
            target: articleRef,
            offset: ["start start", "end end"],
          });

          const rotateX = useTransform(scrollYProgress, [0, 1], [0, 60]);
          const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
          const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
          const y = useTransform(
            scrollYProgress,
            [0, 1],
            [0, singleData.ID * 80]
          );

          return (
            <motion.article
              key={singleData.ID}
              ref={articleRef}
              className="work-section sticky top-[60px] w-11/12 max-w-[1500px] my-8 mx-auto px-10 pt-5 bg-main text-bg border-t-1 border-alt rounded-lg shadow-xs shadow-alt flex flex-col "
              data-id={singleData.ID}
              initial={{ scale: 1, rotateX: 0, y: 0 }}
              style={
                fixedDivs.includes(singleData.ID)
                  ? { rotateX, scale, opacity, y }
                  : { opacity: 1 }
              }
            >
              <div className={`title text-4xl py-4 border-b-1 border-alt`}>
                {singleData.Title}
              </div>
              <div className="content flex flex-row w-full my-10 items-center">
                <div
                  className={`number text-[150px] flex flex-col justify-end w-2/6 sm:w-3/6 opacity-60 ${
                    singleData.ID === 1
                      ? "text-[#C4E1F6]"
                      : singleData.ID === 2
                      ? "text-[#FEEE91]"
                      : singleData.ID === 3
                      ? "text-[#16C47F]"
                      : singleData.ID === 4
                      ? "text-[#FF8383]"
                      : singleData.ID === 5
                      ? "text-[#3674B5]"
                      : ""
                  }`}
                >
                  {singleData.ID}
                </div>
                <div className="contentText flex flex-col w-4/6 sm:w-3/6">
                  <div className="title font-bold">{singleData.Subtitle}</div>
                  <div className="mt-5 opacity-80">{singleData.Content}</div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </>
  );
};
export default WorkContent;
