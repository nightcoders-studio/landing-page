import Spacer from "@/components/ui/spacer";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Vector3 from "@/assets/images/vector3.svg";
import { useEffect, useRef, useState } from "react";

const OurWorkSpeaksforItself = () => {
  const cardPortfolio = [
    {
      id: 1,
      title: "Mugee - Digital Grocery",
      subtitle: "An app for home online grocery & Delivery",
      detail: "/detail-mugee",
    },
    {
      id: 2,
      title: "Your Email Validator",
      subtitle: "Ensures data quality with comprehensive email verification",
      detail: "/detail-your-email-validator",
    },
    {
      id: 3,
      title: "Tes Ujian Online",
      subtitle:
        "Reliable online Exam platform offering various packages for job preparations",
      detail: "/detail-tes-ujian-online",
    },
    {
      id: 4,
      title: "Pamaba",
      subtitle:
        "Interactive web app for learning eaarthquake for kids with fun",
      detail: "/detail-pamaba",
    },
  ];

  const carouselRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useEffect(() => {
    if (!carouselRef.current) return;

    const interval = setInterval(() => {
      if (!isUserInteracting && carouselRef.current) {
        const maxScroll =
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        if (carouselRef.current.scrollLeft >= maxScroll) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: 385, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  return (
    <div
      id="ourWork-Wrapper"
      className="sm:w-full sm:mt-8 sm:gap-8 xl:w-screen lg:w-screen lg:px-4"
    >
      {/* Header */}
      <div className="flex flex-col w-screen px-0 lg:w-screen lg:px-16 sm:px-7 md:px-7 sm:items-center sm:mx-0 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left howWeWork-Container">
        <h1 className="sm:text-3xl md:text-2xl w-screen font-semibold flex-[40%] lg:text-4xl lg:text-left 3xl:text-7xl 3xl:px-8">
          Our <span className="text-text-brand">Work</span> Speaks For Itself
        </h1>
        <Spacer className="md:hidden" />
        <Spacer className="hidden md:block md:flex-[5%] " />
        <h4 className="text-text-default sm:text-lg md:text-base lg:text-xl lg:leading-relaxed lg:flex-[30%] lg:text-right 3xl:text-5xl 3xl:w-3/4 3xl:mr-12">
          Discover the innovative solutions we’ve crafted for our clients
        </h4>
      </div>

      {/* Carousel for Small Screens */}
      <Spacer className="block h-11 lg:hidden" />
      <div
        ref={carouselRef}
        className="sm:flex sm:overflow-x-scroll sm:gap-6 lg:gap-8 scrollbar-hidden snap-x snap-start sm:px-4 lg:hidden"
        onMouseEnter={() => setIsUserInteracting(true)}
        onMouseLeave={() => setIsUserInteracting(false)}
      >
        {cardPortfolio.map((card) => (
          <div
            key={card.id}
            className="flex justify-between min-w-[360px] max-w-[68px] min-h-[360px] flex-shrink-0 rounded-xl border bg-[#efefef] border-border-brand shadow-md p-6 relative group"
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={Vector3}
                className="absolute bottom-0 z-0 transition-transform duration-300 ease-in-out left-8 group-hover:scale-150"
                alt="background vector"
              />
            </div>

            {/* Card Content */}
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-semibold leading-normal min-w-60 text-text-default-secondary">
                  {card.title}
                </h3>
                <Spacer />
                <h4 className="text-xl text-text-default-secondary">
                  {card.subtitle}
                </h4>
              </div>
              <Spacer />
              {/* Button */}
              <Button
                variant="secondary"
                className="justify-end gap-2 text-xl bg-transparent border-none shadow-none text-text-default min-w-min active:border-none"
                onClick={() => (window.location.href = card.detail)}
              >
                See Detail <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/*End of Carousel for Small Screens */}

      {/* Grid for Larger Screens */}
      <Spacer className="hidden lg:h-10 lg:block" />
      <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-6 lg:px-10 lg:mt-8">
        {cardPortfolio.map((card) => (
          <div
            key={card.id}
            className="rounded-xl border transition duration-300 ease-in-out lg:justify-between backdrop:blur-sm hover:bg-[#ffffffe3]  flex bg-[#efefef] lg:min-h-[260px] border-border-brand shadow-md p-10 relative group"
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden xl:h-90">
              <img
                src={Vector3}
                className="absolute bottom-0 z-0 transition-transform duration-300 ease-in-out left-8 group-hover:scale-125 xl:w-[110px]"
                alt="background vector"
              />
            </div>

            {/* Card Content */}
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-text-default-secondary sm:text-auto lg:text-2xl xl:text-2xl">
                  {card.title}
                </h3>
                <h4 className="text-base text-text-default-secondary sm:text-auto lg:text-xl xl:text-xl ">
                  {card.subtitle}
                </h4>
              </div>
              {/* Button */}
              <Button
                variant="secondary"
                className="justify-end gap-2 bg-transparent border-none shadow-none text-text-default min-w-min active:border-none sm:text-auto lg:text-xl"
                onClick={() => (window.location.href = card.detail)}
              >
                See Detail <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Spacer className="bg-blue-400 md:hidden lg:block lg:h-8 " />
    </div>
  );
};

export default OurWorkSpeaksforItself;
