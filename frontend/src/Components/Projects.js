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
    <div className="p-8 bg-gradient-to-r from-gray-900 via-gray-850 to-gray-800">
      <center>
        <div className="text-4xl font-bold p-8 text-cyan-200">
          Some of my most recent projects:
        </div>
        <div className="py-4 pb-8">
          <span className="bg-gradient-to-r from-green-400 to-violet-700 p-1 rounded-lg">
            <div className="text-xl inline-block">
              <b className="font-bold text-black p-2">Where I am proud of</b>
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
        <div className="flex justify-center">
          <div className="relative group">
            <div className="animate-tilt transition group-hover:duration-200 duration-500 group-hover:opacity-100 opacity-30 absolute rounded-lg -inset-0.5 bg-gradient-to-r from-green-100 via-indigo-500 to-pink-300 filter blur"></div>
            <button className="relative flex items-center py-4 leading-none bg-gray-900 divide-x divide-gray-600 rounded-lg px-7">
              <span className="text-gray-100" onClick={toggleShowAll}>
                {showAll ? "Show less" : "Show all"}
              </span>
            </button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Projects;
