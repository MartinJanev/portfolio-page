import React, { useEffect } from "react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#books", label: "Books" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl text-white hover:-translate-y-1 transition-transform"
          >
            Martin
            <span className="text-green-500"> Janev</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <span className="text-3xl">×</span>
            ) : (
              <span className="text-3xl">≡</span>
            )}
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-[rgba(10,10,10,0.9)] backdrop-blur-lg flex flex-col items-center justify-center space-y-8 transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:text-green-500 transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};
