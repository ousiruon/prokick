import { AnimatePresence, motion } from "motion/react";
// Interface for the WorkUpContent constant
interface WorkUpContentProps {
  id: number;
  content: string;
}
// WorkUpContent constant is an array of objects that is displayed at the start of the work section.
const WorkUpContent: WorkUpContentProps[] = [
  {
    id: 1,
    content: "Scouting",
  },
  {
    id: 2,
    content: "Development",
  },
  {
    id: 3,
    content: "Recruitment",
  },
];
const WorkUp = ({ displayed }: { displayed: boolean }) => {
  return (
    <>
      <motion.div className="flex flex-col my-40 items-center justify-center w-[90%] max-w-[1500px] mx-auto">
        {WorkUpContent.map((content) => (
          <motion.div
            className={`overflow-hidden text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl w-full flex ${
              content.id === 1
                ? "justify-start"
                : content.id === 2
                ? "justify-center"
                : "justify-end"
            }`}
            key={content.id}
          >
            <AnimatePresence>
              <motion.div
                initial={{ y: "100%" }}
                animate={
                  displayed
                    ? {
                        y: 0,
                        transition: {
                          delay: 0.3 * content.id,
                          type: "spring",
                          stiffness: 100,
                        },
                      }
                    : {}
                }
                exit={
                  !displayed
                    ? {
                        y: "100%",
                        transition: {
                          delay: 0.3 * content.id,
                          type: "spring",
                          stiffness: 100,
                        },
                      }
                    : {}
                }
              >
                {content.content}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
export default WorkUp;
