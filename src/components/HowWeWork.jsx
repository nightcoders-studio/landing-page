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
        <div id="howWeWork-Wrapper" className="hidden sm:flex sm:flex-col sm:items-center sm:w-full sm:mt-8 sm:gap-8">
            {/* Header */}
            <div id="howWeWork-Container" className="sm:flex sm:flex-col sm:items-center">
                <div className="flex flex-col w-full px-12 howWeWork-headerContainer sm:items-center sm:mx-8 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left">
                    <h1 className="sm:text-3xl sm:font-semibold flex-[50%]">
                        How We <span className="text-text-brand">Work</span>
                    </h1>
                    <Spacer className="md:hidden" />
                    <Spacer className="hidden md:block md:flex-[5%] " /> {/* Spacer untuk jarak */}
                    <h4 className="text-gray-600 sm:text-lg md:text-right sm:leading-normal flex-[50%]">
                        A proven process to transform your ideas into powerful digital solutions
                    </h4>
                </div>
                <Spacer />
            </div>

            {/* Card Container */}
            <div className="sm:flex sm:flex-col sm:gap-6 sm:w-full sm:px-4 md:grid-cols-">
                {weWork.map((step) => (
                    <Card key={step.id} className="shadow-md sm:p-0 bg-gray-50 rounded-xl">
                        <CardHeader>
                            <CardTitle id="titleCard" className="font-semibold sm:p-0 sm:text-2xl text-text-default sm:w-2/3">{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg">{step.subTitle}</p>
                            {step.button && (
                                <Button className="mt-4">
                                    Start Your Project <Rocket className="w-4 h-4 ml-2" />
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default HowWeWork;
