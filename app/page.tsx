import Carousel from "./components/carousel/Carousel";
import Content from "./components/Content";
import Modal from "./components/modal/Modal";

export default function Home() {
  return (
    <div className="h-screen p-12 flex">
      <Carousel />
      <Content />
      <Modal />
    </div>
  );
}
