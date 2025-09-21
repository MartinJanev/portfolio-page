import Section from "../Section";
import ProjectCard from "../ProjectCard";
import { projects } from "../data/ProjectData";

export const Projects = () => (
  <Section id="projects" title="Featured Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  </Section>
);
