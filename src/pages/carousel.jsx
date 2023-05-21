import Carousel from "@/components/carousel/Carousel";
import React from "react";

const CarouselPage = () => {
  return (
    <>
      <div style={{ marginTop: "20vh" }}>
        <Carousel />
      </div>
      <div style={{ marginTop: "20vh" }}>
        <Carousel />
      </div>
    </>
  );
};

export default CarouselPage;
