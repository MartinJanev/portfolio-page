import type { ElementType, PropsWithChildren } from "react";

export type CardTier = "featured" | "standard" | "quiet";

interface Props extends PropsWithChildren {
  /**
   * Visual weight. This is what gives the page a hierarchy: `featured` carries a
   * stronger halo and roomier padding, `quiet` stays flat so supporting content
   * stops competing with the things that matter.
   */
  tier?: CardTier;
  /** Adds the hover lift + ring. Turn off for purely decorative panels. */
  interactive?: boolean;
  /** Set false when the card renders edge-to-edge content such as a gradient band. */
  padded?: boolean;
  as?: ElementType;
  className?: string;
  contentClassName?: string;
}

const padding: Record<CardTier, string> = {
  featured: "p-6 md:p-8",
  standard: "p-5 md:p-6",
  quiet: "p-5",
};

const halo: Record<CardTier, string> = {
  featured: "md:group-hover:opacity-90",
  standard: "md:group-hover:opacity-70",
  quiet: "md:group-hover:opacity-40",
};

export default function Card({
  tier = "standard",
  interactive = true,
  padded = true,
  as: Element = "div",
  className = "",
  contentClassName = "",
  children,
}: Props) {
  return (
    <Element
      className={[
        "group relative h-full rounded-2xl backdrop-blur-lg",
        // ring-1 is required for a ring colour to render at all; without a width
        // utility the hover ring is silently dropped.
        "ring-1 ring-transparent transition duration-300",
        interactive ? "md:hover:-translate-y-1 md:hover:ring-green-400/40" : "",
        padded ? padding[tier] : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        backgroundColor: "var(--card-bg-solid)",
        border: "1px solid var(--card-border)",
      }}
    >
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute -inset-1 rounded-2xl blur opacity-0 transition duration-500",
          interactive ? halo[tier] : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={{
          background:
            "linear-gradient(135deg, var(--glow-green), var(--glow-purple))",
        }}
      />
      <div className={`relative h-full ${contentClassName}`}>{children}</div>
    </Element>
  );
}
