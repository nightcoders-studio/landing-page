import Spacer from "../components/ui/spacer";
import Footer from "../components/Footer";
import ThumbnailMugee from "../assets/images/thumbnail-Mugee.webp";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Separator } from "@/components/ui/separator"
import StartProject from "@/components/StartProject";
import { Button } from "@/components/ui/button";



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
                    <h1 className="text-xl font-semibold text-text-default md:text-2xl sm:leading-snug md:leading-normal lg:leading-normal lg:text-4xl xl:text-4xl xl:leading-normal sm:w-3/4 3xl:text-7xl 3xl:leading-normal">
                        Bringing fresh groceries right into your home
                    </h1>
                    <Button>
                        <a href="https://mugee.id"><b className="font-medium text-white">mugee.id</b></a>
                    </Button>
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
            title: "Wide Range of Products",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>Extensive selection of grocery and fresh market products</li>
                    <li>Regular updates to product offerings</li>
                    <li>High-quality and fresh items</li>
                    <li>Specialty and seasonal products available</li>
                </ul>
            ),
        },
        {
            id: 2,
            title: "Convenient Ordering",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>Easy-to-use mobile application</li>
                    <li>Simple and quick ordering process</li>
                    <li>Real-time order tracking</li>
                    <li>Secure payment options</li>
                </ul>
            ),
        },
        {
            id: 3,
            title: "Reliable Delivery Service",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>Timely and accurate delivery</li>
                    <li>Delivery right to your doorstep</li>
                    <li>Freshness guaranteed</li>
                    <li>Multiple delivery slots to suit your schedule</li>
                </ul>
            ),
        },
    ];


    const itemsUsecase = [
        {
            id: 1,
            title: "Daily Grocery Shopping",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>Order daily essentials and fresh produce</li>
                    <li>Save time with convenient home delivery</li>
                </ul>
            ),
        },
        {
            id: 2,
            title: "Special Occasions and Events",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>Get fresh ingredients for special meals</li>
                    <li>Order specialty products for events and gatherings</li>
                </ul>
            ),
        },
        {
            id: 3,
            title: "Health-Conscious Shopping",
            detail: (
                <ul className="pl-5 mt-2 list-disc">
                    <li>Access to a variety of fresh and organic products</li>
                    <li>Order healthy snacks and ingredients</li>
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
                Mugee is a web application that offers a wide range of grocery and fresh market products delivered right to your doorstep. With just your mobile phone, you can conveniently order fresh products. We are committed to providing ease, convenience, and top-quality service in every delivery, ensuring you always receive fresh and high-quality items.</h4>
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
        </div>
    );
};


const DetailMugee = () => {
    return (
        <div>
            <HeroSection />
            <Spacer className="lg:block sm:hidden" />
            <AboutProjectSection />
            <Spacer />
            <StartProject />
            <Spacer className="md:h-20 sm:block md:hidden" />
            <Footer />
        </div>
    );
};


export default DetailMugee;
