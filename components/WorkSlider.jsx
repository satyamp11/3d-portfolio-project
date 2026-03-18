import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        { title: "title", path: "/thumb1.jpg", link: "http://example.com" },
        { title: "title", path: "/thumb2.jpg", link: "http://example.com" },
        { title: "title", path: "/thumb3.jpg", link: "http://example.com" },
        { title: "title", path: "/thumb4.jpg", link: "http://example.com" },
      ],
    },
    {
      images: [
        { title: "title", path: "/thumb4.jpg", link: "http://example.com" },
        { title: "title", path: "/thumb1.jpg", link: "http://example.com" },
        { title: "title", path: "/thumb2.jpg", link: "http://example.com" },
        { title: "title", path: "/thumb3.jpg", link: "http://example.com" },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* SWIPER */}
      <Swiper
  spaceBetween={10}
  modules={[Pagination]}
  pagination={{
    clickable: true,
    dynamicBullets: true, // 🔥 IMPORTANT
  }}
  className="h-[280px] sm:h-[480px] w-full"
>
        {workSlides.slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, imageI) => (
                <div
                  key={imageI}
                  className="relative rounded-lg overflow-hidden group"
                >
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" />

                  {/* centered text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-white"
                    >
                      <span>LIVE</span>
                      <span>PROJECT</span>
                      <BsArrowRight className="text-xl" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;