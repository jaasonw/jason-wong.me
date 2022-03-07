import { Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

export function FadeInOnScroll({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
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
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </MotionBox>
  );
}
