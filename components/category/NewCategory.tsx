import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Button from "../Button";
import Heading from "../Heading";
import NewsCard from "../NewsCard";
import { Article } from "@/commons/interface";
interface Props {
  windowWidth: number;
  api?: Article[];
}

const NewCategory = ({ windowWidth, api }: Props) => {
  const fetch = api?.filter((man) => man.type == "new");
  const newsData = fetch?.splice(0, 4);

  return (
    <div className="px-4 lg:px-10 py-12 xl:flex gap-[25px]">
      <div className="flex mb-5 lg:mb-0 items-center xl:mb-0 xl:w-[25%]">
        <div className="flex justify-between w-full xl:flex-col xl:w-[50%]">
          <Heading underlineColor="black" underline size="xl" weight="bold">
            អត្ថបទពេញនិយមប្រចាំខែ
          </Heading>
          <Button url="/news" styles="border">
            មើលបន្ថែម
          </Button>
        </div>
      </div>
      {windowWidth > 768 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[25px] xl:w-[75%]">
          {newsData?.map((x) => (
            <Link key={x.title} href={`/articles/${x.id}`}>
              <NewsCard
                key={x.title}
                id={0}
                image={x.image}
                title={x.title}
                tag={x.category}
                profile={{
                  image:
                    "https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                  name: "fortnite",
                  date: "March 23 2023",
                  view: 999,
                }}
              />
            </Link>
          ))}
        </div>
      ) : (
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 25,
            },
            600: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 25,
            },
          }}
          modules={[Pagination]}
          className="mySwiper mobile"
          style={{ padding: "2rem 1rem" }}
        >
          {newsData?.map((x) => (
            <SwiperSlide key={x.title}>
              <Link href={`/articles/${x.id}`}>
                <NewsCard
                  id={0}
                  image={x.image}
                  title={x.title}
                  tag={x.category}
                  profile={{
                    image:
                      "https://business-cambodia.com/cms/assets/23d3a23b-2baf-4802-a2ed-5e9465500843",
                    name: "fortnite",
                    date: "March 23 2023",
                    view: 999,
                  }}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default NewCategory;
