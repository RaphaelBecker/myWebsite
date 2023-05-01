import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Header from "./Navbar";
import IntroTextBlock from "./SmallComponents/IntroTextBlock";

const Intro = ({ scrollToRef }) => {
  return (
    <div className="h-screen bg-gradient-to-tr from-green-400 to-blue-600">
      <Header scrollToRef={scrollToRef} />
      <div className="p-8 lg:py-0 xl:px-20 xl:pt-24 2xl:pt-32 2xl:px-60">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex items-center justify-center">
            <img
              className="rounded-xl shadow-2xl m-8"
              src="art_foto.png"
              alt="myKonterfei"
            />
          </div>
          <div class="w-full lg:w-1/2">
            <IntroTextBlock />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Intro;
