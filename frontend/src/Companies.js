import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CompanyLogosCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="p-8">
      <center>
        <div className="text-4xl font-bold pt-8 pb-4">
          Companies I have already worked for
        </div>
      </center>
      <div className="p-8">
        <Carousel
          responsive={responsive}
          infinite={true}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          <div className="text-center flex-col justify-center items-center">
            <img src="pixida-logo-sm.png" alt="Pixida" className="mx-auto" />
            <p>Pixida GmbH</p>
          </div>
          <div className="text-center flex-col justify-center items-center">
            <img src="Logo_BMW.svg" alt="BMW" className="mx-auto" />
            <p>BMW AG</p>
          </div>
          <div className="text-center flex-col justify-center items-center">
            <img src="Logo_Badge_MAN_RGB.svg" alt="MAN" className="mx-auto" />
            <p>MAN AG</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CompanyLogosCarousel;
