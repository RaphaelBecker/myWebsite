import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./SmallComponents/ProjectCard";

const containerStyles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: 30,
  },
};

const projects = [
  { id: 1, title: "Project1" },
  { id: 1, title: "Project2" },
  { id: 1, title: "Project3" },
  { id: 1, title: "Project4" },
  { id: 1, title: "Project5" },
];

const Projects = () => {
  return (
    <Container>
      <center>
        <h1>My latest projects:</h1>
      </center>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {projects.map((project) => {
          return (
            <div key={project._id} style={{ flex: "1 1 33%" }}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          div {
            flex-basis: 50%;
          }
        }

        @media (max-width: 576px) {
          div {
            flex-basis: 100%;
          }
        }
      `}</style>
    </Container>
  );
};

export default Projects;
