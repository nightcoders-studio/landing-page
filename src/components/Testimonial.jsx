import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Vector5 from "../assets/images/vector5.svg";
import Spacer from "./ui/spacer";

const Testimonial = () => {
    const testimonialContents = [
        {
            id: 1,
            name: "Roberto Carlos",
            profile: "https://via.placeholder.com/48x48",
            position: "Project Manager",
            message: "Pekerja yang handal dan dapat dipercaya sangat memuaskan",
        },
        {
            id: 2,
            name: "Jane Doe",
            profile: "https://via.placeholder.com/48x48",
            position: "Software Engineer",
            message: "Kualitas kerja yang luar biasa, sangat memuaskan!",
        },
        {
            id: 3,
            name: "John Smith",
            profile: "https://via.placeholder.com/48x48",
            position: "Product Owner",
            message: "Sangat komunikatif dan hasil kerja sesuai harapan.",
        },
        {
            id: 4,
            name: "Jane Smith",
            profile: "https://via.placeholder.com/48x48",
            position: "Product Owner",
            message: "Sangat komunikatif dan hasil kerja sesuai harapan.",
        },
        {
            id: 5,
            name: "John Doe",
            profile: "https://via.placeholder.com/48x48",
            position: "Product Owner",
            message: "Sangat komunikatif dan hasil kerja sesuai harapan.",
        },
        {
            id: 6,
            name: "Emily Davis",
            profile: "https://via.placeholder.com/48x48",
            position: "Designer",
            message: "Desainnya luar biasa, sangat kreatif!",
        },
    ];

    return (
        <div className="flex flex-col items-center w-full gap-8 sm:mt-8">
            {/* Header */}

            <div className="z-10 flex flex-col w-screen px-0 lg:w-screen lg:px-16 sm:px-7 md:px-7 sm:items-center sm:mx-0 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left">
                <h1 className="sm:text-3xl md:text-2xl w-screen font-semibold flex-[40%] lg:text-4xl lg:text-left lg:pr-8">
                    What Our Clients <span className="text-text-brand">Say</span>
                </h1>
                <Spacer className="md:hidden" />
                <Spacer className="hidden md:block md:flex-[5%] " />
                <h4 className="text-text-default sm:text-lg md:text-base lg:text-xl lg:leading-relaxed flex-[60%] lg:text-right">
                    Hear how we’ve helped businesses achieve their digital dreams
                </h4>
            </div>

            <div className="z-10 flex flex-col items-center w-full">
                <Carousel className="relative z-10 w-full overflow-hidden sm:my-3 sm:mx-6 ">
                    <CarouselContent className="flex gap-6 sm:px-10 snap-x snap-mandatory scrollbar-hidden">
                        {testimonialContents.map((testimonial) => (
                            <CarouselItem
                                key={testimonial.id}
                                className="z-10 flex-shrink-0 sm:w-1/2 lg:w-1/4 p-6 rounded-3xl border border-[#f1c480] backdrop-blur-sm bg-[rgba(17,0,0,0.04)] snap-align-center"
                            >
                                <div className="flex flex-col items-start justify-between gap-4">
                                    {/* Header */}
                                    <div className="flex items-center justify-center gap-4">
                                        <img
                                            className="w-12 h-12 rounded-full lg:w-16"
                                            src={testimonial.profile}
                                            alt={`${testimonial.name} Profile`}
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-text-default lg:text-xl">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-sm font-normal text-text-default lg:text-sm">
                                                {testimonial.position}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Message */}
                                    <p className="text-sm font-normal text-text-default lg:text-lg">
                                        {testimonial.message}
                                    </p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <Spacer />
            {/* Background Decoration */}
            <img
                src={Vector5}
                className="absolute z-0 h-auto w-82 top-[3700px] left-1"
                alt="Background Decoration"
            />
            <Spacer />
        </div>
    );
};

export default Testimonial;
