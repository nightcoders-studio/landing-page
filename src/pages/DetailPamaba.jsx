import Spacer from "../components/ui/spacer";
import Footer from "../components/Footer";
import thumbnailPamaba from "../assets/images/thumbnailPamaba.png";
import { useState } from "react";
import { ChevronDown, ChevronUp, Settings, LaptopMinimalCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import StartProject from "@/components/StartProject"



const HeroSection = () => (
    <div id="heroWrapper" className="items-center sm:gap-2 sm:px-4 sm:pb-8 sm:pt-8 md:m-0 lg:mx-8">
        <Spacer className="sm:hidden md:h-10" />
        <div
            id="heroContainer"
            className="grid items-center p-6 py-6 m-6 border-2 shadow-sm lg:m-4 lg:gap-7 xl:gap-4 sm:m-2 rounded-xl border-text-brand-tertiary bg-bg-default-secondary md:grid-cols-[55%_45%] sm:grid-cols-1 sm:gap-4 md:gap-4 md:m-2 md:py-10 md:px-10 3xl:p-32 3xl:rounded-3xl 3xl:border-4"
        >
            {/* Text Section */}
            <div id="textHeroWrapper" className="flex flex-col items-stretch order-2 gap-4 md:gap-5 lg:order-1 3xl:gap-11">
                <div id="textHeroContainer" className="flex flex-col items-stretch gap-4">
                    <h1 className="text-xl font-semibold text-text-default md:text-2xl sm:leading-snug md:leading-normal lg:leading-normal lg:text-3xl xl:text-4xl xl:leading-normal sm:w-3/4 3xl:text-7xl 3xl:leading-normal">
                        Providing interactive and meaningful earthquake disaster mitigation education for children.</h1>
                    <Button>
                        <a href="https://tesujianonline.com"><b className="font-medium text-white">Pamaba</b></a>
                    </Button>
                </div>
            </div>

            {/* Image Section */}
            <div className="order-1 w-full h-auto overflow-auto justify-self-end lg:w-full lg:h-auto gambarHero lg:order-2 lg:pr-3 3xl:w-full 3xl:h-auto" style={{ height: '100%', overflow: 'auto' }}>
                <img
                    src={thumbnailPamaba}
                    alt="mugee thumbnail"
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    </div>
);


const AboutProjectSection = () => {
    // const [openIndexes, setOpenIndexes] = useState([]);
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

    const itemsKeyFeatures = [
        {
            id: 1,
            title: "Interactive Learning Modules",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>Engaging and child-friendly educational content</li>
                    <li>Quizzes and activities to reinforce learning</li>
                    <li>Animated and interactive simulations</li>
                    <li>Multilingual support</li>
                </ul>
            ),
        },
        {
            id: 2,
            title: "Localized Content",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>Content tailored to regional disaster scenarios</li>
                    <li>Real-life case studies from affected areas</li>
                    <li>Relevant resources for local communities</li>
                    <li>Frequent updates with current data</li>
                </ul>
            ),
        },
        {
            id: 3,
            title: "User-Friendly Interface",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>Easy-to-navigate design for children</li>
                    <li>Accessible for users with different needs</li>
                    <li>Detailed instructions and help resources</li>
                    <li>Parental controls and guidance</li>
                </ul>
            ),
        },
    ];

    const itemsUsecase = [
        {
            id: 1,
            title: "School Education Programs",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>Integrate disaster mitigation into school curriculums</li>
                    <li>Conduct interactive classroom activities</li>
                </ul>
            ),
        },
        {
            id: 2,
            title: "Community Outreach",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>Educate local communities about disaster preparedness</li>
                    <li>Organize community workshops and events</li>
                </ul>
            ),
        },
        {
            id: 3,
            title: "Emergency Response Training",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>Train children on emergency response actions</li>
                    <li>Provide resources for family emergency planning</li>
                </ul>
            ),
        },
    ];





    return (
        <div className="flex flex-col w-full gap-6 xl:gap-4 about-container px-7 sm:flex sm:flex-col md:px-16">
            <h1 className="font-semibold sm:text-3xl lg:text-4xl text-text-default lg:pl-1 about-title">
                About This Project
            </h1>
            <h4 className="text-text-default md:w-3/4 lg:pl-1 lg:text-xl md:text-xl about-description">
                The PAMABA app (Palu Aman Bencana) aims to provide interactive and meaningful earthquake disaster mitigation education for children. The name &#34;Palu&#34; refers to the capital of Central Sulawesi, often affected by earthquakes, highlighting the app&#34;s contextual relevance to disaster-prone areas. &#34;Aman&#34; signifies the aim to create a sense of safety for children after learning about disaster mitigation, while &#34;Bencana&#34; emphasizes the focus on disaster preparedness. &#34;PAMABA&#34; is an abbreviation designed to be memorable and child-friendly, attracting the attention of young users. </h4>
            <Spacer />

            {/* Key Features */}
            <div className="md:grid md:gap-2 md:py-0">
                <h2 className="font-semibold lg:text-3xl md:text-2xl text-text-default lg:pl-1 about-title">
                    Key Features
                </h2>
                {itemsKeyFeatures.map((item, index) => (
                    <div key={item.id} className="p-2 pl-1 mb-1">
                        <div
                            className="flex items-center gap-4 cursor-pointer"
                            onClick={() => toggleAccordion(index, "keyFeatures")}
                        >
                            <h2 className="text-xl font-medium sm:text-base md:text-xl">{item.title}</h2>
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
                <h2 className="font-semibold sm:text-xl lg:text-3xl md:text-2xl text-text-default lg:pl-1 about-title">
                    Use Case
                </h2>
                {itemsUsecase.map((item, index) => (
                    <div key={item.id} className="p-2 pl-1 bg-slate-100">
                        <div
                            className="flex items-center gap-4 cursor-pointer"
                            onClick={() => toggleAccordion(index, "useCase")}
                        >
                            <h2 className="text-xl font-medium sm:text-base md:text-xl ">{item.title}</h2>
                            {openUseCaseIndexes.includes(index) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                        </div>
                        {/* Show separator only when the accordion is open */}
                        {openUseCaseIndexes.includes(index) && (
                            <Separator className="lg:w-2/6 bg-text-brand-tertiary" />
                        )}
                        <div
                            className={`mt-2 text-xl sm:text-base md:text-xl text-text-default-secondary transition-all duration-300 ease-in-out max-h-[${openUseCaseIndexes.includes(index) ? '500px' : '0'}] overflow-hidden`}
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
                    <div className="grid gap-4 mt-4 md:grid-cols-3 md:text-xl sm:text-basesm:grid-cols-1 text-text-xl">
                        {/* Frontend Section */}
                        <div className="flex items-center gap-2">
                            <LaptopMinimalCheck size={24} />
                            <div className="flex flex-col">
                                <b>Frontend</b>
                                <ul>React JS</ul>
                                <ul>Tailwind</ul>
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
            {/* Workflow Diagram
            <div className="flex items-center justify-center w-full mt-8">
                <img src={''} alt="Workflow Diagram" className="h-auto max-w-1.5/6 px-20" />
            </div> */}


            {/* Implementations benefit
            <div className="grid gap-6 implementation-benefit">
                <h2 className="font-semibold sm:text-3xl lg:text-4xl text-text-default lg:pl-1 about-title">Implementation Benefits</h2>
                <div className="md:w-3/4 lg:pl-1 lg:text-xl ! md:text-3xl">
                    <ul className="text-xl">Reduced bounce rates by up to 95%</ul>
                    <ul className="text-xl">Improved deliverability in email campaigns</ul>
                    <ul className="text-xl">Prevention of fake account creation</ul>
                    <ul className="text-xl">Enhanced data quality in customer databases</ul>
                </div>
            </div> */}

        </div>
    );
};


const DetailPamaba = () => {

    return (
        <div>
            <HeroSection />
            <Spacer className="lg:block sm:hidden" />
            <AboutProjectSection />
            <Spacer />
            <Spacer className="md:h-20 sm:block" />
            <StartProject />
            <Footer />
        </div>
    );
};


export default DetailPamaba;
