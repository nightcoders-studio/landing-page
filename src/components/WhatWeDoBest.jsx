import React, { useState } from "react";
import { Smartphone, MoveUpRight, MoveDownRight } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import Spacer from "@/components/ui/spacer";

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
            icon: <Smartphone className="h-auto w-14" />, // Example
            title: "Web Development",
            subTitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            content: [
                "Modern Web Technologies",
                "Responsive Design",
                "Scalable Infrastructure",
            ],
        },
        {
            id: 3,
            icon: <Smartphone className="h-auto w-14" />, // Example
            title: "Web Development",
            subTitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            content: [
                "Modern Web Technologies",
                "Responsive Design",
                "Scalable Infrastructure",
            ],
        },
        {
            id: 4,
            icon: <Smartphone className="h-auto w-14" />, // Example
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
        <div id="whatWeDoBestWrapper" className="hidden sm:flex sm:flex-col sm:items-center sm:w-full sm:mt-8 sm:gap-8">
            {/* Header */}
            <div id="whatWeDoBestContainer" className="sm:flex sm:flex-col sm:items-center">
                <div id="whatWeDoBestheaderContainer" className="sm:flex sm:flex-col sm:items-center sm:mx-8 sm:text-center">
                    <h1 className="sm:text-4xl sm:font-semibold">
                        What We Do <span>Best</span>
                    </h1>
                    <Spacer />
                    <h4 className="sm:text-lg sm:leading-snug">
                        Delivering excellence across every stage of your digital transformation
                    </h4>
                </div>
                <Spacer />

                {/* Service Card Container */}
                <div id="serviceCardContainer" className="sm:w-full sm:p-3">
                    <div id="cardContent" className="sm:flex sm:flex-col sm:gap-4 sm:rounded-2xl sm:p-3">
                        <Accordion.Root type="single" collapsible className="sm:space-y-4">
                            {whatWedo.map((item) => (
                                <Accordion.Item
                                    key={item.id}
                                    value={`item-${item.id}`}
                                    className="shadow-lg sm:rounded-2xl "
                                >
                                    <Accordion.Header>
                                        <Accordion.Trigger
                                            className="sm:flex sm:items-center sm:justify-between sm:w-full sm:p-4 bg-inherit"
                                            onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                                        >
                                            <div className="sm:flex sm:items-center sm:gap-4">
                                                <div className="sm:flex sm:justify-center">{item.icon}</div>
                                                <h4 className="text-text-default sm:text-xl sm:font-semibold">{item.title}</h4>
                                            </div>
                                            <div className={`transition-transform duration-500 ${activeItem === item.id ? "rotate-60" : "rotate-00"}`}>
                                                {activeItem === item.id ? (
                                                    <MoveDownRight className="sm:w-10 sm:h-10 sm:p-2 sm:text-white sm:bg-[#110000]/5 sm:rounded-full" />
                                                ) : (
                                                    <MoveUpRight className="sm:w-10 sm:h-10 sm:p-2 sm:text-white sm:bg-[#110000]/25 sm:rounded-full" />
                                                )}
                                            </div>
                                        </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content className="sm:p-4 sm:pb-10">
                                        <p className="sm:pt-4 sm:pb-8 sm:text-xl text-text-default sm:font-normal">{item.subTitle}</p>
                                        <ul className="sm:space-y-4">
                                            {item.content.map((contentItem, index) => (
                                                <li
                                                    key={index}
                                                    className="sm:p-4 sm:text-text-default sm:text-lg sm:font-normal sm:rounded-[80px] sm:shadow-md"
                                                >
                                                    {contentItem}
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Content>
                                </Accordion.Item>

                            ))}
                        </Accordion.Root>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhatWeDoBest;
