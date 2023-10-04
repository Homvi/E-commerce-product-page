import Carousel from "./components/Carousel";
import Content from "./components/Content";

export default function Home() {
  return (
    <div className="h-screen p-12 flex">
      <Carousel />
      <Content />
    </div>
  );
}
