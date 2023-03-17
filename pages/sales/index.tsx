import Banner from "@/components/Banner"
import NewsCard from "@/components/NewsCard"
import {contentData} from '../../data/contentData.json'
import Link from "next/link"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

function Sales() {

    const data = contentData.filter(get => get.type == "sales")
    const [req, setReq] = useState<number>(10)
    const limit = data.splice(0, req);

    const getMore = () => {
        setTimeout(() => {
            setReq(req + 10)
        }, 500);
    }

    return (
        <>
            <Banner colors="white" size="xl" weight="bold" image="/B-6.jpeg">
                នាំមនុស្សគិតពីយុទ្ធសាស្រ្តលក់ ក្លាយជាកំពូលអ្នកលក់ឆ្នើម
            </Banner>

            <InfiniteScroll
                dataLength={limit.length}
                next={getMore}
                hasMore={true}
                loader={<p className="hidden">loading...</p>}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-12 px-4 lg:px-10 gap-[25px]">
                    {limit.map((data) => {
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
            </InfiniteScroll>
        </>
    )
}

export default Sales