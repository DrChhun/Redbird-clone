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
        <div className="py-12 lg:py-24 px-4 lg:px-10">
            {data.map((data) => {
                return (
                    <div key={data.id}>
                        <Title size="xxxl">{data.title}</Title>
                        <img className="py-12" src={data.image} alt="" />
                        <PostDetail author="not dynamic" category={data.category} date={data.date}/>
                        <p className="py-12">{data.content}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ArticleDetail