import PostDetail from "@/components/PostDetail"
import Title from "@/components/Title"
import { useRouter } from "next/router"
import {contentData} from '../../data/contentData.json'

const ArticleDetail = () => {
    const router = useRouter()
    const articleId = router.query.articleId
    const data = contentData.filter(get => get.id == articleId);
    console.log(data)
    return (
        <div className="py-12 py-24 lg:py-24 px-4 lg:px-36">
            {data.map((data) => {
                return (
                    <div key={data.id}>
                        <Title lineHeight="normal" size="xxxl">{data.title}</Title>
                        <div className="md:w-3/4 lg:w-3/5">
                            <img className="py-12" src={data.image} alt="" />
                            <PostDetail author="not dynamic" category={data.category} date={data.date}/>
                            <p className="py-12 break-all">{data.content}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ArticleDetail