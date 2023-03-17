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
        <div className="flex h-auto py-4">
            <Image className="h-full rounded-full mr-4 h-[50px]" loader={loader} src={image} alt="img-Profile" width={50} height={50}/>
            <div className="leading-tight h-auto">
                <h1 className="text-sm text-gray-700 font-semibold line-clamp-1">{name}</h1>
                <p className="text-xs font-light uppercase">{date}</p>
                <p className="text-xs">{view} K views</p>
            </div>
        </div>
    )
}

export default ProflileCard;