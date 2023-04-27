import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const cardStyles = {
  container: {
    display: "100vh",
    border: "none",
    boxShadow: "0 0 10px 2px #cec7c759",
    alignItems: "start",
    padding: 30,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  skillIntro: {
    display: "flex",
    alignItems: "center",
  },
};

const Skills = () => {
  return (
    <Container style={cardStyles.container}>
      <Row style={cardStyles.skillIntro}>
        <center>
          <h1>
            <b>Skills Overview</b>
          </h1>
          <p>
            I have more than 5 years experience in IT Consultancy, including
            linux based software projects, data apps, IOT devices and web apps.
            Below is a quick overview of my main technical skill set and tools I
            use:
          </p>
        </center>
      </Row>
      <Row>
        <Col>
          <h4>Web Development</h4>
          <ul>
            <li>Java Script</li>
            <li>React</li>
            <li>Node JS</li>
            <li>CSS</li>
          </ul>
        </Col>
        <Col>
          <h4>Software Engineering</h4>
          <ul>
            <li>Python</li>
            <li>Streamlit</li>
            <li>Docker</li>
            <li>Linux, WIN</li>
          </ul>
        </Col>
        <Col>
          <h4>IT Management</h4>
          <ul>
            <li>Scaled Agile Framework SAFe</li>
            <li>Requirements Engineering</li>
            <li>Jira</li>
            <li>Confluence</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
