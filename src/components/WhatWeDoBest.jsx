import { useState, useEffect } from "react";
import { Smartphone, MoveUpRight, MoveDownRight, Globe, PenTool, BrainCircuit } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import Spacer from "@/components/ui/spacer";
import vector1 from "../assets/images/vector1.svg";


const WhatWeDoBest = () => {
  const [activeItem, setActiveItem] = useState(null);

  const whatWedo = [
    {
      id: 1,
      icon: (size) => <Smartphone strokeWidth={1} className="h-auto" size={size} />,
      title: "Mobile App Development",
      subTitle: "Empower your business with sleek, user-friendly mobile applications. Whether for iOS or Android, we craft apps that combine exceptional design with high performance",
      content: ["Cross Platform Development", "API Integration", "Optimal Performance & Security"],
    },
    {
      id: 2,
      icon: (size) => <Globe strokeWidth={1} className="h-auto" size={size} />,
      title: "Web Development",
      subTitle: "We create fast, secure, and visually appealing websites tailored to your business, from simple sites to complex cloud platforms.",
      content: ["Modern Web Technologies", "Responsive Design", "Scalable Infrastructure"],
    },
    {
      id: 3,
      icon: (size) => <BrainCircuit strokeWidth={1} className="h-auto" size={size} />,
      title: "AI Integration & Automation",
      subTitle:
        "Leverage the power of AI to automate processes, enhance decision-making, and unlock new business opportunities. We bring smart solutions that drive efficiency",
      content: ["Modern Web Technologies", "Responsive Design", "Scalable Infrastructure"],
    },
    {
      id: 4,
      icon: (size) => <PenTool strokeWidth={1} className="h-auto" size={size} />,
      title: "Digital Product Design",
      subTitle: "We create user-focused designs that are both engaging and efficient, from wireframes to prototypes, ensuring great looks and functionality.",
      content: ["Modern Web Technologies", "Responsive Design", "Scalable Infrastructure"],
    }
  ];

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div id="whatWeDoBestWrapper" className="hidden sm:flex sm:flex-col sm:items-center sm:w-full sm:mt-8 sm:gap-8 xl:w-screen lg:w-screen lg:px-4 3xl:px-16">
      <Spacer className={"sm:h-14 lg:block lg:h-10"} />
      {/* Header */}


      {/* Header */}
      <div className="flex flex-col w-screen px-0 lg:w-screen lg:px-16 sm:px-7 md:px-7 sm:items-center sm:mx-0 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left whatWedobest-Container">
        <h1 className="sm:text-3xl md:text-2xl w-screen font-semibold flex-[40%] lg:text-4xl lg:text-left 3xl:text-7xl 3xl:px-8">
          What We Do <span>Best</span>
        </h1>
        <Spacer className="md:hidden" />
        <Spacer className="hidden md:block md:flex-[5%] " />
        <h4 className="text-text-default sm:text-lg md:text-base lg:text-xl lg:leading-relaxed lg:flex-[30%] lg:text-right 3xl:text-5xl 3xl:w-3/4 3xl:mr-12">
          Delivering excellence across every stage of your digital transformation
        </h4>
      </div>

      {/* Vector Background */}
      <img src={vector1}
        alt="Vector Background"
        className="absolute lg:top-[1000px] xl:top-[1000px] 2xl:top-[1200px] lg:left-20 w-[150px] sm:w-[200px] sm:left-10 sm:top-[860px] lg:w-[400px] 3xl:w-[500px] 3xl:top-[2100px] opacity-80 z-0"
        style={{
          transform: 'translateX(-50%)',
        }} />

      {/* Service Card Container untuk layar sm*/}
      <div
        id="serviceCardContainer"
        className="z-10 w-full mx-auto max-w-screen md:px-10 lg:px-7 md:w-full sm:w-full xl:w-full sm:p-3"
      >

        {/* 👇 ini accordionnnya */}
        <div
          id="cardContent"
          className="w-full 2xl:w-full sm:flex sm:flex-col xl:w-full sm:gap-4 sm:rounded-2xl sm:p-3"
        >
          <Accordion.Root
            type="single"
            collapsible
            className="w-full max-w-screen sm:space-y-4 3xl:space-y-6 backdrop-blur-sm"
          >
            {whatWedo.map((item) => (
              <Accordion.Item
                key={item.id}
                value={`item-${item.id}`}
                className="z-10 shadow-md sm:rounded-xl 2xl:rounded-3xl bg-[rgba(17,0,0,0.08)] 3xl:py-6 3xl:px-12 overflow-hidden w-full"
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    className="sm:flex sm:items-center sm:justify-between sm:w-full sm:p-4 lg:grid lg:grid-cols-[auto,2.4fr,5fr,auto] 3xl:grid-cols-[auto,2.4fr,5fr,auto] lg:items-center lg:gap-4 md:gap-2 xl:gap-4 3xl:gap-9 sm:gap-2 bg-inherit border-none lg:p-10"
                    onClick={() =>
                      setActiveItem(activeItem === item.id ? null : item.id)
                    }
                  >
                    {/* Icon Section */}
                    <div className="flex items-center justify-center w-12 h-12 lg:self-start lg:justify-start 3xl:w-20 3xl:h-20">
                      {item.icon(screenSize >= 1920 ? 80 : 48)}
                    </div>

                    {/* Title Section */}
                    <h4 id="judulCard" className="3xl:max-w-full lg:self-start sm:align-text-left lg:pl-8 text-text-default sm:text-xl sm:text-left md:text-xl lg:text-2xl md:font-medium sm:font-medium lg:text-left xl:text-3xl xl:max-w-64 3xl:text-6xl 3xl:leading-normal ">
                      {item.title}
                    </h4>

                    {/* Subtitle Section */}
                    <p className="hidden text-sm text-gray-600 lg:block lg:text-left xl:max-w-3xl lg:text-xl 3xl:text-5xl 3xl:leading-normal 3xl:max-w-[1900px] ">
                      {item.subTitle}
                    </p>

                    {/* Arrow Section */}
                    <div
                      className={`container-arrow flex top-0  transition-transform duration-700 ease-in-out  ${activeItem === item.id
                        ? "rotate-[1deg] transition-transform duration-700"
                        : "rotate-10 transition-transform duration-700"
                        }`}
                    >
                      {activeItem === item.id ? (
                        <MoveDownRight className=" sm:w-12 3xl:h-28 3xl:w-auto sm:h-12 sm:p-2 text-text-default-secondary bg-bg-default-secondary sm:rounded-full" />
                      ) : (
                        <MoveUpRight className="text-white 3xl:h-28 3xl:w-auto sm:w-12 sm:h-12 sm:p-2 bg-bg-default-tertiary sm:rounded-full" />
                      )}
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>

                {/* Accordion Content start */}
                <div className="flex flex-wrap max-w-full containerAccordionContent lg:justify-center lg:items-center">
                  <Accordion.Content className="sm:p-4 sm:pb-10 transition-all duration-500 sm:max ease-in-out data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out lg:pt-0 lg:flex-2 lg:items-center containerAccordionContent lg:max-w-full">

                    {/* SubTitle pada layar kecil */}
                    <p className="sm:flex sm:pt-4 sm:pb-8 sm:text-xl text-text-default sm:font-normal md:w-[100%] md:overflow-none subTitle-wrapper md:text-lg lg:hidden">
                      {item.subTitle}
                    </p>

                    {/* Content Container */}
                    <div className="items-center sm:w-full lg:gap-4 container-contentItem lg:w-full">

                      {/* Content Item */}
                      <div className="sm:py-4 lg:p-0 container-pill-content-item">

                        {/* List Wrapper */}
                        <div className=" w-fit lg:gap-4 md:inline-grid lg:inline-flex lg:space-y-0 lg:space-x-4 lg:ml-44 md:gap-x-10 sm:space-y-2 wrapper-pill-content-item">
                          {item.content.map((contentItem, index) => (
                            <div
                              key={index}
                              className="flex px-2 py-1 w-fit text-nowrap pill-content-item sm:text-text-default sm:text-base sm:font-normal bg-bg-default sm:rounded-lg md:text-base 3xl:text-4xl 3xl:p-10 3xl:rounded-full"
                            >
                              {contentItem}
                            </div>

                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Content Container End */}

                  </Accordion.Content>
                </div>

                {/* End of Accordion Content */}

              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
        {/* 👆habis code accordion */}
      </div>
      <Spacer />
    </div>

  );
};

export default WhatWeDoBest;