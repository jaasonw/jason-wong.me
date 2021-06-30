import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Header() {
  return (
    <Flex w="100%" p={10} justifyContent="center">
      <FadeInOnScroll>
        <Container fontSize="xl" maxW="container.lg" textAlign="center">
          <Heading color="#3A86FF">About me</Heading>
          Hey there, I'm Jason and I'm a Los Angeles/Orange County based web
          developer working towards a Bachelor's in computer science with a
          minor in mathematics at Cal State Fullerton.
          <br></br>
          <br></br>I started programming at around 2013 when I really wanted to
          make mods for Minecraft and continued pursuing it, bringing us to
          where we are now. I've explored all sorts of languages and
          technologies and am always learning more. I've worked at a startup,
          and I've helped plenty of students along their programming journey at
          my community college. I enjoy creating websites from scratch and I
          love making ideas come to life.
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
