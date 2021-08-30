import { Badge, Box, Divider, Flex, Heading, Image } from "@chakra-ui/react";
import {
  faBootstrap,
  faGithub,
  faJava,
  faJs,
  faPython,
  faReact,
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
  const widths = ["300px", "400px", "500px", "500px"];
  const imageHeights = ["120px", "150px", "200px", "200px"];
  return (
    <FadeInOnScroll>
      <Box border="1px solid lightgray" borderRadius="10px" margin="5px">
        <Image
          width={widths}
          height={imageHeights}
          borderTopRadius="10px"
          src={project.imageUrl}
        ></Image>
        <Divider></Divider>
        <Box width={widths} minHeight="180px" padding="8px">
          <Flex justifyContent="space-between" alignContent="center">
            <Heading
              as="h6"
              fontSize={["sm", "md", "xl", "xl"]}
              lineHeight="40px"
            >
              {project.name}
            </Heading>
            <Box>
              {project.demoUrl != "" ? (
                <a href={project.demoUrl}>
                  <FontAwesomeIcon
                    size="1x"
                    icon={faExternalLinkAlt}
                  ></FontAwesomeIcon>
                </a>
              ) : (
                <></>
              )}
              {"  "}
              <a href={project.url}>
                <FontAwesomeIcon size="1x" icon={faGithub}></FontAwesomeIcon>
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
              case "javascript":
                color = "yellow";
                icon = <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>;
                break;
              case "react":
                color = "blue";
                icon = <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>;
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
          <Box color="gray" fontSize={["sm", "md", "md", "md"]}>
            {project.description}
          </Box>
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
