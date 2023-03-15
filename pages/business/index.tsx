import Banner from "@/components/Banner"
import NewsCard from "@/components/NewsCard"
import {contentData} from '../../data/contentData.json'
import Link from "next/link"

const Business = () => {

    const data = contentData.filter(get => get.type == "business")

    return (
        <>
            <Banner colors="white" size="xl" weight="bold" image="https://business-cambodia.com/cms/assets/2a73c151-2cd8-45a3-b2ae-da99988606dd">
                នាំមនុស្សស្រមៃអោយធំ ចាប់ផ្តើមអោយតូច ពង្រីកអោយធំ
            </Banner>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-12 px-4 lg:px-10 gap-[25px]">
                {data.map((data) => {
                    return (
                        <>
                            <Link href={`/articles/${data.id}`}>
                                <NewsCard id={0} image={data.image} title={data.title} tag={data.category} profile={{
                                    image:"https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                                    name: "fortnite",
                                    date: "March 23 2023",
                                    view: 999
                                }} />
                            </Link>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Business