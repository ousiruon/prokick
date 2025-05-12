import { motion } from "motion/react";
import { TestimonialsProps } from "./FirstStep";
import { IoClose } from "react-icons/io5";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
// Interface SecondStepProps is an interface that defines the props for the SecondStep component.
interface SecondStepProps {
  testimonial: TestimonialsProps;
  currentPlayer: number;
  testimonialsLength: number;
  updateData: (step: number, player: number) => void;
}
// Component SecondStep is a functional component that displays the details of a selected testimonial.
// It takes testimonial, currentPlayer, testimonialsLength, and updateData as props.
// The component displays the testimonial's image, name, content, and club.
// It also includes navigation buttons to switch between testimonials.
const SecondStep = ({
  testimonial,
  currentPlayer,
  testimonialsLength,
  updateData,
}: SecondStepProps) => {
  return (
    <>
      <div className={`max-w-[600px] w-[90%] my-0 mx-auto flex flex-col gap-8`}>
        <div className="navigation flex flex-row justify-between">
          <motion.div className="close flex">
            <motion.div
              onClick={() => updateData(1, 0)}
              className="cursor-pointer"
              whileHover={{ rotate: "90deg", transition: { duration: 0.5 } }}
            >
              <IoClose size={32} />
            </motion.div>
          </motion.div>
          <div className="w-full flex justify-end items-center gap-2">
            <motion.div
              whileHover={
                currentPlayer !== 1
                  ? {
                      scale: 1.1,
                      transition: {
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      },
                    }
                  : {}
              }
              whileTap={
                currentPlayer !== 1
                  ? {
                      scale: 0.9,
                      transition: {
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      },
                    }
                  : {}
              }
              onClick={() =>
                currentPlayer !== 1 ? updateData(2, currentPlayer - 1) : ""
              }
              className={`bg-sec p-2 md:p-3 ${
                currentPlayer !== 1 ? "cursor-pointer" : "opacity-40"
              }`}
            >
              <GrPrevious size={12} />
            </motion.div>
            <motion.div
              whileHover={
                testimonialsLength !== currentPlayer
                  ? {
                      scale: 1.1,
                      transition: {
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      },
                    }
                  : {}
              }
              whileTap={
                testimonialsLength !== currentPlayer
                  ? {
                      scale: 0.9,
                      transition: {
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      },
                    }
                  : {}
              }
              onClick={() =>
                testimonialsLength !== currentPlayer
                  ? updateData(2, currentPlayer + 1)
                  : ""
              }
              className={`bg-sec p-2 md:p-3 ${
                testimonialsLength !== currentPlayer
                  ? "cursor-pointer"
                  : "opacity-40"
              }`}
            >
              <GrNext size={12} />
            </motion.div>
          </div>
        </div>
        <div className="content w-full flex flex-col md:flex-row gap-5 md:gap-10">
          <div className="w-full md:w-1/2 relative pt-[80%] md:pt-[60%]">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover object-top md:object-center rounded-t-lg md:rounded-lg
"
              src={`${testimonial.img}`}
              alt={`${testimonial.name}`}
            />
          </div>
          <div className="contentText w-full md:w-1/2 flex flex-col">
            <div className="text-4xl lg:text-5xl h-3/12">{testimonial.name}</div>
            <div className="h-6/12 flex text-justify items-center">
              {testimonial.content}
            </div>
            <div className="h-3/12 flex flex-row text-justify items-end justify-end">
              {testimonial.club}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SecondStep;
