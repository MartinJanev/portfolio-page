import { FaChevronDown, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Card from "./ui/Card";
import Tag from "./ui/Tag";
import { experienceKinds } from "./data/experienceKinds";
import type { ExperienceItem } from "../types/content";
import { fmtRange } from "../utils/fmtRange";
import { fmtDuration } from "../utils/fmtDuration";

const COLLAPSED_TAG_COUNT = 4;

interface Props {
  item: ExperienceItem;
  open: boolean;
  onToggle: () => void;
  /** False on the last entry, so the rail stops at the final marker. */
  showRail: boolean;
  /** False drops the kind marker and its gutter, for a lone entry. */
  marker?: boolean;
  panelId: string;
}

export default function TimelineEntry({
  item,
  open,
  onToggle,
  showRail,
  marker = true,
  panelId,
}: Props) {
  const kind = experienceKinds[item.kind];
  const KindIcon = kind.icon;
  const current = item.end === "present";
  const tags = item.tags ?? [];
  const shownTags = open ? tags : tags.slice(0, COLLAPSED_TAG_COUNT);
  const hiddenTags = open ? 0 : Math.max(0, tags.length - COLLAPSED_TAG_COUNT);

  return (
    <li className={marker ? "relative pl-10 md:pl-12" : "relative"}>
      {/* Rail drawn per entry, from this marker's centre down to the next one,
          so it never trails off past the first/last dot. */}
      {showRail && (
        <span
          aria-hidden="true"
          className="absolute left-4 top-9 bottom-[-3.25rem] w-px md:left-5"
          style={{
            background: `linear-gradient(to bottom, ${kind.color}, var(--border-color))`,
          }}
        />
      )}
      {marker && (
        <span
          aria-hidden="true"
          className={[
            "absolute left-0 top-5 flex h-8 w-8 items-center justify-center rounded-full md:left-1",
            current ? "animate-pulse-ring" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          style={{
            backgroundColor: "var(--bg-primary)",
            border: `2px solid ${kind.color}`,
            color: kind.color,
          }}
        >
          <KindIcon size={13} style={{ color: kind.color }} />
        </span>
      )}

      <Card tier={open ? "featured" : "standard"} padded={false}>
        <h3 className="contents">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-controls={panelId}
            className="flex w-full cursor-pointer items-start justify-between gap-3 rounded-2xl p-4 text-left md:p-5"
          >
            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: kind.color }}
                >
                  {kind.label}
                </span>
                {current && (
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                    style={{
                      backgroundColor: "var(--tag-bg)",
                      border: "1px solid var(--tag-border)",
                      color: "var(--accent-green)",
                    }}
                  >
                    Current
                  </span>
                )}
              </span>

              <span className="mt-1 flex flex-wrap items-baseline gap-x-2">
                <span
                  className="text-base font-semibold sm:text-lg md:text-xl"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </span>
                {item.org && (
                  <span
                    className="text-sm sm:text-base"
                    style={{ color: "var(--accent-green)" }}
                  >
                    · {item.org}
                  </span>
                )}
              </span>

              <span
                className="mt-1 block text-xs sm:text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {fmtRange(item.start, item.end)}
                <span style={{ color: "var(--text-muted)" }}>
                  {` · ${fmtDuration(item.start, item.end)}`}
                  {item.location ? ` · ${item.location}` : ""}
                </span>
              </span>

              {/* Collapsed rows still carry a summary line and most of the tags,
                  instead of two tags and nothing else. */}
              {!open && item.description && (
                <span
                  className="mt-2 line-clamp-2 block text-sm"
                  style={{ color: "var(--experience-text)" }}
                >
                  {item.description}
                </span>
              )}

              {shownTags.length > 0 && (
                <span className="mt-2.5 flex flex-wrap items-center gap-2">
                  {shownTags.map((t) => (
                    <Tag key={t} size="sm">
                      {t}
                    </Tag>
                  ))}
                  {hiddenTags > 0 && (
                    <span
                      className="text-[11px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      +{hiddenTags} more
                    </span>
                  )}
                </span>
              )}
            </span>

            <FaChevronDown
              aria-hidden="true"
              size={14}
              className={`mt-1.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              style={{ color: "var(--text-muted)" }}
            />
          </button>
        </h3>

        <div
          id={panelId}
          aria-hidden={!open}
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="overflow-hidden">
            <div className="px-4 pb-4 md:px-5 md:pb-5">
              {item.description && (
                <p
                  className="text-sm sm:text-[15px]"
                  style={{ color: "var(--experience-text)" }}
                >
                  {item.description}
                </p>
              )}

              {item.roles && item.roles.length > 0 && (
                <div className="mt-3 space-y-3">
                  {item.roles.map((role) => (
                    <div key={role.title}>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: kind.color }}
                      >
                        {role.title}
                      </div>
                      <ul className="mt-1.5 space-y-1.5">
                        {role.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-sm sm:text-[15px]"
                            style={{ color: "var(--experience-text)" }}
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ backgroundColor: kind.color }}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {item.bullets && item.bullets.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm sm:text-[15px]"
                      style={{ color: "var(--experience-text)" }}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: kind.color }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {item.achievements && item.achievements.length > 0 && (
                <div className="mt-4">
                  <div
                    className="mb-1.5 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--accent-green)" }}
                  >
                    Achievements
                  </div>
                  <ul className="space-y-1.5">
                    {item.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2.5 text-sm sm:text-[15px]"
                        style={{ color: "var(--experience-text)" }}
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: "var(--accent-green)" }}
                        />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium transition hover:underline"
                  style={{ color: "var(--accent-green)" }}
                >
                  {new URL(item.link).hostname.replace(/^www\./, "")}
                  <FaArrowUpRightFromSquare aria-hidden="true" size={11} />
                </a>
              )}
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
}
