import { Badge, Button, chakra } from "@chakra-ui/react";
import {
  faBootstrap,
  faJava,
  faJs,
  faPython,
  faReact,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faFire } from "@fortawesome/free-solid-svg-icons";
import ctl from "@netlify/classnames-template-literals";
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

  // css classes for the hover overlay
  const overlayCN = ctl(`
    flex
    items-center
    justify-center
    border
    rounded-t-md
    aspect-[16/7]
    absolute
    top-0
    left-0
    w-full
    opacity-0
    bg-[black]
    
    transition
    ease-out
    duration-200

    hover:opacity-80
    hover:transition
    hover:ease-in
    hover:duration-200
  `);

  return (
    <FadeInOnScroll>
      <div className="border border-lightgray rounded-md">
        <div className="flex">
          <img
            className="border rounded-t-md aspect-[16/7]"
            src={project.imageUrl}
            alt={project.name}
          ></img>
          <div className={overlayCN}>
            <div className="flex justify-around w-1/2 gap-8">
              {project.demoUrl != "" ? (
                <ProjectButton href={project.demoUrl}>Demo</ProjectButton>
              ) : (
                <></>
              )}
              <ProjectButton href={project.url}>Source</ProjectButton>
            </div>
          </div>
        </div>

        <div className="border border-x-0 border-b-0 p-3 border-t-lightgray w-full min-h-[190px]">
          <div className="flex justify-between items-center">
            <h2 className=" text-lg font-bold">{project.name}</h2>
          </div>
          <div className="flex flex-wrap gap-0">
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
          </div>

          <div className="relative flex items-center py-1 h">
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="text-[gray] text-sm">{project.description}</div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
