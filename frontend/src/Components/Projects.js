import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./SmallComponents/ProjectCard";

const Projects = () => {
  return (
    <Container>
      <Row>
        <Container>
          <h2>My latest projects:</h2>
        </Container>
      </Row>
      <Row>
        <Col>
          <ProjectCard />
        </Col>
        <Col>
          <ProjectCard />
        </Col>
        <Col>
          <ProjectCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
