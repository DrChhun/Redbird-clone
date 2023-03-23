import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const caption = cva('font-bold line-clamp-2', {
  variants: {
    size: {
      xs: "font-sans text-xs",
      sm: "font-sans text-sm",
      base: "font-sans text-sm mg:text-base",
      lg: "font-sans text-base md:text-lg",
      xl: "font-sans text-lg md:text-2xl",
      xxl: "font-sans text-4xl",
      xxxl: "font-sans text-5xl"
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
      white: 'border-white w-[50px] border-1 md:border-2 my-2 md:my-4',
      black: 'border-gray-600 w-[50px] border-1 md:border-2 my-2 md:my-4',
      red: 'border-[#ed1c24] w-[50px] border-1 md:border-2 my-2 md:my-4'
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
    </div>
  );
};

export default Heading;
