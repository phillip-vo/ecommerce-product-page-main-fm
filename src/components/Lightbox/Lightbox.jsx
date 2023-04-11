import React, { useState } from "react";
import "./Lightbox.scss";

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

function Lightbox({ setIsLightboxOpen, currentImageIndex }) {
  const [currentLightboxImageIndex, setCurrentLighboxImageIndex] =
    useState(currentImageIndex);

  const nextImage = () => {
    if (currentLightboxImageIndex >= images.length - 1) {
      setCurrentLighboxImageIndex(0);
    } else {
      setCurrentLighboxImageIndex(currentLightboxImageIndex + 1);
    }
  };

  const previousImage = () => {
    if (currentLightboxImageIndex <= 0) {
      setCurrentLighboxImageIndex(images.length - 1);
    } else {
      setCurrentLighboxImageIndex(currentLightboxImageIndex - 1);
    }
  };

  const handleThumbnailSelection = (index) => {
    setCurrentLighboxImageIndex(index);
  };

  return (
    <div className="app__lightbox">
      <div className="app__lightbox-delete">
        <svg
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          style={{ background: "transparent" }}
          onClick={() => setIsLightboxOpen(false)}
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#ffffff"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      <img src={images[currentLightboxImageIndex]} alt="product" />
      <div className="app__lightbox-buttons">
        <div className="app__lightbox-previous" onClick={previousImage}>
          <img src="images/icon-previous.svg" alt="previous" />
        </div>
        <div className="app__lightbox-next" onClick={nextImage}>
          <img src="images/icon-next.svg" alt="next" />
        </div>
      </div>
      <div>
        {thumbnails.map((thumbnail, index) => (
          <div
            className={`app__lightbox-thumbnail-container ${
              currentLightboxImageIndex === index &&
              "app__lightbox-thumbnail-border"
            }`}
          >
            <img
              src={thumbnail}
              alt="thumbnail"
              key={thumbnail}
              className={`app__lightbox-thumbnail ${
                currentLightboxImageIndex === index &&
                "app__lightbox-thumbnail-current"
              }`}
              onClick={() => handleThumbnailSelection(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lightbox;
