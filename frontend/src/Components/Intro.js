import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Header from "./Navbar";
import IntroTextBlock from "./SmallComponents/IntroTextBlock";

const Intro = ({ scrollToRef }) => {
  return (
    <div className="h-screen bg-gradient-to-tr from-green-400 to-blue-500">
      <Header scrollToRef={scrollToRef} />
      <div className="p-8 sm:p-24 md:p-28 lg:p-34">
        <div className="flex flex-col sm:flex-row items-center">
          <div class="sm:w-1/2 flex items-center justify-center">
            <img src="logo512.png" alt="myKonterfei" />
          </div>
          <div class="w-full sm:w-1/2">
            <IntroTextBlock />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Intro;
