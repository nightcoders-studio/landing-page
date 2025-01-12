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
        <div className="hidden overflow-x-hidden sm:flex sm:flex-col sm:items-center sm:w-full sm:mt-8 sm:gap-8">
            {/* Header */}
            <div className="sm:flex sm:flex-col sm:items-center">
                <div className="flex flex-col w-full px-12 howWeWork-headerContainer sm:items-center sm:mx-8 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left">
                    <h1 className="sm:text-3xl sm:font-semibold flex-[60%]">
                        Our <span className="text-text-brand">Work</span> Speaks For Itself
                    </h1>
                    <Spacer className="md:hidden" />
                    <Spacer className="hidden md:block md:flex-[5%] " /> {/* Spacer untuk jarak */}
                    <h4 className="text-gray-600 sm:text-lg md:text-right sm:leading-normal flex-[40%]">
                        Discover the innovative solutions we’ve crafted for our clients
                    </h4>
                </div>

                <Spacer />

                {/* Carousel Container */}
                <Carousel className="relative w-full">
                    <CarouselContent className="flex max-w-full gap-6 p-10 overflow-x-auto snap-x snap-mandatory scrollbar-hidden">
                        {cardPortfolio.map((card) => (
                            <CarouselItem
                                key={card.id}
                                className=" sm:w-12 sm:h-80 md:w-[45%] bg-gray-100 border shadow-md border-border-brand rounded-xl"
                            >
                                <div className="inline-flex flex-col items-stretch gap-6 px-6 py-8 ">
                                    {/* Text Wrapper */}
                                    <div className="flex flex-col gap-8 text-wrapper">
                                        <h3 className="w-full text-text-default-secondary sm:text-2xl sm:font-semibold">
                                            {card.title}
                                        </h3>
                                        <h4 className="text-text-default-secondary sm:text-lg">
                                            {card.subtitle}
                                        </h4>
                                    </div>
                                    {/* Button */}
                                    <Button className="flex justify-end gap-2 bg-transparent border-none shadow-none sm:text-base text-text-default">
                                        See Detail <MoveRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>
            </div>
        </div>
    );
};

export default OurWorkSpeaksforItself;
