import { Button } from "../components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Spacer from "./ui/spacer";
import { Rocket } from 'lucide-react';

const Hero = () => {
    return (
        <div
            id="heroWrapper"
            className="items-center sm:gap-2 sm:px-4 sm:pb-8 sm:pt-8 md:m-0"
        >
            <Spacer className="hidden h-28 3xl:block" />
            <div
                id="heroContainer"
                className="grid items-center p-6 py-6 m-6 border-2 3xl:border-4 3xl:rounded-3xl 3xl:mx-12 sm:justify-between shadow-sm lg:m-4 lg:gap-7 xl:gap-4 sm:m-2 rounded-xl border-text-brand-tertiary bg-bg-default-secondary lg:[grid-template-columns:55%_45%] md:gap-20 md:m-2 md:py-10 md:px-10 3xl:p-32"
            >
                <div
                    id="textHeroWrapper"
                    className="flex flex-col items-stretch gap-6 md:gap-4 lg:gap-4 xl:gap-4 3xl:gap-11"
                >
                    <h4 className="font-normal text-text-default md:text-xl lg:text-2xl 3xl:text-5xl">
                        40+ Client Happy
                    </h4>
                    <div
                        id="textHeroContainer"
                        className="flex flex-col items-stretch gap-4"
                    >
                        <h1 className="text-4xl font-semibold text-text-default md:text-4xl sm:leading-snug md:leading-normal lg:leading-normal lg:text-4xl xl:text-5xl xl:leading-normal 3xl:text-9xl 3xl:leading-normal">
                            We&lsquo;re Here to Help You to <span className=" text-text-brand">Rock</span> Digital
                            <span className="text-text-brand"> Innovation</span>
                        </h1>
                        <h3 className="text-xl sm:text-xl text-text-default xl:text-xl xl:pr-24 md:text-xl xl:leading-normal 3xl:text-5xl 3xl:leading-normal">
                            Empowering businesses to overcome digital challenges with custom software solutions,
                            seamless integrations, and innovative technologies tailored to your needs
                        </h3>
                    </div>
                    <div className="hidden md:flex lg:flex xl:flex 2xl:flex lg:h-12 lg:w-full" />
                    <Button variant="default" className="flex items-center sm:w-full md:w-auto">
                        Start Your Project <Rocket className="z-10 w-5 h-5 ml-2 text-current 3xl:w-12 3xl:h-auto" />
                    </Button>

                </div>

                <img
                    src="src/assets/images/heroImage.svg"
                    alt="Illustration"
                    className="hidden w-full h-auto lg:block "
                />
            </div>
            <Spacer />
        </div>
    );
};

export default Hero;
