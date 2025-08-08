import React from "react";
import Section from "../Section";
import { RevealOnScroll } from "../RevealOnScroll";

export const Book = () => (
  <Section id="books" title="Book I'm Reading Right Now">
    <RevealOnScroll>
      <div
        className="
          relative group
          flex flex-col md:flex-row gap-8
          p-6 rounded-2xl
          bg-white/5 backdrop-blur-lg
          ring-1 ring-white/10
          transition hover:-translate-y-1 hover:ring-green-400/40
        "
      >
        {/* hover glow frame */}
        <div
          className="
            pointer-events-none absolute -inset-1 rounded-2xl
            bg-gradient-to-br from-green-500/20 to-purple-500/20
            blur opacity-0 group-hover:opacity-60 transition
          "
        />

        {/* Cover */}
        <div className="flex-shrink-0">
          <div className="relative rounded-xl overflow-hidden ring-1 ring-white/10">
            <img
              src="https://jamesclear.com/wp-content/uploads/2024/06/atomic-habits-dots.png"
              alt="Atomic Habits book cover"
              className="w-full max-w-xs md:max-w-[260px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="relative flex-1 flex flex-col justify-between space-y-6">
          <div>
            <h3
              className="
                text-2xl font-semibold mb-3
                bg-clip-text text-transparent
                bg-gradient-to-r from-green-400 to-purple-400
              "
            >
              Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones
            </h3>

            {/* dot-chips */}
            <div className="flex flex-wrap gap-2 mb-3">
              {["Habits", "Behavior", "Productivity"].map((tag) => (
                <span
                  key={tag}
                  className="
                    inline-flex items-center gap-1
                    rounded-full
                    bg-green-500/10 text-green-300
                    text-xs font-medium px-3 py-1
                    transition group-hover:bg-green-500/15 hover:bg-green-500/20
                  "
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400" />
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed">
              No matter your goals, <strong>Atomic Habits</strong> offers a proven framework for improving—every day.
              James Clear reveals practical strategies that teach you exactly how to form good habits, break bad ones, and
              master the tiny behaviors that lead to remarkable results.
              <br />
              <br />
              If you're struggling to change, the issue isn’t you—it’s your system. Clear shows through true stories from
              Olympic champions, award-winning artists, business leaders, physicians, and comedians how small changes
              compound into big outcomes.
            </p>
          </div>

          {/* CTA with glow on hover */}
          <div>
            <a
              href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                bg-green-500 hover:bg-green-600
                text-black font-medium
                py-2 px-6
                rounded-lg
                transition-colors
                group-hover:shadow-[0_8px_24px_rgba(34,197,94,0.35)]
              "
            >
              View on Amazon →
            </a>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  </Section>
);
