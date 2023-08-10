import React, { useState, useEffect } from 'react';


const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider1">
      <button className="prevButton" onClick={prevSlide}>◀</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slideImage" />
      <button className="nextButton" onClick={nextSlide}>▶</button>
    </div>
  );
};

export default ImageSlider;
