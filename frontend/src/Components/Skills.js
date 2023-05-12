import React from "react";
import SkillCard from "./SmallComponents/SkillCard";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const mySpringGreen = "#33FF99";

const skillset = {
  webDev: {
    icon: "fa-solid fa-code",
    title: "Web & App Development",
    text: "With extensive expertise in web and app development, I bring several years of professional experience and a deep passion for programming to every project. My mastery of the required tech stack allows me to deliver top-notch solutions that exceed client expectations.",
    skills: {
      javaScript: {
        icon: "fa-brands fa-square-js",
        title: "Java Script",
        text: "JavaScript is a high-level, interpreted programming language used primarily for creating dynamic and interactive web pages. It is also widely used for developing server-side applications, mobile applications, and game development.",
        level: "67",
      },
      react: {
        icon: "fa-brands fa-react",
        title: "React",
        text: "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of complex applications.",
        level: "65",
      },
      node: {
        icon: "fa-brands fa-node-js",
        title: "Node.js",
        text: "Node.js is a popular open-source server-side runtime environment that allows developers to run JavaScript code outside of a web browser. It is built on top of the V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it efficient and scalable for building network applications.",
        level: "35",
      },
      css: {
        icon: "fa-brands fa-css3",
        title: "CSS",
        text: "Cascading Style Sheets (CSS) is a style sheet language used to describe the presentation of web pages written in HTML or XML. It is used to control the layout, typography, colors, and other visual aspects of a website.",
        level: "54",
      },
    },
  },
  softEng: {
    icon: "fa-solid fa-gears",
    title: "Software Engineering",
    text: "Looking for a skilled and experienced software engineer? Look no further! With expertise in the latest technologies and years of professional experience, I am passionate about programming and dedicated to delivering high-quality solutions. Let me help you build your next project with my expert knowledge of software development.",
    skills: {
      python: {
        icon: "fa-brands fa-python",
        title: "Python",
        text: "Python is a high-level programming language known for its simple syntax, readability, and versatility. It is widely used for various applications such as web development, data analysis, machine learning, and automation.",
        level: "82",
      },
      c: {
        icon: "fa-sharp fa-solid fa-c",
        title: "C",
        text: "C is a low-level programming language known for its efficiency, low-level control, and powerful system-level programming capabilities. It has been widely used for developing operating systems, embedded systems, and high-performance applications.",
        level: "43",
      },
      docker: {
        icon: "fa-brands fa-docker",
        title: "Docker",
        text: "Docker is an open-source platform for building, shipping, and running applications in containers. It allows developers to package their applications with all the dependencies and libraries needed to run them, making it easy to deploy them consistently across different environments.",
        level: "63",
      },
      linux: {
        icon: "fa-brands fa-ubuntu",
        title: "Linux",
        text: "Linux is a free and open-source operating system built on the Unix-like kernel. It is widely used for servers, supercomputers, and embedded systems, and provides a vast array of tools and software for various purposes.",
        level: "62",
      },
      broker: {
        icon: "fa-solid fa-network-wired",
        title: "Message brokers",
        text: "Message broker software like RabbitMQ or Kafka serve as intermediaries for communication between distributed applications or systems by receiving, storing, and forwarding messages between them. They help to ensure reliable and efficient message delivery by providing features like message queuing, routing, and filtering.",
        level: "35",
      },
    },
  },
  itConsult: {
    icon: "fa-solid fa-business-time",
    title: "IT-Management",
    text: "As an experienced software engineer, I excel at managing clients and time, using the latest management and documentation tools. My time management skills ensure timely project completion within budget, delivering high-quality products that meet your specific needs with attention to detail and dedication. Trust me with your project for success..",
    skills: {
      jira: {
        icon: "fa-brands fa-jira",
        title: "Jira",
        text: "Jira is a popular project management tool that helps teams track and manage their work. It offers features for agile methodologies, issue tracking, project management, and reporting.",
        level: "89",
      },
      confluence: {
        icon: "fa-brands fa-confluence",
        title: "Confluence",
        text: "Confluence is a team collaboration and knowledge management tool developed by Atlassian. It allows teams to create, organize, and share content such as project plans, meeting notes, and product requirements in a central location.",
        level: "78",
      },
      agile: {
        icon: "fa-solid fa-forward",
        title: "Agile Development",
        text: "Agile IT management is a project management methodology that emphasizes iterative development, flexibility, and customer satisfaction. Most popular is Scaled Agile Framework (SAFe), a widely-used framework for implementing agile practices in large organizations, providing guidance on how to coordinate the work of multiple teams and align it with business goals.",
        level: "96",
      },
    },
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
    <div className="min-h-screen bg-white">
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
              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-spring-green text-black font-bold text-lg transform hover:scale-110 transition duration-300">
                <span className="transform hover:scale-500 transition duration-200">
                  {getYearsSince(startWorkLive)}
                </span>
              </div>
            </span>
          </div>
        </center>

        <div className="flex flex-wrap items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Fade left>
              <SkillCard {...skillset.webDev} />
            </Fade>
            <Fade right>
              <SkillCard {...skillset.softEng} />
            </Fade>
            <Fade left>
              <SkillCard {...skillset.itConsult} />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
