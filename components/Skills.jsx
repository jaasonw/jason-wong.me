import { Badge, Box, Divider, Flex, Heading, Image } from "@chakra-ui/react";
import {
  faBootstrap,
  faGithub,
  faJava,
  faPython,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faCommentsDollar, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
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

function SkillCard({ skill }) {
  const widths = ["300px", "400px", "500px", "500px"];
  const imageHeights = ["120px", "150px", "200px", "200px"];
  console.log(skill)
  return (
    <FadeInOnScroll>
      <Box borderRadius="10px" margin="5px">
        <Image
          width={widths}
          height={imageHeights}
          borderTopRadius="10px"
          src={skill.imageUrl}
        ></Image>
        <Divider></Divider>
        <Box width={widths} minHeight="180px" padding="8px">
          <Flex justifyContent="left" alignContent="center">
            <Heading
              as="h6"
              fontSize={["sm", "md", "xl", "xl"]}
              lineHeight="40px"
            >
              {skill.name}
            </Heading>
          </Flex>
          <Divider></Divider>
          <Box color="gray" fontSize={["sm", "md", "md", "md"]}>
            {skill.description}
          </Box>
        </Box>
      </Box>
    </FadeInOnScroll>
  );
}

export default function Skills({ skills }) {
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
        {skills.map((p) => {
          console.log(p)
          return <SkillCard key={p.name} skill={p}></SkillCard>;
        })}
      </Flex>
    </Box>
  );
}
