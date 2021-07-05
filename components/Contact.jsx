import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import React from "react";
import FadeInOnScroll from "./FadeInOnScroll";

function ContactButton({ icon, text, link }) {
  const router = useRouter();
  return (
    <Button
      margin="5px"
      leftIcon={icon}
      bg="#004ECC"
      _hover={{ bg: "#002766" }}
      _active={{ bg: "#002766" }}
      variant="solid"
      onClick={() => router.push(link)}
    >
      {text}
    </Button>
  );
}

export default function Contact() {
  return (
    <Flex w="100%" p={6} bg="#3A86FF" justifyContent="center" color="white">
      <FadeInOnScroll>
        <Container fontSize="xl" maxW="container.lg" textAlign="center">
          <Heading color="#FFBE0B">Contact me</Heading>
          Interested in hiring me or have an idea to pitch? I&apos;m currently
          open to work as a frontend developer and looking for opportunities to
          diversify my portfolio. Let&apos;s get in touch and discuss your
          projects.
          <br></br>
          <br></br>
          <ContactButton
            icon={<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>}
            text="LinkedIn"
            link="https://www.linkedin.com/in/wayson/"
          ></ContactButton>
          <ContactButton
            icon={<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>}
            text="Github"
            link="https://github.com/jaasonw"
          ></ContactButton>
          <ContactButton
            icon={<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>}
            text="Email"
            link="mailto:jayywong92@gmail.com"
          ></ContactButton>
          <ContactButton
            icon={<FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>}
            text="Resume"
            link="https://jaasonw.github.io/files/resume.pdf"
          ></ContactButton>
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
