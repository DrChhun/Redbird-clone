import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import Title from "@/components/Title";
import PostDetail from "@/components/PostDetail";
import Button from "@/components/Button";
import {data} from '../../data/contentData.json'
import Image from "next/image";
import { Article } from "@/commons/interface";
import { GetStaticProps } from "next";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e0e0e0" offset="20%" />
      <stop stop-color="#e0e0e0" offset="50%" />
      <stop stop-color="#e0e0e0" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e0e0e0" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur=".5s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

interface Props {
    data: Article[]
}

function Hero () {

    const popular = data.filter((get: { type: string; }) => get.type == "popular")

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
                        <div className="relative object-cover h-full w-full brightness-[.30]" >
                            <Image 
                                className="object-cover"
                                fill
                                src={data.image} 
                                alt="" 
                                placeholder="blur"
                                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                            />
                        </div>
            
                        <div className="absolute w-full md:w-4/5 lg:w-2/4 top-[30%] lg:top-1/4 py-0 px-10 sm:p-10 md:pl-10">
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

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/article')
    const data = await res.json()

    return {
        props: {
            data: data
        },
    }
}