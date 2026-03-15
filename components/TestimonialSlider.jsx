import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Ayush Jaiswal",
    position: "Customer",
    message:
      "Satyam edited my instagram reels and I am extremely satisfied with the results. He has a great eye for detail and creativity, and he was able to bring my vision to life in a way that exceeded my expectations. I highly recommend his services for anyone looking for high-quality video editing.",
  },
  {
    image: "/t-avt-2.png",
    name: "Ujjwal Singh",
    position: "Customer",
    message:
      "Great work on the ui/ux design for my website! Satyam's attention to detail and creativity really made my website stand out. He was able to take my ideas and turn them into a beautiful and functional design that perfectly captures the essence of my brand. ",
  },
  {
    image: "/t-avt-3.png",
    name: "Hersh kumar",
    position: "Customer",
    message:
      "Satyam delivered an exceptional website that exceeded our expectations. His attention to detail, creativity, and professionalism were evident throughout the project. We highly recommend his services for anyone looking to create a stunning online presence.",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));

  const person = testimonialData[current];

  return (
    <div className="flex flex-col items-center">
      {/* Slide */}
      <div className="flex flex-col items-center md:flex-row gap-x-8 h-[350px] px-16 w-full">
        {/* avatar, name, position */}
        <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
          <div className="flex flex-col justify-center text-center">
            <div className="mb-2 mx-auto">
              <Image
                src={person.image}
                width={100}
                height={100}
                alt={person.name}
              />
            </div>
            <div className="text-lg">{person.name}</div>
            <div className="text-[12px] uppercase font-extralight tracking-widest">
              {person.position}
            </div>
          </div>
        </div>

        {/* quote & message */}
        <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
          <div className="mb-4">
            <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
          </div>
          <div className="xl:text-lg text-center md:text-left">
            {person.message}
          </div>
        </div>
      </div>

      {/* Dots + arrows */}
      <div className="flex items-center gap-4 mt-6">
        {/* prev arrow */}
        <button onClick={prev} className="text-white/50 hover:text-accent text-2xl transition">
          &#8592;
        </button>

        {/* dots */}
        <div className="flex gap-3">
          {testimonialData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-accent w-7"
                  : "bg-white/30 w-3"
              }`}
            />
          ))}
        </div>

        {/* next arrow */}
        <button onClick={next} className="text-white/50 hover:text-accent text-2xl transition">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;