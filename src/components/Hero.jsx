import React from 'react'
import { Button } from '../components/ui/button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";


const Hero = () => {
    return (
        <div id="heroWrapper" className="items-center sm:gap-2 sm:px-4 sm:pb-8 md:m-0">
            <div
                id="heroContainer"
                className="grid items-center p-6 py-6 m-6 border-2 shadow-sm lg:m-4 lg:gap-16 sm:m-2 rounded-xl border-text-brand-tertiary bg-bg-default-secondary lg:grid-cols-2 md:gap-20 md:m-2 md:py-10 md:px-10"
            /* Tambahkan items-center di sini */
            >
                <div id="textHeroWrapper" className="flex flex-col items-stretch gap-4 md:gap-6">
                    <h4 className="font-normal text-text-default md:text-xl">40+ Client Happy</h4>
                    <div id="textHeroContainer" className="flex flex-col items-stretch gap-4">
                        <h1 className="text-4xl font-semibold text-text-default md:text-5xl sm:leading-snug md:leading-normal xl:text:6xl">
                            We're Here to Help You to <span className=" text-text-brand">Rock</span> Digital
                            <span className="text-text-brand"> Innovation</span>
                        </h1>
                        <h3 className="text-xl sm:text-xl text-text-default xl:text-2xl">
                            Empowering businesses to overcome digital challenges with custom software solutions,
                            seamless integrations, and innovative technologies tailored to your needs
                        </h3>
                    </div>
                    <div className="hidden md:flex lg:flex xl:flex 2xl:flex lg:h-12 lg:w-full" />
                    <Button
                        variant="default"
                        size="lg"
                        className="mt-auto rounded-lg py-6 px-10 sm:w-full lg:w-[60%] text-xl md:text-lg lg:px-20 md:mt-auto md:w-[50%] self-start">
                        Start your project <FontAwesomeIcon icon={faRocket} />
                    </Button>
                </div>
                <img
                    src="src/assets/images/heroImage.svg"
                    alt="Illustration"
                    className="hidden w-full h-auto lg:block"
                /* Tidak perlu tambahan di sini untuk align */
                />
            </div>
        </div>
    )
}

export default Hero
