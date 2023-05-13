import React from "react";
import { Button } from "react-bootstrap";
import Typed from "react-typed";
import { useState } from "react";

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
        <div className="row text-3xl text-gray-300">Hi, I am </div>
        <div className="row text-5xl font-semibold py-3">
          <Typed
            strings={["Code-Artist", "SW-Engineer", "Side-Hustler"]}
            typeSpeed={70}
            backDelay={1500}
            backSpeed={8}
            loop
            style={{
              display: "inline-block",
              color: "#73F1CE",
              textShadow: "1px 1px 2px #000000",
            }}
          />
        </div>

        <div className="row text-md text-gray-400">
          based in {<b>Munich</b>}, Germany
        </div>
      </div>
      <div className="pt-8">
        <Button
          onClick={() => scrollToRef("projectsRef")}
          className="bg-gray-700 w-36 h-14 rounded-md focus:outline-none text-white hover:bg-teal-400 hover:text-blue-500 hover:font-semibold"
        >
          View my work
        </Button>

        <Button
          className="relative w-36 h-14 text-spring-green hover:text-teal-200"
          onClick={handleClick}
        >
          <p
            className={`absolute inset-0 flex items-center justify-center ${
              isAnimating ? "animate-ping" : ""
            }`}
          >
            Contact me
          </p>
          <p className="relative z-10 underline">Contact me</p>
        </Button>
      </div>
    </div>
  );
};

export default IntroTextBlock;
