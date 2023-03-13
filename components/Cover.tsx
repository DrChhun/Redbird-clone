/* eslint-disable react/no-unescaped-entities */
import Heading from "./Heading"
import Title from "./Title"

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
            <img className="relative row-span-3 h-full w-full object-cover group-hover:scale-105 duration-300 brightness-[.30]" src={img} alt="" />
            <div className="absolute top-1/2 w-3/4 translate-y-[-50%] p-8">
                <Heading underlineColor={underlineColor} colors="white" size="base" weight="bold" underline>{heading}</Heading>
                 <a href={link} className="relative top-0d hover:underline decoration-white" ><Title colors="white" size={fontSize} weight="medium">{children}</Title></a>
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