import React, { useState } from "react";
import { Smartphone, MoveUpRight, MoveDownRight, Globe, PenTool, BrainCircuit } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import Spacer from "@/components/ui/spacer";
import vector1 from "../assets/images/vector1.svg";


const WhatWeDoBest = () => {
    const [activeItem, setActiveItem] = useState(null);

    const whatWedo = [
        {
            id: 1,
            icon: <Smartphone strokeWidth={1} className="h-auto w-14" />,
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
            icon: <Globe strokeWidth={1} className="h-auto w-14" />,
            title: "Web Development",
            subTitle:
                "We create fast, secure, and visually appealing websites tailored to your business, from simple sites to complex cloud platforms.",
            content: [
                "Modern Web Technologies",
                "Responsive Design",
                "Scalable Infrastructure",
            ],
        },
        {
            id: 3,
            icon: <BrainCircuit strokeWidth={1} className="h-auto w-14" />,
            title: "AI Integration & Automation",
            subTitle:
                "Leverage the power of AI to automate processes, enhance decision-making, and unlock new business opportunities. We bring smart solutions that drive efficiency",
            content: [
                "Modern Web Technologies",
                "Responsive Design",
                "Scalable Infrastructure",
            ],
        },
        {
            id: 4,
            icon: <PenTool strokeWidth={1} className="h-auto w-14" />,
            title: "Digital Product Design",
            subTitle:
                "We create user-focused designs that are both engaging and efficient, from wireframes to prototypes, ensuring great looks and functionality.",
            content: [
                "Modern Web Technologies",
                "Responsive Design",
                "Scalable Infrastructure",
            ],
        }
    ];

    return (
        <div id="whatWeDoBestWrapper" className="relative hidden sm:flex sm:flex-col sm:items-center sm:w-full sm:mt-8 sm:gap-8 xl:w-screen xl:px-4">
            <Spacer />
            {/* Header */}
            <div id="whatWeDoBestContainer" className="sm:flex sm:flex-col xl:w-full xl:px-4 sm:items-center">
                <div className="flex flex-col w-screen px-0 lg:w-screen lg:px-16 md:px-16 sm:items-center sm:mx-0 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left">
                    <h1 className="sm:text-3xl md:text-2xl w-screen font-semibold flex-[50%] lg:text-4xl   lg:text-left lg:pr-8">
                        What We Do <span>Best</span>
                    </h1>
                    <Spacer className="md:hidden" />
                    <Spacer className="hidden md:block md:flex-[5%] " /> {/* Spacer untuk jarak */}
                    <h4 className="text-text-default sm:text-lg md:text-base lg:text-xl lg:leading-relaxed flex-[40%] lg:text-right">
                        Delivering excellence across every stage of your digital transformation
                    </h4>
                </div>
                <Spacer />

                {/* Service Card Container */}
                <div
                    id="serviceCardContainer"
                    className="mx-auto max-w-7xl xl:px-0 md:w-xl sm:w-full sm:p-3 md:w-full"
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
                                            className="sm:flex sm:items-center sm:justify-between sm:w-full sm:p-4 lg:grid lg:grid-cols-[auto,2.4fr,5fr,auto] lg:items-center lg:gap-4 lg:w-full  md:gap-2 xl:gap-4  sm:gap-2 bg-inherit border-none lg:p-10"
                                            onClick={() =>
                                                setActiveItem(activeItem === item.id ? null : item.id)
                                            }
                                        >
                                            {/* Icon Section */}
                                            <div className="flex items-center justify-center lg:self-start lg:justify-start">
                                                {item.icon}
                                            </div>

                                            {/* Title Section */}
                                            <h4 className="lg:self-start lg:pl-8 text-text-default sm:text-2xl sm:text-left md:text-xl md:font-medium sm:font-semibold lg:text-left xl:text-2xl xl:max-w-64">
                                                {item.title}
                                            </h4>

                                            {/* Subtitle Section */}
                                            <p className="hidden text-sm text-gray-600 lg:block lg:text-xl lg:text-left xl:max-w-xl ">
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
                                                    <MoveDownRight className="sm:w-12 sm:h-12 sm:p-2 sm:text-white sm:bg-[#110000]/5 sm:rounded-full" />
                                                ) : (
                                                    <MoveUpRight className="sm:w-12 sm:h-12 sm:p-2 sm:text-white sm:bg-[#110000]/25 sm:rounded-full" />
                                                )}
                                            </div>
                                        </Accordion.Trigger>
                                    </Accordion.Header>

                                    <Accordion.Content className="sm:p-4 sm:pb-10 transition-all duration-500 sm:max ease-in-out data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out lg:pt-0">
                                        <p className="sm:pt-4 sm:pb-8 sm:text-xl text-text-default sm:font-normal md:w-full md:text-lg lg:hidden">
                                            {item.subTitle}
                                        </p>
                                        {/* Content Container */}
                                        <div className="lg:grid lg:grid-cols-[0.4fr,2.4fr,5fr,auto] relative justify-center content-container sm:py-4">
                                            <ul className="w-full space-y-4 lg:text-left md:text-center lg:max-w-md sm:space-y-2 lg:col-start-3">
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
            <Spacer />
        </div>
    );
};

export default WhatWeDoBest;
