import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const it_related = [
    "Python",
    "Java",
    "C++",
    "Angular",
    "TypeScript",
    "C#",
    "HTML",
    "CSS",
    "JavaScript",
    "Shell",
  ];

  const volunteering = [
    "Scout Unit 'Equinox' Shtip",
    "Scout Association of Macedonia",
    "EESTEC LC Skopje",
  ];

  const activities = [
    "Running",
    "Reading",
    "Volunteering",
    "Football",
    "Tennis",
    "Table Tennis",
    "Coding",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text 
        text-transparent text-center animate-gradient"
          >
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center md:text-left">
              I am currently in my second year of undergraduate studies at the
              Faculty of Computer Science and Engineering, with plans to
              specialize in the realms of AI, more specifically ML or Data
              Science in the future. My academic journey has given me invaluable
              experiences that have refined my attention to detail and ignited a
              passion for exploring innovative ideas. I am committed to
              delivering high-quality results on every project I undertake.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="rounded-xl p-3 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {it_related.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                    hover:shadow-[0_2px_8px_rgba(59,120,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-3 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Volunteering</h3>
                <div className="flex flex-wrap gap-2">
                  {volunteering.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                    hover:shadow-[0_2px_8px_rgba(59,120,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-3 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  {activities.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                    hover:shadow-[0_2px_8px_rgba(59,120,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-7 rounded-xl border-white/10 border hover:-translate-y-1 transition-all flex flex-col justify-between min-h-[340px]">
              <div>
                <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                <p className="text-xl text-gray-300 mt-6 rounded-lg hover:-translate-y-1 transition-all">
                  <span className="font-bold">
                    Bachelor's Degree in Computer Science
                  </span>{" "}
                  at the Faculty of Computer Science and Engineering - Skopje
                  (2023 - present)
                </p>
              </div>
            </div>
            <div className="p-7 rounded-xl border-white/10 border hover:-translate-y-1 transition-all flex flex-col justify-between min-h-[340px]">
              <div>
                <h3 className="text-xl font-bold mb-4">🔝 Favorite Quotes</h3>
                <div className="space-y-6 text-gray-300">
                  <div className="hover:-translate-y-1 transition-all">
                    <p className="italic font-bold text-lg bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent">
                      "Stay hungry. Stay foolish." – Steve Jobs
                    </p>
                    <p className="mt-2">
                      Reminds me to constantly push my limits, whether on the
                      pavement or in pursuing the next big thing.
                    </p>
                  </div>
                  <div className="hover:-translate-y-1 transition-all">
                    <p className="italic font-bold text-lg bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent">
                      "Try and leave this world a little better than you found
                      it" – Robert Baden Powell
                    </p>
                    <p className="mt-2">
                      Be contented with what you have got and make the best of
                      it. Look on the bright side of things instead of the
                      gloomy one. But the real way to get happiness is by giving
                      out happiness to other people.
                    </p>
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
