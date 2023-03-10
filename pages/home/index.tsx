import Button from "@/components/Button"
import Cover from "@/components/Cover"
import Heading from "@/components/Heading"
import NewsCard from "@/components/NewsCard"
import Title from "@/components/Title"
import Hero from "../hero"
import Navigation from "../navigation"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import {contentData} from '../../data/contentData.json'
import Link from "next/link"

function Home() {

    const sales = contentData.filter(get => get.type == "sales")
    const finance = contentData.filter(get => get.type == "finance")
    const leadership = contentData.filter(get => get.type == "leadership")
    const estate = contentData.filter(get => get.type == "estate")
    const business = contentData.filter(get => get.type == "business")
    const newsData = contentData.filter(get => get.type == "new")

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

    console.log(windowWidth);
    // console.log(window.innerWidth);
    
    return (
        <>
            {/* navbar */}
            <Navigation />

            {/* hero */}
            <Hero />

            {/* title */}
            <div className="px-4 lg:px-10 py-12">
                <Heading underlineColor="black" underline size="xl" weight="bold">ការផ្សាយពាណិជ្ជកម្មរបស់យើង</Heading>  
            </div>
            <div className="flex justify-between px-4 lg:px-10 py-12">
                <Title size="xxl" weight="bold">អត្ថបទពេញនិយមសរុប</Title>
                <a className="text-red-500" href="#">មើលបន្ថែម</a>
            </div>

            {/* most recent news */}
            <div className="grid md:grid-rows-2 md:grid-cols-12 gap-4 py-12 px-4 lg:px-10">
                <div className="md:col-span-7 md:row-span-3 h-[300px] md:h-full md:pb-4">
                    <Cover underlineColor="red" heading="អត្ថបទ PR" img={"https://business-cambodia.com/cms/assets/48a4c11d-73c7-4441-934f-f16e52aaa434"} link="/" fontSize="coverFirst">
                        ធនាគារ វីង ប្រគល់រថយន្តទំនើប Lexus LX600 SUV ដល់អ្នកឈ្នះរង្វាន់កម្មវិធីដាក់ប្រាក់កាន់តែច្រើន ឈ្នះកាន់តែធំ
                    </Cover>
                </div>
                <div className="md:col-span-5 h-[300px] md:h-full">
                    <Cover underlineColor="red" heading="ព័ត៌មានថ្មីៗ" img={"https://business-cambodia.com/cms/assets/5de32954-bdf1-4dac-b97c-2c72978af0d1"} link={"/"} fontSize="base">
                        ចេញចូលភ្នំពេញត្រូវដឹង! នៅថ្ងៃទី២៩ ធ្នូ រដ្ឋបាលរាជធានីភ្នំពេញនឹងផ្អាកចរាចរយានជំនិះគ្រប់ប្រភេទលើកំណាត់មហាវិថីឈ្នះឈ្នះ
                    </Cover>
                </div>
                <div className="md:col-span-5 h-[300px] md:h-full">
                    <Cover underlineColor="red" heading="ព័ត៌មានថ្មីៗ" img={"https://business-cambodia.com/cms/assets/f4e963dd-fc7d-4641-a3bf-265ef1288ec4"} link={"/"} fontSize="base">
                        កាន់តែងាយស្រួល! អ្នកដែលមានសំបុត្រកំណើតសរសេរខុស អាចទៅកែថ្មីនៅកន្លែងនេះបាន
                    </Cover>
                </div>
            </div>

            {/* category by content */}
            <div className="px-4 lg:px-10 py-12 xl:flex gap-[25px]">
                <div className="flex mb-5 lg:mb-0 items-center lg:mb-5 xl:mb-0 xl:w-[25%]">
                    <div className="flex justify-between w-full xl:flex-col xl:w-[50%]">
                        <Heading underlineColor="black" underline size="lg" weight="bold">អត្ថបទពេញនិយមប្រចាំខែ</Heading>
                        <Button url="/news" styles="border">មើលបន្ថែម</Button>
                    </div>
                </div>
                {windowWidth > 768 ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[25px] xl:w-[75%]">
                        {newsData.map((x) => (
                            <Link key={x.title} href={`/articles/${x.id}`}>
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
                {newsData.map((x) => 
                     (
                        <SwiperSlide key={x.title}>
                            <Link href={`/articles/${x.id}`}>
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

            {/* category by content */}
            <div className="px-4 lg:px-10 py-12 xl:flex gap-[25px]">
                <div className="flex mb-5 lg:mb-0 items-center lg:mb-5 xl:mb-0 xl:w-[25%]">
                    <div className="flex justify-between w-full xl:flex-col xl:w-[50%]">
                        <Heading underlineColor="black" underline size="lg" weight="bold">ចាប់ផ្តើមអាជីវកម្ម</Heading>
                        <Button url="/business" styles="border">មើលបន្ថែម</Button>
                    </div>
                </div>
                {windowWidth > 768 ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[25px] xl:w-[75%]">
                        {business.map((x) => (
                            <Link key={x.title} href={`/articles/${x.id}`}>
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
                {business.map((x) => 
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

            {/* category by content */}
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

            {/* category by content */}
            <div className="px-4 lg:px-10 py-12 xl:flex gap-[25px]">
                <div className="flex mb-5 lg:mb-0 items-center lg:mb-5 xl:mb-0 xl:w-[25%]">
                    <div className="flex justify-between w-full xl:flex-col xl:w-[50%]">
                        <Heading underlineColor="black" underline size="lg" weight="bold">ភាពជាអ្នកដឹកនាំ</Heading>
                        <Button url="/leadership" styles="border">មើលបន្ថែម</Button>
                    </div>
                </div>
                {windowWidth > 768 ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[25px] xl:w-[75%]">
                        {leadership.map((x) => (
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
                {leadership.map((x) => 
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

            {/* category by content */}
            <div className="px-4 lg:px-10 py-12 xl:flex gap-[25px]">
                <div className="flex mb-5 lg:mb-0 items-center lg:mb-5 xl:mb-0 xl:w-[25%]">
                    <div className="flex justify-between w-full xl:flex-col xl:w-[50%]">
                        <Heading underlineColor="black" underline size="lg" weight="bold">ហិរញ្ញវត្ថុ</Heading>
                        <Button url="/finance" styles="border">មើលបន្ថែម</Button>
                    </div>
                </div>
                {windowWidth > 768 ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[25px] xl:w-[75%]">
                        {finance.map((x) => (
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
                {finance.map((x) => 
                     (
                        <SwiperSlide key={x.title}>
                            <Link href={`articles/${x.id}`}>
                                <NewsCard id={0} title={x.title} image={x.image} tag={x.category} profile={{
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

            {/* category by content */}
            <div className="px-4 lg:px-10 py-12 xl:flex gap-[25px]">
                <div className="flex mb-5 lg:mb-0 items-center lg:mb-5 xl:mb-0 xl:w-[25%]">
                    <div className="flex justify-between w-full xl:flex-col xl:w-[50%]">
                        <Heading underlineColor="black" underline size="lg" weight="bold">កំពូលអ្នកលក់</Heading>
                        <Button url="/sales" styles="border">មើលបន្ថែម</Button>
                    </div>
                </div>
                {windowWidth > 768 ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[25px] xl:w-[75%]">
                        {sales.map((x) => (
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
                {sales.map((x) => 
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

        </>
    )
}

export default Home