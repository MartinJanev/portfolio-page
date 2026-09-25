import Section from "../Section";
import SectionHeader from "../ui/SectionHeader";
import ResearchRow from "../ResearchRow";
import { RevealList } from "../ui/RevealList";
import { research } from "../data/ResearchData";

export const Research = () => (
  <Section
    id="research"
    header={
      <SectionHeader
        eyebrow="Research"
        title="Research"
        lede="Papers and studies I've worked on, mostly around machine learning, information theory, and neural architectures."
        count={research.length}
      />
    }
  >
    {/* A numbered list rather than a card grid: research output reads as a
        publication list, which also keeps it distinct from Projects. */}
    <RevealList className="space-y-4">
      {research.map((item, i) => (
        <ResearchRow key={item.title} index={i + 1} {...item} />
      ))}
    </RevealList>
  </Section>
);
