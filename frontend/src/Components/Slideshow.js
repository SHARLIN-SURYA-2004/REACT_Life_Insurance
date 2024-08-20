import React, { useState, useEffect } from 'react';
import '../styles/Slideshow.css';

import slide1 from '../term-life.jpg';
import slide2 from '../whole-life.jpg';
import slide3 from '../universal-image.png';
import slide4 from '../variable-life.avif';
import slide6 from '../indexed-universal-life.jpg';
import slide7 from '../garented-life.jpg';
import slide8 from '../simplified-life.jpg';
import slide9 from '../group-life.jpg';
import slide10 from '../Final-life.jpg';

const images = [
  slide1, slide2, slide3, slide4, slide6, slide7, slide8, slide9, slide10
];

const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`slideshow-image ${index === currentImage ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Slideshow;
