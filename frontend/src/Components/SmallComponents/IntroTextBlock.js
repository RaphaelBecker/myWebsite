import React from "react";
import Typed from "react-typed";

const IntroTextBlock = () => {
  return (
    <div className="text-center sm:text-start sm:p-8">
      <div className="col">
        <h3>Hi, I am</h3>
      </div>
      <div className="col">
        <Typed
          strings={[
            "Full Stack Developer",
            "IT Consultant",
            "Software Engineer",
          ]}
          typeSpeed={70}
          backDelay={1500}
          backSpeed={10}
          loop
          style={{ display: "inline-block" }} // set display property to inline-block
        />
      </div>
    </div>
  );
};

export default IntroTextBlock;
