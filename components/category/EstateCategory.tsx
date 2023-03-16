import { useState, useEffect } from "react"
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Button from "../Button";
import Heading from "../Heading"
import NewsCard from "../NewsCard"
import {contentData} from '../../data/contentData.json'

const EstateCategory = () => {

    const data = contentData.filter(get => get.type == "estate")

    const estate = data.splice(0, 4)

    const [windowWidth, setInnerWidth] = useState<any>();

    useEffect(() => {
        let vw = window.innerWidth;
        if (vw != windowWidth) {
            setInnerWidth(vw);
        } else {
            setInnerWidth(windowWidth);
        }
    
        document.documentElement.style.setProperty('--vh', `${vw}px`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div className="px-4 lg:px-10 py-12 xl:flex gap-[25px]">
                <div className="flex mb-5 lg:mb-0 items-center lg:mb-5 xl:mb-0 xl:w-[25%]">
                    <div className="flex justify-between w-full xl:flex-col xl:w-[50%]">
                        <Heading underlineColor="black" underline size="lg" weight="bold">អចលនទ្រព្យ</Heading>
                        <Button url="real-estate" styles="border">មើលបន្ថែម</Button>
                    </div>
                </div>
                {windowWidth > 768 ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[25px] xl:w-[75%]">
                        {estate.map((x) => (
                            <Link key={x.id} href={`articles/${x.id}`}>
                                <NewsCard key={x.title} id={0} image={x.image} title={x.title} tag={x.category} profile={{
                                    image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                                    name: "fortnite",
                                    date: "March 23 2023",
                                    view: 999
                                }} />
                            </Link>
                        ))}
                    </div>
                :
                <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 25,
                    },
                    600: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                      spaceBetween: 25,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
                style={{padding: "2rem 0"}}
              >
                {estate.map((x) => 
                     (
                        <SwiperSlide key={x.title}>
                            <Link href={`articles/${x.id}`}>
                                <NewsCard id={0} image={x.image} title={x.title} tag={x.category} profile={{
                                    image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                                    name: "fortnite",
                                    date: "March 23 2023",
                                    view: 999
                                }} />    
                            </Link>    
                        </SwiperSlide>
                    )
                )}
                
              </Swiper>
                }
            </div>
    )
}

export default EstateCategory
