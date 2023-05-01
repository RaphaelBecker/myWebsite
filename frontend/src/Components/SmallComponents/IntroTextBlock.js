import React from "react";
import { Button } from "react-bootstrap";
import Typed from "react-typed";

const IntroTextBlock = () => {
  return (
    <div className="flex-wrap text-center lg:text-start p-8">
      <div className="flex-col text-center lg:text-start">
        <div className="row text-3xl">Hi, I am </div>
        <div className="row text-5xl font-semibold py-3">
          <Typed
            strings={["Side-Hustler", "Code-Artist", "SW-Engineer"]}
            typeSpeed={70}
            backDelay={1500}
            backSpeed={8}
            loop
            style={{ display: "inline-block" }} // set display property to inline-block
          />
        </div>

        <div className="row text-md">based in {<b>Munich</b>}, Germany</div>
      </div>
      <div className="pt-8">
        <Button className="bg-gray-800 w-36 h-14 rounded-md focus:outline-none shadow-xl text-white hover:text-violet-800 focus:text-white">
          View my work
        </Button>

        <Button className="left-0 w-36 h-14 underline text-gray-700 hover:text-violet-400 focus:text-white">
          Contact me
        </Button>
      </div>
    </div>
  );
};

export default IntroTextBlock;
