import React from "react";
import { FaArrowUp } from "react-icons/fa";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_120%_at_50%_-50%,rgba(99,102,241,0.10),transparent_40%),radial-gradient(120%_120%_at_50%_140%,rgba(34,197,94,0.10),transparent_40%)]" />
      <div className="relative bg-[#0d1523]/90 backdrop-blur-lg border-t border-white/10 shadow-[0_-6px_20px_rgba(0,0,0,0.35)]">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-center text-gray-200 relative">
          <span className="text-gray-400 text-sm">© {year}</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="absolute right-0 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 hover:border-green-400/40 text-gray-200 hover:text-white transition mx-2 md:mx-0"
          >
            <FaArrowUp className="text-xs" /> Top
          </button>
        </div>
      </div>
    </footer>
  );
};
