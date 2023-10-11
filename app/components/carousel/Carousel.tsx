"use client";

import Image from "next/image";
import imageOneBig from "../../assets/images/image-product-1.jpg";
import imageTwoBig from "../../assets/images/image-product-2.jpg";
import imageThreeBig from "../../assets/images/image-product-3.jpg";
import imageFourBig from "../../assets/images/image-product-4.jpg";

import imageFourSmall from "../../assets/images/image-product-4-thumbnail.jpg";
import imageThreeSmall from "../../assets/images/image-product-3-thumbnail.jpg";
import imageTwoSmall from "../../assets/images/image-product-2-thumbnail.jpg";
import imageOneSmall from "../../assets/images/image-product-1-thumbnail.jpg";
import { useState } from "react";

const Carousel = () => {
  
  const [activeImage, setactiveImage] = useState(0);

  const images = [
    {
      normal: imageOneBig,
      thumbnail: imageOneSmall,
    },
    {
      normal: imageTwoBig,
      thumbnail: imageTwoSmall,
    },
    {
      normal: imageThreeBig,
      thumbnail: imageThreeSmall,
    },
    {
      normal: imageFourBig,
      thumbnail: imageFourSmall,
    },
  ];

  return (
    <>
      <div className="carousel w-[50%]">
        {/* main image */}

        <div className="carousel-item carousel-item-main">
          <Image
            src={images[activeImage].normal}
            alt="white and brown shoes"
            className="rounded-xl w-full "
          />
        </div>

        {/* thumbnails */}

        {images.map((image, index) => (
          <div
            className={
              index === activeImage
                ? "carousel-item thumbnail selected"
                : "carousel-item thumbnail"
            }
            key={`thumbnail_${index}`}
            onClick={() => setactiveImage(index)}
          >
            <Image
              src={image.thumbnail}
              height={300}
              alt="white and brown shoes"
              className={
                index === activeImage
                  ? "rounded-lg w-full selected-image-thumbnail"
                  : "rounded-lg w-full"
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
