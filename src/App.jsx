import React, { useState } from "react";
import "./index.css";
import "./App.css";

import BackgroundDecor from "./components/BackgroundDecor";
import { LoadingScreen } from "./components/LoadingScreen";
import { NavBar } from "./components/NavBar"; // uses scroll‑spy + built-in mobile drawer
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Book } from "./components/sections/Book";
import { Footer } from "./components/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`relative min-h-screen bg-black text-gray-100 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
      >
        <BackgroundDecor />

        {/* Nav: pass menu state for mobile menu/drawer */}
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Sections */}
        <Home />
        <About />
        <Projects />
        <Book />
        <Footer />
      </div>
    </>
  );
}

export default App;