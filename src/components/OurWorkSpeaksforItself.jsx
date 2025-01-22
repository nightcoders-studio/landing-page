import React from 'react'
import Spacer from "@/components/ui/spacer";
import { MoveRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Vector3 from "../assets/images/vector3.svg"

const OurWorkSpeaksforItself = () => {

    const cardPortfolio = [
        {
            id: 1,
            title: "Redesign Mugee Application",
            subtitle: "Improvement of the overall flow and user interface",
            detail: "/detail-project"
        },
        {
            id: 2,
            title: "Redesign Mugee Application",
            subtitle: "Improvement of the overall flow and user interface",
            detail: "/detail-project",
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
        {
            id: 5,
            title: "Redesign Mugee Application",
            subtitle: "Improvement of the overall flow and user interface",
            detail: "https://www.example.com/redesign-mugee",
        },
    ];

    return (
        <div id="ourWork-Wrapper" className="sm:flex sm:flex-col sm:items-center sm:w-full sm:mt-8 sm:gap-8 lg:w-screen lg:px-12 xl:px-12">
            {/* Header */}

            <div id="whatWeDoBestContainer" className="sm:flex sm:flex-col xl:w-full xl:px-4 sm:items-center">
                <div className="flex flex-col w-screen px-0 lg:w-screen lg:px-16 sm:px-7 md:px-7 sm:items-center sm:mx-0 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left">
                    <h1 className="sm:text-3xl md:text-2xl w-screen font-semibold flex-[40%] lg:text-4xl lg:text-left lg:pr-8">
                        Our <span className="text-text-brand">Work</span> Speaks For Itself
                    </h1>
                    <Spacer className="md:hidden" />
                    <Spacer className="hidden md:block md:flex-[5%] " />
                    <h4 className="text-text-default sm:text-lg md:text-base lg:text-xl lg:leading-relaxed flex-[60%] lg:text-right">
                        Discover the innovative solutions we’ve crafted for our clients
                    </h4>
                </div>
            </div>

            {/* <Spacer className="hidden sm:block" /> */}

            {/* Carousel Container */}
            <Carousel className="relative w-full lg:max-w-6xl xl:max-w-full sm:justify-center">
                <CarouselContent className="grid gap-6 p-8 sm:ml-0 px-9 lg:grid-cols-3 xl:grid-cols-4">
                    {cardPortfolio.map((card) => (
                        <CarouselItem
                            key={card.id}
                            className="relative border bg-[#efefef] backdrop-blur-sm border-border-brand rounded-xl snap-align-center"
                        >
                            {/* Gambar Absolute */}
                            <img
                                src={Vector3}
                                className="absolute -bottom-0 left-8"
                            />

                            <div className="flex flex-col gap-6 p-6 xl:h-72">
                                {/* Text Wrapper */}
                                <div className="flex flex-col gap-4 lg:gap-2">
                                    <h3 className="text-xl font-semibold sm:text-2xl lg:text-xl text-text-default-secondary">
                                        {card.title}
                                    </h3>
                                    <div className="hidden lg:block lg:h-1 xl:h-1" />
                                    <h4 className="text-base sm:text-lg lg:text-base text-text-default-secondary">
                                        {card.subtitle}
                                    </h4>
                                </div>
                                <Spacer className="md:hidden lg:block " />
                                {/* Button */}
                                <Button
                                    variant="secondary"
                                    className="justify-end gap-2 bg-transparent border-none shadow-none text-text-default min-w-min active:border-none focus-visible:border-none"
                                    onClick={() => (window.location.href = card.detail)} //tombol ke halaman project detail
                                >
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
