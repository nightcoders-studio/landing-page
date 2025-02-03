import Spacer from "../components/ui/spacer";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import vector4 from "../assets/images/vector4.svg";
import PropTypes from "prop-types";
import ThumbnailMugee from "../assets/images/thumbnail-Mugee.png";
import workflowEmailValidation from "../assets/images/workflowEmailValidation.png";
import { useState } from "react";
import { ChevronDown, ChevronUp, Database, Lock, Mail, Settings, Code, Divide } from "lucide-react";
import { Separator } from "@/components/ui/separator"



const HeroSection = () => (
    <div id="heroWrapper" className="items-center sm:gap-2 sm:px-4 sm:pb-8 sm:pt-8 md:m-0 lg:mx-8">
        <Spacer className="sm:h-4 md:h-10" />
        <div
            id="heroContainer"
            className="grid items-center p-6 py-6 m-6 border-2 shadow-sm lg:m-4 lg:gap-7 xl:gap-4 sm:m-2 rounded-xl border-text-brand-tertiary bg-bg-default-secondary lg:grid-cols-[45%_55%] sm:gap-10 md:gap-20 md:m-2 md:py-10 md:px-10 3xl:p-32 3xl:rounded-3xl 3xl:border-4"
        >
            {/* Text Section */}
            <div id="textHeroWrapper" className="flex flex-col items-stretch order-2 gap-4 md:gap-5 lg:order-1 3xl:gap-11">
                <div id="textHeroContainer" className="flex flex-col items-stretch gap-4">
                    <h1 className="text-xl font-semibold text-text-default md:text-2xl sm:leading-snug md:leading-normal lg:leading-normal lg:text-3xl xl:text-4xl xl:leading-normal sm:w-3/4 3xl:text-7xl 3xl:leading-normal">
                        Bringing fresh groceries right into your home
                    </h1>
                    <h3 className="text-xl text-text-default xl:leading-normal md:text-xl 3xl:text-6xl 3xl:leading-normal">
                        <a href="https://mugee.id"><b className="font-medium text-text-default-tertiary">Mugee</b></a>
                    </h3>
                </div>
            </div>

            {/* Image Section */}
            <div className="order-1 w-full h-auto overflow-auto justify-self-end lg:w-full lg:h-auto gambarHero lg:order-2 lg:pr-3 3xl:w-full 3xl:h-auto" style={{ height: '100%', overflow: 'auto' }}>
                <img
                    src={ThumbnailMugee}
                    alt="mugee thumbnail"
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    </div>
);


const AboutProjectSection = () => {
    const [openIndexes, setOpenIndexes] = useState([]);
    const [openKeyFeaturesIndexes, setOpenKeyFeaturesIndexes] = useState([]);
    const [openUseCaseIndexes, setOpenUseCaseIndexes] = useState([]);

    const toggleAccordion = (index, type) => {
        if (type === "keyFeatures") {
            setOpenKeyFeaturesIndexes(prevState =>
                prevState.includes(index)
                    ? prevState.filter(i => i !== index)
                    : [...prevState, index]
            );
        } else if (type === "useCase") {
            setOpenUseCaseIndexes(prevState =>
                prevState.includes(index)
                    ? prevState.filter(i => i !== index)
                    : [...prevState, index]
            );
        }
    };

    const items = [
        {
            id: 1,
            title: "Comprehensive Validation Suite",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>Email format verification</li>
                    <li>Domain validation with MX record checking</li>
                    <li>Disposable email detection</li>
                    <li>Bulk validation capabilities for enterprise needs</li>
                </ul>
            ),
        },
        {
            id: 2,
            title: "Flexible Integration Options",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>RESTful API for seamless integration</li>
                    <li>SDKs available for multiple languages</li>
                    <li>Customizable validation rules</li>
                    <li>Real-time verification</li>
                </ul>
            ),
        },
    ];

    const itemsUsecase = [
        {
            id: 1,
            title: "User Registration Systems",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>Validate email addresses during sign-up</li>
                    <li>Prevent fake accounts with disposable email detection</li>
                </ul>
            ),
        },

        {
            id: 2,
            title: "Marketing Platforms",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>Email format verification</li>
                    <li>Domain validation with MX record checking</li>
                    <li>Disposable email detection</li>
                    <li>Bulk validation capabilities for enterprise needs</li>
                </ul>
            ),
        },

    ]



    return (
        <div className="flex flex-col w-full gap-6 xl:gap-4 about-container px-7 sm:flex sm:flex-col md:px-16">
            <h1 className="font-semibold sm:text-3xl lg:text-4xl text-text-default lg:pl-1 about-title">
                About This Project
            </h1>
            <h4 className="text-text-default md:w-3/4 lg:pl-1 lg:text-xl md:text-xl about-description">
                Mugee is a web application that offers a wide range of grocery and fresh market products delivered right to your doorstep. With just your mobile phone, you can conveniently order fresh products. We are committed to providing ease, convenience, and top-quality service in every delivery, ensuring you always receive fresh and high-quality items.          </h4>

            <Spacer />

            {/* Key Features */}
            <div className="md:grid md:gap-2 md:py-0">
                <h2 className="font-semibold sm:text-xl lg:text-2xl text-text-default lg:pl-1 about-title">
                    Key Features
                </h2>
                {items.map((item, index) => (
                    <div key={item.id} className="p-2 pl-1 mb-1">
                        <div
                            className="flex items-center gap-4 cursor-pointer"
                            onClick={() => toggleAccordion(index, "keyFeatures")}
                        >
                            <h2 className="text-xl font-medium">{item.title}</h2>
                            {openKeyFeaturesIndexes.includes(index) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                        </div>
                        {/* Show separator only when the accordion is open */}
                        {openKeyFeaturesIndexes.includes(index) && (
                            <Separator className="lg:w-2/6 bg-text-brand-tertiary" />
                        )}
                        <div
                            className={`mt-2 text-xl transition-all duration-300 ease-in-out max-h-[${openKeyFeaturesIndexes.includes(index) ? '500px' : '0'}] overflow-hidden`}
                        >
                            {openKeyFeaturesIndexes.includes(index) && item.detail}
                        </div>
                    </div>
                ))}
            </div>

            {/* Use Case */}
            <div className="md:grid md:gap-2 md:py-0">
                <h2 className="font-semibold sm:text-xl lg:text-2xl text-text-default lg:pl-1 about-title">
                    Use Case
                </h2>
                {itemsUsecase.map((item, index) => (
                    <div key={item.id} className="p-2 pl-1 bg-slate-100">
                        <div
                            className="flex items-center gap-4 cursor-pointer"
                            onClick={() => toggleAccordion(index, "useCase")}
                        >
                            <h2 className="text-xl font-medium">{item.title}</h2>
                            {openUseCaseIndexes.includes(index) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                        </div>
                        {/* Show separator only when the accordion is open */}
                        {openUseCaseIndexes.includes(index) && (
                            <Separator className="lg:w-2/6 bg-text-brand-tertiary" />
                        )}
                        <div
                            className={`mt-2 text-xl transition-all duration-300 ease-in-out max-h-[${openUseCaseIndexes.includes(index) ? '500px' : '0'}] overflow-hidden`}
                        >
                            {openUseCaseIndexes.includes(index) && item.detail}
                        </div>
                    </div>
                ))}
            </div>

            {/* Workflow Diagram */}
            <div className="flex items-center justify-center w-full mt-8">
                <img src={workflowEmailValidation} alt="Workflow Diagram" className="h-auto max-w-1.5/6 px-20" />
            </div>
        </div>
    );
};





const StartProjectSection = ({ form, onSubmit }) => (
    <div className="relative grid grid-cols-1 lg:grid-cols-[35%,65%] w-screen px-0 lg:px-16 md:px-7 sm:items-center sm:mx-0 sm:text-center md:text-left md:pb-36 lg:pt-16 lg:gap-8">
        {/* Header Section */}
        <div className="relative flex flex-col md:w-[364px] lg:w-full text-4xl font-semibold leading-[44px] sm:text-left lg:items-start">
            <span className="relative z-10 align-text-top text-text-default sm:text-3xl lg:text-5xl lg:mb-6 sm:pl-7 lg:self-start sm:pb-5 lg:leading-normal">
                Start Your Project
            </span>
        </div>

        {/* Form Section */}
        <div className="z-10 flex flex-col flex-grow gap-10 sm:w-full sm:px-8 sm:align-text-left">
            <Form {...form} className="md:w-full">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Field */}
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="sm:flex sm:flex-col sm:items-start">
                                <FormLabel className="text-base text-text-default sm:mb-2 sm:text-xl md:text-2xl">Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Type your or company name here"
                                        className="px-4 py-3 bg-[#e8eaec] rounded-lg focus:ring-2 focus:ring-blue-400"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* How Can I Help Field */}
                    <FormField
                        name="help"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="w-full sm:flex sm:flex-col sm:items-start">
                                <FormLabel className="text-base text-text-default sm:mb-2 sm:text-xl md:text-2xl">How Can I Help You?</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Type here"
                                        rows={4}
                                        className="px-4 py-3 bg-[#e8eaec] rounded-lg focus:ring-2 focus:ring-blue-400"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="transition ease-in-out w-full text-text-default-quaternary px-4 lg:py-6 flex items-center justify-center text-base bg-transparent hover:shadow-none bg-[#293239] border-solid border-2 border-[#e4882b] rounded-lg lg:text-xl hover:translate-y-1 sm:text-lg md:text-2xl md:py-6"
                    >
                        Send Message
                    </Button>
                </form>
            </Form>
        </div>

        {/* Vector Background */}
        <img
            src={vector4}
            alt="Vector Background"
            className="absolute lg:left-20 w-[150px] sm:w-[220px] sm:bottom-0 lg:bottom-0 sm:left-14 lg:w-[380px] opacity-80 z-0"
            style={{
                transform: 'translateX(-50%)',
            }}
        />
        <Spacer className="sm:h-1 lg:h-12" />
    </div>
);

StartProjectSection.propTypes = {
    form: PropTypes.shape({
        handleSubmit: PropTypes.func.isRequired,
        control: PropTypes.object.isRequired,
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
};

const DetailMugee = () => {
    const form = useForm({
        defaultValues: {
            name: "",
            help: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <div>
            <HeroSection />
            <Spacer className="lg:block sm:hidden" />
            <AboutProjectSection />
            <Spacer />
            <StartProjectSection form={form} onSubmit={onSubmit} />
            <Spacer className="md:h-20 sm:block md:hidden" />
            <Footer />
        </div>
    );
};


export default DetailMugee;
