"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import Cart from "../Cart/Cart";
import burger from "../../assets/images/icon-menu.svg";
import "./style.scss";
import { useSelector, selectCart } from "@/lib/redux";
import { menuSlice, useDispatch } from "@/lib/redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCart);

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav id="desktopNav" className="sticky px-3 md:px-0 md:max-w-[90%] mx-auto top-0 md:border-b-2 h-14 md:h-28 flex justify-between bg-white">
      <div id="left" className="flex items-center">
        <div
          id="burger"
          className="mr-3 flex items-center md:hidden"
          onClick={() => dispatch(menuSlice.actions.openMenu())}
        >
          <Image src={burger} alt="logo" className="opacity-90 " />
        </div>
        <div id="logo" className="m-1 md:m-0 md:mr-14 flex items-center">
          <Image src={logo} alt="logo" width={130} className="opacity-90" />
        </div>
        <ul className="md:flex gap-7  h-full items-center hidden ">
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
        <div
          className="cart-logo-container flex items-center relative  mx-7 cursor-pointer"
          onClick={() => setIsCartOpen((curr) => !curr)}
        >
          <div id="cart-counter-bedge">{count}</div>
          <Image src={cart} alt="logo" className="opacity-90 w-6 md:w-[25px]" />
        </div>
        <div id="profileImageContainer">
          <Image
            src={avatar}
            alt="avatar"
            width={50}
            className="opacity-90 avatar-image w-7 md:w-[50px]"
          />
        </div>
      </div>
      {isCartOpen && <Cart />}
    </nav>
  );
};

export default Navbar;
