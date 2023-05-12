import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Flip from "react-reveal/Flip";

const projects = [
  {
    id: 123,
    title: "Project1",
    description:
      "adskfjsadvisjdfvbpsidjfvbspidf sfdgsdfb sfbsdfbsdfbsd fbsdfbsdfbsdfb sdf bsdfbsdfbsd f",
    image: "logo512.png",
  },
  {
    id: 124,
    title: "Project2",
    description:
      "adskfjsadvisjdfvbpsidjfvbspidf sfgsdfgs bsdfbsdfbsdfb sdfbs dfbsdfbsfb f bsdfbsdfbsdfb sdfbsdfbsd fbsd",
    image: "logo512.png",
  },
  {
    id: 125,
    title: "Project3",
    description:
      "adskfjsadvisjdfvbpsidjfvbspidf sdfsfd sdgsdfgdsgh sdfbs sb sfgsfgb sfg sfbsfbsdfbsdf dsafgvsdfbsdf sdfg sdfgsdfgsdf",
    image: "logo512.png",
  },
  {
    id: 126,
    title: "Project4",
    description:
      "adskfjsadvisjdfvbpsidjfvbspidf fvbspidf fvbspidf fvbspidf fvbspidf fvbspidf ",
    image: "logo512.png",
  },
  {
    id: 127,
    title: "Project5",
    description:
      "adskfjsadvisjdfvbpsidjfvbspidf adfvadvadvafdv adfvadfvadf vadfvadfvdasf bvafbafbab afdbadfdv adfvfd",
    image: "logo512.png",
  },

  {
    id: 128,
    title: "Project6",
    description:
      "adskfjsadvisjdfvbpsidjfvbspidf adfvadvadvafdv adfvadfvadf vadfvadfvdasf bvafbafbab afdbadfdv adfvfd",
    image: "logo512.png",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="min-h-screen p-8 pb-16 bg-gradient-to-tr from-gray-800 to-gray-900">
      <center>
        <div className="text-4xl font-bold p-8 text-gray-100">
          Some of my most recent projects:
        </div>
        <div className="py-4 pb-8">
          <span className="bg-spring-green">
            <div className="text-xl inline-block">
              <b className="font-bold text-gray-600">Portfolio</b>
            </div>
          </span>
        </div>
      </center>

      <div className="flex flex-wrap justify-center gap-8">
        {visibleProjects.map((project) => (
          <Flip left key={project.id}>
            <div className="w-3/4 sm:2/3 lg:w-1/3 xl:w-1/4 p-4 rounded-lg overflow-hidden shadow-lg bg-cyan-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.description}</p>
                <div className="mt-4 flex justify-end">
                  <a
                    href={project.link}
                    class="inline-flex items-center text-blue-600 hover:underline"
                  >
                    Learn more
                    <svg
                      class="w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Flip>
        ))}
      </div>
      <center className="p-16">
        <Button
          onClick={toggleShowAll}
          className="bg-gray-700 w-36 h-14 rounded-md focus:outline-none text-white hover:bg-teal-400 hover:text-blue-500 hover:font-semibold"
        >
          {showAll ? "Show less" : "Show all"}
        </Button>
      </center>
    </div>
  );
};

export default Projects;
