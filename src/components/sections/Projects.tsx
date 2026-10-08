import Section from "../Section";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ProjectCard";
import { RevealList } from "../ui/RevealList";
import { projects } from "../data/ProjectData";

export const Projects = () => (
  <Section
    id="projects"
    header={
      <SectionHeader
        eyebrow="Projects"
        title="Featured Projects"
        lede="Things I've built — full-stack platforms, AI agents, and computer vision experiments. Every card links to its source."
        count={projects.length}
      />
    }
  >
    <RevealList className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          {...project}
          className={project.featured ? "md:col-span-2" : ""}
        />
      ))}
    </RevealList>
  </Section>
);
