import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import headshot from "../../assets/MartinJanev.jpg";

const categories = [
  {
    title: "Technologies",
    items: ["Python", "Java", "C++", "OpenCV", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "Angular", "TypeScript", "Web Dev"],
  },
  {
    title: "Volunteering",
    items: ["Equinox Scout Shtip", "Scout Assoc. Macedonia", "EESTEC LC Skopje"],
  },
  {
    title: "Hobbies",
    items: ["Running", "Reading", "Tennis", "Basketball", "Football", "Table Tennis", "Coding"],
  },
];

export const About = () => (
  <section id="about" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
      <div className="max-w-4xl mx-auto px-4 space-y-16">

        {/* Header */}
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
          About Me
        </h2>

        {/* Bio + Photo */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={headshot}
            alt="Martin Janev"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-green-500/50 shadow-lg"
          />
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a third-year Computer Science student at FCSE Skopje, passionate about AI, Machine Learning, and Data Science. Through academic projects and community involvement, I’ve sharpened my problem-solving skills and love crafting end-to-end solutions—from data preprocessing to production-ready code. Beyond tech, I’m dedicated to volunteering, staying active, and pushing my limits both on the pavement and in the lab.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ title, items }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-transparent hover:border-green-500/40 hover:shadow-[0_4px_16px_rgba(59,130,246,0.2)] transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="bg-green-500/10 text-green-300 py-1 px-3 rounded-full text-sm font-medium hover:bg-green-500/20 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-transparent hover:border-green-500/40 hover:shadow-[0_4px_16px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-semibold text-white mb-4">🎓 Education</h3>
            <ul className="text-gray-300 space-y-2">
              <li>
                <span className="font-bold">BSc Computer Science</span>, FCSE Skopje<br />
                <span className="text-sm">2023 – Present</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-transparent hover:border-green-500/40 hover:shadow-[0_4px_16px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-semibold text-white mb-4">💬 Favorite Quotes</h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <p className="italic font-bold text-lg bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent">
                  “Stay hungry. Stay foolish.” – Steve Jobs
                </p>
                <p className="mt-2 text-sm">
                  A reminder to keep pushing boundaries—whether in code or in life.
                </p>
              </div>

              <div>
                <p className="italic font-bold text-lg bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent">
                  “Try to leave this world a little better than you found it.” – Robert Baden-Powell
                </p>
                <p className="mt-2 text-sm">
                  Guides my work in tech and community—small contributions add up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  </section>
);
