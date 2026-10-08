import { useId } from "react";
import { FaGithub, FaFilePdf, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Modal from "./ui/Modal";
import Tag from "./ui/Tag";
import { techIcon } from "./data/techIcons";
import type { ResearchItem } from "../types/content";

interface Props {
  item: ResearchItem;
  open: boolean;
  onClose: () => void;
}

export default function ResearchDialog({ item, open, onClose }: Props) {
  const titleId = useId();
  const {
    title,
    subtitle,
    description,
    techs = [],
    link,
    paperLink,
    year,
    venue,
    status,
  } = item;
  const hasRepo = typeof link === "string" && link.length > 0;
  const hasPaper = typeof paperLink === "string" && paperLink.length > 0;
  const meta = [venue, year].filter(Boolean).join(" · ");

  return (
    <Modal
      open={open}
      onClose={onClose}
      titleId={titleId}
      closeLabel="Close research details"
      padding="p-7 sm:p-10 md:p-14"
      header={
        <div className="min-w-0">
          {(status || meta) && (
            <div className="mb-2 flex flex-wrap items-center gap-2">
              {status && (
                <Tag variant="accent" size="sm" marker={false}>
                  {status}
                </Tag>
              )}
              {meta && (
                <span
                  className="text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  {meta}
                </span>
              )}
            </div>
          )}
          <h2
            id={titleId}
            className="text-xl font-bold leading-snug md:text-2xl"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="mt-1 text-sm italic"
              style={{ color: "var(--accent-green)" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      }
    >
      <p
        className="text-sm leading-relaxed md:text-base"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>

      {techs.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {techs.map((t) => (
            <Tag key={t} size="sm" icon={techIcon(t)}>
              {t}
            </Tag>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
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
    </Modal>
  );
}
