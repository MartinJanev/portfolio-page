import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Book = () => (
  <section id="books" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        {/* Section Title */}
        <h2 className="
            text-4xl font-bold text-center
            bg-clip-text text-transparent
            bg-gradient-to-r from-green-500 to-purple-600
            animate-gradient
          ">
          Book I'm Reading Right Now
        </h2>

        {/* Card */}
        <div className="
            flex flex-col md:flex-row gap-8
            p-6 rounded-2xl
            bg-white/5 backdrop-blur-lg
            border border-transparent
            hover:border-green-500/40
            hover:shadow-[0_4px_16px_rgba(59,130,246,0.2)]
            transition-all
          ">
          {/* Cover */}
          <div className="flex-shrink-0">
            <img
              src="https://jamesclear.com/wp-content/uploads/2024/06/atomic-habits-dots.png"
              alt="Atomic Habits book cover"
              className="w-full max-w-xs rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="
                  text-2xl font-semibold mb-4
                  bg-clip-text text-transparent
                  bg-gradient-to-r from-green-400 to-purple-400
                ">
                Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones
              </h3>
              <p className="text-gray-300 leading-relaxed space-y-4">
                No matter your goals, <strong>Atomic Habits</strong> offers a proven framework for improving—every day. James Clear
                reveals practical strategies that teach you exactly how to form good habits, break bad ones, and master the tiny behaviors
                that lead to remarkable results.
                <br /><br />
                If you're struggling to change, the issue isn’t you—it’s your system. Clear shows through true stories from Olympic
                champions, award‑winning artists, business leaders, physicians, and comedians how small changes compound into big outcomes.
              </p>
            </div>

            {/* Call to Action */}
            <div>
              <a
                href="https://www.amazon.com/Motivation-Myth-Achievers-Really-Themselves/dp/0399563768"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  bg-green-500 hover:bg-green-600
                  text-black font-medium
                  py-2 px-6
                  rounded-lg
                  shadow-sm hover:shadow-md
                  transition-all
                "
              >
                View on Amazon →
              </a>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  </section>
);
