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
    <Swiper
      spaceBetween={10}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="h-[280px] sm:h-[480px]"
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

                {/* text */}
                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300">
                  <Link
                    href={image.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                  >
                    <span>LIVE</span>
                    <span className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                      PROJECT
                    </span>
                    <BsArrowRight className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;