/* eslint-disable react/no-unescaped-entities */
import Heading from "./Heading"
import Title from "./Title"

/* eslint-disable @next/next/no-img-element */
interface Props {
    img: string
    children: string
    link: string
    heading: string
}

const Cover = ({img, children, link, heading}: Props) => {
    return (
        <div className="h-auto w-auto group overflow-hidden">
            <img className="relative group-hover:scale-105 duration-300 brightness-50 h-full w-full" src={img} alt="" />
            <div className="absolute top-1/2 w-1/2 translate-y-[-50%] p-8">
                <Heading size="base" weight="bold" underline>{heading}</Heading>
                <a href={link} className="relative top-0d" ><Title colors="white" size="xxl" weight="medium">{children}</Title></a>
            </div>
        </div>
    )
}

export default Cover