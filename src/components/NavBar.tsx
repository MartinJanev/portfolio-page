import React, { useEffect, useState } from "react";
import useScrollSpy from "../hooks/useScrollSpy";
import { ThemeToggle } from "./ThemeToggle";

interface Props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
  const ids = ["home", "about", "experience", "projects", "contact"];
  const active = useScrollSpy(ids, "0px 0px -55% 0px");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (y / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      html.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { href: "#home", id: "home", label: "Home" },
    { href: "#about", id: "about", label: "About" },
    { href: "#experience", id: "experience", label: "Experience" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#contact", id: "contact", label: "Contact" },
  ] as const;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "shadow-xl backdrop-blur-md" : "bg-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "var(--nav-bg-scrolled)" : "transparent",
      }}
    >
      <div
        className={`h-1 bg-gradient-to-r from-green-400 to-purple-500 ${
          menuOpen ? "hidden" : ""
        }`}
        style={{ width: `${progress}%` }}
      />
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-purple-400"
          >
            Martin <span style={{ color: "var(--text-primary)" }}>Janev</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ href, id, label }) => (
              <a
                key={href}
                href={href}
                className={`relative font-medium py-1 transition-colors ${
                  active === id ? "text-green-400" : "hover:text-green-300"
                }`}
                style={{
                  color:
                    active === id
                      ? "var(--accent-green)"
                      : "var(--text-primary)",
                }}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-purple-400 transition-all ${
                    active === id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
            <ThemeToggle />
          </div>
          <button
            className="md:hidden p-2 z-50 flex flex-col justify-between h-7"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-0.5 w-6 transition-transform ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
              style={{ backgroundColor: "var(--text-primary)" }}
            />
            <span
              className={`block h-0.5 w-6 transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
              style={{ backgroundColor: "var(--text-primary)" }}
            />
            <span
              className={`block h-0.5 w-6 transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={{ backgroundColor: "var(--text-primary)" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 z-[70] md:hidden transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        style={{
          backdropFilter: menuOpen ? "blur(8px)" : "none",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          className={`relative w-full flex flex-col items-center transform transition-all duration-500 ease-out ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: "var(--bg-secondary)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
            paddingTop: "80px",
            paddingBottom: "40px",
            borderBottomLeftRadius: "24px",
            borderBottomRightRadius: "24px",
          }}
        >
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 hover:text-white text-2xl transition-colors"
            style={{ color: "var(--text-primary)" }}
          >
            ×
          </button>
          <nav className="flex flex-col items-center space-y-6 px-8">
            {links.map(({ href, id, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-xl font-semibold transition-colors ${
                  active === id ? "text-green-400" : "hover:text-green-300"
                }`}
                style={{
                  color:
                    active === id
                      ? "var(--accent-green)"
                      : "var(--text-primary)",
                }}
              >
                {label}
              </a>
            ))}
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};
