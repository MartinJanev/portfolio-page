// src/components/sections/Experience.jsx
import React, { useMemo, useState } from "react";
import Section from "../Section";
import { RevealOnScroll } from "../RevealOnScroll";
import { experience } from "../data/ExperienceData";

function fmtRange(start, end) {
    const fmt = (ym) => {
        const [y, m] = ym.split("-").map(Number);
        return new Date(y, (m || 1) - 1).toLocaleString(undefined, {
            month: "short",
            year: "numeric",
        });
    };
    return `${fmt(start)} — ${end === "present" ? "Present" : fmt(end)}`;
}

export const Experience = () => {
    // newest → oldest feels nicer for scanning
    const items = useMemo(
        () => [...experience].sort((a, b) => new Date(b.start) - new Date(a.start)),
        []
    );

    const [expandedId, setExpandedId] = useState(null);
    const toggle = (id) => setExpandedId((cur) => (cur === id ? null : id));

    return (
        <Section id="experience" title="Experience & Growth">
            <RevealOnScroll>
                <div className="relative max-w-3xl mx-auto px-2 sm:px-0">
                    {/* timeline line */}
                    <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px md:w-[2px] bg-gradient-to-b from-green-400/70 to-purple-500/70" />

                    <ul className="space-y-4 sm:space-y-6 pl-8 md:pl-12">
                        {items.map((it) => {
                            const id = `${it.title}-${it.start}`;
                            const open = expandedId === id;
                            const compactTags = Array.isArray(it.tags) ? it.tags.slice(0, 2) : [];
                            const extraCount =
                                Array.isArray(it.tags) && it.tags.length > 2
                                    ? it.tags.length - 2
                                    : 0;

                            return (
                                <li key={id} className="relative group">
                                    {/* timeline dot */}
                                    <span className="absolute left-3 md:left-4 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-green-400 ring-4 ring-green-400/20" />

                                    {/* Card */}
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
                                            "relative rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur-lg",
                                            "transition md:hover:-translate-y-0.5 md:hover:ring-green-400/40",
                                            open ? "p-4 md:p-5" : "p-3 md:p-4",
                                            "cursor-pointer select-none",
                                        ].join(" ")}
                                        aria-expanded={open}
                                    >
                                        {/* glow on hover (md+) */}
                                        <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-green-500/20 to-purple-500/20 blur opacity-0 md:group-hover:opacity-60 transition" />

                                        {/* Header row (always visible) */}
                                        <div className="relative">
                                            <div className="flex flex-wrap items-baseline gap-x-2">
                                                <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold">
                                                    {it.title}
                                                </h3>
                                                {it.org && (
                                                    <span className="text-green-400 text-sm sm:text-base">· {it.org}</span>
                                                )}
                                                {it.location && (
                                                    <span className="text-[11px] sm:text-xs text-gray-400 ml-2">
                                                        {it.location}
                                                    </span>
                                                )}
                                            </div>

                                            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                                                {fmtRange(it.start, it.end)}
                                            </p>

                                            {/* ✅ Compact tag chips — ONLY when collapsed */}
                                            {!open && Array.isArray(it.tags) && it.tags.length > 0 && (
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {compactTags.map((t) => (
                                                        <span
                                                            key={t}
                                                            className="inline-flex items-center gap-1 rounded-full bg-green-500/10 text-green-300 text-[11px] sm:text-xs font-medium px-2.5 py-1"
                                                        >
                                                            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                                            {t}
                                                        </span>
                                                    ))}
                                                    {extraCount > 0 && (
                                                        <span className="text-[11px] sm:text-xs text-gray-400">
                                                            +{extraCount}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        {/* Collapsible details */}
                                        <div
                                            className={[
                                                "grid transition-[grid-template-rows] duration-300 ease-in-out",
                                                open ? "grid-rows-[1fr] mt-2 sm:mt-3" : "grid-rows-[0fr] mt-0",
                                            ].join(" ")}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="pt-1">
                                                    {it.description && (
                                                        <p className="text-sm sm:text-[15px] text-gray-300">
                                                            {it.description}
                                                        </p>
                                                    )}

                                                    {Array.isArray(it.bullets) && it.bullets.length > 0 && (
                                                        <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-[15px]">
                                                            {it.bullets.map((b) => (
                                                                <li key={b}>{b}</li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                    {Array.isArray(it.achievements) && it.achievements.length > 0 && (
                                                        <div className="mt-3">
                                                            <div className="text-green-400 text-base sm:text-lg font-semibold mb-1">
                                                                Achievements:
                                                            </div>
                                                            <ul className="list-disc list-inside text-gray-200 space-y-1 text-sm sm:text-[15px]">
                                                                {it.achievements.map((a) => (
                                                                    <li key={a}>{a}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {/* Full tag set (only in expanded view) */}
                                                    {Array.isArray(it.tags) && it.tags.length > 0 && (
                                                        <div className="mt-3 flex flex-wrap gap-2">
                                                            {it.tags.map((t) => (
                                                                <span
                                                                    key={t}
                                                                    className="inline-flex items-center gap-1 rounded-full bg-green-500/10 text-green-300 text-[11px] sm:text-xs font-medium px-2.5 py-1"
                                                                >
                                                                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                                                    {t}
                                                                </span>
                                                            ))}
                                                        </div>
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
