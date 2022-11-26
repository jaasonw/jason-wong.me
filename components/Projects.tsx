import { FadeInOnScroll } from "./FadeInOnScroll";
import { Project, ProjectCard } from "./ProjectCard/ProjectCard";

export default function Projects({ projects }) {
  return (
    <section className="flex flex-col mb-8 items-center gap-0">
      <FadeInOnScroll>
        <h1 className="font-heading font-medium text-azure text-4xl text-center mb-5">
          Project Showcase
        </h1>
      </FadeInOnScroll>
      <section className="max-w-7xl px-10">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((p: Project) => {
            return <ProjectCard key={p.name} project={p}></ProjectCard>;
          })}
        </section>
      </section>
    </section>
  );
}
