"use client";

import Carousel from "./components/carousel/Carousel";
import Content from "./components/Content";
import Modal from "./components/modal/Modal";
import { useSelector, selectImage } from "@/lib/redux";

export default function Home() {
  const selectedImage = useSelector(selectImage);
  return (
    <div className="h-screen p-12 flex">
      <Carousel />
      <Content />
      {selectedImage !== null && <Modal />}
    </div>
  );
}
