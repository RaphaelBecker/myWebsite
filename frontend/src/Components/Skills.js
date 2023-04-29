import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillCard from "./SmallComponents/SkillCard";

const mySpringGreen = "#33FF99";

const skillset = {
  webDev: {
    icon: "fa-solid fa-tablet-screen-button",
    title: "Web & App Development",
    skills: ["Java Script", "React (Native)", "Node JS", "CSS"],
  },
  softEng: {
    icon: "fa-solid fa-gears",
    title: "Software Engineering",
    skills: ["Python", "C", "Docker", "Linux"],
  },
  itConsult: {
    icon: "fa-solid fa-business-time",
    title: "IT-Management",
    skills: ["SAFe", "Requirements Engineering", "Jira", "Confluence"],
  },
};

const componentStyles = {
  container: {
    paddingBottom: "2rem",
    paddingTop: "2rem",
    marginBottom: "auto!important",
    marginTop: "auto!important",
    position: "center",
    flexWrap: "wrap",
    padding: 30,
  },
  skillIntro: {
    display: "flex",
    alignItems: "center",
  },
  circleStyles: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: mySpringGreen,
    color: "black",
    fontWeight: "bold",
    fontSize: "16px",
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
    <Container style={componentStyles.container}>
      <Row style={componentStyles.skillIntro}>
        <center style={{ padding: 30 }}>
          <h1>
            <b>Know me more</b>
          </h1>
          <Container style={{ padding: 10 }}>
            <span style={{ backgroundColor: mySpringGreen, padding: 2 }}>
              <Container style={{ display: "inline" }}>
                My name is <b>Raphael</b>
              </Container>
            </span>
          </Container>

          <Col md={7}>
            <p style={{ padding: 30 }}>
              I have more than 5 years experience in IT Consultancy, including
              linux based software projects, data apps, IOT devices and web
              apps. Below is a quick overview of my main technical skill set and
              tools I use:
            </p>
          </Col>
          <Col md={2} style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px" }}>Years of Experience:</span>
            <div style={componentStyles.circleStyles}>
              {getYearsSince(startWorkLive)}
            </div>
          </Col>
        </center>
      </Row>

      <Container>
        <Row
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Col xs={12} md={4} style={{ width: "300px", margin: "10px" }}>
            <SkillCard {...skillset.webDev} />
          </Col>
          <Col xs={12} md={4} style={{ width: "300px", margin: "10px" }}>
            <SkillCard {...skillset.softEng} />
          </Col>
          <Col xs={12} md={4} style={{ width: "300px", margin: "10px" }}>
            <SkillCard {...skillset.itConsult} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Skills;
