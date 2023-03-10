import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const button =  cva("text-lg", {
    variants: {
        variant: {
            default: "bg-white",
            primary: "bg-red-200",
            destructive: "bg-blue-200",
            monochrome: "bg-green-200"
        },
        modifier: {
            outline: "border-4",
            plain: "shadow-2xl"
        },
        space: {
            small: "py-2 px-8",
            large: "py-2 px-10"
        },
        size: {
            slim: "text-sm",
            medium: "text-md",
            large: "text-base"
        },
        fullWidth: {
            true: "w-full",
        },
        radius: {
            small: "rounded-sm",
            large: "rounded-lg"
        },
        disabled: {
            true: "hidden"
        }
    },
    compoundVariants: [
        {
            modifier: 'outline', 
            variant: 'destructive', 
            className: 'text-destructive'
        },
        {
            modifier: 'outline',
            variant: 'primary',
            className: 'text-primary'
        },
        {
            modifier: 'plain',
            variant: 'destructive',
            className: 'text-destructive'
        },
        {
            modifier: 'plain',
            variant: 'primary',
            className: 'text-primary'
        },
        {
            modifier: null,
            size: 'slim',
            className: 'px-3 py-[3px]'
        }
    ]
});

interface ButtonProps 
extends Omit <ButtonHTMLAttributes<HTMLButtonElement>, "disabled">, 
    VariantProps<typeof button> {
        children: string // this code mean define type automaticly from the button function
}

const LearnButton = ({children, variant, modifier, size, fullWidth, disabled, radius, space} : ButtonProps) => {
    return <button className={button({variant, modifier, size, fullWidth, disabled, radius, space})}>{children}</button>
}

export default LearnButton