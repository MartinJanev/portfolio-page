import { FaGithub } from "react-icons/fa6";
import Card from "./ui/Card";
import Tag from "./ui/Tag";
import { techIcon } from "./data/techIcons";
import { projectCategory } from "./data/projectCategories";
import type { ProjectItem } from "../types/content";

type Props = ProjectItem & { className?: string };

export default function ProjectCard({
  title,
  subtitle,
  description,
  techs = [],
  link,
  featured = false,
  className = "",
}: Props) {
  const isClickable = typeof link === "string" && link.length > 0;
  const { icon: CategoryIcon, gradient } = projectCategory(subtitle);

  return (
    <Card
      tier={featured ? "featured" : "standard"}
      className={className}
      contentClassName="flex flex-col"
    >
      {/*
        The repo link is a single anchor covering the whole card, so the card
        needs no separate button row. The corner mark below is purely the visual
        affordance for it. An absolutely-positioned anchor becomes its own
        containing block, so an ::after overlay could not be used here.
      */}
      {isClickable && (
        <a
          href={link as string}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} on GitHub`}
          className="absolute inset-0 z-10 rounded-2xl"
        />
      )}

      <div className="mb-4 flex items-center justify-between gap-3">
        {/* The category icon now carries the palette that used to sit in the
            header band, so each category still reads by colour at a glance. */}
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={`flex shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${featured ? "h-14 w-14" : "h-12 w-12"}`}
            style={{
              background: gradient,
              border: "1px solid var(--card-border)",
            }}
          >
            <CategoryIcon
              aria-hidden="true"
              size={featured ? 26 : 22}
              style={{ color: "var(--text-primary)" }}
            />
          </span>
          {subtitle && (
            <span
              className="truncate text-[11px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-muted)" }}
            >
              {subtitle}
            </span>
          )}
        </div>

        {isClickable ? (
          <span
            aria-hidden="true"
            className="pointer-events-none flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-300 group-hover:scale-110 group-hover:shadow-[0_6px_18px_rgba(34,197,94,0.35)]"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              color: "var(--text-primary)",
            }}
          >
            <FaGithub size={16} />
          </span>
        ) : (
          <span
            className="shrink-0 rounded-full px-3 py-1 text-[11px] font-medium"
            style={{
              backgroundColor: "var(--bg-tertiary)",
              color: "var(--text-muted)",
            }}
          >
            Coming soon
          </span>
        )}
      </div>

      <h3
        className={`font-semibold ${featured ? "text-xl md:text-2xl" : "text-lg"}`}
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h3>

      <p
        className={`mt-2 text-sm leading-relaxed ${featured ? "" : "line-clamp-3"}`}
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>

      {techs.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {techs.map((t) => (
            <Tag key={t} size="sm" icon={techIcon(t)}>
              {t}
            </Tag>
          ))}
        </div>
      )}
    </Card>
  );
}
