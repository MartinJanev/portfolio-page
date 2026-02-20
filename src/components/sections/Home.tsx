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
    `I am ${Math.floor(Number(getExactYears()))} years old`,
  );
  const intervalRef = useRef<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const getAge = () => {
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    return { years, months, days };
  };

  React.useEffect(() => {
    setAgeText(`I am ${getAge().years} years old`);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const startUpdatingAge = () => {
    if (prefersReducedMotion) {
      setAgeText(`I am ${getAge().years} years old`);
      return;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    const update = () => {
      const { years, months, days } = getAge();
      let text = `I am ${years} years`;
      if (months > 0) text += `, ${months} months`;
      if (days > 0) text += `, ${days} days`;
      text += " old";
      setAgeText(text);
    };
    update();
    intervalRef.current = window.setInterval(update, 1000);
  };

  const stopUpdatingAge = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    setAgeText(`I am ${getAge().years} years old`);
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
              <div
                className="pointer-events-none absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-80 transition duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, var(--glow-green), var(--glow-purple))",
                }}
              />
              <div
                className="relative p-8 md:p-10 rounded-2xl backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 hover:translate-y-[-4px]"
                style={{
                  backgroundColor: "var(--card-bg-solid)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div
                  className="mb-3 flex flex-wrap items-center gap-3 text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    💻 FCSE Skopje • 🏠 Shtip
                  </span>
                  <span
                    className="h-3 w-px"
                    style={{ backgroundColor: "var(--border-color)" }}
                  />
                  <span style={{ color: "var(--accent-green)" }}>
                    Open to internships
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400 animate-gradient text-center">
                  Computer Science Student
                </h1>
                <h2
                  className="mt-2 mb-1 text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-600 animate-gradient cursor-default transition-transform duration-200 ease-in-out hover:scale-105"
                  onMouseEnter={startUpdatingAge}
                  onMouseLeave={stopUpdatingAge}
                >
                  {ageText}
                </h2>
                <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-medium py-3 px-6 rounded-lg shadow-sm transition"
                  >
                    View My Work →
                  </a>
                  <a
                    href="/MartinJanev-CV.pdf"
                    className="pointer-events-none cursor-default inline-flex items-center justify-center border py-3 px-6 rounded-lg transition"
                    style={{
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                    hidden
                  >
                    Download CV
                  </a>
                </div>
                <div
                  className="mt-6 pt-6 border-t"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <div
                    className="flex gap-5 justify-center md:justify-start"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {contactData
                      .filter(({ label }) =>
                        [
                          "discord",
                          "instagram",
                          "facebook",
                          "linkedin",
                          "github",
                        ].includes(label.toLowerCase()),
                      )
                      .map(({ label, href, icon: Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-green-300 transition"
                          style={{ color: "var(--text-secondary)" }}
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
