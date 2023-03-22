import Banner from "@/components/Banner"
import NewsCard from "@/components/NewsCard"
import Link from "next/link"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { Article } from "@/commons/interface"
import { GetServerSideProps, GetStaticProps } from "next"

interface Props {
    data: Article[]
}

const Business = ({data}: Props) => {

    const newData = data.filter(article => article.type == "business")

    const [req, setReq] = useState<number>(10)
    const limit = newData.splice(0, req);

    const getMore = () => {
        setTimeout(() => {
            setReq(req + 10)
        }, 300);
    }

    return (
        <>
            <Banner colors="white" size="xl" weight="bold" image="/B-1.png">
                នាំមនុស្សស្រមៃអោយធំ ចាប់ផ្តើមអោយតូច ពង្រីកអោយធំ
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
                    {/* {newData.map(article => {
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
                    })} */}
                </div>
            </InfiniteScroll>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    
    const res = await fetch('https://chic-brigadeiros-cb5e20.netlify.app/api/article')
    const jsonData = await res.json()
    
    return {
      props: {
        data: jsonData.data
      }, 
    }
}
  

export default Business