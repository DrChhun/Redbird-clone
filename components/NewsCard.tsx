import CardProfile, { Profile } from "./ProfileCard";
import Image from "next/image";

interface News {
  id: number;
  image: string;
  title: string;
  tag: string;
  profile: Profile;
}

const loader = ({src}: any) => {
    return src
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e0e0e0" offset="20%" />
      <stop stop-color="#e0e0e0" offset="50%" />
      <stop stop-color="#e0e0e0" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e0e0e0" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur=".5s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const NewsCard: React.FC<News> = ({ image, title, tag, profile }) => (
  <>
    {/* <div className="flex justify-between flex-col m-auto bg-white shadow-xl rounded-xl hover:shadow-lg duration-300 hover:cursor-pointer overflow-hidden group min-h-[450px] sm:min-h-[350px] md:min-h-[340px] md:max-h-[340px] lg:min-h-[390px] lg:max-h-[500px] xl:min-h-[350px]"> */}
    <div className="flex newscard h-[380px] justify-between flex-col bg-white shadow-xl rounded-xl hover:shadow-lg duration-300 hover:cursor-pointer overflow-hidden group h-full">
      <div>
        <Image
          className="rounded-sm group-hover:scale-105 duration-300 w-full aspect-w-16 aspect-h-9 p-0"
          src={image}
          alt="tech-bodia"
          width={249}
          height={131}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        />
          <p className="m-4 bg-gray-200 w-max px-4 pt-1 rounded-lg mb-4 text-xs">#{tag}</p>
          <h1 className="px-4 font-bold text-base text-gray-600 hover:underline">
            <div className="line-clamp-2">{title}</div>
          </h1>
      </div>
      <div className="px-4">
        <CardProfile
          image={profile.image}
          name={profile.name}
          date={profile.date}
          view={profile.view}
          />
      </div>
    </div>
  </>
);

export default NewsCard;
