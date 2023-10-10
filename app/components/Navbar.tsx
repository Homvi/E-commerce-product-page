import Image from "next/image";
import React from "react";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import Cart from "./Cart/Cart";

const Navbar = () => {
  return (
    <nav className="sticky top-0 border-b-2 h-28 flex justify-between bg-white">
      <div id="left" className="flex items-center">
        <div id="logo" className="mr-14 flex items-center">
          <Image src={logo} alt="logo" width={130} className="opacity-90" />
        </div>
        <ul className="flex gap-7  h-full items-center">
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div id="right" className="flex items-center h-full">
        <div className="cart-logo-container flex items-center h-full mx-7">
          <Image src={cart} alt="logo" width={25} className="opacity-90" />
        </div>
        <div id="profileImageContainer">
          <Image
            src={avatar}
            alt="avatar"
            width={50}
            className="opacity-90 avatar-image"
          />
        </div>
      </div>
      <Cart />
    </nav>
  );
};

export default Navbar;
