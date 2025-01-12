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
                <div className="flex flex-col w-full px-12 howWeWork-headerContainer sm:items-center sm:mx-8 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left">
                    <h1 className="sm:text-3xl sm:font-semibold flex-[60%]">
                        Who Are Our <span className="text-text-brand">Clients</span>?
                    </h1>
                    <Spacer className="md:hidden" />
                    <Spacer className="hidden md:block md:flex-[5%] " /> {/* Spacer untuk jarak */}
                    <h4 className="text-gray-600 sm:text-lg md:text-right sm:leading-normal flex-[45%]">
                        Trusted by businesses across industries to deliver exceptional digital solutions
                    </h4>
                </div>

                <Spacer />

                {/* Carousel */}
                <Carousel className="relative w-full h-48 m-8">
                    <CarouselContent className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hidden">
                        {clientsLogo.map((client) => (
                            <CarouselItem
                                key={client.id}
                                className="flex items-center justify-center h-48 w-28 snap-start"
                            >
                                <img
                                    src={client.logo}
                                    alt={`Client Logo ${client.id}`}
                                    className="object-contain h-84"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>


                <Spacer />
            </div>
        </div>
    )
}

export default OurClients
