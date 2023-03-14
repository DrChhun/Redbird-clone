import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import Title from "@/components/Title";
import PostDetail from "@/components/PostDetail";
import Button from "@/components/Button";
import {popular} from '../../data/newsData.json'

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
                style={{padding: 0}}
            >
                {popular.map((data) => (
                    <SwiperSlide key={data.title} className="aspect-video">
                        <img className="relative h-full w-full object-cover brightness-[.30]" src={data.image} alt="" />
                        <div className="absolute w-full md:w-4/5 lg:w-2/4 top-[30%] lg:top-1/4 p-10 md:pl-10">
                            <Title size="xxxl" lineHeight="normal" colors="white">{data.title}</Title>
                            <div className="my-5"><PostDetail author={data.author.name} category={data.category} date={data.date} colors="white" /></div>
                            <div className="flex">
                                <div className="mr-5"><Button styles="fill">បន្តការអាន</Button></div>
                                <Button styles="transparent">អំពីអ្នកនិពន្ធ</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Hero