import { motion } from "motion/react";
import { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
// Interface TestimonialsProps is an interface that defines the structure of a testimonial object.
export interface TestimonialsProps {
  id: number;
  name: string;
  img: string;
  content: string;
  club: string;
}
// Interface FirstStepProps is an interface that defines the props for the FirstStep component.
interface FirstStepProps {
  testimonials: TestimonialsProps[];
  updateData: (step: number, player: number) => void;
}
// FirstStep component is a functional component that displays a list of user names and their personal pictures. Once clicked it redirects to SecondStep component.
const FirstStep = ({ testimonials, updateData }: FirstStepProps) => {
  const [activeTestimonial, setActiveTestimonial] = useState<{id:number; hovered: boolean}>({
    id: 0,
    hovered: false,
  });
  return (
    <>
      {testimonials.map((testimonial: TestimonialsProps) =>
        testimonial.id <= 3 ? (
          <motion.div
            onClick={() => updateData(2, testimonial.id)}
            key={testimonial.id}
            onHoverStart={() =>
              setActiveTestimonial({ id: testimonial.id, hovered: true })
            }
            onHoverEnd={() => setActiveTestimonial({ id: 0, hovered: false })}
            className="relative border-1 border-alt text-4xl 2xl:text-8xl xl:text-7xl lg:text-6xl text-center py-8 overflow-hidden cursor-pointer "
          >
            <div className="relative z-40 flex flex-col items-center">
              {testimonial.name}
              <div>
                <MdArrowRightAlt size={24} />
              </div>
            </div>
            <motion.div
              initial={{ y: 0 }}
              animate={
                activeTestimonial.id === testimonial.id &&
                activeTestimonial.hovered
                  ? {
                      y: "-100%",
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                    }
                  : {
                      y: "0",
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut",
                      },
                    }
              }
              className="absolute top-0 left-0 w-full h-full bg-main z-20"
            ></motion.div>
            <motion.div
              animate={
                activeTestimonial.id === testimonial.id &&
                activeTestimonial.hovered
                  ? {
                      scale: 1.1,
                      transition: {
                        delay: 0.5,
                        duration: 0.3,
                      },
                    }
                  : {}
              }
              className={`absolute top-0 left-0 bottom-0 right-0 w-full h-full`}
            >
              <img className="object-cover object-[5%_15%] w-full h-full" src={testimonial.img} alt={testimonial.name} />
            </motion.div>
          </motion.div>
        ) : (
          ""
        )
      )}
      <motion.div
        onHoverStart={() => setActiveTestimonial({ id: 6, hovered: true })}
        onHoverEnd={() => setActiveTestimonial({ id: 0, hovered: false })}
        onClick={() => updateData(2, 1)}
        className="relative border-1 border-alt text-4xl 2xl:text-8xl xl:text-7xl lg:text-6xl text-center py-8 overflow-hidden cursor-pointer "
      >
        <div className="relative z-40 flex flex-col items-center">
          More
          <div>
            <MdArrowRightAlt size={24} />
          </div>
        </div>
        <motion.div
          initial={{ y: 0 }}
          animate={
            activeTestimonial.id === 6 && activeTestimonial.hovered
              ? {
                  y: "-100%",
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }
              : {
                  y: "0",
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }
          }
          className="absolute top-0 left-0 w-full h-full bg-main z-20"
        ></motion.div>
        <motion.div className="absolute top-0 left-0 w-full h-full bg-sec"></motion.div>
      </motion.div>
    </>
  );
};
export default FirstStep;
