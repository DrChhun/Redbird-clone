import { Article } from "@/commons/interface"
import Banner from "@/components/Banner"
import NewsCard from "@/components/NewsCard"
import { GetStaticProps } from "next"
import Link from "next/link"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import {data} from '../../data/contentData.json'

interface Props {
    data: Article[]
}


function News({data}: Props) {

    const newData = data.filter(get => get.type == "new")
    // const [req, setReq] = useState<number>(10)
    // const limit = data.splice(0, req);

    // const getMore = () => {
    //     setTimeout(() => {
    //         setReq(req + 10)
    //     }, 500);
    // }

    return (
        <>
            <Banner colors="white" size="xl" weight="bold" image="/B-3.jpeg">
                បំផុសសកម្មភាពអាជីវកម្មថ្មីៗទាំងនៅក្នុងស្រុក និងក្រៅស្រុក
            </Banner>

            {/* <InfiniteScroll
                dataLength={limit.length}
                next={getMore}
                hasMore={true}
                loader={<p className="hidden">loading...</p>}
            > */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-12 px-4 lg:px-10 gap-[25px]">
                    {newData.map((article) => {
                        return (
                            <>
                                <Link href={`/articles/${article.id}`}>
                                    <NewsCard id={0} image={article.image} title={article.title} tag={article.category} profile={{
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
            {/* </InfiniteScroll> */}
        </>
    )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    
    const res = await fetch('http://localhost:3000/api/article')
    const jsonData = await res.json()
    console.log(jsonData)
    
    return {
      props: {
        data: jsonData.data
      }, 
    }
}

export default News