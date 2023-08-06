import ProjectCard, {
  Project,
} from "$lib/v2/components/ProjectCard/ProjectCard";
import projects from "$lib/v2/projects.json";

export default function Projects() {
  const projectList = projects as Project[];
  return (
    <div className="flex flex-col gap-2 h-full">
      <h1 className="text-6xl font-bold">Projects</h1>
      <hr></hr>
      <div className="flex flex-col gap-5 group">
        {projectList.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
}
