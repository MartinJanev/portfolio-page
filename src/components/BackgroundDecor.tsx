export default function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0 opacity-20"
        style={{
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
        className="absolute inset-0 opacity-15 [mask-image:radial-gradient(ellipse_65%_50%_at_50%_10%,black,transparent_70%)]"
        style={{
          background: `linear-gradient(90deg, var(--border-color) 1px, transparent 1px), linear-gradient(var(--border-color) 1px, transparent 1px)`,
          backgroundSize: "38px 38px",
        }}
      />
    </div>
  );
}
