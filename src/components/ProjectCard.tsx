interface Props {
  title: string;
  subtitle?: string;
  description: string;
  techs?: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  techs = [],
  link = "#",
}: Props) {
  return (
    <div
      className="relative group rounded-2xl p-6 backdrop-blur-lg transition hover:-translate-y-1 hover:ring-green-400/40 min-h-[360px] flex flex-col"
      style={
        {
        backgroundColor: "var(--card-bg-solid)",
        border: "1px solid var(--card-border)",
      }
    }
    >
      <div
        className="pointer-events-none absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"
        style={{
          background:
            "linear-gradient(135deg, var(--glow-green), var(--glow-purple))",
        }}
      />
      <div className="relative flex flex-col justify-between h-full">
        <div>
          <h3
            className="text-xl font-semibold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
            {subtitle && (
              <span
                className="ml-2 text-sm font-normal"
                style={{ color: "var(--accent-green)" }}
              >
                {subtitle}
              </span>
            )}
          </h3>
          <p
            className="mb-4 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {description}
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {techs.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 rounded-full text-xs font-medium px-3 py-1 transition hover:bg-green-500/20"
                style={{
                  backgroundColor: "var(--card-bg)",
                  color: "var(--accent-green)",
                  borderColor: "var(--border-color)",
                  borderWidth: "1px",
                }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--accent-green)" }}
                />
                {t}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors group-hover:shadow-[0_8px_24px_rgba(34,197,94,0.35)]"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
}
