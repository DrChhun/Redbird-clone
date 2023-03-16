import Banner from "@/components/Banner"
import NewsCard from "@/components/NewsCard"
import Link from "next/link"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import {contentData} from '../../data/contentData.json'

function News() {

    const [req, setReq] = useState<number>(10)
    const data = contentData.filter(get => get.type == "new")
    const five = data.splice(0, req);

    const getMore = () => {
        setTimeout(() => {
            setReq(req + 10)
        }, 500);
    }
    console.log('five data', five.length)
    console.log('data length', data.length)

    return (
        <>
            <Banner colors="white" size="xl" weight="bold" image="https://business-cambodia.com/cms/assets/8812fd3e-50da-4b00-bd05-66a20b3f8241">
                បំផុសសកម្មភាពអាជីវកម្មថ្មីៗទាំងនៅក្នុងស្រុក និងក្រៅស្រុក
            </Banner>

            <InfiniteScroll
                dataLength={five.length}
                next={getMore}
                hasMore={true}
                loader={<p className="hidden">loading...</p>}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-12 px-4 lg:px-10 gap-[25px]">
                    {five.map((data) => {
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

export default News