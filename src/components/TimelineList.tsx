import { useMemo, useState } from "react";
import TimelineEntry from "./TimelineEntry";
import { RevealList } from "./ui/RevealList";
import type { ExperienceItem } from "../types/content";
import { sortByRecency } from "../utils/sortByRecency";

interface Props {
  items: ExperienceItem[];
  /** Which entry starts expanded. */
  defaultOpen?: "first-work" | "first" | "none";
  /**
   * Staggered scroll reveal. Must be false inside a dialog: RevealList starts
   * its children at opacity 0 and its IntersectionObserver never fires for
   * content in a modal, which would leave the entries invisible.
   */
  stagger?: boolean;
  /** Suffix keeping panel ids unique when two lists render on one page. */
  idPrefix?: string;
}

const entryKey = (item: ExperienceItem) => `${item.title}-${item.start}`;

export default function TimelineList({
  items,
  defaultOpen = "first-work",
  stagger = true,
  idPrefix = "timeline",
}: Props) {
  const sorted = useMemo(() => sortByRecency(items), [items]);

  const [openKeys, setOpenKeys] = useState<Set<string>>(() => {
    if (defaultOpen === "none") return new Set();
    const target =
      defaultOpen === "first-work"
        ? (sorted.find((it) => it.kind === "work") ?? sorted[0])
        : sorted[0];
    return new Set(target ? [entryKey(target)] : []);
  });

  // Several entries may be open at once; reading the whole list used to cost one
  // click per entry, each closing the last.
  const toggle = (key: string) =>
    setOpenKeys((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const list = sorted.map((item, index) => {
    const key = entryKey(item);
    return (
      <TimelineEntry
        key={key}
        item={item}
        open={openKeys.has(key)}
        onToggle={() => toggle(key)}
        showRail={index < sorted.length - 1}
        panelId={`${idPrefix}-panel-${key.replace(/\s+/g, "-")}`}
      />
    );
  });

  if (!stagger) {
    return <ul className="space-y-4">{list}</ul>;
  }

  return (
    <RevealList as="ul" className="space-y-4">
      {list}
    </RevealList>
  );
}
