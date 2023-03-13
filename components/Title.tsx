import { cva, VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, Children } from "react"

const title = cva('', {
    variants: {
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
        },
        colors: {
            white: 'text-white',
            black: 'text-black',
            red: 'text-red-500'
        },
        lineHeight: {
            tight: 'leading-tight',
            normal: 'leading-normal md:leading-[130%] lg:leading-[150%]',
            relaxed: 'leading-relaxed'
        }
    },
    defaultVariants: {
        size: "base",
        weight: "bold",
        colors: "black"
    }
});

interface Props
extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof title> {
  children: string
}

const Title = ({size, weight, children, colors, lineHeight}: Props) => <div className={title({colors, size, weight, lineHeight})}>{children}</div>

export default Title