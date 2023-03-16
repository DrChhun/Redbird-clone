import Heading from "@/components/Heading"
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

function Home() {
    
    return (
        <>
            {/* navbar */}
            <Navigation />

            {/* hero */}
            <Hero />

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
            <NewCategory />

            {/* category Business */}
            <BusinessCategory />

            {/* category Real-Estate */}
            <EstateCategory />

            {/* category by content */}
            <LeadershipCategory />

            {/* category by content */}
            <FinanceCategory />

            {/* category by content */}
            <SaleCategory />

        </>
    )
}

export default Home