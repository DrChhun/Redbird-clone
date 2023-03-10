import Image from "next/image";

export interface Profile {
    image: string;
    name: string;
    date: string;
    view: number;
}

const loader = ({src}: any) => {
    return src
}

const ProflileCard:React.FC<Profile> = ({image, name, date, view}: Profile) => {
    return (
        <div className="flex mt-4 h-auto py-2">
            <Image className="h-full rounded-full mr-4 h-[50px]" loader={loader} src={image} alt="img-Profile" width={50} height={50}/>
            <div className="leading-tight h-auto">
                <h1 className="text-base line-clamp-1">{name}</h1>
                <p className="text-sm uppercase">{date}</p>
                <p className="text-xs">{view} K views</p>
            </div>
        </div>
    )
}

export default ProflileCard;