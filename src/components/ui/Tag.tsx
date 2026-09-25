import type { ReactNode } from "react";
import type { IconType } from "react-icons";

type Variant = "default" | "accent" | "muted";
type Size = "sm" | "md";

interface Props {
  children: ReactNode;
  /** Renders a brand/topic logo in place of the default dot. */
  icon?: IconType;
  variant?: Variant;
  size?: Size;
  /** Set false for status or date pills that read better without a marker. */
  marker?: boolean;
  className?: string;
}

const sizes: Record<Size, string> = {
  sm: "text-[11px] gap-1.5 px-2.5 py-1",
  md: "text-xs gap-2 px-3 py-1",
};

const colors: Record<Variant, string> = {
  default: "var(--tag-text)",
  accent: "var(--accent-purple)",
  muted: "var(--text-muted)",
};

export default function Tag({
  children,
  icon: Icon,
  variant = "default",
  size = "md",
  marker = true,
  className = "",
}: Props) {
  const color = colors[variant];

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${sizes[size]} ${className}`}
      style={{
        backgroundColor: "var(--tag-bg)",
        border: "1px solid var(--tag-border)",
        color,
      }}
    >
      {Icon ? (
        <Icon
          aria-hidden="true"
          className="shrink-0"
          size={size === "sm" ? 11 : 13}
        />
      ) : (
        marker && (
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: color }}
          />
        )
      )}
      {children}
    </span>
  );
}
