import React from "react";
import Flip from "react-reveal/Flip";
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
  return (
    <div className="min-h-screen p-8">
      <center>
        <div className="text-4xl font-bold p-8">
          Some of my most recent projects:
        </div>
        <div className="py-4 pb-8">
          <span className="bg-spring-green">
            <div className="text-xl inline-block">
              <b className="font-bold">Portfolio</b>
            </div>
          </span>
        </div>
      </center>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <Flip left>
            <div
              key={project.id}
              className="w-3/4 sm:2/3 lg:w-1/3 xl:w-1/4 p-4 rounded-lg overflow-hidden shadow-lg"
            >
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
                    className="text-indigo-500 hover:text-indigo-600 font-medium hover:text-red-600"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </Flip>
        ))}
      </div>
    </div>
  );
};

export default Projects;
