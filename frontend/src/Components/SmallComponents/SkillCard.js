import React from "react";

const SkillCard = ({ icon, title, skills }) => {
  return (
    <div className="bg-slate-100 p-2 rounded-lg shadow-lg overflow-hidden text-center">
      <div className="p-8">
        <i className={`${icon} text-5xl text-gray-700`} />
      </div>
      <h4 className="text-xl font-semibold mb-4">{title}</h4>

      <div className="flex-col justify-center">
        <div>
          <ul className="flex-col list-none">
            {skills.map((skill, index) => (
              <li key={index} className="p-3 text-gray-600 font-medium">
                <div className="flex-col text-left">
                  <div className="p-1">{skill}</div>
                  <div className=" relative h-2 w-full rounded-md overflow-hidden bg-gray-200">
                    <div className="absolute inset-0 bg-spring-green h-full w-1/2"></div>
                  </div>
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
