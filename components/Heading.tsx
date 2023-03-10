import button from "@/pages/button";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

const caption = cva('font-bold line-clamp-2', {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      xxl: "text-4xl",
      xxxl: "text-5xl"
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
    }
  }
});

interface Heading
extends ButtonHTMLAttributes<HTMLButtonElement>, 
    VariantProps<typeof caption> {
  underline: boolean
  children: string
}

const Heading = ({ weight, size, children, underline, colors }: Heading) => {
  return (
    <div>
      <h1 className={caption({size, weight, colors})}>{children}</h1>
      <hr className={classNames(`h-1 mt-4 bg-black border-[0]`, {'w-[50px]' : underline} )} />
    </div>
  );
};

export default Heading;
