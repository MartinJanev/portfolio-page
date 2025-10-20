import React from "react";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_120%_at_50%_-50%,rgba(99,102,241,0.10),transparent_40%),radial-gradient(120%_120%_at_50%_140%,rgba(34,197,94,0.10),transparent_40%)]" />
      <div
        className="relative backdrop-blur-lg border-t shadow-[0_-6px_20px_rgba(0,0,0,0.35)]"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderColor: "var(--border-color)",
        }}
      >
        <div
          className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-center"
          style={{ color: "var(--text-primary)" }}
        >
          <span
            className="text-sm"
            style={{ color: "var(--text-muted)" }}
          >{`© ${year}`}</span>
        </div>
      </div>
    </footer>
  );
};
