"use client";

import PrimaryButton from "../primaryButton/PrimaryButton";
import thumbnailOne from "../../assets/images/image-product-1-thumbnail.jpg";
import deleteLogo from "../../assets/images/icon-delete.svg";
import "./style.scss";
import Image from "next/image";
import { cartSlice, useSelector, useDispatch, selectCart } from "@/lib/redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  if (cart === 0) {
    return;
  }

  const handleDelete = () => {
    dispatch(cartSlice.actions.deleteItem());
  };

  return (
    <div id="cart">
      <div className="header">
        <h2>Cart</h2>
      </div>
      <div className="details">
        <div className="left">
          <div className="thumbnail">
            <Image src={thumbnailOne} alt="product" />
          </div>
          <div className="text">
            <div className="name">Fall Limited Edition Sneakers</div>
            <div className="price">
              $125.00 × {cart} <span className="highlight">${125 * cart} </span>
            </div>
          </div>
        </div>
        <div className="delete-container">
          <Image src={deleteLogo} alt="delete" onClick={() => handleDelete()} />
        </div>
      </div>
      <div className="button-container">
        <PrimaryButton>
          <span>Checkout</span>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Cart;
