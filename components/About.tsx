import { Container, Flex, Heading, Link } from "@chakra-ui/react";
// import Link from "next/link";
import React from "react";
import { FadeInOnScroll } from "./FadeInOnScroll";

export default function Header() {
  return (
    <Flex w="100%" p={10} justifyContent="center">
      <FadeInOnScroll>
        <Container
          fontSize="clamp(18px, 1.3vw, 20px)"
          maxW="80rem"
          textAlign="center"
        >
          <Heading color="#3A86FF">About me</Heading>
          Hey there, I&apos;m Jason and I&apos;m a Los Angeles based frontend
          developer working towards a Bachelor&apos;s in Computer Science with a
          minor in Mathematics at Cal State Fullerton.
          <br></br>
          <br></br>I started programming in 2013 when I really wanted to make
          mods for Minecraft and continued pursuing it, bringing us to where we
          are now. Since then, I&apos;ve had the opportunity to work at a
          startup and serve as TA at my community college, tutoring/mentoring
          hundreds of students. More recently, I&apos;ve been able to serve as
          an organizer for{" "}
          <Link color="asdf" href="https://tuffyhacks.com">
            TuffyHacks
          </Link>
          , CSUF&apos;s premier hackathon and the second largest in Orange
          County, and as a board member for{" "}
          <Link color="asdf" href="https://acmcsuf.com">
            acmCSUF
          </Link>
          , the largest tech community on campus.
          {/*           
            Since then,
          I&apos;ve explored many languages and technologies and am always
          learning more, I&apos;ve worked at a startup, and I&apos;ve helped
          plenty of students along their programming journey at my community
          college. I enjoy creating websites from scratch and I love making
          ideas come to life. */}
          <br></br>
          <br></br>
          During my free time I enjoy gaming with friends, being a photographer,
          and binge watching animes/kdramas.
          <br></br>
          <br></br>
        </Container>
      </FadeInOnScroll>
    </Flex>
  );
}
