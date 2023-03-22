import Banner from "@/components/Banner"
import NewsCard from "@/components/NewsCard"
import Link from "next/link"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { GetStaticProps } from "next"
import { Article } from "@/commons/interface"

interface Props {
    data: Article[]
}

function Leadership({data}: Props) {

    const newData = data.filter(get => get.type == "leadership")
    const [req, setReq] = useState<number>(10)
    const limit = newData.splice(0, req);

    const getMore = () => {
        setTimeout(() => {
            setReq(req + 10)
        }, 500);
    }

    return (
        <>
            <Banner colors="white" size="xl" weight="bold" image="/B-5.jpeg">
                បំផុសគំនិតក្នុងការដឹកនាំ នាំមនុស្សធម្មតា ក្លាយជា CEO ឆ្នើម
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

export const getStaticProps: GetStaticProps<Props> = async () => {
    
    const res = await fetch('http://localhost:3000/api/article')
    const jsonData = await res.json()
    
    return {
      props: {
        data: jsonData.data
      }, 
    }
}

export default Leadership