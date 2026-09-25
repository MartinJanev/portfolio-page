import React, { useMemo } from "react";
import Section from "../Section";
import SectionHeader from "../ui/SectionHeader";
import TimelineList from "../TimelineList";
import { experience } from "../data/ExperienceData";
import { experienceKinds, kindOrder } from "../data/experienceKinds";

export const Experience: React.FC = () => {
  // Derived from the entries actually present, so the legend never advertises a
  // category the timeline no longer holds.
  const legend = useMemo(() => {
    const present = new Set(experience.map((it) => it.kind));
    return kindOrder.filter((kind) => present.has(kind));
  }, []);

  return (
    <Section
      id="experience"
      header={
        <SectionHeader
          eyebrow="Experience"
          title="Experience & Growth"
          lede="Research, work and study, most recent first. Community and volunteering work lives in its own panel over in About."
          count={experience.length}
        />
      }
    >
      {legend.length > 1 && (
        <div className="mb-8 flex flex-wrap gap-3">
          {legend.map((kind) => (
            <span
              key={kind}
              className="inline-flex items-center gap-2 text-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: experienceKinds[kind].color }}
              />
              {experienceKinds[kind].label}
            </span>
          ))}
        </div>
      )}

      <div className="relative">
        <TimelineList
          items={experience}
          defaultOpen="first-work"
          idPrefix="experience"
        />
      </div>
    </Section>
  );
};
