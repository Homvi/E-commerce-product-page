"use client";

import "./style.scss";
import close from "../../assets/images/icon-close.svg";
import next from "../../assets/images/icon-next.svg";
import nextOrange from "../../assets/images/icon-next-orange.svg";
import mainImage from "../../assets/images/image-product-1.jpg";
import imageFourSmall from "../../assets/images/image-product-4-thumbnail.jpg";
import imageThreeSmall from "../../assets/images/image-product-3-thumbnail.jpg";
import imageTwoSmall from "../../assets/images/image-product-2-thumbnail.jpg";
import imageOneSmall from "../../assets/images/image-product-1-thumbnail.jpg";
import Image from "next/image";
import { useState } from "react";

const Modal = () => {
  const [isNextButtonHovered, setIsNextButtonHovered] = useState(false);
  const [isPrevButtonHovered, setIsPrevButtonHovered] = useState(false);

  return (
    <div id="modal">
      <div className="modal-wrapper">
        <div className="close-container">
          <Image src={close} alt="close" height={25} width={25} />
        </div>
        <div className="main-image-container">
          <Image
            src={mainImage}
            alt="product"
            height={1000}
            width={1000}
            className="main-image"
          />
          <div
            className="button next-button"
            onMouseEnter={() => setIsNextButtonHovered(true)}
            onMouseLeave={() => setIsNextButtonHovered(false)}
          >
            <Image
              src={isNextButtonHovered ? nextOrange : next}
              alt="product"
              height={60}
              width={60}
            />
          </div>
          <div
            className="button prev-button"
            onMouseEnter={() => setIsPrevButtonHovered(true)}
            onMouseLeave={() => setIsPrevButtonHovered(false)}
          >
            <Image
              src={isPrevButtonHovered ? nextOrange : next}
              alt="product"
              height={60}
              width={60}
            />
          </div>
        </div>
        <div className="thumbnails-container">
          <div className="thumbnail selected">
            <Image
              src={imageOneSmall}
              alt="product"
              height={200}
              width={200}
              className="thumbnail-image"
            />
          </div>
          <div className="thumbnail">
            <Image
              src={imageTwoSmall}
              alt="product"
              height={200}
              width={200}
              className="thumbnail-image"
            />
          </div>
          <div className="thumbnail">
            <Image
              src={imageThreeSmall}
              alt="product"
              height={200}
              width={200}
              className="thumbnail-image"
            />
          </div>
          <div className="thumbnail">
            <Image
              src={imageFourSmall}
              alt="product"
              height={400}
              width={400}
              className="thumbnail-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
