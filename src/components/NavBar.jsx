import React, { useEffect, useState } from "react";
import useScrollSpy from "../hooks/useScrollSpy";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  const ids = ["home", "about", "projects", "books"];
  const active = useScrollSpy(ids, "0px 0px -55% 0px"); // midpoint scroll-spy
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
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const links = [
    { href: "#home", id: "home", label: "Home" },
    { href: "#about", id: "about", label: "About" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#books", id: "books", label: "Books" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-gray-900/90 shadow-xl backdrop-blur-md" : "bg-transparent"
        }`}
    >
      {/* Scroll progress bar */}
      <div
        className="h-1 bg-gradient-to-r from-green-400 to-purple-500"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-purple-400"
          >
            Martin <span className="text-white">Janev</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ href, id, label }) => (
              <a
                key={href}
                href={href}
                className={`relative text-white font-medium py-1 transition-colors ${active === id ? "text-green-400" : "hover:text-green-300"
                  }`}
              >
                {label}
                {/* underline */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-purple-400 transition-all ${active === id ? "w-full" : "w-0"
                    }`}
                />
              </a>
            ))}
          </div>

          {/* Mobile toggle (animated hamburger) */}
          <button
            className="md:hidden p-2 z-50 flex flex-col justify-between h-7"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>
      </div>


      {/* Mobile drawer (left slide-in) */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-gray-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <nav className="flex flex-col items-center mt-20 space-y-6">
          {links.map(({ href, id, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-white text-2xl font-semibold hover:text-green-300 transition-colors ${active === id ? "text-green-400" : ""
                }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </nav>
  );
};
