import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { projects } from "../data/ProjectData";

export const Projects = () => (
  <section id="projects" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent animate-gradient"
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(({ title, subtitle, description, techs, link }) => (
            <div
              key={title}
              className="
                p-6
                rounded-2xl
                bg-white/5 backdrop-blur-lg
                border border-transparent
                hover:border-green-500/40
                hover:shadow-[0_4px_16px_rgba(59,130,246,0.2)]
                transition-all
                flex flex-col justify-between
                min-h-[360px]
              "
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {title}
                  {subtitle && (
                    <span className="ml-2 text-sm font-normal text-green-400">
                      {subtitle}
                    </span>
                  )}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="
                        inline-block
                        bg-green-500/10
                        text-green-300
                        py-1 px-3
                        rounded-full
                        text-sm
                        font-medium
                        hover:bg-green-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                        transition
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block
                    text-center
                    bg-green-500
                    hover:bg-green-600
                    text-black
                    font-medium
                    py-2 px-4
                    rounded-lg
                    transition-colors
                  "
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  </section>
);
