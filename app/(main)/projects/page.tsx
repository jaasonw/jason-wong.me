import ProjectCard, {
  Project,
} from "$lib/v2/components/ProjectCard/ProjectCard";
import projects from "$lib/v2/projects.json";
import Link from "next/link";

export default function Projects() {
  const projectList = projects as Project[];
  return (
    <div className="flex flex-col gap-2 h-full">
      <h1 className="text-6xl font-bold">Projects</h1>
      <hr></hr>
      <div className="flex flex-col gap-5 group">
        {projectList.map((project) => (
          // <ProjectCard project={project} key={project.name} />
          <Link key={project.name} href={project.url} className="no-underline">
            <div>
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">{project.name}</h2>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
