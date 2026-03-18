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
      "Great work on the ui/ux design for my website! Satyam's attention to detail and creativity really made my website stand out. He was able to take my ideas and turn them into a beautiful and functional design that perfectly captures the essence of my brand.",
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
    <div className="flex flex-col items-center w-full">
      
      {/* Slide */}
      <div className="flex flex-col md:flex-row gap-8 px-6 md:px-12 w-full items-center">

        {/* Avatar + Info */}
        <div className="w-full max-w-[250px] flex flex-col items-center text-center">
          <Image
            src={person.image}
            width={100}
            height={100}
            alt={person.name}
            className="mb-3"
          />
          <div className="text-lg">{person.name}</div>
          <div className="text-[12px] uppercase font-extralight tracking-widest">
            {person.position}
          </div>
        </div>

        {/* Message */}
        <div className="flex-1 text-center md:text-left relative md:pl-10">
          
          <FaQuoteLeft className="text-4xl md:text-6xl text-white/20 mb-4 mx-auto md:mx-0" />
          
          <p className="text-sm md:text-base leading-relaxed">
            {person.message}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-8">

        {/* Prev */}
        <button
          onClick={prev}
          className="text-white/50 hover:text-accent text-2xl transition"
        >
          &#8592;
        </button>

        {/* Dots */}
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

        {/* Next */}
        <button
          onClick={next}
          className="text-white/50 hover:text-accent text-2xl transition"
        >
          &#8594;
        </button>

      </div>
    </div>
  );
};

export default TestimonialSlider;