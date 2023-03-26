import { Article } from "@/commons/interface"
import Banner from "@/components/Banner"
import NewsCard from "@/components/NewsCard"
import Paginate from "@/components/Paginate"
import ReactPaginate from "@/components/RPaginate"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Props {
    data: Article[]
}

const Artical = () => {

    const [windowWidth, setInnerWidth] = useState<any>();

    const [api, setApi] = useState<Props>()
    const [total, setTotal] = useState<number | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(1)
    console.log(currentPage)

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://redbird-api.vercel.app/api/articles?page=${currentPage}`)
            const data = await res.json()
            setApi(data)
            setTotal(data.pageCount)
            console.log(data)
        };

        setInnerWidth(window.innerWidth) //set value to widowWidth state

        const handleWidth = () => {
            setInnerWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWidth)

        getData();
    }, [currentPage])

    return (
        <>
            <Banner colors="white" size="xl" weight="bold" image="https://business-cambodia.com/cms/assets/8812fd3e-50da-4b00-bd05-66a20b3f8241">
                អត្ថបទទាំងអស់
            </Banner>

            {api? 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-12 px-4 lg:px-10 gap-[25px]">
                    {api?.data.map((data) => {
                        return (
                            <>
                                <Link href={`/articles/${data.id}`} passHref>
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
            :
                <p className="text-center p-16">loading...</p>
            }
            
            {/* <Paginate total={total} setCurrentPage={setCurrentPage} currentPage={currentPage} /> */}
            <ReactPaginate windowWidth={windowWidth} total={total} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </>
    )
}

export default Artical