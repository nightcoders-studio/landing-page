import React from 'react';
import Spacer from "@/components/ui/spacer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const HowWeWork = () => {

    const weWork = [
        {
            id: 1,
            title: "Introductory Call",
            subTitle: "We will discuss how can we provide value to you and your business.",
            button: true,
        },
        {
            id: 2,
            title: "Requirements & Scope",
            subTitle: "We'll gather the info and send a proposal. Once approved, we'll start the project.",
            button: false,
        },
        {
            id: 3,
            title: "Planning & Development",
            subTitle: "The team plans and communicates frequently with you to achieve the best results.",
            button: false,
        },
        {
            id: 4,
            title: 'Handover & Support',
            subTitle: "We ensure everything runs smoothly after deployment.",
            button: false,
        },
    ];

    return (
        <div id="howWeWork-Wrapper" className="hidden sm:flex sm:flex-col sm:items-center sm:w-full sm:mt-8 sm:gap-8 xl:w-screen lg:w-screen lg:px-4">
            {/* Header */}
            <div id="howWeWork-Container" className="z-10 sm:flex sm:flex-col xl:w-full xl:px-4 sm:items-center lg:gap-8">
                <div className="flex flex-col w-screen px-0 lg:w-screen lg:px-16 md:px-16 sm:items-center sm:mx-0 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left">
                    <h1 className="sm:text-3xl md:text-2xl w-screen font-semibold flex-[50%] lg:text-4xl lg:text-left lg:pr-8">
                        How We <span className="text-text-brand">Work</span>
                    </h1>
                    <Spacer className="md:hidden" />
                    <Spacer className="hidden md:block md:flex-[5%]" />
                    <h4 className="text-text-default sm:text-lg md:text-base lg:text-xl lg:leading-relaxed flex-[40%] lg:text-right">
                        A proven process to transform your ideas into powerful digital solutions
                    </h4>
                </div>
                <Spacer />
            </div>

            {/* Card Container */}
            <div className="sm:flex sm:flex-col sm:gap-6 sm:w-full sm:px-4 md:grid md:items-stretch md:grid-cols-2 lg:grid-cols-3 lg:px-8 xl:grid-cols-3 lg:gap-8">
                {weWork.map((step) => (
                    <Card
                        key={step.id}
                        className="sm:p-0 rounded-xl lg:p-6 lg:shadow-md lg:border lg:rounded-lg"
                    >
                        <CardHeader>
                            <CardTitle
                                id="titleCard"
                                className="font-semibold sm:p-0 sm:text-2xl text-text-default sm:w-2/3 md:text-lg lg:text-xl lg:font-medium lg:leading-relaxed"
                            >
                                {step.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg md:text-base lg:text-base lg:leading-relaxed">
                                {step.subTitle}
                            </p>
                            <Spacer className="md:h-8" />
                            {step.button && (
                                <Button className="mt-4 md:text-sm lg:text-sm lg:py-2 lg:px-4">
                                    Start Your Project <Rocket className="w-4 h-4 ml-2" />
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
            <Spacer />
        </div>


    );
};

export default HowWeWork;
