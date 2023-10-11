"use client";

import Image from "next/image";
import { useState } from "react";
import { images } from "@/app/constants/images";
import { modalSlice, useSelector, useDispatch, selectImage } from "@/lib/redux";

const Carousel = () => {
  const dispatch = useDispatch();
  const [activeImage, setactiveImage] = useState(0);

  return (
    <>
      <div className="carousel w-full">
        {/* main image */}

        <div
          className="carousel-item carousel-item-main"
          onClick={() => dispatch(modalSlice.actions.changeImage(activeImage))}
        >
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
