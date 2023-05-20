import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Tooltip from "@mui/material/Tooltip";

const CompanyLogosCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      itemClass: "carousel-item",
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
      itemClass: "carousel-item",
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
        <div className="text-4xl font-bold pt-8 pb-4 text-gray-600">
          Companies I have already worked for
        </div>
      </center>
      <div className="p-8">
        <Carousel
          className="justify-center"
          responsive={responsive}
          infinite={true}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          <div className="flex justify-center items-center p-4">
            <Tooltip title="Pixida GmbH">
              <img
                src="pixida-logo-sm.png"
                alt="Pixida"
                className="w-16 h-16 object-contain transition duration-500 ease-in-out transform hover:scale-125 hover:shadow-2xl hover:grayscale-0 grayscale filter"
              />
            </Tooltip>
          </div>
          <div className="flex justify-center items-center p-4">
            <Tooltip title="BMW Group">
              <img
                src="Logo_BMW.svg"
                alt="BMW"
                className="w-16 h-16 object-contain transition duration-500 ease-in-out transform hover:scale-125 hover:shadow-2xl hover:grayscale-0 grayscale filter"
              />
            </Tooltip>
          </div>
          <div className="flex justify-center items-center p-4">
            <Tooltip title="MAN AG">
              <img
                src="Logo_Badge_MAN_RGB.svg"
                alt="MAN"
                className="w-16 h-16 object-contain transition duration-500 ease-in-out transform hover:scale-125 hover:shadow-2xl hover:grayscale-0 grayscale filter"
              />
            </Tooltip>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CompanyLogosCarousel;
