import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const aboutTop = aboutSection.offsetTop;
      const aboutHeight = aboutSection.offsetHeight;
      const halfwayPoint = aboutTop + aboutHeight / 2;
      const scrollPosition = window.scrollY;

      // Show button if scrolled past halfway point of About section
      setIsVisible(scrollPosition > halfwayPoint);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-3 rounded-full shadow-lg transition-all duration-300 ${
        isVisible
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
