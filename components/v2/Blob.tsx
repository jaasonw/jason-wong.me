"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

// import "./App.css";

export default function Blob() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const style = {
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "700px",
    borderRadius: "100%",
    // filter: " blur(200px)",
    backgroundColor: "rgb(255, 67, 75)",
    background: "linear-gradient(#0284c7, #a855f7)",
    opacity: 0.4,
    zIndex: -2,
  };

  const variants = {
    default: {
      x: mousePosition.x - 200,
      y: mousePosition.y - 200,
      // scale: [1, 2, 2, 1, 1],
      rotate: [0, 360],
      // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    },
  };

  // const animate = {
  //   scale: [1, 2, 2, 1, 1],
  //   rotate: [0, 0, 270, 270, 0],
  //   borderRadius: ['20%', '20%', '50%', '50%', '20%'],
  // };

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0`}
        style={style}
        variants={variants}
        // animate={animate}
        animate="default"
        transition={{
          x: {
            duration: 0.1,
            ease: "linear",
            repeat: 0,
            // type: "spring",
            stiffness: 80,
          },
          y: {
            duration: 0.1,
            ease: "linear",
            repeat: 0,
            // type: "spring",
            stiffness: 80,
          },
          default: {
            duration: 20,
            repeat: Infinity,
          },
        }}
      ></motion.div>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backdropFilter: "blur(200px)",
          zIndex: -1,
        }}
      ></div>
    </>
  );
}
