import React, { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import avatar from "../../assets/MartinJanev.jpg";
import { contactData } from "../data/ContactData";

export const Home: React.FC = () => {
  const birthDate = new Date("2004-04-27T00:00:00");
  const getExactYears = () => {
    const now = new Date();
    const diffInMs = now.getTime() - birthDate.getTime();
    const years = diffInMs / (1000 * 60 * 60 * 24 * 365.2425);
    return years.toFixed(9);
  };

  const [ageText, setAgeText] = useState(
    `I am ${Math.floor(Number(getExactYears()))} years old`
  );
  const intervalRef = useRef<number | null>(null);

  const startUpdatingAge = () => {
    setAgeText(`I am ${getExactYears()} years old`);
    intervalRef.current = window.setInterval(
      () => setAgeText(`I am ${getExactYears()} years old`),
      1000
    );
  };
  const stopUpdatingAge = () => {
    if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
    intervalRef.current = null;
    setAgeText(`I am ${Math.floor(Number(getExactYears()))} years old`);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-5xl mx-auto grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 flex justify-center md:justify-start order-2 md:order-none">
            <div className="relative w-full max-w-2xl group flex flex-col items-center justify-center">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-500/30 via-transparent to-purple-500/30 blur opacity-40 group-hover:opacity-70 transition" />
              <div className="relative p-8 md:p-10 rounded-2xl bg-white/5 backdrop-blur-lg ring-1 ring-white/10 flex flex-col items-center justify-center">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-gray-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                    💻 FCSE Skopje • 🏠 Shtip
                  </span>
                  <span className="h-3 w-px bg-white/10" />
                  <span className="text-green-300/90">Open to internships</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400 animate-gradient text-center">
                  Computer Science Student
                </h1>
                <h2
                  className="mt-3 mb-3 text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-600 animate-gradient cursor-default transition-transform duration-200 ease-in-out hover:scale-105"
                  onMouseEnter={startUpdatingAge}
                  onMouseLeave={stopUpdatingAge}
                >
                  {ageText}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                  {["AI", "Machine Learning", "Game Development"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 rounded-full bg-green-500/10 text-green-300 text-xs font-medium px-3 py-1"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-black font-medium py-3 px-6 rounded-lg shadow-sm transition"
                  >
                    View My Work →
                  </a>
                  <a
                    href="/MartinJanev-CV.pdf"
                    className="pointer-events-none cursor-default inline-flex items-center justify-center border border-white/20 hover:border-green-400/50 text-white py-3 px-6 rounded-lg transition"
                  >
                    Download CV
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex gap-5 text-gray-300 justify-center md:justify-start">
                    {contactData
                      .filter(({ label }) =>
                        [
                          "instagram",
                          "facebook",
                          "linkedin",
                          "github",
                        ].includes(label.toLowerCase())
                      )
                      .map(({ label, href, icon: Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-green-300 transition"
                          aria-label={label}
                          title={label}
                        >
                          <Icon size={22} />
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center md:justify-end order-1 md:order-none">
            <div className="relative mt-8">
              <div className="absolute -inset-8 blur-2xl opacity-30 bg-gradient-to-tr from-green-800 to-purple-800 rounded-full" />
              <div className="p-[3px] rounded-full bg-gradient-to-tr from-green-500 to-purple-500">
                <img
                  src={avatar}
                  alt="Martin Janev"
                  loading="lazy"
                  className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
