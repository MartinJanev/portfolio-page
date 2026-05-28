import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useScrollMetrics } from "../contexts/ScrollMetricsContext";

export const ScrollToTop: React.FC = () => {
  const { pastAboutHalf } = useScrollMetrics();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-3 rounded-full shadow-lg transition-all duration-300 ${
        pastAboutHalf
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      style={{
        backgroundColor: "var(--accent-green)",
      }}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-white" size={20} />
    </button>
  );
};
