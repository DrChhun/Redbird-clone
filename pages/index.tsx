import Title from "@/components/Title"
import Hero from "../components/hero"
import Navigation from "../components/navigation"
import "swiper/css";
import "swiper/css/pagination";
import NewCategory from "@/components/category/NewCategory"
import BusinessCategory from "@/components/category/BusinessCategory"
import EstateCategory from "@/components/category/EstateCategory"
import LeadershipCategory from "@/components/category/LeadershipCategory"
import SaleCategory from "@/components/category/SaleCategory"
import FinanceCategory from "@/components/category/FinanceCategory"
import RecentNews from "@/components/category/RecentNews"
import Link from "next/link";
import { useState, useEffect } from "react";
import { Article } from "@/commons/interface";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo"

interface Props {
    data: Article[]
}

const Home:React.FC<Props> = ({data}) => {

    const [windowWidth, setInnerWidth] = useState<any>();
    const [api, setApi] = useState<Article[]>(data)

    useEffect(() => {
        setInnerWidth(window.innerWidth) //set value to widowWidth state

        const handleWidth = () => {
            setInnerWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWidth)
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [])

    return (
        <>
            <NextSeo
                title="Redbird news"
                description="Welcome to our news company"
            />
            {/* navbar */}
            <Navigation />

            {/* hero */}
            <Hero api={api}/>

            {/* title */}
            {/* <div className="px-4 lg:px-10 py-12">
                <Heading underlineColor="black" underline size="xl" weight="bold">ការផ្សាយពាណិជ្ជកម្មរបស់យើង</Heading>  
            </div> */}
            <div className="flex justify-between px-4 lg:px-10 py-12">
                <Title size="xxl" weight="bold">អត្ថបទពេញនិយមសរុប</Title>
                <Link className="text-red-500" href="/articles">មើលបន្ថែម</Link>
            </div>

            {/* most recent news */}
            <RecentNews />

            {/* category New */}
            <NewCategory windowWidth={windowWidth} api={api}/>

            {/* category Business */}
            <BusinessCategory windowWidth={windowWidth} api={api}/>

            {/* category Real-Estate */}
            <EstateCategory windowWidth={windowWidth} api={api}/>

            {/* category by content */}
            <LeadershipCategory windowWidth={windowWidth} api={api}/>

            {/* category by content */}
            <FinanceCategory windowWidth={windowWidth} api={api}/>

            {/* category by content */}
            <SaleCategory windowWidth={windowWidth} api={api}/>

        </>
    )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const res = await fetch(`https://redbird-api.vercel.app/api/article`)
    const data = await res.json()
    
    return {
      props: {
        data: data.data,
      }, 
      
    }
}

export default Home