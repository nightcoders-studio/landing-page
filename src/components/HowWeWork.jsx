import Spacer from "@/components/ui/spacer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Line from "../assets/images/Line.svg";
import Ellipse from "../assets/images/Ellipse.svg";

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
            <Spacer className="md:block sm:hidden" />

            {/* Header */}
            <div id="howWeWork-Container" className="z-10 sm:flex sm:flex-col xl:w-full 2xl:w-full xl:px-4 sm:items-center lg:gap-8">
                <div className="flex flex-col w-screen px-0 lg:w-screen lg:px-16 sm:px-7 md:px-7 sm:items-center sm:mx-0 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left">
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
            <div className="z-10 sm:flex sm:px-6 sm:flex-col sm:gap-6 sm:w-full xl:w-full md:grid md:grid-cols-2 md:gap-6 lg:flex lg:flex-row lg:py-0 lg:px-10 lg:gap-0 xl:flex xl:flex-row ">
                {weWork.map((step) => (
                    <Card
                        key={step.id}
                        className="sm:p-0 rounded-xl sm:rounded-3xl lg:p-0 lg:w-[300px] lg:h-[300px] lg:shadow-none lg:border-none lg:rounded-none xl:p-0 xl:w-full xl:h-auto xl:shadow-none xl:border-none xl:rounded-none lg:gap-1 xl:gap-1"
                    >
                        <CardHeader className='lg:gap-0 lg:p-0 sm:pb-3'>
                            <div className='gap-0 lg:flex xl:flex sm:hidden md:hidden sm:pb-2 '>
                                <img src={Ellipse} className='w-5 h-5 lg:items-center' alt="" />
                                <img src={Line} className='w-screen' alt="" />
                            </div>
                            <CardTitle
                                id="titleCard"
                                className="font-semibold sm:px-1 sm:pb-0 sm:text-2xl xl:text-3xl sm:leading-normal text-text-default-secondary sm:w-full md:text-lg lg:text-lg lg:font-medium lg:leading-relaxed lg:p-0 lg:pb-2 xl:p-0">
                                {step.title}
                            </CardTitle>
                        </CardHeader>
                        <Spacer />
                        <CardContent className="sm:px-6 lg:p-0 xl:p-0">
                            <p className="text-lg font-normal md:text-base lg:text-base xl:text-xl sm:w-3/4 text-text-default-tertiary lg:items-start lg:leading-relaxed lg:p-0 lg:gap-0 xl:gap-0 xl:p-0">
                                {step.subTitle}
                            </p>
                            <Spacer className="md:h-8" />
                            {step.button && (
                                <Button className="mt-4 transition duration-300 ease-in-out border-none bg-bg-default-secondary md:text-sm lg:text-lg xl:text-2xl xl:p-4 xl:py-6 sm:text-lg bg-default lg:py-2 lg:px-4 hover:translate-y-1"
                                    onClick={() => {
                                        window.scrollTo({
                                            top: document.body.scrollHeight,
                                            behavior: 'smooth'
                                        });
                                    }}>
                                    Start Your Project <Rocket className="w-4 h-4 ml-2" />
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Spacer className="md:block sm:hidden" />
            <Spacer className="md:block sm:hidden" />
            <Spacer className="md:block sm:hidden" />
            <Spacer />
        </div>


    );
};

export default HowWeWork;
