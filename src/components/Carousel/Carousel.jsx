import React, { useState } from "react";
import "./Carousel.scss";

const images = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

const thumbnails = [
  "images/image-product-1-thumbnail.jpg",
  "images/image-product-2-thumbnail.jpg",
  "images/image-product-3-thumbnail.jpg",
  "images/image-product-4-thumbnail.jpg",
];

function Carousel({
  setIsLightboxOpen,
  currentImageIndex,
  setCurrentImageIndex,
}) {
  const nextImage = () => {
    if (currentImageIndex >= images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const previousImage = () => {
    if (currentImageIndex <= 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleThumbnailSelection = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="app__carousel">
      <div className="app__carousel-mobile">
        <img src={images[currentImageIndex]} alt="product" />
        <div className="app__carousel-buttons">
          <div className="app__carousel-previous" onClick={previousImage}>
            <img src="images/icon-previous.svg" alt="previous" />
          </div>
          <div className="app__carousel-next" onClick={nextImage}>
            <img src="images/icon-next.svg" alt="next" />
          </div>
        </div>
      </div>
      <div className="app__carousel-desktop">
        <img
          src={images[currentImageIndex]}
          alt="product"
          onClick={() => setIsLightboxOpen(true)}
        />
        <div>
          {thumbnails.map((thumbnail, index) => (
            <div
              className={
                currentImageIndex === index &&
                "app__carousel-thumbnail-container"
              }
            >
              <img
                src={thumbnail}
                alt="thumbnail"
                key={thumbnail}
                className={`app__carousel-thumbnail ${
                  currentImageIndex === index &&
                  "app__carousel-thumbnail-current"
                }`}
                onClick={() => handleThumbnailSelection(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
