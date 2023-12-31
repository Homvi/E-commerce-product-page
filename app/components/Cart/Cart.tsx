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

  const handleDelete = () => {
    dispatch(cartSlice.actions.deleteItem());
  };

  return (
    <div id="cart" className="w-[95vw] md:w-96 top-16 md:top-24">
      <div className="header">
        <h2>Cart</h2>
      </div>
      {cart === 0 ? (
        <div className="empty-container"> Your cart is empty.</div>
      ) : (
        <>
          <div className="details">
            <div className="left">
              <div className="thumbnail">
                <Image src={thumbnailOne} alt="product" />
              </div>
              <div className="text">
                <div className="name">Fall Limited Edition Sneakers</div>
                <div className="price">
                  $125.00 × {cart}{" "}
                  <span className="highlight">${125 * cart} </span>
                </div>
              </div>
            </div>
            <div className="delete-container">
              <Image
                src={deleteLogo}
                alt="delete"
                onClick={() => handleDelete()}
              />
            </div>
          </div>
          <div className="button-container">
            <PrimaryButton>
              <span>Checkout</span>
            </PrimaryButton>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
