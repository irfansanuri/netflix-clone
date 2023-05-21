import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Carousel = () => {
  const itemContainerRef = useRef(null);
  const carouselRef = useRef(null);

  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [translateXValue, setTranslateXValue] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (itemContainerRef.current && carouselRef.current) {
        carouselRef.current.style.height = `${itemContainerRef.current.clientHeight}px`;
        const calculatedTotalPages =
          itemContainerRef.current.clientWidth / window.innerWidth;
        setTotalPages(calculatedTotalPages);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const newTranslateXValue =
      page === Math.ceil(totalPages)
        ? (totalPages - 1) * -100
        : (page - 1) * -92;
    setTranslateXValue(newTranslateXValue);
  }, [page, totalPages]);

  useEffect(() => {
    if (itemContainerRef.current) {
      itemContainerRef.current.style.transform = `translateX(${translateXValue}vw)`;
    }
  }, [translateXValue]);

  const updatePage = (direction) => {
    const nextPage =
      direction === "next"
        ? (currentVal) =>
            currentVal === Math.ceil(totalPages) ? 1 : currentVal + 1
        : (currentVal) =>
            currentVal === 1 ? Math.ceil(totalPages) : currentVal - 1;
    setPage(nextPage);
  };

  return (
    <div
      ref={carouselRef}
      className={styles.carousel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className={styles.back} onClick={() => updatePage("prev")}>
          <KeyboardArrowLeftIcon className={styles.icon} />
        </div>
      )}
      <div className={styles["item-container"]} ref={itemContainerRef}>
        {[...Array(23)].map((_, index) => (
          <div key={index} className={styles.item}>
            <Image
              src="/static/thumbnail.jpg"
              alt="Thumbnail"
              width={300}
              height={200}
            />
          </div>
        ))}
      </div>
      {hovered && (
        <div className={styles.forward} onClick={() => updatePage("next")}>
          <KeyboardArrowRightIcon className={styles.icon} />
        </div>
      )}
    </div>
  );
};

export default Carousel;
