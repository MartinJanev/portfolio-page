import type { ReactNode } from "react";
import Section from "./Section";
import { RevealOnScroll } from "./RevealOnScroll";

interface Props {
  id: string;
  title: string;
  children: ReactNode;
}

export function CardGridSection({ id, title, children }: Props) {
  return (
    <Section id={id} title={title}>
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
      </RevealOnScroll>
    </Section>
  );
}
