import React from 'react'
import Spacer from "@/components/ui/spacer";
import { MoveRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const OurWorkSpeaksforItself = () => {

    const cardPortfolio = [
        {
            id: 1,
            title: "Redesign Mugee Application",
            subtitle: "Improvement of the overall flow and user interface",
            detail: "https://www.example.com/redesign-mugee",
        },
        {
            id: 2,
            title: "Redesign Mugee Application",
            subtitle: "Improvement of the overall flow and user interface",
            detail: "https://www.example.com/redesign-mugee",
        },
        {
            id: 3,
            title: "Redesign Mugee Application",
            subtitle: "Improvement of the overall flow and user interface",
            detail: "https://www.example.com/redesign-mugee",
        },
        {
            id: 4,
            title: "Redesign Mugee Application",
            subtitle: "Improvement of the overall flow and user interface",
            detail: "https://www.example.com/redesign-mugee",
        },
    ];

    return (
        <div id="ourWork-Wrapper" className="sm:flex sm:flex-col sm:items-center sm:w-full sm:mt-8 sm:gap-8 lg:w-screen lg:px-12 xl:px-12">
            {/* Header */}
            <div id="ourWork-Container" className="w-full px-8 sm:flex sm:flex-col sm:items-center lg:px-16">
                <div className="flex flex-col sm:items-center sm:text-center md:flex-row md:items-center md:gap-8 md:text-left lg:gap-12">
                    <h1 className="sm:text-3xl md:text-2xl lg:text-4xl font-semibold flex-[60%] lg:text-left">
                        Our <span className="text-text-brand">Work</span> Speaks For Itself
                    </h1>
                    <Spacer className="md:hidden" />
                    <Spacer className="hidden md:block md:flex-[5%]" />
                    <h4 className="text-gray-600 sm:text-lg md:text-base lg:text-lg lg:leading-relaxed flex-[40%] lg:text-right">
                        Discover the innovative solutions we’ve crafted for our clients
                    </h4>
                </div>
            </div>

            <Spacer className="hidden sm:block" />

            {/* Carousel Container */}
            <Carousel className="relative w-full lg:max-w-6xl xl:max-w-7xl">
                <CarouselContent className="flex gap-6 p-8 overflow-x-auto snap-mandatory snap-x scrollbar-hidden">
                    {cardPortfolio.map((card) => (
                        <CarouselItem
                            key={card.id}
                            className="flex-shrink-0 flex-grow-0 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] border border-border-brand rounded-xl snap-align-center"
                        >
                            <div className="flex flex-col gap-6 p-6 lg:gap-8">
                                {/* Text Wrapper */}
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xl font-semibold sm:text-2xl lg:text-xl text-text-default-secondary">
                                        {card.title}
                                    </h3>
                                    <h4 className="text-base sm:text-lg lg:text-base text-text-default-secondary">
                                        {card.subtitle}
                                    </h4>
                                </div>
                                {/* Button */}
                                <Button className="flex justify-end gap-2 bg-transparent border-none shadow-none text-text-default">
                                    See Detail <MoveRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <Spacer className="hidden lg:block" />
        </div>


    );
};

export default OurWorkSpeaksforItself;
