import React from "react";
import SkillCard from "./SmallComponents/SkillCard";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const mySpringGreen = "#33FF99";

const skillset = {
  webDev: {
    icon: "fa-solid fa-tablet-screen-button",
    title: "Responsive Web & App Development",
    text: "Multiple projects in SOftware Engineering including Project like A B C and so on. I am the bigest hero in the univers blabla",
    skills: ["Java Script", "React (Native)", "Node JS", "(Tailwind)CSS"],
  },
  softEng: {
    icon: "fa-solid fa-gears",
    title: "Software Engineering",
    text: "Multiple projects in SOftware Engineering including Project like A B C and so on. I am the bigest hero in the univers blabla",
    skills: {
      python: {
        icon: "fa-brands fa-python",
        text: "Python",
      },
      c: {
        icon: "fa-brands fa-python",
        text: "C",
      },
      docker: {
        icon: "fa-brands fa-docker",
        text: "Docker",
      },
      linux: {
        icon: "fa-brands fa-ubuntu",
        text: "Linux",
      },
    },
  },
  itConsult: {
    icon: "fa-solid fa-business-time",
    title: "IT-Management",
    text: "Multiple projects in SOftware Engineering including Project like A B C and so on. I am the bigest hero in the univers blabla",
    skills: ["SAFe", "Requirements Engineering", "Jira", "Confluence"],
  },
};

const Skills = () => {
  const startWorkLive = "2017-01-01";

  function getYearsSince(dateString) {
    const workingLiveStart = new Date(dateString);
    const today = new Date();
    const yearsSince = today.getFullYear() - workingLiveStart.getFullYear();

    // adjust for leap years
    if (
      workingLiveStart.getMonth() > today.getMonth() ||
      (workingLiveStart.getMonth() === today.getMonth() &&
        workingLiveStart.getDate() > today.getDate())
    ) {
      return yearsSince - 1;
    }

    return yearsSince;
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-100 to-blue-100">
      <div className="p-16 flex-col items-center justify-center">
        <center className="p-30">
          <h1>
            <div className="text-4xl font-bold">Know me more</div>
          </h1>
          <div className="p-8">
            <Flip left>
              <span style={{ backgroundColor: mySpringGreen, padding: 2 }}>
                <Flip left>
                  <div className="text-xl inline-block">
                    My name is <b className="font-bold">Raphael</b>
                  </div>
                </Flip>
              </span>
            </Flip>
          </div>

          <div>
            <div className="text-2xl p-0">
              I have comprehensive experience in IT Consultancy, including linux
              based software projects, data apps, IOT devices and web app
              development. Below is a quick overview of my main technical skill
              set and tools that I use:
            </div>
          </div>
          <div className="p-16 flex items-center justify-center">
            <span className="text-xl">Years of Experience: </span>
            <span className="px-2">
              <div class="w-8 h-8 rounded-full flex justify-center items-center bg-spring-green text-black font-bold text-lg transform hover:scale-110 transition duration-300">
                <span className="transform hover:scale-500 transition duration-200">
                  {getYearsSince(startWorkLive)}
                </span>
              </div>
            </span>
          </div>
        </center>

        <div class="py-2 flex flex-wrap justify-center">
          <Fade left class="w-full md:w-1/3 lg:w-1/4 ">
            <SkillCard {...skillset.webDev} />
          </Fade>
          <Fade left class="w-full md:w-1/3 lg:w-1/4 ">
            <SkillCard {...skillset.softEng} />
          </Fade>
          <Fade right class="w-full md:w-1/3 lg:w-1/4 ">
            <SkillCard {...skillset.itConsult} />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Skills;
