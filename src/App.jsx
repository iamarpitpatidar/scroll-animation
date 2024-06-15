import React, { useState, useEffect } from 'react';

export function App() {
  const images = [
    'https://picsum.photos/200',
    'https://picsum.photos/201',
    'https://picsum.photos/202',
    'https://picsum.photos/203',
  ];

  return (
    <div className="grid-container">
      <div className="grid-column">
        <div className="carousel-track scroll-up">
          {images.concat(images).map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Image ${index % images.length + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid-column">
        <div className="carousel-track scroll-down">
          {images.concat(images).map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Image ${index % images.length + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid-column">
        <div className="carousel-track scroll-up">
          {images.concat(images).map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Image ${index % images.length + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
