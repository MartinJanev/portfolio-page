import { CardGridSection } from "../CardGridSection";
import ProjectCard from "../ProjectCard";
import { projects } from "../data/ProjectData";

export const Projects = () => (
  <CardGridSection id="projects" title="Featured Projects">
    {projects.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </CardGridSection>
);
