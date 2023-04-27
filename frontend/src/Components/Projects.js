import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./SmallComponents/ProjectCard";

const projects = [
  { id: 1, title: "Project1" },
  { id: 1, title: "Project2" },
  { id: 1, title: "Project3" },
  { id: 1, title: "Project4" },
  { id: 1, title: "Project5" },
];

const Projects = () => {
  return (
    <Container style={{ marginTop: "3rem", padding: 0 }}>
      <>
        <center>
          <h1>My latest projects:</h1>
        </center>
        <Row>
          {projects.map((project) => {
            return (
              <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
                <ProjectCard project={project} />
              </Col>
            );
          })}
        </Row>
      </>
    </Container>
  );
};

export default Projects;
