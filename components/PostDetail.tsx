import { cva, VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes } from "react"

const detail = cva("", {
    variants: {
        colors: {
            white: 'text-white',
            black: 'text-black',
            red: 'text-red-500'
        }
    }
})

interface Props
extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof detail> {
    author: string
    category: string
    date: string
}

const PostDetail = ({author, category, date, colors}: Props) => <div className={detail({colors})}><span className="uppercase">{author}</span> • <span>{category}</span> • <span>{date}</span></div>

export default PostDetail