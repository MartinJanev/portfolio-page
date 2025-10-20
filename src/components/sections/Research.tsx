import Section from "../Section";
import ProjectCard from "../ProjectCard";
import { research } from "../data/ResearchData";

export const Research = () => (
  <Section id="research" title="Research">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {research.map((r) => (
        <ProjectCard key={r.title} {...r} />
      ))}
    </div>
  </Section>
);
