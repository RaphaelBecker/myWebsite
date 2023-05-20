import React from "react";
import Flip from "react-reveal/Flip";

const ProjectCard = ({ project }) => {
  return (
    <Flip left key={project.id}>
      <div className="w-3/4 sm:2/3 lg:w-1/3 xl:w-1/4 p-4 rounded-lg overflow-hidden border border-cyan-100 hover:bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-medium text-cyan-100 mb-2">
            {project.title}
          </h3>
          <p className="text-cyan-200 ">{project.description}</p>
          <div className="mt-4 flex justify-end">
            <a
              href={project.link}
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Learn more
              <svg
                className="w-5 h-5 ml-2"
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
  );
};

export default ProjectCard;
