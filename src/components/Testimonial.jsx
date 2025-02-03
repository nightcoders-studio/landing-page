import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Vector5 from "../assets/images/vector5.svg";
import Spacer from "./ui/spacer";
import profilePhoto from "../assets/images/profile photo.svg";

const Testimonial = () => {
    const testimonialContents = [
        {
            id: 1,
            name: "Pranaputra",
            profile: "https://storage.googleapis.com/fastwork-static/69ab99fb-a7f2-4672-b8f5-f51d2bd10abf.jpg", // Properti profile menjadi objek
            position: "Project Manager",
            message: "Pekerja yang handal dan dapat dipercaya sangat memuaskan, Rekomen Banget",
        },
        {
            id: 2,
            name: "Sandy Dwi",
            profile: "https://fw-fileupload-id.s3.ap-southeast-1.amazonaws.com/users/0d34d16e-ca61-4ec1-b261-c4508e921d35/profile/d0e2bd98-29db-4f12-b5bd-bbe4007235d8.jpg",
            // position: "Software Engineer",
            message: "kerjanya oke dan cepet. tks yaa.. good",
        },
        {
            id: 3,
            name: "Yudhis",
            profile: "https://lh3.googleusercontent.com/a/AGNmyxapUBgr632TV00SCzxyHdCgzjnam3qD7Lh5bPluDg",
            position: "Wiraswasta",
            message: "Cepat, sangat komunikatif dan hasil kerja sesuai harapan.",
        },
        {
            id: 4,
            name: "Kalam Adhiansyah Lutfie",
            profile: "https://storage.googleapis.com/fastwork-static/47c28f03-8025-46ab-ab62-6a58c535d774.jpg",
            // position: "Product Owner",
            message: "Konsultasinya bener² membekali aku buat bisa kaji lebih lanjut ^^",
        },
        {
            id: 5,
            name: "Zanio Web",
            profile: "https://storage.googleapis.com/fastwork-static/47c28f03-8025-46ab-ab62-6a58c535d774.jpg",
            position: "Web Dev",
            message: "Sangat komunikatif dan hasil kerja sesuai harapan.",
        },
        {
            id: 6,
            name: "andreassog",
            profile: "https://storage.googleapis.com/fastwork-static/e217226c-757d-4d6b-8c5c-932728e43b97.jpg",
            position: "Designer",
            message: "Benar-benar bekerja di atas ekspektasi saya. Sangat senang dengan hasilnya",
        },
    ];

    return (
        <div className="flex flex-col items-center w-full gap-8 sm:mt-8">
            {/* Header */}

            <div className="z-10 flex flex-col w-screen px-0 lg:w-screen lg:px-16 sm:px-7 md:px-7 sm:items-center sm:mx-0 sm:text-center md:flex md:flex-row md:items-center md:gap-8 md:text-left">
                <h1 className="sm:text-3xl md:text-2xl w-screen font-semibold flex-[40%] lg:text-4xl lg:text-left lg:pr-8">
                    What Our Clients <span className="text-text-brand">Say</span>
                </h1>
                <Spacer className="md:hidden lg:block" />
                <Spacer className="hidden md:block md:flex-[5%] " />
                <h4 className="text-text-default sm:text-lg md:text-base lg:text-xl lg:leading-relaxed flex-[60%] lg:text-right">
                    Hear how we’ve helped businesses achieve their digital dreams
                </h4>
            </div>

            <div className="z-10 flex flex-col items-center w-full">
                <Carousel className="relative z-10 w-full overflow-hidden sm:my-3 sm:mx-6 ">
                    {/* Tambahkan gap yang jelas di CarouselContent */}
                    <CarouselContent gap="gap-6 sm:gap-5 md:gap-8 lg:gap-8  xl:gap-6 sm:px-6 snap-x snap-mandatory scrollbar-hidden">
                        {testimonialContents.map((testimonial) => (
                            <CarouselItem
                                key={testimonial.id}
                                className=" carousel-item z-10 flex-shrink-0 sm:w-1/2 lg:w-1/4 p-6 lg:py-8 sm:px-4 sm:py-10 lg:px-6 h-[300px] rounded-3xl border border-[#f1c480] backdrop-blur-sm bg-[rgba(17,0,0,0.04)] snap-align-center"
                            >
                                <div className="flex flex-col items-start justify-between gap-0">
                                    {/* Header */}
                                    <div className="flex items-center justify-center gap-4 sm:px-4 lg:px-0">
                                        <img
                                            className="w-12 h-12 rounded-full sm:w-10 lg:w-16 lg:h-auto"
                                            src={testimonial.profile}
                                        />
                                        <div>
                                            <h3 className="font-semibold sm:text-xl md:text-2xl text-text-default xl:text-2xl">
                                                {testimonial.name}
                                            </h3>

                                            <p className="text-base font-normal text-text-default lg:text-lg sm:text-lg xl:text-lg">
                                                {testimonial.position}
                                            </p>
                                        </div>
                                    </div>
                                    <Spacer className="block h-10 lg:h-4 spacer " />
                                    <div className='bg-[#f1c480] z-100 lg:h-4 sm:h-2' />
                                    {/* Message */}
                                    <p className="font-normal align-bottom sm:text-xl text-text-default md:text-2xl lg:text-lg xl:text-2xl lg:w-full sm:px-4 sm:pb-8 lg:px-2">
                                        {testimonial.message}
                                    </p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>
            </div>

            <Spacer />
            {/* Background Decoration */}
            <img
                src={Vector5}
                className="absolute z-0 h-auto w-96 sm:w-72 md:w-80 lg:w-96 sm:top-[4050px] md:top-[3260px] lg:top-[4000px] xl:top-[4000px] 2xl:top-[6000] left-1"
                alt="Background Decoration"
            />
            <Spacer />
        </div>
    );
};

export default Testimonial;
