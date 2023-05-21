// pages/test.jsx
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/test.module.css";
import { color, motion } from "framer-motion";

const ImageComponent = () => {
  const [trigger, setTrigger] = useState(false);
  return (
    <>
      <div className={styles["image-component"]}>
        <div className={styles["image-container"]}>
          <Image
            src="/static/thumbnail.jpg"
            alt="Thumbnail"
            width={500}
            height={300}
          />
        </div>

        <div className={styles["hover-div"]} />
      </div>
      <motion.div
        initial={{
          x: 0,
          y: 0,
          scale: 1.0,
          rotate: 0,
          overflow: "visible", // Added line
        }}
        whileHover={{
          scale: 2.0,
          overflow: "visible", // Added line
        }}
        onMouseEnter={() => setTrigger(true)}
        onMouseLeave={() => setTrigger(false)}
        style={{
          overflow: "visible", // Added line
          border: "2px solid white",
          position: "absolute",
          marginLeft: "22%",
          borderRadius: "20px",
        }}
      >
        <Image
          src="/static/thumbnail.jpg"
          alt="Thumbnail"
          width={500}
          height={300}
          layout="responsive"
          objectFit="contain"
        />
        {trigger && <div style={{ height: "100px" }}></div>}
      </motion.div>
    </>
  );
};

export default ImageComponent;
