import React, { useState } from "react";
import { FaEnvelope, FaCheck } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";
import Tag from "../ui/Tag";
import avatarJpg from "../../assets/MartinJanev.jpg";
import avatarWebp from "../../assets/MartinJanev.webp";
import {
  contactData,
  cvDownloadName,
  cvUrl,
  portfolioEmail,
} from "../data/ContactData";
import { useAgeDisplay } from "../../hooks/useAgeDisplay";

export const Home: React.FC = () => {
  const { ageText, startUpdatingAge, stopUpdatingAge } = useAgeDisplay();
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle",
  );

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(portfolioEmail);
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 1200);
    } catch {
      setCopyStatus("failed");
      setTimeout(() => setCopyStatus("idle"), 2000);
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex justify-center">
            <div className="relative w-full group flex flex-col items-center justify-center">
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
                <div className="relative mb-6">
                  <div className="absolute -inset-4 blur-2xl opacity-30 bg-gradient-to-tr from-green-800 to-purple-800 rounded-full" />
                  <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-green-500 to-purple-500">
                    <picture>
                      <source srcSet={avatarWebp} type="image/webp" />
                      <img
                        src={avatarJpg}
                        alt="Martin Janev"
                        width={192}
                        height={192}
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover"
                      />
                    </picture>
                  </div>
                </div>
                <div className="mb-5 flex flex-wrap items-center justify-center gap-3">
                  <span
                    className="inline-flex items-center gap-2 text-xs font-semibold"
                    style={{ color: "var(--accent-green)" }}
                  >
                    <span aria-hidden="true" className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    Open to internships
                  </span>
                  <Tag size="sm" marker={false}>
                    💻 FCSE Skopje • 🏠 Shtip
                  </Tag>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none pb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400 animate-gradient text-center">
                  Martin Janev
                </h1>
                <p
                  className="mt-3 text-lg md:text-xl font-semibold text-center"
                  style={{ color: "var(--text-primary)" }}
                >
                  Computer Science Student
                </p>
                <p
                  className="mt-1 text-sm font-semibold tabular-nums text-center cursor-default bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-600 animate-gradient"
                  onMouseEnter={startUpdatingAge}
                  onMouseLeave={stopUpdatingAge}
                >
                  {ageText}
                </p>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white text-sm font-medium py-2.5 px-5 rounded-lg shadow-sm transition"
                  >
                    View My Work →
                  </a>
                  <a
                    href={cvUrl}
                    download={cvDownloadName}
                    className="inline-flex items-center justify-center border text-sm font-medium py-2.5 px-5 rounded-lg transition hover:bg-white/5"
                    style={{
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Download CV
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-2 border text-sm font-medium py-2.5 px-5 rounded-lg transition hover:bg-white/5"
                    style={{
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                    aria-live="polite"
                  >
                    {copyStatus === "copied" ? (
                      <>
                        <FaCheck className="text-green-400" /> Copied!
                      </>
                    ) : copyStatus === "failed" ? (
                      <>Copy failed</>
                    ) : (
                      <>
                        <FaEnvelope /> Copy email
                      </>
                    )}
                  </button>
                </div>
                <div
                  className="mt-8 pt-6 border-t"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <div
                    className="flex gap-5 justify-center"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {contactData.map(({ label, href, icon: Icon }) => (
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
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
