import ctl from "@netlify/classnames-template-literals";
import Image from "next/image";

import { FadeInOnScroll } from "../FadeInOnScroll";
import { Badge } from "./Badge";
import { Button } from "./Button";

export interface Project {
  name: string;
  description: string;
  technology: string;
  imageUrl: string;
  url: string;
  demoUrl: string;
}

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
          <Image
            className="rounded-t-md aspect-[16/7]"
            src={`/${project.imageUrl}`}
            alt={project.name}
            height={1562}
            width={683}
            // placeholder="blur"
          ></Image>
          <div className={overlayClasses}>
            <div className="flex justify-around w-1/2 gap-8">
              {project.demoUrl != "" ? (
                <Button href={project.demoUrl}>Demo</Button>
              ) : (
                <></>
              )}
              <Button href={project.url}>Source</Button>
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
