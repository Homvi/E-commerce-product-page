"use client";

import Image from "next/image";
import "./style.scss";
import { images } from "@/app/constants/images";
import { useState } from "react";
import next from "../../assets/images/icon-next.svg";

const MobileCarousel = () => {
  const [activeImage, setactiveImage] = useState(0);

  const handleNextImage = () => {
    if (activeImage === images.length - 1) {
      setactiveImage(0);
    } else {
      setactiveImage(activeImage + 1);
    }
  };

  const handlePrevImage = () => {
    if (activeImage === 0) {
      setactiveImage(images.length - 1);
    } else {
      setactiveImage(activeImage - 1);
    }
  };

  return (
    <div id="mobileCarousel">
      <Image src={images[activeImage].normal} alt="main image" />
      <div className="button next-button" onClick={handleNextImage}>
        <Image src={next} alt="product" height={60} width={60} />
      </div>
      <div className="button prev-button" onClick={handlePrevImage}>
        <Image src={next} alt="product" height={60} width={60} />
      </div>
    </div>
  );
};

export default MobileCarousel;
