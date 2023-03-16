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
    <div className="flex justify-between flex-col m-auto bg-white shadow-xl rounded-xl hover:shadow-lg duration-300 hover:cursor-pointer overflow-hidden group min-h-[405px] md:min-h-[350px] lg:min-h-[360px]">
      <Image
        loader={loader}
        className="rounded-sm group-hover:scale-105 duration-300 w-full"
        src={image}
        alt="tech-bodia"
        width={300}
        height={196}
      />
      <div className="p-4">
        <p className="bg-gray-200 w-max px-4 pt-1 rounded-lg mb-4 text-xs">#{tag}</p>
        <h1 className="font-bold text-base text-gray-600 line-clamp-2 hover:underline">
          {title}
        </h1>
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
