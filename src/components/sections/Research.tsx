import { CardGridSection } from "../CardGridSection";
import ResearchCard from "../ResearchCard";
import { research } from "../data/ResearchData";

export const Research = () => (
  <CardGridSection id="research" title="Research">
    {research.map((item) => (
      <ResearchCard key={item.title} {...item} />
    ))}
  </CardGridSection>
);
