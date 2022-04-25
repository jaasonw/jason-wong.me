import {
  Badge,
  Box,
  Button,
  Center,
  chakra,
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
import { faCode, faDatabase, faFire } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import router from "next/router";
import React from "react";
import { FadeInOnScroll } from "./FadeInOnScroll";
export interface Project {
  name: string;
  description: string;
  technology: string;
  imageUrl: string;
  url: string;
  demoUrl: string;
}

const ProjectButton = chakra(({ children, href }) => {
  return (
    <Button
      colorScheme={"whiteAlpha"}
      variant="outline"
      onClick={() => router.push(href)}
    >
      {children}
    </Button>
  );
});

export function ProjectCard({ project }: { project: Project }) {
  const icons = new Proxy(
    {
      python: { icon: faPython, color: "blue" },
      bootstrap: { icon: faBootstrap, color: "twitter" },
      spotify: { icon: faSpotify, color: "green" },
      java: { icon: faJava, color: "yellow" },
      javascript: { icon: faJs, color: "yellow" },
      react: { icon: faReact, color: "blue" },
      postgresql: { icon: faDatabase, color: "blue" },
      firebase: { icon: faFire, color: "orange" },
      svelte: { icon: faCode, color: "red" },
    },
    {
      // It lets you return default values for hashes
      get: (obj, prop) =>
        obj.hasOwnProperty(prop) ? obj[prop] : { icon: faCode, color: "gray" },
    }
  );
  return (
    <FadeInOnScroll>
      <Box border="1px solid lightgray" borderRadius="10px" height="100%">
        <Flex>
          <Image
            style={{ aspectRatio: "16/7" }}
            alt={project.name}
            borderTopRadius="10px"
            src={project.imageUrl}
          ></Image>
          <Center
            style={{ aspectRatio: "16/7" }}
            width="100%"
            borderTopRadius="10px"
            backgroundColor="black"
            position="absolute"
            top="0"
            left="0"
            opacity="0"
            transition="all 0.2s ease-out"
            _hover={{ opacity: 0.8, transition: "all 0.2s ease-in" }}
          >
            <Flex width="50%" justify="space-around" gap="2em">
              {project.demoUrl != "" ? (
                <ProjectButton href={project.demoUrl}>Demo</ProjectButton>
              ) : (
                <></>
              )}
              <ProjectButton href={project.url}>Source</ProjectButton>
            </Flex>
          </Center>
        </Flex>
        <Divider></Divider>
        <Box width="100%" minHeight="190px" padding="8px">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h6" fontSize="clamp(15px, 2vw, 18px)" margin="0.3em 0">
              {project.name}
            </Heading>
          </Flex>
          <Flex wrap="wrap" gap="0em">
            {project.technology.split(",").map((t: string) => {
              const tag = t.toLocaleLowerCase();
              return (
                <Badge
                  key={t}
                  colorScheme={icons[tag].color}
                  marginRight="0.5em"
                  padding="0.4em"
                  marginBottom="0.5em"
                  borderRadius="8px"
                  fontSize="clamp(8px, 1vw, 10px)"
                >
                  <FontAwesomeIcon icon={icons[tag].icon} /> {t}
                </Badge>
              );
            })}
          </Flex>

          <Divider></Divider>
          <Box color="gray" fontSize="clamp(13px, 2vw, 15px)">
            {project.description}
          </Box>
        </Box>
      </Box>
    </FadeInOnScroll>
  );
}
