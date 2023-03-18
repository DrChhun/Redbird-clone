import Image from "next/image";
import rub from '../public/B-1.jpeg'

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
        </>
    )
}

export default ImagePage