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
      "Web",
      "Git",
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
      "Volunteering",
      "Running",
      "Programming",
      "Reading",
      "Tennis",
      "Football",
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
    value: "AI • Web Development",
  },
  {
    icon: FaBriefcase,
    label: "Looking for",
    value: "Internship and job opportunities",
  },
  {
    icon: FaResearchgate,
    label: "Research scope",
    value: "AI • Data Science • Parallel Computing",
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
    <div
      className="relative group h-full p-6 rounded-2xl backdrop-blur-lg hover:ring-green-400/40 transition"
      style={{
        backgroundColor: "var(--card-bg-solid)",
        border: "1px solid var(--card-border)",
      }}
    >
      <div
        className="pointer-events-none absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-80 transition duration-500"
        style={{
          background:
            "linear-gradient(135deg, var(--glow-green), var(--glow-purple))",
        }}
      />
      <div className="relative flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <Icon style={{ color: "var(--accent-green)" }} size={18} />
            </div>
            <h3
              className="text-xl font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              {title}
            </h3>
          </div>
          <span
            className="text-xs px-2 py-1 rounded-full"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              color: "var(--text-secondary)",
            }}
          >
            {items.length}
          </span>
        </div>

        <div className={`${gridCols} gap-2`}>
          {shown.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full text-sm font-medium px-3 py-1 hover:bg-white/10 transition"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                color: "var(--text-primary)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--accent-green)" }}
              />
              {item}
            </span>
          ))}
        </div>

        {items.length > limit && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-4 self-start text-xs font-medium hover:text-green-200 transition"
            style={{ color: "var(--accent-green)" }}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="relative group h-full rounded-2xl backdrop-blur-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--card-bg-solid)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div
                className="pointer-events-none absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-80 transition duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, var(--glow-green), var(--glow-purple))",
                }}
              />
              <div className="relative flex flex-col items-center text-center gap-4 p-6">
                <div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ border: "2px solid var(--card-border)" }}
                >
                  <Icon style={{ color: "var(--accent-green)" }} size={28} />
                </div>
                <div className="space-y-1">
                  <div
                    className="text-xs uppercase tracking-wider font-semibold"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </div>
                  <div
                    className="text-base md:text-lg font-bold leading-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {value}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
