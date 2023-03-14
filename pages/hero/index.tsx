import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import Title from "@/components/Title";
import PostDetail from "@/components/PostDetail";
import Button from "@/components/Button";

function Hero () {
    return (
        <>
            <Swiper
                loop={true}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[100vh]"
            >
                <SwiperSlide className="aspect-video">
                    <img className="relative h-full w-full object-cover brightness-[.30]" src="https://business-cambodia.com/cms/assets/b966383e-bb33-478b-ab03-0af0ec710058" alt="" />
                    <div className="absolute w-full md:w-4/5 lg:w-2/4 top-[30%] lg:top-1/4 p-10 md:pl-10">
                        <Title size="xxxl" lineHeight="normal" colors="white">អាមេរិកដំឡើងការប្រាក់ថែម! ទាំងនេះជាប្រទេសនឹងរងផលប៉ះពាល់បើអាមេរិកដំឡើងការប្រាក់ដល់៦%</Title>
                        <div className="my-5"><PostDetail author="Chhun" category="Technology" date="March 23 2023" colors="white" /></div>
                        <div className="flex">
                            <div className="mr-5"><Button styles="fill">បន្តការអាន</Button></div>
                            <Button styles="transparent">អំពីអ្នកនិពន្ធ</Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <img className="h-full w-full object-cover brightness-[.30]" src="https://business-cambodia.com/cms/assets/e16aa577-32bf-4f12-b620-edd806f97d00" alt="" />
                    <div className="absolute w-full md:w-3/4 lg:w-2/4 top-[30%] lg:top-1/4 p-10 md:pl-10">
                        <Title size="xxxl" lineHeight="normal" colors="white">អាមេរិកដំឡើងការប្រាក់ថែម! ទាំងនេះជាប្រទេសនឹងរងផលប៉ះពាល់បើអាមេរិកដំឡើងការប្រាក់ដល់៦%</Title>
                        <div className="my-5"><PostDetail author="Chhun" category="Technology" date="March 23 2023" colors="white" /></div>
                        <div className="flex">
                            <div className="mr-5"><Button styles="fill">បន្តការអាន</Button></div>
                            <Button styles="transparent">អំពីអ្នកនិពន្ធ</Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <img className="h-full w-full object-cover brightness-[.30]" src="https://business-cambodia.com/cms/assets/a1df1944-2fbc-4114-8727-4b938f4d7f11" alt="" />
                    <div className="absolute w-full md:w-3/4 lg:w-2/4 top-[30%] lg:top-1/4 p-10 md:pl-10">
                        <Title size="xxxl" lineHeight="normal" colors="white">អាមេរិកដំឡើងការប្រាក់ថែម! ទាំងនេះជាប្រទេសនឹងរងផលប៉ះពាល់បើអាមេរិកដំឡើងការប្រាក់ដល់៦%</Title>
                        <div className="my-5"><PostDetail author="Chhun" category="Technology" date="March 23 2023" colors="white" /></div>
                        <div className="flex">
                            <div className="mr-5"><Button styles="fill">បន្តការអាន</Button></div>
                            <Button styles="transparent">អំពីអ្នកនិពន្ធ</Button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Hero