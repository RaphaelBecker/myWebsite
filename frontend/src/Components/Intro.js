import React from "react";
import Header from "./Navbar";
import IntroTextBlock from "./SmallComponents/IntroTextBlock";
import Bounce from "react-reveal/Bounce";

const Intro = ({ scrollToRef }) => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-400 to-blue-600">
      <Header scrollToRef={scrollToRef} />
      <div className="px-8 lg:py-0 xl:px-20 xl:pt-20 2xl:pt-32 2xl:px-52">
        <Bounce left>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 flex items-center justify-center">
              <img
                className="rounded-xl shadow-2xl m-8 object-contain max-h-96 md:max-h-screen"
                src="art_foto.png"
                alt="myKonterfei"
              />
            </div>
            <div class="w-full lg:w-1/2">
              <IntroTextBlock />
            </div>{" "}
          </div>
        </Bounce>
      </div>
    </div>
  );
};

export default Intro;
