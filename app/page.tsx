"use client";

import { Provider } from "react-redux";
import Carousel from "./components/carousel/Carousel";
import Content from "./components/Content";
import Modal from "./components/modal/Modal";
import store from "./redux/store";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="h-screen p-12 flex">
        <Carousel />
        <Content />
        <Modal />
      </div>
    </Provider>
  );
}
