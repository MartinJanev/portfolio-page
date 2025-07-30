import React, { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

export const Home = () => {
  const birthDate = new Date("2004-04-27T00:00:00");
  const getExactYears = () => {
    const now = new Date();
    const diffInMs = now - birthDate;
    const years = diffInMs / (1000 * 60 * 60 * 24 * 365.2425);
    return years.toFixed(9);
  };

  const [ageText, setAgeText] = useState(
    `I am ${Math.floor(getExactYears())} years old`
  );
  const intervalRef = useRef(null);

  const startUpdatingAge = () => {
    setAgeText(`I am ${getExactYears()} years old`);
    intervalRef.current = setInterval(() => {
      setAgeText(`I am ${getExactYears()} years old`);
    }, 1000);
  };

  const stopUpdatingAge = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setAgeText(`I am ${Math.floor(getExactYears())} years old`);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div
          className="
            px-12 py-8
            rounded-2xl
            bg-white/5 backdrop-blur-lg
            border border-transparent
            hover:border-green-500/40
            hover:shadow-[0_4px_16px_rgba(128,0,128,0.2)]
            transition-all
            max-w-3xl
            mx-auto
            text-center
            space-y-6
          "
        >
          {/* Main Headline */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400">
            Computer Science Student and AI Enthusiast
          </h1>



          {/* Dynamic Age */}
          <h2
            className="
              text-2xl md:text-3xl font-semibold
              bg-clip-text text-transparent
              bg-gradient-to-r from-green-500 to-purple-600
              cursor-default
              transition-transform duration-200 ease-in-out
              hover:scale-105
            "
            onMouseEnter={startUpdatingAge}
            onMouseLeave={stopUpdatingAge}
          >
            {ageText}
          </h2>


          {/* Subheadline */}
          <p className="text-lg text-gray-300">
            Hi, I’m Martin Janev, a passionate Computer Science student at FCSE Skopje. I specialize in AI, Machine Learning, and Data Science, crafting innovative solutions that bridge the gap between data and impactful applications.
          </p>

          {/* Call to Action */}
          <a
            href="#projects"
            className="
              inline-block
              bg-green-700 hover:bg-purple-600
              text-white font-medium
              py-3 px-8
              rounded-lg
              shadow-md
              transform hover:-translate-y-1
              transition-all duration-200
            "
          >
            View My Work →
          </a>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-2">
            {[
              { icon: FaLinkedin, url: "https://www.linkedin.com/in/martin-janev1/" },
              { icon: FaGithub, url: "https://github.com/MartinJanev" },
              { icon: FaFacebook, url: "https://www.facebook.com/martin.furka04" },
              { icon: FaInstagram, url: "https://www.instagram.com/mjanev1/" },
            ].map(({ icon: Icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-300 hover:text-purple-400
                  transition-colors duration-200
                "
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
