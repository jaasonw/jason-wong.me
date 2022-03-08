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
import {
  faCode,
  faDatabase,
  faExternalLinkAlt,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import router from "next/router";
import React from "react";
import { FadeInOnScroll } from "./FadeInOnScroll";
// import { FadeInOnScroll } from "./FadeInOnScroll";
interface Project {
  name: string;
  description: string;
  technology: string;
  imageUrl: string;
  url: string;
  demoUrl: string;
}

const ProjectButton = chakra(({children, href}) => {
  return <Button colorScheme={"whiteAlpha"} variant="outline" onClick={() => router.push(href)}>
    {children}
  </Button>
})

export function ProjectCard({ project }) {
  const widths = "clamp(300px, 80vw, 410px)";
  return (
    <FadeInOnScroll>
      <Box border="1px solid lightgray" borderRadius="10px" margin="5px">
        <Box>
          <Image
            style={{ aspectRatio: "16/7" }}
            width={widths}
            alt={project.name}
            borderTopRadius="10px"
            src={project.imageUrl}
          ></Image>
          <Center
            margin="6px"
            style={{ aspectRatio: "16/7" }}
            width={widths}
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
                <ProjectButton href={project.demoUrl} >
                  Demo
                </ProjectButton>
              ) : (
                <></>
              )}
              <ProjectButton href={project.url}>
                Source
              </ProjectButton>
            </Flex>
          </Center>
        </Box>
        <Divider></Divider>
        <Box width={widths} minHeight="190px" padding="8px">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading
              as="h6"
              fontSize="clamp(18px, 2vw, 20px)"
              lineHeight="40px"
            >
              {project.name}
            </Heading>
          </Flex>
          <Flex wrap="wrap">
            {project.technology.split(",").map((e) => {
              let icon = <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>;
              let color = "gray";
              switch (e.toLowerCase()) {
                case "python":
                  icon = <FontAwesomeIcon icon={faPython}></FontAwesomeIcon>;
                  color = "blue";
                  break;
                case "bootstrap":
                  color = "twitter";
                  icon = <FontAwesomeIcon icon={faBootstrap}></FontAwesomeIcon>;
                  break;
                case "spotify api":
                  color = "green";
                  icon = <FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon>;
                  break;
                case "java":
                  color = "yellow";
                  icon = <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>;
                  break;
                case "javascript":
                  color = "yellow";
                  icon = <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>;
                  break;
                case "react":
                  color = "blue";
                  icon = <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>;
                  break;
                case "postgresql":
                  color = "blue";
                  icon = <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>;
                  break;
                case "firebase":
                  color = "orange";
                  icon = <FontAwesomeIcon icon={faFire}></FontAwesomeIcon>;
                  break;
              }
              return (
                <Badge
                  key={e}
                  colorScheme={color}
                  marginRight="10px"
                  padding="5px"
                  marginBottom="10px"
                  borderRadius="8px"
                  fontSize="clamp(9px, 1vw, 12px)"
                >
                  {icon} {e}
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
