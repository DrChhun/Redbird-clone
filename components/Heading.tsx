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
    },
    underlineColor: {
      white: 'border-white w-[50px] border-2 my-4',
      black: 'border-black w-[50px] border-2 my-4',
      red: 'border-[#ed1c24] w-[50px] border-2 my-4'
    }
  }
});

interface Heading
extends ButtonHTMLAttributes<HTMLButtonElement>, 
    VariantProps<typeof caption> {
  underline: boolean
  children: string
}

const Heading = ({ weight, size, children, underline, colors, underlineColor }: Heading) => {
  return (
    <div>
      <h1 className={caption({size, weight, colors})}>{children}</h1>
      <hr className={caption({underlineColor})} />
      {/* <hr className={classNames(`h-1 mt-4 {underlineColor}`, {'w-[50px]' : underline} )} /> */}
    </div>
  );
};

export default Heading;
