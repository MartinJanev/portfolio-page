import React, { Suspense, lazy, useState } from "react";
import "./index.css";
import "./App.css";

import BackgroundDecor from "./components/BackgroundDecor";
import { NavBar } from "./components/NavBar";
import { SectionSkeleton } from "./components/SectionSkeleton";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ScrollToTop } from "./components/ScrollToTop";

const Home = lazy(() =>
  import("./components/sections/Home").then((module) => ({
    default: module.Home,
  })),
);

const About = lazy(() =>
  import("./components/sections/About").then((module) => ({
    default: module.About,
  })),
);

const Experience = lazy(() =>
  import("./components/sections/Experience").then((module) => ({
    default: module.Experience,
  })),
);

const Research = lazy(() =>
  import("./components/sections/Research").then((module) => ({
    default: module.Research,
  })),
);

const Projects = lazy(() =>
  import("./components/sections/Projects").then((module) => ({
    default: module.Projects,
  })),
);

const Contact = lazy(() =>
  import("./components/sections/Contact").then((module) => ({
    default: module.Contact,
  })),
);

const Footer = lazy(() =>
  import("./components/sections/Footer").then((module) => ({
    default: module.Footer,
  })),
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ErrorBoundary>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      <div
        className="relative min-h-screen"
        style={{
          background: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <BackgroundDecor />
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main id="main-content">
          <Suspense fallback={<SectionSkeleton title="Home" />}>
            <Home />
          </Suspense>
          <Suspense fallback={<SectionSkeleton title="About" />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionSkeleton title="Experience" />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<SectionSkeleton title="Research" />}>
            <Research />
          </Suspense>
          <Suspense fallback={<SectionSkeleton title="Projects" />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionSkeleton title="Contact" />}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<SectionSkeleton title="Footer" />}>
          <Footer />
        </Suspense>
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}
