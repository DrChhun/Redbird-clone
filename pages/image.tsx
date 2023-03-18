import Image from "next/image";
import rub from '../public/B-1.png'

const ImagePage = () => {
    return (
        <>
            <Image 
                src={rub} 
                fill
                alt="gg"
                placeholder="blur"
                className="!relative !h-64 !w-auto"
            />
            <img src="/B-1.png" alt="" />
        </>
    )
}

export default ImagePage