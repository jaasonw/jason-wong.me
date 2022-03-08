import { motion } from "framer-motion";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
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
    <Box bg="#3A86FF" w="100%" h="100vh" p={10} color="#E0FBFC">
      <Flex height="100%" alignItems="center">
        <motion.div
          className="container"
          initial="hidden"
          animate="visible"
          variants={greeting}
          transition={{
            duration: 0.2,
          }}
        >
          <Box paddingLeft="1%" maxWidth="900px">
            <Text
              color="#FFBE0B"
              fontSize="clamp(25px, 2.5vw, 40px)"
              lineHeight="0"
            >
              Hey there! My name is
            </Text>
            <motion.div variants={item}>
              <Heading color="#FFFFFC" fontSize="clamp(80px, 7vw, 120px)">
                Jason Wong
              </Heading>
            </motion.div>
            <motion.div variants={item}>
              <Text color="#F7F7FF" fontSize="clamp(20px, 1.5vw, 30px)">
                Frontend Web Developer, Software Engineering student, and a
                casual anime enjoyer
              </Text>
            </motion.div>
            <motion.div variants={item}>
              <Text
                color="#F7F7FF"
                fontSize="clamp(18px, 1.5vw, 25px)"
                paddingTop="3%"
              >
                🎓 Studying at California State University, Fullerton
                <br />
                🚀 Incoming Software Engineering Intern at{" "}
                <Link href="https://www.amazon.com/" color="#FFBE0B">
                  Amazon
                </Link>
              </Text>
            </motion.div>
          </Box>
        </motion.div>
      </Flex>
    </Box>
  );
}
