import { RevealOnScroll } from "../RevealOnScroll";

export const Book = () => {
  return (
    <section
      id="books"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-500 to-purple-600 bg-clip-text 
      text-transparent text-center animate-gradient"
          >
            Book I am reading right now
          </h2>

          <div className="p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,120,246,0.1)] transition-all flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src="https://jamesclear.com/wp-content/uploads/2024/06/atomic-habits-dots.png"
                className="w-full max-w-[250px] mx-auto md:mx-0 rounded"
                alt="The Motivation Myth: How High Achievers Really Set Themselves Up to Win"
              />
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <blockquote className="text-lg text-gray-300">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Atomic Habits: An Easy & Proven Way to Build Good Habits &
                  Break Bad Ones
                </h3>
                <p className="mb-3">
                  No matter your goals, Atomic Habits offers a proven framework
                  for improving--every day. James Clear, one of the world's
                  leading experts on habit formation, reveals practical
                  strategies that will teach you exactly how to form good
                  habits, break bad ones, and master the tiny behaviors that
                  lead to remarkable results.
                </p>
                <p>
                  If you're having trouble changing your habits, the problem
                  isn't you. The problem is your system. Bad habits repeat
                  themselves again and again not because you don't want to
                  change, but because you have the wrong system for change.
                  Along the way, readers will be inspired and entertained with
                  true stories from Olympic gold medalists, award-winning
                  artists, business leaders, life-saving physicians, and star
                  comedians who have used the science of small habits to master
                  their craft and vault to the top of their field.
                </p>
              </blockquote>

              {/* Button */}
              <div className="text-center md:text-left mt-6">
                <button
                  className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition"
                  onClick={() =>
                    (window.location.href =
                      "https://www.amazon.com/Motivation-Myth-Achievers-Really-Themselves/dp/0399563768")
                  }
                >
                  Amazon Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
