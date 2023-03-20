/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Link from "next/link"
import Heading from "./Heading"
import Title from "./Title"

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

/* eslint-disable @next/next/no-img-element */
interface Props {
    img: string
    children: string
    link: string
    heading: string
    fontSize: any
    underlineColor: any
}

const Cover = ({img, children, link, heading, fontSize, underlineColor}: Props) => {
    return (
        <div className="relative group h-full w-full overflow-hidden">
            <Image 
                height={1080} 
                width={1920} 
                className="relative row-span-3 h-full w-full object-cover group-hover:scale-105 duration-300 brightness-[.30]" 
                src={img} 
                alt="coverImage" 
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            />
            <div className="absolute top-1/2 w-3/4 translate-y-[-50%] p-8">
                <Heading underlineColor={underlineColor} colors="white" size="base" weight="bold" underline>{heading}</Heading>
                 <Link href={link} className="relative top-0d hover:underline decoration-white" ><Title colors="white" size={fontSize} weight="medium">{children}</Title></Link>
            </div>
        </div>
        // <div className="group overflow-hidden">
        //     <img className="relative group-hover:scale-105 duration-300 brightness-50" src={img} alt="" />
        //     <div className="absolute top-1/2 w-1/2 translate-y-[-50%] p-8">
        //         <Heading size="base" weight="bold" underline>{heading}</Heading>
        //         <a href={link} className="relative top-0d" ><Title colors="white" size="xxl" weight="medium">{children}</Title></a>
        //     </div>
        // </div>
    )
}

export default Cover