import {
  Badge,
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import {
  faBootstrap,
  faGithub,
  faJava,
  faJs,
  faPython,
  faReact,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDatabase,
  faExternalLinkAlt,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FadeInOnScroll } from "./FadeInOnScroll";
import { ProjectCard } from "./ProjectCard";

export default function Projects({ projects }) {
  return (
    <Box>
      <FadeInOnScroll>
        <Heading color="#3A86FF" textAlign="center">
          Project Showcase
        </Heading>
      </FadeInOnScroll>
      <Container maxW="95rem">
        <Flex
          w="100%"
          // p={10}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          {projects.map((p) => {
            return <ProjectCard key={p.name} project={p}></ProjectCard>;
          })}
        </Flex>
      </Container>
    </Box>
  );
}
