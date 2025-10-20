import React, { useState } from "react";
import "./index.css";
import "./App.css";

import BackgroundDecor from "./components/BackgroundDecor";
import { LoadingScreen } from "./components/LoadingScreen";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Research } from "./components/sections/Research";
import { Footer } from "./components/sections/Footer";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`relative min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <BackgroundDecor />
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Experience />
        <Research />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
