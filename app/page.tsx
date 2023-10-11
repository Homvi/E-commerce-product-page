"use client";

import Carousel from "./components/carousel/Carousel";
import Content from "./components/Content";
import MobileCarousel from "./components/mobileCarousel/MobileCarousel";
import Modal from "./components/modal/Modal";
import { useSelector, selectImage } from "@/lib/redux";
import { selectMenu } from "@/lib/redux";
import MobileMenu from "./components/mobileMenu/MobileMenu";

export default function Home() {
  const isMenuOpen = useSelector(selectMenu);
  const selectedImage = useSelector(selectImage);

  return (
    <>
      <div className=" md:h-screen md:p-12 md:flex">
        <div className="hidden md:flex h-full w-[50%]">
          <Carousel />
        </div>
        <div className="flex flex-col md:hidden">
          <MobileCarousel />
        </div>
        <div className="w-full md:w-[50%]">
          <Content />
        </div>
      </div>
      {selectedImage !== null && <Modal />}
      {isMenuOpen && <MobileMenu />}
    </>
  );
}
