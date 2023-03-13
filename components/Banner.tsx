import { cva, VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes } from "react"

const heading = cva("text-base", {
    variants: {
        colors: {
            white: 'text-white',
            black: 'text-black'
        },
        size: {
            xs: "text-xs",
            sm: "text-sm",
            base: "text-xs lg:text-base",
            lg: "lg:text-lg",
            xl: "lg:text-xl",
            xxl: "text-xl md:text-2xl lg:text-4xl",
            xxxl: "text-2xl md:text-3xl lg:text-5xl"
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
                <img className="relative h-[300px] w-full object-cover brightness-50" src={image} alt="" />
                <div className="absolute top-1/2 px-10">
                    <h1 className={heading({colors, weight, size})}>{children}</h1>
                </div>
            </div>
        </>
    )
}

export default Banner