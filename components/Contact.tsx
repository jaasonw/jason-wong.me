import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import React from "react";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Contact() {
  const router = useRouter();
  return (
    <Flex w="100%" p={6} bg="#3A86FF" justifyContent="center" color="white">
      <FadeInOnScroll>
        <Container fontSize="xl" maxW="container.lg" textAlign="center">
          <Heading color="#FFBE0B">Contact me</Heading>
          Interested in hiring me or have an idea to pitch? I&apos;m currently open
          to work as a frontend developer and looking for opportunities to
          diversify my portfolio. Let&apos;s get in touch and discuss your projects.
          <br></br>
          <br></br>
          <Button
            leftIcon={<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>}
            bg="#004ECC"
            _hover={{ bg: "#002766" }}
            _active={{ bg: "#002766" }}
            variant="solid"
            onClick={() => router.push("https://www.linkedin.com/in/wayson/")}
          >
            LinkedIn
          </Button>{" "}
          <Button
            leftIcon={<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>}
            bg="#004ECC"
            _hover={{ bg: "#002766" }}
            _active={{ bg: "#002766" }}
            variant="solid"
            onClick={() => router.push("https://github.com/jaasonw")}
          >
            Github
          </Button>{" "}
          <Button
            leftIcon={<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>}
            bg="#004ECC"
            _hover={{ bg: "#002766" }}
            _active={{ bg: "#002766" }}
            variant="solid"
            onClick={() =>
              router.push("mailto:jayywong92@gmail.com")
            }
          >
            Email
          </Button>{" "}
          <Button
            leftIcon={<FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>}
            bg="#004ECC"
            _hover={{ bg: "#002766" }}
            _active={{ bg: "#002766" }}
            variant="solid"
            onClick={() =>
              router.push("https://jaasonw.github.io/files/resume.pdf")
            }
          >
            Resume
          </Button>
          <br></br>
          <br></br>
          Designed and built by Jason Wong
          <br></br>
          Copyright 2021
          <br></br>
          Built with{" "}
          <Text as="a" color="#FFBE0B">
            Next.js
          </Text>{" "}
          &{" "}
          <Text as="a" color="#FFBE0B">
            ChakraUI
          </Text>
        </Container>
      </FadeInOnScroll>
    </Flex>
  );
}
