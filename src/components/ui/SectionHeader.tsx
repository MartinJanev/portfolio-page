import type { ReactNode } from "react";

interface Props {
  /** Small label above the title, e.g. "02 — Experience". */
  eyebrow?: string;
  title: ReactNode;
  /** One or two sentences framing the section. */
  lede?: ReactNode;
  /** Item count shown beside the eyebrow. */
  count?: number;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  lede,
  count,
  align = "left",
}: Props) {
  const centered = align === "center";

  return (
    <header className={`mb-10 md:mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`mb-3 flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        >
          <span
            aria-hidden="true"
            className="h-px w-8"
            style={{ backgroundColor: "var(--accent-green)" }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--accent-green)" }}
          >
            {eyebrow}
          </span>
          {typeof count === "number" && (
            <span
              className="text-xs tabular-nums"
              style={{ color: "var(--text-muted)" }}
            >
              ({count})
            </span>
          )}
        </div>
      )}

      {/* Static gradient: five headings animating at once was the page's main
          source of visual noise, so the loop now lives only on the hero. */}
      <h2 className="bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {lede && (
        <p
          className={`mt-4 max-w-2xl text-sm leading-relaxed sm:text-base ${centered ? "mx-auto" : ""}`}
          style={{ color: "var(--text-secondary)" }}
        >
          {lede}
        </p>
      )}
    </header>
  );
}
