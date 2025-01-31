import Spacer from "./ui/spacer";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const OurClients = () => {
    const clientsLogo = [
        { id: 1, logo: "src/assets/images/LogoKasyapi.svg" },
        { id: 2, logo: "src/assets/images/LogoPoldaAceh.svg" },
        { id: 3, logo: "src/assets/images/LogoKemenkeu.svg" },
        { id: 4, logo: "src/assets/images/LogoTOU.svg" },
        { id: 5, logo: "src/assets/images/LogoMugee.svg" },
    ];

    return (
        <div className="hidden overflow-x-hidden sm:flex sm:flex-col sm:items-center sm:w-full sm:mt-8 sm:gap-8">
            {/* Header */}
            <div className="sm:flex sm:flex-col sm:items-center">
                <div className="flex flex-col w-screen px-0 lg:w-screen lg:px-16 md:px-7 sm:px-7 sm:items-center sm:mx-0 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left">
                    <h1 className="sm:text-3xl md:text-2xl w-screen font-semibold flex-[50%] lg:text-4xl lg:text-left lg:pr-8">
                        Who Are Our <span className="text-text-brand">Clients</span>?
                    </h1>
                    <Spacer className="md:hidden" />
                    <Spacer className="hidden md:block md:flex-[5%]" /> {/* Spacer for gap */}
                    <h4 className="text-text-default sm:text-lg md:text-base lg:text-xl lg:leading-relaxed lg:flex-[30%] lg:text-right">
                        Trusted by businesses across industries to deliver exceptional digital solutions
                    </h4>
                </div>

                <Spacer />

                {/* Carousel */}

            </div>
            <Carousel
                className="relative w-full h-48 lg:py-0"
                opts={{
                    loop: true, // Enable infinite scroll
                    align: "start",
                    skipSnaps: false,
                }}
            >
                <Spacer />
                <Spacer />
                <Spacer className="sm:hidden md:block" />
                {/* <CarouselContent className="flex items-center justify-center overflow-x-auto snap-x snap-mandatory scrollbar-hidden"> */}
                <CarouselContent className='flex gap-0 sm:mx-16 md:mx-32'>
                    {clientsLogo.map((client) => (
                        <CarouselItem
                            key={client.id}
                            className="flex items-center justify-center h-full p-0"
                        >
                            <img
                                src={client.logo}
                                alt={`Client Logo ${client.id}`}
                                className="object-contain lg:min-w-32 sm:min-w- sm:px-4"
                                style={{
                                    filter: 'grayscale(100%)',
                                    opacity: 1, // Opsional: Jika ingin membuat abu-abu lebih soft
                                }}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <Spacer className='sm:h-auto xl:h-32' />
        </div>
    );
};

export default OurClients;
