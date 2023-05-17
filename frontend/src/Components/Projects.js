import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ProjectCard from "./SmallComponents/ProjectCard";

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
    <div className="p-8 bg-gradient-to-tr from-gray-800 to-gray-900">
      <center>
        <div className="text-4xl font-bold p-8 text-gray-100">
          Some of my most recent projects:
        </div>
        <div className="py-4 pb-8">
          <span className="bg-spring-green">
            <div className="text-xl inline-block">
              <b className="font-bold text-gray-600 p-2">Where I am proud of</b>
            </div>
          </span>
        </div>
      </center>

      <div className="flex flex-wrap justify-center gap-8">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <center className="pt-16 pb-8">
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
