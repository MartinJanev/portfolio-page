import React, { useState } from "react";
import Section from "../Section";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Tag from "../ui/Tag";
import { RevealList } from "../ui/RevealList";
import {
  aboutBio,
  aboutHighlights,
  hobbies,
  techGroups,
  technologiesIcon,
} from "../data/AboutData";
import {
  volunteeringHeading,
  volunteeringRoles,
} from "../data/VolunteeringData";
import VolunteeringDialog from "../VolunteeringDialog";
import { techIcon } from "../data/techIcons";
import { sortByRecency } from "../../utils/sortByRecency";
import type { Category, ExperienceItem } from "../../types/content";

/** "2023 – Present", or just "2026" for a one-off event. */
const yearRange = (start: string, end: string) => {
  const from = start.slice(0, 4);
  const to = end === "present" ? "Present" : end.slice(0, 4);
  return from === to ? from : `${from} – ${to}`;
};

function CardHeading({
  title,
  icon: Icon,
  count,
}: Pick<Category, "title" | "icon"> & { count?: number }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--card-border)",
          }}
        >
          <Icon style={{ color: "var(--accent-green)" }} size={17} />
        </span>
        <h3
          className="text-lg font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h3>
      </div>
      {typeof count === "number" && (
        <span
          className="rounded-full px-2 py-0.5 text-xs tabular-nums"
          style={{
            backgroundColor: "var(--tag-bg)",
            border: "1px solid var(--tag-border)",
            color: "var(--text-secondary)",
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
}

export const About: React.FC = () => {
  const [openRole, setOpenRole] = useState<ExperienceItem | null>(null);

  return (
    <>
      <Section
        id="about"
        width="wide"
        header={
          <SectionHeader
            eyebrow="About"
            title="About Me"
            lede="A bit of context on who I am, what I build with, and where I spend time outside the terminal."
          />
        }
      >
        <RevealList className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {/* Bio — the anchor of the section, so it carries the most visual weight. */}
          <Card
            tier="featured"
            interactive={false}
            className="sm:col-span-2 lg:row-span-2"
            contentClassName="flex flex-col"
          >
            <h3
              className="text-2xl font-bold md:text-3xl"
              style={{ color: "var(--text-primary)" }}
            >
              Hi, I&apos;m Martin
            </h3>
            <div className="mt-4 space-y-4">
              {aboutBio.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-sm leading-relaxed sm:text-[15px] [&_strong]:bg-[linear-gradient(90deg,var(--accent-green),var(--accent-purple))] [&_strong]:bg-clip-text [&_strong]:text-transparent"
                  style={{ color: "var(--text-secondary)" }}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </Card>

          {aboutHighlights.map(({ icon: Icon, label, value, detail, wide }) => (
            <Card
              key={label}
              tier="standard"
              className={wide ? "sm:col-span-2" : undefined}
              contentClassName="flex flex-col"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-purple-500/20 transition-transform duration-300 group-hover:scale-110"
                style={{ border: "1px solid var(--card-border)" }}
              >
                <Icon style={{ color: "var(--accent-green)" }} size={20} />
              </span>
              <div
                className="mt-4 text-[11px] font-semibold uppercase tracking-wider"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </div>
              {Array.isArray(value) ? (
                <div className="mt-2 mb-2 flex flex-wrap gap-1.5">
                  {value.map((item) => (
                    <Tag key={item} size="sm" marker={false}>
                      {item}
                    </Tag>
                  ))}
                </div>
              ) : (
                <div
                  className="mt-1 text-lg font-bold leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {value}
                </div>
              )}
              {Array.isArray(detail) ? (
                <ul
                  className="mt-1.5 space-y-1 text-xs leading-snug"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {detail.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--tag-text)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                detail && (
                  <div
                    className="mt-1.5 text-xs leading-snug"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {detail}
                  </div>
                )
              )}
            </Card>
          ))}

          {/* Technologies — grouped rather than one flat list, so the stack reads as
          a story instead of ten interchangeable pills. */}
          <Card tier="standard" className="sm:col-span-2 lg:row-span-2">
            <CardHeading
              title="Technologies"
              icon={technologiesIcon}
              count={techGroups.reduce((n, g) => n + g.items.length, 0)}
            />
            <div className="space-y-4">
              {techGroups.map((group) => (
                <div key={group.label}>
                  <div
                    className="mb-2 text-[11px] font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item} icon={techIcon(item)}>
                        {item}
                      </Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Volunteering — one tile per role, each opening that role's details. */}
          <Card
            tier="standard"
            interactive={false}
            className="accent-community sm:col-span-2"
          >
            <CardHeading
              title={volunteeringHeading.title}
              icon={volunteeringHeading.icon}
              count={volunteeringRoles.length}
            />
            <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {sortByRecency(volunteeringRoles).map((role) => (
                <li key={`${role.title}-${role.start}`}>
                  <button
                    type="button"
                    onClick={() => setOpenRole(role)}
                    aria-haspopup="dialog"
                    className="flex h-full w-full flex-col rounded-xl p-3 text-left transition duration-200 hover:-translate-y-0.5 hover:ring-1 hover:ring-green-400/40"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    <span
                      className="text-sm font-semibold leading-snug"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {role.org ?? role.title}
                    </span>
                    <span
                      className="mt-auto pt-2 text-xs tabular-nums"
                      style={{ color: "var(--kind-community)" }}
                    >
                      {yearRange(role.start, role.end)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Card>

          <Card tier="quiet" className="sm:col-span-2">
            <CardHeading
              title={hobbies.title}
              icon={hobbies.icon}
              count={hobbies.items.length}
            />
            <div className="flex flex-wrap gap-2">
              {hobbies.items.map((item) => (
                <Tag key={item} size="lg">
                  {item}
                </Tag>
              ))}
            </div>
          </Card>
        </RevealList>
      </Section>
      <VolunteeringDialog role={openRole} onClose={() => setOpenRole(null)} />
    </>
  );
};
