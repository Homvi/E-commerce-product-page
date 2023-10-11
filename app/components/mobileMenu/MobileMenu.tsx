"use client";

import Image from "next/image";
import "./style.scss";
import close from "../../assets/images/icon-close.svg";
import { menuSlice, useSelector, useDispatch, selectMenu } from "@/lib/redux";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectMenu);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleClose = () => {
    setIsLoaded(false);
    setTimeout(() => {
      dispatch(menuSlice.actions.closeMenu());
    }, 200);
  };

  return (
    <div id="mobileMenu">
      <div className={isLoaded ? "overlay visible" : "overlay invisible"}>
        <nav className={isLoaded ? " visible" : "invisible"}>
          <div className="close-container">
            <div className="close-wrapper p-3 w-fit" onClick={handleClose}>
              <Image src={close} alt="close" />
            </div>
          </div>
          <ul className="p-3 pt-8">
            <li className="menu-item">Collections</li>
            <li className="menu-item">Men</li>
            <li className="menu-item">Women</li>
            <li className="menu-item">About</li>
            <li className="menu-item">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
