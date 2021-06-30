import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";


export default function FadeInOnScroll(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // if (!inView) {
    //   controls.start("hidden");
    // }
  }, [controls, inView]);
  const variants = {
    hidden: { opacity: 0, y: "10%" },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
      y: "0",
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {props.children}
    </motion.div>
  );
}
