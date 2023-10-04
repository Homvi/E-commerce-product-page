import React from "react";
import IncreaseButton from "./IncreaseButton";

const Content = () => {
  return (
    <div id="contentContainer">
      <div className="content-wrapper">
        <h2>sneaker company</h2>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable ubber outer sole, they&apos;ll withstand
          everything the weather can offer
        </p>
        <div className="flex items-center gap-3">
          <h3>$125.00</h3>
          <span className="discount">50%</span>
        </div>
        <h4 className="discounted-price">$250.00</h4>
        <IncreaseButton />
      </div>
    </div>
  );
};

export default Content;
