export default function BackgroundDecor() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const glowOpacity = prefersReducedMotion ? 0.08 : 0.2;
  const gridOpacity = prefersReducedMotion ? 0.08 : 0.15;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          opacity: glowOpacity,
          background:
            "radial-gradient(60% 40% at 50% 0%, var(--gradient-from), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, transparent, var(--bg-primary))`,
        }}
      />
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_65%_50%_at_50%_10%,black,transparent_70%)]"
        style={{
          background: `linear-gradient(90deg, var(--border-color) 1px, transparent 1px), linear-gradient(var(--border-color) 1px, transparent 1px)`,
          backgroundSize: "38px 38px",
          opacity: gridOpacity,
        }}
      />
    </div>
  );
}
