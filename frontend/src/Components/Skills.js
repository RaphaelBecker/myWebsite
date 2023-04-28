import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const cardStyles = {
  container: {
    height: "100vh",
    padding: 30,
  },
  skillIntro: {
    display: "flex",
    alignItems: "center",
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
    <Container style={cardStyles.container}>
      <Row style={cardStyles.skillIntro}>
        <center style={{ padding: 30 }}>
          <h1>
            <b>Know me more</b>
          </h1>
        </center>
        <Col md={7}>
          <p>
            I have more than 5 years experience in IT Consultancy, including
            linux based software projects, data apps, IOT devices and web apps.
            Below is a quick overview of my main technical skill set and tools I
            use:
          </p>
        </Col>
        <Col md={3}>Years of Experience: {getYearsSince(startWorkLive)}</Col>
      </Row>
      <Row>
        <Col>
          <center>
            <i class="fa-solid fa-tablet-screen-button"></i>
            <h4>Web & App Development</h4>
          </center>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <ul>
                <li>Java Script</li>
                <li>React (Native)</li>
                <li>Node JS</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </Col>
        <Col>
          <center>
            <i class="fa-solid fa-gears"></i>
            <h4>Software Engineering</h4>
          </center>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              {" "}
              <ul>
                <li>Python</li>
                <li>Streamlit</li>
                <li>Docker</li>
                <li>Linux, WIN</li>
              </ul>
            </div>
          </div>
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
