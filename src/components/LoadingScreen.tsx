import { useEffect, useMemo, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const fullText = "<Hello World/>";
  const [i, setI] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const charMs = prefersReduced ? 20 : 40;
    let index = 0;
    const id = setInterval(() => {
      index += 1;
      setI(Math.min(index, fullText.length));
      setPercent(
        Math.min(100, Math.round((index / (fullText.length + 10)) * 100)),
      );
      if (index > fullText.length + 10) {
        clearInterval(id);
        setPercent(100);
        setTimeout(onComplete, 750);
      }
    }, charMs);

    return () => clearInterval(id);
  }, [onComplete]);

  const typed = useMemo(() => fullText.slice(0, i), [i]);

  return (
    <div
      className="fixed inset-0 z-50 isolate overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--gradient-from)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--gradient-to)" }}
      />
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <div
          className="group relative w-full max-w-lg rounded-2xl p-8 text-center shadow-2xl backdrop-blur-xl"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-color)",
            borderWidth: "1px",
          }}
        >
          <div className="pointer-events-none absolute -inset-1 rounded-[18px] bg-gradient-to-r from-green-500/15 to-purple-500/15 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
          <h1 className="font-mono text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-green-400 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
            {typed}
            <span className="ml-1 animate-blink" aria-hidden="true">
              |
            </span>
          </h1>
          <p
            className="mt-3 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Booting up the portfolio…
          </p>
          <div
            className="mt-6 h-2 w-full overflow-hidden rounded-full"
            style={{ backgroundColor: "var(--card-hover)" }}
            role="progressbar"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Loading progress"
          >
            <div className="h-full w-[40%] bg-gradient-to-r from-green-400 to-purple-500 animate-loading-bar" />
          </div>
          <div className="mt-2 text-xs" style={{ color: "var(--text-muted)" }}>
            {percent}%
          </div>
        </div>
      </div>
      <button
        onClick={onComplete}
        className="absolute bottom-6 right-6 rounded-lg px-3 py-1.5 text-xs hover:border-green-400/50 transition"
        style={{
          borderColor: "var(--border-color)",
          borderWidth: "1px",
          color: "var(--text-secondary)",
        }}
      >
        Skip intro
      </button>
    </div>
  );
};
