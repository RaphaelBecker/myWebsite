import React from "react";
import Zoom from "react-reveal/Zoom";

const GitProjectCard = ({ props }) => {
  return (
    <Zoom left>
      <div className="w-3/4 sm:2/3 lg:w-1/3 xl:w-1/4 p-4 rounded-lg overflow-hidden border border-gray-400 flex flex-col hover:bg-slate-50">
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {props.name}
          </h3>
          <p className="text-gray-700">{props.description}</p>
        </div>
        <div className="p-4 flex justify-between">
          <div className="flex justify-start">
            <i className="fa-solid fa-star text-yellow-300 p-1"></i>{" "}
            {props.stargazers.totalCount}
            <i className="fa-sharp fa-solid fa-eye text-gray-600 p-1 pl-2"></i>
            {props.watchers.totalCount}
          </div>
          <a
            href={props.url}
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            Checkout Code
            <svg
              className="w-5 h-5 ml-2 bg-gradient-to-r"
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
    </Zoom>
  );
};

export default GitProjectCard;
