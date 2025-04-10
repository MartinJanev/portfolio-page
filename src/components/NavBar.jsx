import { useEffect } from "react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl text-white hover:-translate-y-1 transition">
            {" "}
            Martin<span className="text-green-500"> Janev</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hove:text-white transition-colors hover:text-green-500 transition"
            >
              {" "}
              Home{" "}
            </a>

            <a
              href="#about"
              className="text-gray-300 hove:text-white transition-colors hover:text-green-500 transition"
            >
              {" "}
              About{" "}
            </a>

            <a
              href="#projects"
              className="text-gray-300 hove:text-white transition-colors hover:text-green-500 transition"
            >
              {" "}
              Projects{" "}
            </a>

            <a
              href="#books"
              className="text-gray-300 hove:text-white transition-colors hover:text-green-500 transition"
            >
              {" "}
              Books{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
