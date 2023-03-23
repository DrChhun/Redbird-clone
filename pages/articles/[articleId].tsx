import { Article } from "@/commons/interface"
import PostDetail from "@/components/PostDetail"
import Title from "@/components/Title"
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"

interface Props {
    data: Article[]
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e0e0e0" offset="20%" />
      <stop stop-color="#e0e0e0" offset="50%" />
      <stop stop-color="#e0e0e0" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e0e0e0" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur=".5s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const ArticleDetail = ({data}: Props) => {
    // const router = useRouter()
    // const articleId = router.query.articleId
    // const newData = data.filter(get => get.id == articleId);

    return (
        <div className="py-12 py-24 lg:py-24 px-4 lg:px-36">
            {data?.map((data) => {
                return (
                    <div key={data.id}>
                        <Title lineHeight="normal" size="xxxl">{data.title}</Title>
                        <div className="md:w-3/4 lg:w-3/5">
                            <Image
                                width={1000}
                                height={525}
                                className="my-12 !relative object-cover" 
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

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://chic-brigadeiros-cb5e20.netlify.app/api/article');
  const data = await res.json();

  const paths = data.data.map((get: { id: any }) => {
    return {
      params: {
        articleId: `${get.id}`
      }
    }
  })

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}


export const getStaticProps: GetStaticProps<Props> = async (context) => {
  
  const {params} = context
  const res = await fetch(`https://chic-brigadeiros-cb5e20.netlify.app/api/article/${params?.articleId}`)
  const jsonData = await res.json()
  
  return {
    props: {
      data: jsonData.data
    }, 
  }
}

export default ArticleDetail