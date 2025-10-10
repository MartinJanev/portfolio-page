import React, { useState } from "react";
import Section from "../Section";
import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaLaptopCode,
  FaHandsHelping,
  FaRunning,
  FaGraduationCap,
  FaCode,
  FaBriefcase,
  FaResearchgate,
} from "react-icons/fa";
import { Category } from "src/types/content";

const rawCategories: Category[] = [
  {
    title: "Technologies",
    icon: FaLaptopCode,
    columns: 2,
    limit: 10,
    items: [
      "Python",
      "Java",
      "C++",
      "OpenCV",
      "TensorFlow",
      "PyTorch",
      "Web Development",
      "Git",
      "Spring Boot",
    ],
  },
  {
    title: "Volunteering",
    icon: FaHandsHelping,
    columns: 1,
    limit: 6,
    items: ["Equinox Scout Shtip", "Scout Association of Macedonia"],
  },
  {
    title: "Hobbies",
    icon: FaRunning,
    columns: 2,
    limit: 8,
    items: [
      "Running",
      "Reading",
      "Tennis",
      "Basketball",
      "Football",
      "Table Tennis",
      "Coding",
    ],
  },
];

const highlights = [
  {
    icon: FaGraduationCap,
    label: "Status",
    value: "Student at FCSE Skopje",
  },
  {
    icon: FaCode,
    label: "Project scope",
    value: "AI • ML • CV ",
  },
  {
    icon: FaBriefcase,
    label: "Looking for",
    value: "Internship opportunities",
  },
  {
    icon: FaResearchgate,
    label: "Research scope",
    value: "Information Theory in ML",
  },
] as const;

function CategoryCard({
  title,
  icon: Icon,
  items,
  columns = 2,
  limit = 8,
}: Category) {
  const [open, setOpen] = useState(false);
  const shown = open ? items : items.slice(0, limit);
  const gridCols =
    columns === 1 ? "grid grid-cols-1" : "grid grid-cols-2 xs:grid-cols-2";
  return (
    <div className="relative group h-full p-6 rounded-2xl bg-white/5 backdrop-blur-lg ring-1 ring-white/10 hover:ring-green-400/40 transition">
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-green-500/20 to-purple-500/20 blur opacity-0 group-hover:opacity-60 transition" />
      <div className="relative flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
              <Icon className="text-green-300" size={18} />
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-gray-300">
            {items.length}
          </span>
        </div>

        <div className={`${gridCols} gap-2`}>
          {shown.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 text-gray-200/90 text-sm font-medium px-3 py-1 hover:bg-white/10 transition"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              {item}
            </span>
          ))}
        </div>

        {items.length > limit && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-4 self-start text-xs font-medium text-green-300 hover:text-green-200 transition"
          >
            {open ? "Show less" : `Show all ${items.length}`}
          </button>
        )}
      </div>
    </div>
  );
}

export const About: React.FC = () => (
  <Section id="about" title="About Me">
    <RevealOnScroll>
      <div className="space-y-12 md:space-y-16">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-500/25 via-transparent to-purple-500/25 blur opacity-40 group-hover:opacity-70 transition" />
          <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-2 md:gap-4 p-4 md:p-5 rounded-2xl bg-white/5 backdrop-blur-lg ring-1 ring-white/10">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-3 rounded-xl bg-black/20 ring-1 ring-white/5"
              >
                <span className="shrink-0 grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-green-500/20 to-purple-500/20 ring-1 ring-white/10">
                  <Icon className="text-green-300" />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-wide text-gray-400">
                    {label}
                  </div>
                  <div className="text-sm md:text-base font-medium text-gray-100">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {rawCategories.map((c) => (
            <CategoryCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </RevealOnScroll>
  </Section>
);
