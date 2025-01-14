import React, { useState } from "react";
import { Smartphone, MoveUpRight, MoveDownRight } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import Spacer from "@/components/ui/spacer";
import vector1 from "../assets/images/vector1.svg";

const WhatWeDoBest = () => {
    const [activeItem, setActiveItem] = useState(null);

    const whatWedo = [
        {
            id: 1,
            icon: <Smartphone className="h-auto w-14" />,
            title: "Mobile App Development",
            subTitle:
                "Empower your business with sleek, user-friendly mobile applications. Whether for iOS or Android, we craft apps that combine exceptional design with high performance",
            content: [
                "Native & Cross Platform Development",
                "API Integration for Additional Functionality",
                "Optimal Performance & High-Level Security",
            ],
        },
        {
            id: 2,
            icon: <Smartphone className="h-auto w-14" />,
            title: "Web Development",
            subTitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            content: [
                "Modern Web Technologies",
                "Responsive Design",
                "Scalable Infrastructure",
            ],
        },
    ];

    return (
        <div id="whatWeDoBestWrapper" className="hidden sm:flex sm:flex-col sm:items-center sm:w-full sm:mt-8 sm:gap-8 xl:w-screen xl:px-4">
            <Spacer />
            {/* Header */}
            <div id="whatWeDoBestContainer" className="z-100 sm:flex sm:flex-col xl:w-full xl:px-4 sm:items-center">
                <div className="flex flex-col w-full px-12 lg:mx-0 xl:px-0 sm:items-center sm:mx-8 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left">
                    <h1 className="sm:text-3xl md:text-2xl font-semibold flex-[50%] lg:text-3xl">
                        What We Do <span>Best</span>
                    </h1>
                    <Spacer className="md:hidden" />
                    <Spacer className="hidden md:block md:flex-[5%] " /> {/* Spacer untuk jarak */}
                    <h4 className="text-text-default sm:text-lg md:text-base md:text-right sm:leading-normal flex-[50%]">
                        Delivering excellence across every stage of your digital transformation
                    </h4>
                </div>
                <Spacer />

                {/* Service Card Container */}
                <div
                    id="serviceCardContainer"
                    className="mx-auto max-w-7xl xl:px-0 md:w-xl sm:w-full sm:p-3 md:w-full "
                >
                    <div
                        id="cardContent"
                        className="w-full sm:flex sm:flex-col sm:gap-4 sm:rounded-2xl sm:p-3"
                    >
                        <Accordion.Root
                            type="single"
                            collapsible
                            className="w-full sm:space-y-4"
                        >
                            {whatWedo.map((item) => (
                                <Accordion.Item
                                    key={item.id}
                                    value={`item-${item.id}`}
                                    className="z-10 shadow-md sm:rounded-xl bg-[rgba(17,0,0,0.08)] overflow-hidden w-full"
                                >
                                    <Accordion.Header>
                                        <Accordion.Trigger
                                            className="sm:flex sm:items-center sm:justify-between sm:w-full sm:p-4 lg:grid lg:grid-cols-[0.5fr,2fr,4fr,auto] xl:grid-cols-[auto,2fr,5fr,auto] md:gap-2 xl:gap-4 bg-inherit border-none"
                                            onClick={() =>
                                                setActiveItem(activeItem === item.id ? null : item.id)
                                            }
                                        >
                                            {/* Icon Section */}
                                            <div className="flex items-center justify-center lg:justify-start">
                                                {item.icon}
                                            </div>

                                            {/* Title Section */}
                                            <h4 className="text-text-default sm:text-xl md:text-lg md:font-medium sm:font-semibold lg:text-left">
                                                {item.title}
                                            </h4>

                                            {/* Subtitle Section */}
                                            <p className="hidden text-sm text-gray-600 lg:block lg:text-base lg:text-left">
                                                {item.subTitle}
                                            </p>

                                            {/* Arrow Section */}
                                            <div
                                                className={`transition-transform duration-700 ease-in-out ${activeItem === item.id
                                                    ? "rotate-[1deg] transition-transform duration-700"
                                                    : "rotate-10 transition-transform duration-700"
                                                    }`}
                                            >
                                                {activeItem === item.id ? (
                                                    <MoveDownRight className="sm:w-10 sm:h-10 sm:p-2 sm:text-white sm:bg-[#110000]/5 sm:rounded-full" />
                                                ) : (
                                                    <MoveUpRight className="sm:w-10 sm:h-10 sm:p-2 sm:text-white sm:bg-[#110000]/25 sm:rounded-full" />
                                                )}
                                            </div>
                                        </Accordion.Trigger>
                                    </Accordion.Header>

                                    <Accordion.Content className="sm:p-4 sm:pb-10 transition-all duration-500 sm:max ease-in-out data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out">
                                        <p className="sm:pt-4 sm:pb-8 sm:text-xl text-text-default sm:font-normal md:w-full md:text-lg lg:hidden">
                                            {item.subTitle}
                                        </p>
                                        {/* Content Container */}
                                        <div className="relative justify-center lg:left-[318px] content-container sm:py-4 lg:px-8">
                                            <ul className="w-full space-y-4 lg:text-left md:text-center lg:max-w-md sm:space-y-2">
                                                {item.content.map((contentItem, index) => (
                                                    <li
                                                        key={index}
                                                        className="sm:p-4 sm:text-text-default sm:text-lg sm:font-normal sm:rounded-2xl sm:shadow-md md:text-base"
                                                    >
                                                        {contentItem}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Accordion.Content>

                                </Accordion.Item>
                            ))}
                        </Accordion.Root>
                    </div>
                </div>
            </div>

            {/* Background Image */}
            <img
                src={vector1}
                alt="Vector 1"
                className="absolute left-[-10px] z-1 w-full h-full sm:top-[800px] sm:h-auto sm:w-56"
            />
            <Spacer />
        </div>

    );
};

export default WhatWeDoBest;
