import { FaGithub, FaFilePdf, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Card from "./ui/Card";
import Tag from "./ui/Tag";
import { techIcon } from "./data/techIcons";
import type { ResearchItem } from "../types/content";

interface Props extends ResearchItem {
  /** 1-based position, rendered as the row's "01" style index. */
  index: number;
}

export default function ResearchRow({
  index,
  title,
  subtitle,
  description,
  techs = [],
  link,
  paperLink,
  year,
  venue,
  status,
}: Props) {
  const hasRepo = typeof link === "string" && link.length > 0;
  const hasPaper = typeof paperLink === "string" && paperLink.length > 0;
  const meta = [venue, year].filter(Boolean).join(" · ");

  return (
    <Card
      tier="standard"
      contentClassName="md:grid md:grid-cols-[3.5rem_1fr] md:gap-6"
    >
      <div
        className="mb-3 text-2xl font-bold tabular-nums md:mb-0 md:text-3xl"
        style={{ color: "var(--text-muted)", opacity: 0.6 }}
      >
        {String(index).padStart(2, "0")}
      </div>

      <div className="min-w-0">
        {(status || meta) && (
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {status && (
              <Tag variant="accent" size="sm" marker={false}>
                {status}
              </Tag>
            )}
            {meta && (
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                {meta}
              </span>
            )}
          </div>
        )}

        <h3
          className="text-lg font-semibold leading-snug sm:text-xl"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h3>

        {subtitle && (
          <p
            className="mt-1 text-sm italic"
            style={{ color: "var(--accent-green)" }}
          >
            {subtitle}
          </p>
        )}

        <p
          className="mt-3 text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>

        {/* Tech stack and the links share one row: the pill group flexes and
            wraps, the actions stay pinned to the right. */}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
          {techs.length > 0 && (
            <div className="flex flex-1 flex-wrap gap-2">
              {techs.map((t) => (
                <Tag key={t} size="sm" icon={techIcon(t)}>
                  {t}
                </Tag>
              ))}
            </div>
          )}

          <div className="flex shrink-0 flex-wrap gap-2">
            {hasPaper && (
              <a
                href={paperLink as string}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-green-600"
              >
                <FaFilePdf aria-hidden="true" /> Read paper
              </a>
            )}
            {hasRepo ? (
              <a
                href={link as string}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  hasPaper
                    ? "inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition hover:border-green-400/50"
                    : "inline-flex items-center gap-2 rounded-lg bg-green-500 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-green-600"
                }
                style={
                  hasPaper
                    ? {
                        borderColor: "var(--border-color)",
                        color: "var(--text-primary)",
                      }
                    : undefined
                }
              >
                <FaGithub aria-hidden="true" /> Repository
                <FaArrowUpRightFromSquare aria-hidden="true" size={10} />
              </a>
            ) : (
              !hasPaper && (
                <span
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    color: "var(--text-muted)",
                  }}
                >
                  Coming soon
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
