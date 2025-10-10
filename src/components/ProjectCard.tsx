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
    <div className="relative group rounded-2xl p-6 bg-white/5 backdrop-blur-lg ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-green-400/40 min-h-[360px] flex flex-col">
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-green-500/20 to-purple-500/20 blur opacity-0 group-hover:opacity-60 transition" />
      <div className="relative flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {title}
            {subtitle && (
              <span className="ml-2 text-sm font-normal text-green-400">
                {subtitle}
              </span>
            )}
          </h3>
          <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {techs.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 rounded-full bg-green-500/10 text-green-300 text-xs font-medium px-3 py-1 transition group-hover:bg-green-500/15 hover:bg-green-500/20"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400" />
                {t}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-medium py-2 px-4 rounded-lg transition-colors group-hover:shadow-[0_8px_24px_rgba(34,197,94,0.35)]"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
}
