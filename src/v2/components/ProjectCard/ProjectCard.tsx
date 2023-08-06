import styles from "./ProjectCard.module.css";
import Image from "next/image";

export interface Project {
  name: string;
  description: string;
  technology: string;
  imageUrl: string;
  url: string;
  demoUrl: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
      <a href={project.url} className="flex flex-col gap-2 transition group-hover:opacity-60 hover:!opacity-100 no-underline hover:cursor-pointer hover:!text-inherit group/link">
        <div className="flex flex-col sm:flex-row gap-2 border border-slate-100 border-opacity-0 rounded-md group/card bg-slate-100 bg-opacity-0 hover:bg-opacity-5 hover:border-opacity-10 hover:shadow-md">
          <Image
            className="aspect-video rounded-l-md"
            src={project.imageUrl}
            width={200}
            height={200}
            alt=""
          />
          <section className="flex flex-col">
            <h2 className="text-xl font-bold group-hover/link:text-blue-400">{project.name}</h2>
            <div className="text-sm">{project.description}</div>
            {/* <div className="text-sm">{project.technology}</div> */}
          </section>
        </div>
    </a>
  );
}
