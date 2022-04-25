import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { FadeInOnScroll } from "./FadeInOnScroll";
import { Project, ProjectCard } from "./ProjectCard";

export default function Projects({ projects }) {
  return (
    <Box>
      <FadeInOnScroll>
        <Heading color="#3A86FF" textAlign="center" marginBottom="0.5em">
          Project Showcase
        </Heading>
      </FadeInOnScroll>
      <Container w="80vw " maxW="95rem">
        <SimpleGrid
          columns={{ base: 1, lg: 3, md: 2 }}
          gap="1em"
          marginBottom="2em"
        >
          {projects.map((p: Project) => {
            return <ProjectCard key={p.name} project={p}></ProjectCard>;
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
