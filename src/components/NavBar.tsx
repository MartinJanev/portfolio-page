import React, { useCallback, useEffect, useRef } from "react";
import useScrollSpy from "../hooks/useScrollSpy";
import { useScrollMetrics } from "../contexts/ScrollMetricsContext";
import { ThemeToggle } from "./ThemeToggle";

interface Props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const links = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about", id: "about", label: "About" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#research", id: "research", label: "Research" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

const MOBILE_MENU_ID = "mobile-menu";

export const NavBar: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
  const ids = links.map((l) => l.id);
  const active = useScrollSpy(ids, "0px 0px -55% 0px");
  const { navScrolled, progress } = useScrollMetrics();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, [setMenuOpen]);

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      html.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        navScrolled ? "shadow-xl backdrop-blur-md" : "bg-transparent"
      }`}
      style={{
        backgroundColor: navScrolled ? "var(--nav-bg-scrolled)" : "transparent",
      }}
      aria-label="Main"
    >
      <div
        className={`h-1 bg-gradient-to-r from-green-400 to-purple-500 ${
          menuOpen ? "hidden" : ""
        }`}
        style={{ width: `${progress}%` }}
        aria-hidden="true"
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
                aria-current={active === id ? "page" : undefined}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-purple-400 transition-all ${
                    active === id ? "w-full" : "w-0"
                  }`}
                  aria-hidden="true"
                />
              </a>
            ))}
            <ThemeToggle />
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            className="md:hidden p-2 z-50 flex flex-col justify-between h-7"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={MOBILE_MENU_ID}
          >
            <span
              className={`block h-0.5 w-6 transition-transform ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
              style={{ backgroundColor: "var(--text-primary)" }}
              aria-hidden="true"
            />
            <span
              className={`block h-0.5 w-6 transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
              style={{ backgroundColor: "var(--text-primary)" }}
              aria-hidden="true"
            />
            <span
              className={`block h-0.5 w-6 transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={{ backgroundColor: "var(--text-primary)" }}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <div
        id={MOBILE_MENU_ID}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-[70] md:hidden transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        hidden={!menuOpen}
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
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="absolute top-5 right-5 text-2xl transition-colors"
            style={{ color: "var(--text-primary)" }}
          >
            ×
          </button>
          <ul className="flex flex-col items-center space-y-6 px-8 list-none m-0 p-0">
            {links.map(({ href, id, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`text-xl font-semibold transition-colors ${
                    active === id ? "text-green-400" : "hover:text-green-300"
                  }`}
                  style={{
                    color:
                      active === id
                        ? "var(--accent-green)"
                        : "var(--text-primary)",
                  }}
                  aria-current={active === id ? "page" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="mt-4 list-none">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
