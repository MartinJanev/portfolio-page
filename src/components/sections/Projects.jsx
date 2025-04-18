import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl max-auto px-4">
          <h2
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text 
        text-transparent text-center animate-gradient"
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,120,246,0.1)] transition-all flex flex-col justify-between min-h-[360px]">
              <div>
                <h3 className="text-hl font-bold mb-2"> EventifyNow</h3>
                <p className="text-gray-400 mb-3">
                  EventifyNow is an event management system, more specifically a
                  project for the subject Fundamentals of Web Design. This
                  system allows creating and managing events (including RSVP
                  functionality) using Angular and Firebase.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Angular", "TypeScript", "Firebase", "CKEditor"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                    hover:shadow-[0_2px_8px_rgba(59,120,2246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <a
                  target="_blank"
                  href="https://github.com/MartinJanev/event-management-system"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,120,246,0.1)] transition-all flex flex-col justify-between min-h-[360px]">
              <div>
                <h3 className="text-hl font-bold mb-2">
                  Matura Project - Tetris
                </h3>
                <p className="text-gray-400 mb-3">
                  This is my high school matura project for the subject
                  Informatics—a digital product that is a personal
                  interpretation of the classic game 'Tetris'. Technologies
                  used: C# in Unity.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["C#", ".NET", "Unity"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                    hover:shadow-[0_2px_8px_rgba(59,120,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  target="_blank"
                  href="https://github.com/MartinJanev/tetris-project"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,120,246,0.1)] transition-all flex flex-col justify-between min-h-[360px]">
              <div>
                <h3 className="text-hl font-bold mb-2">
                  Emotion recognition in pictures and video
                </h3>
                <p className="text-gray-400 mb-3">
                  This project is from the subject Digital Image Processing.
                  From it, the model is trained to recognise happpiness,
                  sadness, anger, fear or suprise in a picture or video.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "OpenCV",
                    "Python",
                    "TensorFlow",
                    "Pandas",
                    "FER2013",
                    "MTCNN",
                  ].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                    hover:shadow-[0_2px_8px_rgba(59,120,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  target="_blank"
                  href="#"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,120,246,0.1)] transition-all flex flex-col justify-between min-h-[360px]">
              <div>
                <h3 className="text-hl font-bold mb-2">
                  Upcoming Project in May
                </h3>
                <p className="text-gray-400 mb-3">
                  The 9th edition of the CASSINI Hackathon focuses on leveraging
                  space technologies to tackle critical challenges related to
                  Europe's healthcare. This event brings together coders,
                  problem-solvers, and innovators from across Europe to develop
                  cutting-edge solutions. Link to the website below
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["TBD"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                    hover:shadow-[0_2px_8px_rgba(59,120,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  target="_blank"
                  href="https://www.cassini.eu/hackathons/north-macedonia"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,120,246,0.1)] transition-all flex flex-col justify-between min-h-[360px]">
              <div>
                <h3 className="text-hl font-bold mb-2">
                  Riemann Hypothesis Project
                </h3>
                <p className="text-gray-400 mb-3">
                  This project offers a concise overview of the Riemann
                  Hypothesis, exploring its impact on prime number distribution
                  through a modified prime counting function and harmonic
                  analysis.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Math"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                    hover:shadow-[0_2px_8px_rgba(59,120,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  target="_blank"
                  href="https://github.com/MartinJanev/RiemannHypothesis"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,120,246,0.1)] transition-all flex flex-col justify-between min-h-[360px]">
              <div>
                <h3 className="text-hl font-bold mb-2">
                  Lorem ipsum dolor sit.
                </h3>
                <p className="text-gray-400 mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem aperiam repudiandae sint libero doloribus
                  consequuntur tempora minima vero, quisquam nam. Dolorum,
                  veritatis illum maxime molestiae doloribus quisquam dolorem
                  ipsam adipisci, autem quidem ad, tempore porro a consequatur
                  expedita voluptates doloremque!
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["TBD"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                    hover:shadow-[0_2px_8px_rgba(59,120,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  target="_blank"
                  href="#"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project ➡️
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
