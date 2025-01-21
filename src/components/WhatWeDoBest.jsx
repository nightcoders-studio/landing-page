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
        <div id="whatWeDoBestWrapper" className="relative hidden sm:flex sm:flex-col sm:items-center sm:w-full sm:mt-8 sm:gap-8 lg:w-screen lg:px-0 md:w-full">
            <Spacer />
            {/* Header */}
            <div id="whatWeDoBestContainer" className="sm:flex sm:flex-col xl:w-full xl:px-4 sm:items-center">
                <div className="flex flex-col w-screen px-0 lg:w-screen lg:px-16 sm:px-7 md:px-7 sm:items-center sm:mx-0 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left">
                    <h1 className="sm:text-3xl md:text-2xl w-screen font-semibold flex-[40%] lg:text-4xl lg:text-left lg:pr-8">
                        What We Do <span>Best</span>
                    </h1>
                    <Spacer className="md:hidden" />
                    <Spacer className="hidden md:block md:flex-[5%] " />
                    <h4 className="text-text-default sm:text-lg md:text-base lg:text-xl lg:leading-relaxed flex-[60%] lg:text-right">
                        Delivering excellence across every stage of your digital transformation
                    </h4>
                </div>
                <Spacer />

                {/* Vector Background */}
                <img
                    src={vector1}
                    alt="Vector Background"
                    className="absolute lg:top-24 lg:left-20 w-[150px] sm:w-[200px] sm:left-10 sm:bottom-10 lg:w-[400px] opacity-80 z-0"
                    style={{
                        transform: 'translateX(-50%)',
                    }}
                />

                {/* Service Card Container */}
                <div
                    id="serviceCardContainer"
                    className="z-10 w-full mx-auto max-w-screen xl:px-0 md:w-full sm:w-full xl:w-full sm:p-3"
                >
                    <div
                        id="cardContent"
                        className="w-full 2xl:w-full sm:flex sm:flex-col xl:w-full sm:gap-4 sm:rounded-2xl sm:p-3"
                    >
                        <Accordion.Root
                            type="single"
                            collapsible
                            className="w-full max-w-screen sm:space-y-4 backdrop-blur-sm"
                        >
                            {whatWedo.map((item) => (
                                <Accordion.Item
                                    key={item.id}
                                    value={`item-${item.id}`}
                                    className="z-10 shadow-md sm:rounded-xl bg-[rgba(17,0,0,0.08)] overflow-hidden w-full"
                                >
                                    <Accordion.Header>
                                        <Accordion.Trigger
                                            className="sm:flex sm:items-center sm:justify-between sm:w-full sm:p-4 lg:grid lg:grid-cols-[auto,2.4fr,5fr,auto] lg:items-center lg:gap-4 md:gap-2 xl:gap-4 sm:gap-2 bg-inherit border-none lg:p-10"
                                            onClick={() =>
                                                setActiveItem(activeItem === item.id ? null : item.id)
                                            }
                                        >
                                            {/* Icon Section */}
                                            <div className="flex items-center justify-center lg:self-start lg:justify-start">
                                                {item.icon}
                                            </div>

                                            {/* Title Section */}
                                            <h4 id="judulCard" className="lg:self-start lg:pl-8 text-text-default sm:text-xl sm:text-left md:text-xl lg:text-xl md:font-medium sm:font-medium lg:text-left xl:text-2xl xl:max-w-64 ">
                                                {item.title}
                                            </h4>

                                            {/* Subtitle Section */}
                                            <p className="hidden text-sm text-gray-600 lg:block lg:text-left xl:max-w-xl lg:text-base ">
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
                                                    <MoveDownRight className="sm:w-12 sm:h-12 sm:p-2 text-text-default-secondary bg-bg-default-secondary sm:rounded-full" />
                                                ) : (
                                                    <MoveUpRight className="text-white sm:w-12 sm:h-12 sm:p-2 bg-bg-default-tertiary sm:rounded-full" />
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
