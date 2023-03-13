import { cva, VariantProps } from "class-variance-authority"
import React, { ButtonHTMLAttributes } from "react"

const button = cva("text-xs md:text-base lg:text-lg py-2 px-10 font-medium md:mt-4 duration-300 border-2", {
    variants: {
        styles: {
            fill: 'bg-white border-white shadow-md text-black hover:bg-transparent hover:border-2 hover:border-white hover:text-white',
            transparent: 'bg-white border-transparent bg-opacity-10 text-white hover:bg-[#ed1c24]',
            border: 'bg-transparent border-2 text-black border-black hover:bg-gray-300'
        }
    },
    defaultVariants: {
        styles: 'border'
    }
});

interface ButtonProps 
extends ButtonHTMLAttributes<HTMLButtonElement>, 
    VariantProps<typeof button> {
        children: string // this code mean define type automaticly from the button function
}

const Button = ({children, styles}: ButtonProps) => <button className={button({styles})}>{children}</button>

export default Button