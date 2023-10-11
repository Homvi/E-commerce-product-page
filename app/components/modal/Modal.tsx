"use client";

import "./style.scss";
import close from "../../assets/images/icon-close.svg";
import next from "../../assets/images/icon-next.svg";
import nextOrange from "../../assets/images/icon-next-orange.svg";
import Image from "next/image";
import { modalSlice, useSelector, useDispatch, selectImage } from "@/lib/redux";
import { useState } from "react";
import { images } from "@/app/constants/images";

const Modal = () => {
  const dispatch = useDispatch();
  const selectedImage = useSelector(selectImage);

  const [isNextButtonHovered, setIsNextButtonHovered] = useState(false);
  const [isPrevButtonHovered, setIsPrevButtonHovered] = useState(false);

  if (selectedImage === null) return null;
  const handleClose = () => {
    dispatch(modalSlice.actions.closeModal());
    console.log("close");
  };

  const handleNextImage = () => {
    if (selectedImage === images.length - 1) {
      dispatch(modalSlice.actions.changeImage(0));
    } else {
      dispatch(modalSlice.actions.changeImage(selectedImage + 1));
    }
  };

  const handlePrevImage = () => {
    if (selectedImage === 0) {
      dispatch(modalSlice.actions.changeImage(images.length - 1));
    } else {
      dispatch(modalSlice.actions.changeImage(selectedImage - 1));
    }
  };

  return (
    <div id="modal">
      <div className="modal-wrapper">
        <div className="close-container">
          <Image
            src={close}
            alt="close"
            height={25}
            width={25}
            onClick={() => handleClose()}
          />
        </div>
        <div className="main-image-container">
          <Image
            src={images[selectedImage].normal}
            alt="product"
            height={1000}
            width={1000}
            className="main-image"
          />
          <div
            className="button next-button"
            onClick={handleNextImage}
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
            onClick={handlePrevImage}
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
          {images.map((image, index) => (
            <div
              className={
                index === selectedImage ? "thumbnail selected" : "thumbnail"
              }
              key={`modal_thumbnail_${index}`}
              onClick={() => dispatch(modalSlice.actions.changeImage(index))}
            >
              <Image
                src={image.thumbnail}
                alt="product"
                height={200}
                width={200}
                className="thumbnail-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
