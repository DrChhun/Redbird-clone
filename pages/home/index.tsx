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

function Home() {

    const [windowWidth, setInnerWidth] = useState<any>();

    useEffect(() => {
        let vw = window.innerWidth;
        if (vw != windowWidth) {
            setInnerWidth(vw);
        } else {
            setInnerWidth(windowWidth);
        }
    
        document.documentElement.style.setProperty('--vh', `${vw}px`);
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
            <div className="px-10 py-12">
                <Heading underlineColor="black" underline size="xl" weight="bold">ការផ្សាយពាណិជ្ជកម្មរបស់យើង</Heading>  
            </div>
            <div className="flex justify-between px-10 py-12">
                <Title size="xxl" weight="bold">អត្ថបទពេញនិយមសរុប</Title>
                <a className="text-red-500" href="#">មើលបន្ថែម</a>
            </div>

            {/* most recent news */}
            <div className="grid md:grid-rows-2 md:grid-cols-12 gap-4 py-12 px-10">
                <div className="md:col-span-7 md:row-span-3 h-[300px] md:h-full md:pb-4">
                    <Cover underlineColor="red" heading="អត្ថបទ PR" img={"https://business-cambodia.com/cms/assets/48a4c11d-73c7-4441-934f-f16e52aaa434"} link="/" fontSize="xxl">
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
            <div className="px-10 py-12 lg:flex gap-[25px]">
                <div className="flex mb-5 lg:mb-0 items-center lg:w-[25%]">
                    <div className="flex justify-between w-full lg:flex-col lg:w-[50%]">
                        <Heading underlineColor="black" underline size="lg" weight="bold">អត្ថបទពេញនិយមប្រចាំខែ</Heading>
                        <Button styles="border">មើលបន្ថែម</Button>
                    </div>
                </div>
                {windowWidth > 768 ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[25px] lg:w-[75%]">
                        <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                            image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                            name: "fortnite",
                            date: "March 23 2023",
                            view: 999
                        }} />
                        <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                            image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                            name: "fortnite",
                            date: "March 23 2023",
                            view: 999
                        }} />
                        <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                            image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                            name: "fortnite",
                            date: "March 23 2023",
                            view: 999
                        }} />
                    </div>
                :
                <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                breakpoints={{
                    600: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                      spaceBetween: 25,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                        name: "fortnite",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                        name: "fortnite",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                        name: "fortnite",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </SwiperSlide>
              </Swiper>
                }
            </div>

            {/* category by content */}
            <div className="px-10 py-12 lg:flex gap-[25px]">
                <div className="flex mb-5 lg:mb-0 items-center lg:w-[25%]">
                    <div className="flex justify-between w-full lg:flex-col lg:w-[50%]">
                        <Heading underlineColor="black" underline size="lg" weight="bold">អត្ថបទពេញនិយមប្រចាំខែ</Heading>
                        <Button styles="border">មើលបន្ថែម</Button>
                    </div>
                </div>
                {windowWidth > 768 ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[25px] lg:w-[75%]">
                        <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                            image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                            name: "fortnite",
                            date: "March 23 2023",
                            view: 999
                        }} />
                        <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                            image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                            name: "fortnite",
                            date: "March 23 2023",
                            view: 999
                        }} />
                        <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                            image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                            name: "fortnite",
                            date: "March 23 2023",
                            view: 999
                        }} />
                    </div>
                :
                <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                breakpoints={{
                    600: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                      spaceBetween: 25,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                        name: "fortnite",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                        name: "fortnite",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                        name: "fortnite",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </SwiperSlide>
              </Swiper>
                }
            </div>

            {/* category by content */}
            <div className="px-10 py-12 lg:flex gap-[25px]">
                <div className="flex mb-5 lg:mb-0 items-center lg:w-[25%]">
                    <div className="flex justify-between w-full lg:flex-col lg:w-[50%]">
                        <Heading underlineColor="black" underline size="lg" weight="bold">អត្ថបទពេញនិយមប្រចាំខែ</Heading>
                        <Button styles="border">មើលបន្ថែម</Button>
                    </div>
                </div>
                {windowWidth > 768 ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[25px] lg:w-[75%]">
                        <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                            image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                            name: "fortnite",
                            date: "March 23 2023",
                            view: 999
                        }} />
                        <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                            image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                            name: "fortnite",
                            date: "March 23 2023",
                            view: 999
                        }} />
                        <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                            image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                            name: "fortnite",
                            date: "March 23 2023",
                            view: 999
                        }} />
                    </div>
                :
                <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                breakpoints={{
                    600: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                      spaceBetween: 25,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                        name: "fortnite",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                        name: "fortnite",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                        name: "fortnite",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </SwiperSlide>
              </Swiper>
                }
            </div>

            {/* category by content */}
            <div className="px-10 py-12 lg:flex gap-[25px]">
                <div className="flex mb-5 lg:mb-0 items-center lg:w-[25%]">
                    <div className="flex justify-between w-full lg:flex-col lg:w-[50%]">
                        <Heading underlineColor="black" underline size="lg" weight="bold">អត្ថបទពេញនិយមប្រចាំខែ</Heading>
                        <Button styles="border">មើលបន្ថែម</Button>
                    </div>
                </div>
                {windowWidth > 768 ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[25px] lg:w-[75%]">
                        <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                            image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                            name: "fortnite",
                            date: "March 23 2023",
                            view: 999
                        }} />
                        <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                            image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                            name: "fortnite",
                            date: "March 23 2023",
                            view: 999
                        }} />
                        <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                            image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                            name: "fortnite",
                            date: "March 23 2023",
                            view: 999
                        }} />
                    </div>
                :
                <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                breakpoints={{
                    600: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                      spaceBetween: 25,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                        name: "fortnite",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                        name: "fortnite",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsCard id={0} image="https://business-cambodia.com/cms/assets/57496f5a-d67a-4a91-ab9b-9e23d78cfb65" title="ម៉ាស៊ូតក៏ចុះ សាំងក៏ចុះ! នេះជាតម្លៃប្រេងសាំង ក្រសួងប្រកាសឱ្យលក់ចាប់ពីថ្ងៃទី០១ ដល់ថ្ងៃទី១០ ខែមីនា" tag="ថ្មីៗ" profile={{
                        image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                        name: "fortnite",
                        date: "March 23 2023",
                        view: 999
                    }} />
                </SwiperSlide>
              </Swiper>
                }
            </div>
        </>
    )
}

export default Home