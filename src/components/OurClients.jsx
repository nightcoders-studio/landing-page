import React from 'react'
import Spacer from './ui/spacer'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

const OurClients = () => {
    const clientsLogo = [
        { id: 1, logo: "src/assets/images/LogoKasyapi.svg" },
        { id: 2, logo: "src/assets/images/LogoPoldaAceh.svg" },
        { id: 3, logo: "src/assets/images/LogoKemenkeu.svg" },
        { id: 4, logo: "src/assets/images/LogoTOU.svg" },
        { id: 5, logo: "src/assets/images/LogoMugee.svg" },
    ]

    return (
        <div className="hidden overflow-x-hidden sm:flex sm:flex-col sm:items-center sm:w-full sm:mt-8 sm:gap-8">
            {/* Header */}
            <div className="sm:flex sm:flex-col sm:items-center">
                <div className="flex flex-col w-screen px-0 lg:w-screen lg:px-16 md:px-7 sm:px-7 sm:items-center sm:mx-0 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left">
                    <h1 className="sm:text-3xl md:text-2xl w-screen font-semibold flex-[50%] lg:text-4xl lg:text-left lg:pr-8">
                        Who Are Our <span className="text-text-brand">Clients</span>?
                    </h1>
                    <Spacer className="md:hidden" />
                    <Spacer className="hidden md:block md:flex-[5%] " /> {/* Spacer untuk jarak */}
                    <h4 className="text-gray-600 sm:text-lg md:text-right lg:text-xl sm:leading-normal">
                        Trusted by businesses across industries to deliver exceptional digital solutions
                    </h4>
                </div>

                <Spacer />

                {/* Carousel */}
                <Carousel className="relative w-full h-48 m-8 lg:py-0">
                    <Spacer />
                    <CarouselContent className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hidden">
                        {clientsLogo.map((client) => (
                            <CarouselItem
                                key={client.id}
                                className="flex items-center justify-center h-full p-0 snap-start"
                            >
                                <img
                                    src={client.logo}
                                    alt={`Client Logo ${client.id}`}
                                    className="object-contain min-w-28"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            {/* <Spacer className="lg:hidden" />
            <Spacer className="lg:hidden" /> */}
        </div>
    )
}

export default OurClients
