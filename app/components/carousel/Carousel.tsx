import Image from "next/image";
import imageOneBig from "../../assets/images/image-product-1.jpg";
import imageTwoBig from "../assets/images/image-product-2.jpg";
import imageThreeBig from "../assets/images/image-product-3.jpg";
import imageFourBig from "../assets/images/image-product-4.jpg";

import imageFourSmall from "../../assets/images/image-product-4-thumbnail.jpg";
import imageThreeSmall from "../../assets/images/image-product-3-thumbnail.jpg";
import imageTwoSmall from "../../assets/images/image-product-2-thumbnail.jpg";
import imageOneSmall from "../../assets/images/image-product-1-thumbnail.jpg";

const Carousel = () => {
  return (
    <div className="carousel w-[50%]">
      <div className="carousel-item carousel-item-main">
        <Image
          src={imageOneBig}
          alt="white and brown shoes"
          className="rounded-xl w-full "
        />
      </div>
      <div className="carousel-item thumbnail selected">
        <Image
          src={imageOneSmall}
          height={300}
          alt="white and brown shoes"
          className="rounded-lg w-full selected-image-thumbnail"
        />
      </div>
      <div className="carousel-item thumbnail">
        <Image
          src={imageTwoSmall}
          alt="white and brown shoes"
          className="rounded-lg w-full "
        />
      </div>
      <div className="carousel-item thumbnail">
        <Image
          src={imageThreeSmall}
          alt="white and brown shoes"
          className="rounded-lg w-full "
        />
      </div>
      <div className="carousel-item thumbnail">
        <Image
          src={imageFourSmall}
          alt="white and brown shoes"
          className="rounded-lg w-full "
        />
      </div>
    </div>
  );
};

export default Carousel;
