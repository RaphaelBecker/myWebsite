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
  { id: 123, title: "Project1" },
  { id: 124, title: "Project2" },
  { id: 125, title: "Project3" },
  { id: 126, title: "Project4" },
  { id: 127, title: "Project5" },
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
            <div key={project.id} style={{ flex: "1 1 33%" }}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Projects;
