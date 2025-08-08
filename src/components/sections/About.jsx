import React from "react";
import Section from "../Section";
import { RevealOnScroll } from "../RevealOnScroll";


const categories = [
  { title: "Technologies", items: ["Python", "Java", "C++", "OpenCV", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "Angular", "TypeScript", "Web Dev"] },
  { title: "Volunteering", items: ["Equinox Scout Shtip", "Scout Assoc. Macedonia", "EESTEC LC Skopje"] },
  { title: "Hobbies", items: ["Running", "Reading", "Tennis", "Basketball", "Football", "Table Tennis", "Coding"] },
];

export const About = () => (
  <Section id="about" title="About Me">
    <RevealOnScroll>
      <div className="space-y-12 md:space-y-16">
        {/* Bio card */}
        <div className="relative w-full group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-500/25 via-transparent to-purple-500/25 blur opacity-40 group-hover:opacity-70 transition" />
          <div className="relative p-6 md:p-10 rounded-2xl bg-white/5 backdrop-blur-lg ring-1 ring-white/10">
            <p className="text-gray-200 text-lg leading-relaxed [text-wrap:balance]">
              I’m enrolling as a third-year Computer Science student at FCSE Skopje, passionate about AI, Machine Learning and the realms of software development.
              Through academic projects and community involvement, I’ve sharpened my problem-solving skills and love crafting
              end-to-end solutions—from data preprocessing to production-ready code. Beyond tech, I’m dedicated to volunteering,
              staying active, and pushing my limits both personally and professionally.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map(({ title, items }) => (
            <div
              key={title}
              className="relative group p-6 rounded-2xl bg-white/5 backdrop-blur-lg ring-1 ring-white/10 hover:ring-green-400/40 transition"
            >
              {/* soft edge glow */}
              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-green-500/20 to-purple-500/20 blur opacity-0 group-hover:opacity-60 transition" />

              <div className="relative">
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">{title}</h3>

                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1 rounded-full bg-green-500/10 text-green-300 text-xs font-medium px-3 py-1 hover:bg-green-500/20 transition"
                    >
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </RevealOnScroll>
  </Section>
);
