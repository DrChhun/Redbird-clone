import PostDetail from "@/components/PostDetail"
import Title from "@/components/Title"
import Image from "next/image"
import { useRouter } from "next/router"
import {contentData} from '../../data/contentData.json'

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur=".5 s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

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
                            <Image
                                width={1000}
                                height={500}
                                className="py-12 !relative object-cover" 
                                src={data.image} 
                                alt=""
                                placeholder="blur"
                                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1000, 500))}`}
                                priority
                            />
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