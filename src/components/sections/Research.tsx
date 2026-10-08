import { useState } from "react";
import Section from "../Section";
import SectionHeader from "../ui/SectionHeader";
import ResearchRow from "../ResearchRow";
import ResearchDialog from "../ResearchDialog";
import { RevealList } from "../ui/RevealList";
import { research } from "../data/ResearchData";

export const Research = () => {
  // Index and open state are separate so the dialog keeps its content while
  // the close transition plays, instead of blanking mid-fade.
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
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
        <RevealList className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {research.map((item, i) => (
            <ResearchRow
              key={item.title}
              index={i + 1}
              {...item}
              onOpen={() => {
                setActive(i);
                setOpen(true);
              }}
            />
          ))}
        </RevealList>
      </Section>
      <ResearchDialog
        item={research[active]}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};
