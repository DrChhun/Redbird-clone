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

const NewsCard: React.FC<News> = ({ image, title, tag, profile }) => (
  <>
    {/* <div className="flex justify-between flex-col m-auto bg-white shadow-xl rounded-xl hover:shadow-lg duration-300 hover:cursor-pointer overflow-hidden group min-h-[450px] sm:min-h-[350px] md:min-h-[340px] md:max-h-[340px] lg:min-h-[390px] lg:max-h-[500px] xl:min-h-[350px]"> */}
    <div className="flex newscard h-[380px] justify-between flex-col bg-white shadow-xl rounded-xl hover:shadow-lg duration-300 hover:cursor-pointer overflow-hidden group h-full">
      <div>
        <Image
          loading="lazy"
          loader={loader}
          className="rounded-sm group-hover:scale-105 duration-300 w-full aspect-w-16 aspect-h-9 p-0"
          src={image}
          alt="tech-bodia"
          width={300}
          height={196}
          placeholder="blur"
          blurDataURL={`/_next/image?url=${image}&w=16&q=1`}
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
