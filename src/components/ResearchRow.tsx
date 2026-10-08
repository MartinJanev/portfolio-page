import Card from "./ui/Card";
import Tag from "./ui/Tag";
import type { ResearchItem } from "../types/content";

interface Props extends ResearchItem {
  /** 1-based position, rendered as the card's "01" style index. */
  index: number;
  onOpen: () => void;
}

/** Compact summary card; the full write-up lives in ResearchDialog. */
export default function ResearchRow({
  index,
  title,
  subtitle,
  year,
  venue,
  status,
  onOpen,
}: Props) {
  const meta = [venue, year].filter(Boolean).join(" · ");

  return (
    <Card tier="standard" contentClassName="flex flex-col">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span
          className="text-2xl font-bold tabular-nums"
          style={{ color: "var(--text-muted)", opacity: 0.6 }}
        >
          {String(index).padStart(2, "0")}
        </span>
        {(status || meta) && (
          <div className="flex flex-wrap items-center justify-end gap-2">
            {meta && (
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                {meta}
              </span>
            )}
            {status && (
              <Tag variant="accent" size="sm" marker={false}>
                {status}
              </Tag>
            )}
          </div>
        )}
      </div>

      <h3
        className="text-lg font-semibold leading-snug"
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

      {/* Stretched button: the ::after overlay resolves against Card's relative
          content box, making the whole card the hit target. */}
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        className="mt-auto pt-4 text-left text-xs font-semibold after:absolute after:inset-0 after:rounded-2xl after:content-['']"
        style={{ color: "var(--accent-green)" }}
      >
        Read more &rarr;
      </button>
    </Card>
  );
}
