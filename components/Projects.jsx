import { Badge, Box, Divider, Flex, Heading, Image } from "@chakra-ui/react";
import {
  faBootstrap,
  faGithub,
  faJava,
  faPython,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FadeInOnScroll from "./FadeInOnScroll";

// interface Project {
//   name: string;
//   description: string;
//   technology: string;
//   imageUrl: string;
//   url: string;
//   demoUrl: string;
// }

function ProjectCard({ project }) {
  return (
    <FadeInOnScroll>
      <Box border="1px solid lightgray" borderRadius="10px" margin="5px">
        <Image
          width="700px"
          height="300px"
          borderTopRadius="10px"
          src={project.imageUrl}
        ></Image>
        <Divider></Divider>
        <Box width="700px" height="180px" padding="8px">
          <Flex justifyContent="space-between">
            <Heading as="h6" fontSize="xl" lineHeight="40px">
              {project.name}
            </Heading>
            <Box>
              {project.demoUrl != "" ? (
                <a href={project.demoUrl}>
                  <FontAwesomeIcon
                    size="2x"
                    icon={faExternalLinkAlt}
                  ></FontAwesomeIcon>
                </a>
              ) : (
                <></>
              )}
              {"  "}
              <a href={project.url}>
                <FontAwesomeIcon size="2x" icon={faGithub}></FontAwesomeIcon>
              </a>
            </Box>
          </Flex>
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
            }
            return (
              <Badge
                key={e}
                colorScheme={color}
                marginRight="10px"
                padding="5px"
                marginBottom="10px"
                borderRadius="8px"
              >
                {icon} {e}
              </Badge>
            );
          })}
          <Divider></Divider>
          <Box color="gray">{project.description}</Box>
        </Box>
      </Box>
    </FadeInOnScroll>
  );
}

export default function Projects({ projects }) {
  return (
    <Box>
      <FadeInOnScroll>
        <Heading color="#3A86FF" textAlign="center">
          Project Showcase
        </Heading>
      </FadeInOnScroll>
      <Flex
        w="100%"
        p={10}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {projects.map((p) => {
          return <ProjectCard key={p.name} project={p}></ProjectCard>;
        })}
      </Flex>
    </Box>
  );
}
