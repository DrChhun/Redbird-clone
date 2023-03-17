import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import Title from "@/components/Title";
import PostDetail from "@/components/PostDetail";
import Button from "@/components/Button";
import {contentData} from '../../data/contentData.json'
import Image from "next/image";

function Hero () {

    const popular = contentData.filter(get => get.type == "popular")

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
                spaceBetween={0}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[100vh] bg-white home-slider"
                style={{padding: 0}}
            >
                {popular.map((data) => (
                    <SwiperSlide key={data.title} className="aspect-video">
                        <Image 
                            loading="lazy"
                            fill
                            className="relative object-cover h-full w-full brightness-[.30]" 
                            src={data.image} 
                            alt="" 
                            placeholder="blur"
                            blurDataURL={`/_next/image?url=${data.image}&w=16&q=1`}
                        />
                        <div className="absolute w-full md:w-4/5 lg:w-2/4 top-[30%] lg:top-1/4 p-10 md:pl-10">
                            <Title size="xxxl" lineHeight="normal" colors="white">{data.title}</Title>
                            <div className="my-5"><PostDetail author={data.author.name} category={data.category} date={data.date} colors="white" /></div>
                            <div className="flex">
                                <div className="mr-5"><Button url={`articles/${data.id}`} styles="fill">បន្តការអាន</Button></div>
                                <Button url={`articles/${data.id}`} styles="transparent">អំពីអ្នកនិពន្ធ</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Hero