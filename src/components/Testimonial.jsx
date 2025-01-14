import React from "react"
import Spacer from "./ui/spacer"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"

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
            name: "John Smith",
            profile: "https://via.placeholder.com/48x48",
            position: "Product Owner",
            message: "Sangat komunikatif dan hasil kerja sesuai harapan.",
        },
        {
            id: 5,
            name: "John Smith",
            profile: "https://via.placeholder.com/48x48",
            position: "Product Owner",
            message: "Sangat komunikatif dan hasil kerja sesuai harapan.",
        },
    ]

    return (
        <div className="hidden overflow-x-hidden sm:flex sm:flex-col sm:items-center sm:w-full sm:mt-8 sm:gap-8 lg:w-screen lg:px-8">
            {/* Header */}
            <div className="sm:flex sm:flex-col sm:items-center">
                <div className="flex flex-col w-full px-12 sm:items-center sm:mx-8 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left lg:gap-12">
                    <h1 className="sm:text-3xl sm:font-semibold flex-[60%] lg:text-4xl lg:leading-snug">
                        What Our Client <span className="text-text-brand">Say</span>
                    </h1>
                    <Spacer className="md:hidden" />
                    <Spacer className="hidden md:block md:flex-[5%]" />
                    <h4 className="text-gray-600 sm:text-lg md:text-base md:text-right sm:leading-normal lg:text-lg lg:leading-relaxed flex-[40%]">
                        Hear how we’ve helped businesses achieve their digital dreams
                    </h4>
                </div>
                <Spacer />

                {/* Testimonial Carousel */}
                <Carousel className="relative w-full lg:max-w-6xl xl:max-w-7xl">
                    <CarouselContent className="flex gap-6 p-8 overflow-x-auto snap-x snap-mandatory scrollbar-hidden">
                        {testimonialContents.map((testimonial) => (
                            <CarouselItem
                                key={testimonial.id}
                                className="flex-shrink-0 p-6 rounded-3xl border border-[#f1c480] backdrop-blur-lg snap-align-center w-[85%] sm:w-[70%] lg:w-[30%]"
                            >
                                <div className="flex flex-col h-full gap-6">
                                    {/* Header */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            className="w-12 h-12 rounded-full"
                                            src={testimonial.profile}
                                            alt={`${testimonial.name} Profile`}
                                        />
                                        <div className="flex flex-col">
                                            <div className="text-[#293239] text-lg font-semibold leading-normal">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-[#293239] text-sm font-normal leading-[18px]">
                                                {testimonial.position}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Message */}
                                    <div className="text-[#39434b] text-sm font-normal leading-tight">
                                        {testimonial.message}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <Spacer />
            </div>
        </div>

    )
}

export default Testimonial
