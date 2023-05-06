import React from "react";

const SkillCard = ({ icon, title, text, skills }) => {
  return (
    <div className="bg-slate-100 m-2 md:m-4 lg:m-6 xl:m-6 p-4 rounded-lg shadow-lg overflow-hidden text-center transform hover:scale-110 transition duration-300">
      <div className="p-8">
        <i className={`${icon} text-5xl text-gray-700`} />
      </div>
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <div className="max-w-md lg:max-w-lg xl:max-w-xl">{text}</div>

      <div className="flex-col justify-center">
        <div>
          <ul className="flex justify-center items-center">
            {Object.entries(skills).map(([key, value]) => (
              <li key={key}>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-spring-green text-white">
                  <i className={`${value.icon} text-2xl`} />
                </div>
                <div className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {value.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
