import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World />";

  useEffect(() => {
    const refreshRate = window.screen ? window.screen.refreshRate || 60 : 60; // Default to 60Hz if unavailable
    const intervalTime = 1000 / refreshRate; // Calculate interval time based on refresh rate

    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="nb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">| </span>
      </div>
      <br></br>
      <div className="w-[300px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-green-500 shadow-[0_0_15_$3b82f6] animate-loading-bar">
          {" "}
        </div>
      </div>
    </div>
  );
};
