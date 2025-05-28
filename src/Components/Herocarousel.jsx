// components/HeroCarousel.jsx
import i5 from '../assets/sectionL/i5.png'
import React, { useEffect, useState } from 'react';
import left from '../assets/icons/left-arrow.png'
import right from '../assets/icons/right-arrow.png'

const slides = [
  {
    id: 1,
    image: i5,
  },
  {
    id: 2,
    image: i5,
  },
  {
    id: 3,
    image: i5,
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrent(index);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  return (
    <div className="relative h-[65vh] my-15 w-full md:w-[95vw] flex justify-self-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="md:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-4 rounded-full hover:bg-opacity-75 z-20"
      >
        <img className='h-5 w-5' src={left} alt="" />
      </button>
      <button
        onClick={nextSlide}
        className="md:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-4 rounded-full hover:bg-opacity-75 z-20"
      >
        <img className='h-5 w-5' src={right} alt="" />
      </button>

      {/* Dotted Pagination */}
      <div className="absolute bottom-6 w-full flex justify-center items-center z-20 space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? 'bg-amber-700 ring-white ring-2' : 'bg-white ring-2 ring-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
