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
import type { Category } from "../../types/content";

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
  const [volunteeringOpen, setVolunteeringOpen] = useState(false);
  const volunteeringCount = volunteeringRoles.length;

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
                  className="text-sm leading-relaxed sm:text-[15px]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              <Tag>Skopje &amp; Shtip, MK</Tag>
              <Tag>Open to internships</Tag>
              <Tag variant="accent">Research-minded</Tag>
            </div>
          </Card>

          {aboutHighlights.map(({ icon: Icon, label, value, detail }) => (
            <Card key={label} tier="standard" contentClassName="flex flex-col">
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
              <div
                className="mt-1 text-lg font-bold leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {value}
              </div>
              {detail && (
                <div
                  className="mt-1.5 text-xs leading-snug"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {detail}
                </div>
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

          {/* Trigger for the volunteering panel. These roles used to sit in the
          Experience timeline, mixed in with work and study. */}
          <Card
            tier="standard"
            className="sm:col-span-2"
            contentClassName="flex flex-col"
          >
            <CardHeading
              title={volunteeringHeading.title}
              icon={volunteeringHeading.icon}
              count={volunteeringCount}
            />
            <ul className="space-y-2.5">
              {volunteeringRoles.map((role) => (
                <li key={role.title} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--kind-community)" }}
                  />
                  <span
                    className="text-sm leading-snug"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {role.org ?? role.title}
                  </span>
                </li>
              ))}
            </ul>
            {/* Stretched button: the ::after overlay resolves against Card's relative
            content box, making the whole tile the hit target. */}
            <button
              type="button"
              onClick={() => setVolunteeringOpen(true)}
              aria-haspopup="dialog"
              className="mt-auto pt-4 text-left text-xs font-semibold after:absolute after:inset-0 after:rounded-2xl after:content-['']"
              style={{ color: "var(--accent-green)" }}
            >
              View all {volunteeringCount} &rarr;
            </button>
          </Card>

          <Card tier="quiet" className="sm:col-span-2">
            <CardHeading
              title={hobbies.title}
              icon={hobbies.icon}
              count={hobbies.items.length}
            />
            <div className="flex flex-wrap gap-2">
              {hobbies.items.map((item) => (
                <Tag key={item} size="sm">
                  {item}
                </Tag>
              ))}
            </div>
          </Card>
        </RevealList>
      </Section>
      <VolunteeringDialog
        open={volunteeringOpen}
        onClose={() => setVolunteeringOpen(false)}
      />
    </>
  );
};
