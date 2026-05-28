import React, { useMemo, useState } from "react";
import Section from "../Section";
import { RevealOnScroll } from "../RevealOnScroll";
import { experience } from "../data/ExperienceData";
import type { ExperienceItem } from "../../types/content";
import { fmtRange } from "../../utils/fmtRange";

export const Experience: React.FC = () => {
  const items: ExperienceItem[] = useMemo(
    () =>
      [...experience].sort(
        (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime(),
      ),
    [],
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const toggle = (id: string) =>
    setExpandedId((cur) => (cur === id ? null : id));

  return (
    <Section id="experience" title="Experience & Growth">
      <RevealOnScroll>
        <div className="relative max-w-3xl mx-auto px-2 sm:px-0">
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px md:w-[2px] bg-gradient-to-b from-green-400/70 to-purple-500/70" />
          <ul className="space-y-4 sm:space-y-6 pl-8 md:pl-12">
            {items.map((it) => {
              const id = `${it.title}-${it.start}`;
              const open = expandedId === id;
              const compactTags = it.tags?.slice(0, 2) ?? [];
              const extraCount =
                it.tags && it.tags.length > 2 ? it.tags.length - 2 : 0;

              return (
                <li key={id} className="relative group">
                  <span className="absolute left-3 md:left-4 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-green-400 ring-4 ring-green-400/20" />
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => toggle(id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle(id);
                      }
                    }}
                    className={[
                      "relative rounded-2xl backdrop-blur-lg",
                      "transition md:hover:-translate-y-0.5 md:hover:ring-green-400/40",
                      open ? "p-4 md:p-5" : "p-3 md:p-4",
                      "cursor-pointer select-none",
                    ].join(" ")}
                    style={{
                      backgroundColor: "var(--card-bg-solid)",
                      border: "1px solid var(--card-border)",
                    }}
                    aria-expanded={open}
                  >
                    <div
                      className="pointer-events-none absolute -inset-1 rounded-2xl blur opacity-0 md:group-hover:opacity-70 transition duration-500"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--glow-green), var(--glow-purple))",
                      }}
                    />
                    <div className="relative">
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <h3
                          className="text-base sm:text-lg md:text-xl font-semibold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {it.title}
                        </h3>
                        {it.org && (
                          <span
                            className="text-sm sm:text-base"
                            style={{ color: "var(--accent-green)" }}
                          >
                            · {it.org}
                          </span>
                        )}
                        {it.location && (
                          <span
                            className="text-[11px] sm:text-xs ml-2"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {it.location}
                          </span>
                        )}
                      </div>
                      <p
                        className="text-xs sm:text-sm mt-0.5"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {fmtRange(it.start, it.end)}
                      </p>

                      {!open && compactTags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {compactTags.map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center gap-1 rounded-full text-[11px] sm:text-xs font-medium px-2.5 py-1 transition hover:bg-green-500/20"
                              style={{
                                backgroundColor: "var(--card-bg)",
                                color: "var(--accent-green)",
                                borderColor: "var(--border-color)",
                                borderWidth: "1px",
                              }}
                            >
                              <span
                                className="h-1.5 w-1.5 rounded-full"
                                style={{
                                  backgroundColor: "var(--accent-green)",
                                }}
                              />
                              {t}
                            </span>
                          ))}
                          {extraCount > 0 && (
                            <span
                              className="text-[11px] sm:text-xs"
                              style={{ color: "var(--text-muted)" }}
                            >
                              +{extraCount}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div
                      className={[
                        "grid transition-[grid-template-rows] duration-300 ease-in-out",
                        open
                          ? "grid-rows-[1fr] mt-2 sm:mt-3"
                          : "grid-rows-[0fr] mt-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-1">
                          {open && (
                            <>
                              {it.description && (
                                <p
                                  className="text-sm sm:text-[15px]"
                                  style={{ color: "var(--experience-text)" }}
                                >
                                  {it.description}
                                </p>
                              )}
                              {it.bullets && it.bullets.length > 0 && (
                                <ul
                                  className="mt-2 list-disc list-inside space-y-1 text-sm sm:text-[15px]"
                                  style={{ color: "var(--experience-text)" }}
                                >
                                  {it.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                  ))}
                                </ul>
                              )}
                              {it.achievements &&
                                it.achievements.length > 0 && (
                                  <div className="mt-3">
                                    <div
                                      className="text-base sm:text-lg font-semibold mb-1"
                                      style={{ color: "var(--accent-green)" }}
                                    >
                                      Achievements:
                                    </div>
                                    <ul
                                      className="list-disc list-inside space-y-1 text-sm sm:text-[15px]"
                                      style={{
                                        color: "var(--experience-text)",
                                      }}
                                    >
                                      {it.achievements.map((a) => (
                                        <li key={a}>{a}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              {it.tags && it.tags.length > 0 && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {it.tags.map((t) => (
                                    <span
                                      key={t}
                                      className="inline-flex items-center gap-1 rounded-full text-[11px] sm:text-xs font-medium px-2.5 py-1 transition hover:bg-green-500/20"
                                      style={{
                                        backgroundColor: "var(--card-bg)",
                                        color: "var(--accent-green)",
                                        borderColor: "var(--border-color)",
                                        borderWidth: "1px",
                                      }}
                                    >
                                      <span
                                        className="h-1.5 w-1.5 rounded-full"
                                        style={{
                                          backgroundColor:
                                            "var(--accent-green)",
                                        }}
                                      />
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </RevealOnScroll>
    </Section>
  );
};
