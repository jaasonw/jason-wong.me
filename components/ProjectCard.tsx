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
import {
  faCode,
  faDatabase,
  faExternalLinkAlt,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export function ProjectCard({ project }) {
  const widths = "clamp(300px, 80vw, 480px)";
  return (
    <FadeInOnScroll>
      <Box border="1px solid lightgray" borderRadius="10px" margin="5px">
        <Image
          style={{ "aspectRatio": "16/7" }}
          width={widths}
          alt={project.name}
          borderTopRadius="10px"
          src={project.imageUrl}
        ></Image>
        <Divider></Divider>
        <Box width={widths} minHeight="180px" padding="8px">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading
              as="h6"
              fontSize="clamp(18px, 2vw, 20px)"
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
