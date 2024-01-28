import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative mx-auto overflow-hidden">
      <div className="flex transition-transform ease-in-out duration-300 transform -translate-x-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 flex justify-center items-center">
            <img src={image} alt={`Slide ${index}`} className="max-h-full object-contain" />
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-lg focus:outline-none"
      >
        &#10094; {/* Left arrow symbol */}
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-lg focus:outline-none"
      >
        &#10095; {/* Right arrow symbol */}
      </button>
    </div>
  );
};

export default Carousel;
