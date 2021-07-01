import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Header() {
  return (
    <Flex w="100%" p={10} justifyContent="center">
      <FadeInOnScroll>
        <Container
          fontSize={["md", "md", "xl", "xl"]}
          maxW="container.lg"
          textAlign="center"
        >
          <Heading color="#3A86FF">About me</Heading>
          Hey there, I&apos;m Jason and I&apos;m a Los Angeles based web
          developer working towards a Bachelor&apos;s in computer science with a
          minor in mathematics at Cal State Fullerton.
          <br></br>
          <br></br>I started programming in 2013 when I really wanted to make
          mods for Minecraft and continued pursuing it, bringing us to where we
          are now. Since then, I&apos;ve explored many languages and
          technologies and am always learning more, I&apos;ve worked at a
          startup, and I&apos;ve helped plenty of students along their
          programming journey at my community college. I enjoy creating websites
          from scratch and I love making ideas come to life.
          <br></br>
          <br></br>
          During my free time I enjoy gaming with friends and binge watching
          animes and kdramas.
          <br></br>
          <br></br>
        </Container>
      </FadeInOnScroll>
    </Flex>
  );
}
