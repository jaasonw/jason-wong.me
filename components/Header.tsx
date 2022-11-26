import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export function Header() {
  const greeting = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      transition: { when: "afterChildren" },
    },
  };
  const item = {
    visible: {
      opacity: 1,
      y: "0",
    },
    hidden: {
      opacity: 0,
      y: "10%",
    },
  };
  return (
    <section className="flex items-center bg-azure w-full h-screen px-10 text-ghostwhite">
      <section className="flex items-center h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={greeting}
          transition={{
            duration: 0.2,
          }}
        >
          <div className="pl-1 max-w-4xl">
            <span className="text-amber text-2xl md:text-3xl leading-none">
              Hey there! My name is
            </span>
            <motion.div variants={item}>
              <h1 className=" font-heading font-medium text-7xl md:text-8xl">
                Jason Wong
              </h1>
            </motion.div>
            <motion.div className="mt-4" variants={item}>
              <span className="text-lg md:text-2xl leading-5">
                Frontend Web Developer, Software Engineering student, and
                sometimes a photographer
              </span>
            </motion.div>
            <motion.div className="mt-6" variants={item}>
              <span className="text-lg md:text-2xl">
                🎓 Studying at California State University, Fullerton
                <br />
                🚀 Software Engineering Intern at{" "}
                <Link href="https://www.amazon.com/">
                  <a className="text-amber hover:underline">Amazon</a>
                </Link>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </section>
  );
}
