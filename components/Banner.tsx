import { cva, VariantProps } from "class-variance-authority"
import Image from "next/image"
import { ButtonHTMLAttributes } from "react"

const heading = cva("text-base", {
    variants: {
        colors: {
            white: 'text-white',
            black: 'text-black'
        },
        size: {
            xs: "font-sans text-xs",
            sm: "font-sans text-sm",
            base: "font-sans text-xs lg:text-base",
            lg: "font-sans lg:text-lg",
            xl: "font-sans lg:text-2xl",
            xxl: "font-sans text-xl md:text-2xl lg:text-4xl",
            xxxl: "font-sans text-2xl md:text-3xl lg:text-5xl"
        },
        weight: {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            bold: 'font-bold'
        }
    }
})

interface Props 
extends ButtonHTMLAttributes<HTMLButtonElement>, 
    VariantProps<typeof heading> {
        children: string
        image: string
}

const Banner = ({image, children, colors, weight, size}: Props) => {
    return (
        <>
            <div className="relative">
                <div className="!relative !h-[300px] w-full object-cover brightness-50">
                    <Image 
                        className="object-cover"
                        fill
                        src={image} 
                        alt="" 
                        placeholder="blur" 
                        blurDataURL={`/_next/image?url=${image}&w=16&q=1`}
                        priority
                    />
                </div>
    
                <div className="absolute top-1/2 px-10">
                    <h1 className={heading({colors, weight, size})}>{children}</h1>
                </div>
            </div>
        </>
    )
}

export default Banner