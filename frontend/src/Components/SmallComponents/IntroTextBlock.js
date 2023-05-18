import React from "react";
import Typed from "react-typed";
import { useState } from "react";

const GradientText = ({ children }) => (
  <div
    style={{
      background: "linear-gradient(to right, #ff7300 0%, #05ffb4 100%)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      //textShadow: "1px 1px 2px #000000",
    }}
  >
    {children}
  </div>
);

const IntroTextBlock = ({ scrollToRef }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // set the time for the animation to finish
  };

  return (
    <div className="flex-wrap text-center lg:text-start p-8">
      <div className="flex-col text-center lg:text-start">
        <div className="row text-3xl text-gray-200">Hi, I am </div>
        <div className="row text-5xl font-semibold py-3">
          <div className="grid justify-center lg:justify-start">
            <GradientText>
              <Typed
                strings={["Code-Artist", "SW-Engineer", "Side-Hustler"]}
                typeSpeed={70}
                backDelay={1500}
                backSpeed={8}
                loop
              />
            </GradientText>
          </div>
        </div>

        <div className="row text-md text-gray-200">
          based in {<b className="text-green-300">Munich,</b>} Germany
        </div>
      </div>
      <div className="pt-8">
        <div className="grid justify-center lg:justify-start">
          <div className="relative group">
            <div className="animate-tilt transition group-hover:duration-200 duration-500 group-hover:opacity-100 opacity-30 absolute rounded-lg -inset-0.5 bg-gradient-to-r from-green-100 via-indigo-500 to-pink-300 filter blur"></div>
            <button className="relative flex items-center py-1 leading-none bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 divide-x divide-gray-600 rounded-lg px-7">
              <span
                onClick={() => scrollToRef("projectsRef")}
                className="pr-6 py-4 text-gray-100 hover:text-white"
              >
                VIew my work
              </span>
              <span
                onClick={() => scrollToRef("contactRef")}
                className="pl-6 py-2 text-green-300 transition duration-200 hover:text-gray-100"
              >
                {" "}
                Contact me &rarr;{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroTextBlock;
