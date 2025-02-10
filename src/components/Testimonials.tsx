import { useState } from "react";
import FirstStep, { TestimonialsProps } from "./Testimonials/FirstStep";
import SecondStep from "./Testimonials/SecondStep";
const Testimonials = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const testimonials: TestimonialsProps[] = [
    {
      id: 1,
      name: "Chinedu Nwosu",
      img: "/players/Chinedu Nwosu.jpg",
      content:
        "ProKick has been nothing short of transformational in my football journey. From the moment I joined, they not only showcased my skills on a global scale but also connected me with top-tier clubs around the world, significantly elevating my career prospects.",
      club: "FC Barcelona",
    },
    {
      id: 2,
      name: "Yuki Nakamura",
      img: "/players/Yuki Nakamura.jpg",
      content:
        "Initially skeptical about ProKick's approach, I quickly realized their expertise and unwavering support would be instrumental in unlocking doors to opportunities previously unimaginable. Their dedication is unmatched.",
      club: "Bayern Munich",
    },
    {
      id: 3,
      name: "Hassan El Fassi",
      img: "/players/Hassan El Fassi.jpg",
      content:
        "ProKick turned my dream of playing football in Europe into reality through their invaluable guidance and relentless support. Every step along the way has been marked by their unwavering commitment, for which I am eternally grateful.",
      club: "Paris Saint-Germain",
    },
    {
      id: 4,
      name: "Lucas Silva",
      img: "/players/Lucas Silva.jpg",
      content:
        "ProKick's impact on my life is profound. They not only connected me with top clubs in South America but also provided the necessary tools and resources to elevate my game, ensuring my continued growth as a professional athlete.",
      club: "Flamengo",
    },
    {
      id: 5,
      name: "Rahul Sharma",
      img: "/players/Rahul Sharma.jpg",
      content:
        "ProKick's unwavering dedication towards nurturing young talent has been nothing short of awe-inspiring. They meticulously sought out opportunities for me, eventually securing a position at one of Europe's most prestigious football clubs.",
      club: "Chelsea FC",
    },
  ];

  const updateData = (step: number, player: number) => {
    setCurrentStep(step);
    if (currentPlayer <= testimonials.length) {
      setCurrentPlayer(player);
    }
  };
  return (
    <>
      <div
        id="testimonials"
        className="relative top-[100dvh] min-h-[100dvh] p-10 z-40 flex flex-col items-center justify-center font-main bg-main text-bg"
      >
        <div className="w-9/12 max-w-[1500px] opacity-70">
          {currentStep === 1 && (
            <FirstStep testimonials={testimonials} updateData={updateData} />
          )}
          {currentStep === 2 && (
            <SecondStep
              testimonial={testimonials[currentPlayer - 1]}
              currentPlayer={currentPlayer}
              testimonialsLength={testimonials.length}
              updateData={updateData}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default Testimonials;
