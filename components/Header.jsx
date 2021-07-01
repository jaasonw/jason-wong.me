import { motion } from "framer-motion";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  const greeting = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
            duration: 0.1,
          }}
        >
          <Box paddingLeft="1%" maxWidth="900px">
            <Text
              color="#FFBE0B"
              fontSize={["1xl", "2xl", "3xl", "4xl"]}
              lineHeight="0"
            >
              Hey there! My name is
            </Text>
            <motion.div variants={item}>
              <Heading color="#FFFFFC" fontSize={["6xl", "8xl", "8xl", "9xl"]}>
                Jason Wong
              </Heading>
            </motion.div>
            <motion.div variants={item}>
              <Text color="#F7F7FF" fontSize={["xl", "2xl", "3xl", "3xl"]}>
                Frontend Web Developer and Software Engineering student with an
                interest in data analysis and a casual anime enjoyer
              </Text>
            </motion.div>
            <motion.div variants={item}>
              <Text
                color="#F7F7FF"
                fontSize={["lg", "1xl", "2xl", "2xl"]}
                paddingTop="3%"
              >
                🎓 Currently studying at California State University, Fullerton
              </Text>
            </motion.div>
          </Box>
        </motion.div>
      </Flex>
    </Box>
  );
}

