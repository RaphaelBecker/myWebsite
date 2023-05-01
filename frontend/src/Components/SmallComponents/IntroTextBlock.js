import React from "react";
import { Button } from "react-bootstrap";
import Typed from "react-typed";

const IntroTextBlock = () => {
  return (
    <div className="flex-wrap sm:p-8">
      <div className="flex-col text-center sm:text-start">
        <div className="row text-3xl">Hi I am</div>
        <div className="row text-5xl font-semibold py-3">
          <Typed
            strings={["Developer", "IT-Consultant", "SW-Engineer"]}
            typeSpeed={70}
            backDelay={1500}
            backSpeed={8}
            loop
            style={{ display: "inline-block" }} // set display property to inline-block
          />
        </div>

        <div className="row text-md">based in {<b>Munich</b>}, Germany</div>
      </div>

      <div className="row px-2 sm:px-0 text-md flex sm:left-0">
        <div className="flex-col flex py-8 px-2">
          <Button className="bg-gray-800 px-2 py-4 rounded-md focus:outline-none shadow-xl text-white hover:text-violet-800 focus:text-white">
            View my work
          </Button>
        </div>
        <div className="flex-col flex items-start py-8 ml-4">
          <Button className="left-0 px-2 py-4 underline text-gray-700 hover:text-violet-400 focus:text-white">
            Contact me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroTextBlock;
