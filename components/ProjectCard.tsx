import {
  faBootstrap,
  faJava,
  faJs,
  faPython,
  faReact,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ctl from "@netlify/classnames-template-literals";
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

const ProjectButton = ({ children, href }) => {
  const buttonClasses = ctl(`
    border
    border-neutral-500
    bg-transparent
    text-neutral-500
    font-semibold
    hover:text-neutral-600
    py-2
    px-4
    hover:bg-neutral-900
    rounded
  `);

  return (
    <a className={buttonClasses} href={href}>
      {children}
    </a>
  );
};

const Badge = ({ children, tag }) => {
  const icons = new Proxy(
    {
      python: { icon: faPython, color: "blue" },
      bootstrap: { icon: faBootstrap, color: "sky" },
      "spotify api": { icon: faSpotify, color: "green" },
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

  const badgeClasses = ctl(`
    rounded-md
    text-xs
    px-1
    py-0.5
    m-0.5
    uppercase
    font-bold
    bg-${icons[tag].color}-200
    text-${icons[tag].color}-700
  `);

  return (
    <div className={badgeClasses}>
      <FontAwesomeIcon icon={icons[tag].icon} /> {children}
    </div>
  );
};

export function ProjectCard({ project }: { project: Project }) {
  // css classes for the hover overlay
  const overlayClasses = ctl(`
    flex
    items-center
    justify-center
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

  const descriptionClasses = ctl(`
    border
    border-x-0
    border-b-0
    p-3
    border-t-lightgray
    w-full
    min-h-[190px]
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
          <div className={overlayClasses}>
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

        <div className={descriptionClasses}>
          <div className="flex justify-between items-center">
            <h2 className=" text-lg font-bold">{project.name}</h2>
          </div>
          <div className="flex flex-wrap gap-0">
            {project.technology.split(",").map((t: string) => {
              const tag = t.toLocaleLowerCase();
              return (
                <Badge key={t} tag={tag}>
                  {t}
                </Badge>
              );
            })}
          </div>

          <div className="relative flex items-center py-1 h">
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          <div className="text-[gray] text-sm">{project.description}</div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
