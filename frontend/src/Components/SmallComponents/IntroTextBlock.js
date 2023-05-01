import React from "react";
import { Button } from "react-bootstrap";
import Typed from "react-typed";

const IntroTextBlock = () => {
  return (
    <div className="flex-wrap text-center lg:text-start p-8">
      <div className="flex-col text-center lg:text-start">
        <div className="row text-3xl text-gray-900">Hi, I am </div>
        <div className="row text-5xl font-semibold py-3">
          <Typed
            strings={["Side-Hustler", "Code-Artist", "SW-Engineer"]}
            typeSpeed={70}
            backDelay={1500}
            backSpeed={8}
            loop
            style={{
              display: "inline-block",
              color: "#1AFDB5",
              textShadow: "2px 4px #0361B3",
            }}
          />
        </div>

        <div className="row text-md text-gray-800">
          based in {<b>Munich</b>}, Germany
        </div>
      </div>
      <div className="pt-8">
        <Button className="bg-gray-800 w-36 h-14 rounded-md focus:outline-none text-white hover:bg-teal-400 hover:text-blue-500 hover:font-semibold focus:bg-gray-500">
          View my work
        </Button>

        <Button className="left-0 w-36 h-14 underline text-gray-800 hover: hover:text-teal-200 focus:text-gray-400">
          <p className="">Contact me</p>
        </Button>
      </div>
    </div>
  );
};

export default IntroTextBlock;
