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

  const [ageText, setAgeText] = useState(`I am ${Math.floor(getExactYears())} years old`);
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
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-6 ">
          <h1 className="text-3xl mt:text-5xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-green-600 bg-clip-text text-transparent leading-right animate-gradient">
            Welcome to my page
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent leading-right animate-gradient">
            My name is Martin Janev
          </h1>
          <h6
            className="text-2xl md:text-l font-bold mb-6 bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text text-transparent leading-right animate-gradient transition-all duration-300 ease-in-out"
            onMouseEnter={startUpdatingAge}
            onMouseLeave={stopUpdatingAge}
          >
            {ageText}
          </h6>
          <p className="text-gray-400 text-lg mb-8 max-w-200 mx-auto">
            I am a Computer Science student at Faculty of Computer Science and
            Engineering in Skopje, an IT enthusiast and dedicated problem
            solver, driven by a passion for unraveling complex challenges in the
            realms of AI, ML and Data Science. I prioritize planning and
            flawless execution in all my endeavors, ensuring that each project
            is approached with precision and clarity. My method involves
            developing comprehensive, innovative solutions—transforming complex
            ideas into efficient, robust code that stands up to rigorous testing
            and real-world application.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="w-50 bg-green-700 text-white py-3 px-6 rounded font-medium 
            transition relative overflow-hidden hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View my work
            </a>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://www.linkedin.com/in/martin-janev1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/MartinJanev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.facebook.com/martin.furka04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.instagram.com/mjanev1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
