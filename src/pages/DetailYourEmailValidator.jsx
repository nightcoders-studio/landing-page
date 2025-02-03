import Spacer from "../components/ui/spacer";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import vector4 from "../assets/images/vector4.svg";
import PropTypes from "prop-types";
import thumbnailYourEmailValidator from "../assets/images/thumbnailYourEmailValidator.png";
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
                        Solution for ensuring data quality with comprehensive email verification
                    </h1>
                    <h3 className="text-xl text-text-default xl:leading-normal md:text-xl 3xl:text-6xl 3xl:leading-normal">
                        <a href="https://youremailvalidator.com"><b className="font-medium text-text-default-tertiary">Your Email Validator</b></a>
                    </h3>
                </div>
            </div>

            {/* Image Section */}
            <img
                className="order-1 w-full h-auto overflow-auto justify-self-end lg:w-full lg:h-auto gambarHero lg:order-2 lg:pr-3 3xl:w-full 3xl:h-auto"
                src={thumbnailYourEmailValidator}
                alt="mugee thumbnail"
            />
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
                Your Email Validator is a robust, open-source email validation solution designed to ensure data quality in applications by providing comprehensive email address verification. Our implementation offers both single and bulk validation capabilities through a RESTful API, making it ideal for businesses of all sizes.
            </h4>

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
                            <h2 className="text-xl font-medium sm:text-base">{item.title}</h2>
                            {openKeyFeaturesIndexes.includes(index) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                        </div>
                        {/* Show separator only when the accordion is open */}
                        {openKeyFeaturesIndexes.includes(index) && (
                            <Separator className="lg:w-2/6 bg-text-brand-tertiary" />
                        )}
                        <div
                            className={`mt-2 sm:text-base md:text-xl transition-all duration-300 ease-in-out max-h-[${openKeyFeaturesIndexes.includes(index) ? '500px' : '0'}] overflow-hidden`}
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
                            <h2 className="text-xl font-medium sm:text-base md:text-xl">{item.title}</h2>
                            {openUseCaseIndexes.includes(index) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                        </div>
                        {/* Show separator only when the accordion is open */}
                        {openUseCaseIndexes.includes(index) && (
                            <Separator className="lg:w-2/6 bg-text-brand-tertiary" />
                        )}
                        <div
                            className={`mt-2 text-xl sm:text-base transition-all duration-300 ease-in-out max-h-[${openUseCaseIndexes.includes(index) ? '500px' : '0'}] overflow-hidden`}
                        >
                            {openUseCaseIndexes.includes(index) && item.detail}
                        </div>
                    </div>
                ))}
            </div>

            {/* Technical stack layout */}
            <div className="flex flex-row items-center justify-between mt-10">
                <div className="w-full">
                    <h2 className="font-semibold sm:text-xl lg:text-3xl text-text-default about-title">
                        Technical Stacks
                    </h2>
                    <Separator className="my-4 bg-text-brand-tertiary" />
                    <div className="grid gap-4 mt-4 md:grid-cols-3 sm:grid-cols-1 text-text-xl">
                        {/* Backend Section */}
                        <div className="flex items-center gap-2">
                            <Code size={24} />
                            <div className="flex flex-col">
                                <b>Backend</b>
                                <ul>Python with FastAPI</ul>
                            </div>
                        </div>

                        {/* Database Section */}
                        <div className="flex items-center gap-2">
                            <Database size={24} />
                            <div className="flex flex-col">
                                <b>Database</b>
                                <ul>MySQL</ul>
                            </div>
                        </div>

                        {/* Authentication Section */}
                        <div className="flex items-center gap-2">
                            <Lock size={24} />
                            <div className="flex flex-col">
                                <b>Authentication</b>
                                <ul>JWT-Based Token System</ul>
                            </div>
                        </div>

                        {/* Email Services Section */}
                        <div className="flex items-center gap-2">
                            <Mail size={24} />
                            <div className="flex flex-col">
                                <b>Email Services</b>
                                <ul>SMTP Integration</ul>
                            </div>
                        </div>

                        {/* Configuration Section */}
                        <div className="flex items-center gap-2">
                            <Settings size={24} />
                            <div className="flex flex-col">
                                <b>Configuration</b>
                                <ul>Environment-based setup</ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Spacer />
            {/* Workflow Diagram */}
            <div className="flex items-center justify-center w-full mt-8 sm:m-0">
                <img
                    src={workflowEmailValidation}
                    alt="Workflow Diagram"
                    className="zoomable-img w-full h-auto sm:w-full sm:h-auto lg:max-w-1.5/6 px-0"
                />
            </div>




            {/* Implementations benefit  */}
            <div className="grid gap-6 implementation-benefit">
                <h2 className="font-semibold sm:text-3xl lg:text-4xl text-text-default lg:pl-1 about-title">Implementation Benefits</h2>
                <div className="md:w-3/4 lg:pl-1 lg:text-xl ! md:text-3xl">
                    <ul className="text-xl">Reduced bounce rates by up to 95%</ul>
                    <ul className="text-xl">Improved deliverability in email campaigns</ul>
                    <ul className="text-xl">Prevention of fake account creation</ul>
                    <ul className="text-xl">Enhanced data quality in customer databases</ul>
                </div>
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

const DetailYourEmailValidator = () => {
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
            <Spacer className="md:h-20 sm:block" />
            <StartProjectSection form={form} onSubmit={onSubmit} />
            <Spacer className="md:h-20 sm:block lg:hidden" />
            <Footer />
        </div>
    );
};


export default DetailYourEmailValidator;
