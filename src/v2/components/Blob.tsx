"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

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
    // transform: "translate(-50%, -50%)",
    width: "900px",
    height: "800px",
    borderRadius: "100%",
    filter: "blur(150px)",
    backgroundColor: "rgb(255, 67, 75)",
    background: "linear-gradient(#0284c7, #a855f7)",
    opacity: 0.4,
    zIndex: -9999,
  };

  const variants = {
    default: {
      // x: mousePosition.x,
      // y: mousePosition.y,
      // scale: [1, 2, 2, 1, 1],
      rotate: [0, 360],
      // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    },
  };

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
    </>
  );
}
