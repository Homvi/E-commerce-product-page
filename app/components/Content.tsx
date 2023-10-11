"use client";

import React, { useState } from "react";
import IncreaseButton from "./IncreaseButton";
import PrimaryButton from "./primaryButton/PrimaryButton";
import { cartSlice, useDispatch } from "@/lib/redux";
import Image from "next/image";
import cartWhite from "../assets/images/icon-cart-white.svg";

const Content = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  const handleAddToCart = () => {
    dispatch(cartSlice.actions.incrementByAmount(quantity));
  };

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
        <div className="flex mb-3 justify-between items-center md:items-start md:flex-col gap-3 md:gap-0">
          <div className="flex items-center gap-3">
            <h3>$125.00</h3>
            <span className="discount">50%</span>
          </div>
          <h4 className="discounted-price md:mb-8 my-1">$250.00</h4>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <IncreaseButton
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
          />
          <PrimaryButton handleAddToCart={handleAddToCart}>
            <span>
              <Image
                src={cartWhite}
                alt="logo"
                width={16}
                className="opacity-90"
              />
            </span>
            <span>Add to cart</span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Content;
