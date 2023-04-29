import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Typed from "react-typed";

const containerStyles = {
  container: {
    paddingBottom: "2rem",
    paddingTop: "2rem",
    marginBottom: "auto!important",
    marginTop: "auto!important",
    position: "center",
  },
  introText: {
    alignItems: "center",
    padding: 30,
  },
  typingText: {
    width: "400px",
  },
};

const Intro = ({ scrollToRef }) => {
  return (
    <Container style={containerStyles.container}>
      <Row style={containerStyles.introText}>
        <Col>
          <Row>
            <h3>Hi, I am </h3>
          </Row>
          <Row>
            <div style={containerStyles.typingText}>
              <h1>
                {" "}
                <strong>
                  {" "}
                  <Typed
                    strings={[
                      "Full Stack Developer",
                      "IT Consultant",
                      "Software Engineer",
                    ]}
                    typeSpeed={70}
                    backDelay={1500}
                    backSpeed={10}
                    loop
                    style={{ display: "inline-block" }} // set display property to inline-block
                  />
                </strong>
              </h1>
            </div>

            <p>based in Munich, Germany</p>
          </Row>
          <Row>
            <Col md={3}>
              <Button
                variant="primary"
                onClick={() => scrollToRef("projectsRef")}
              >
                {" "}
                View my work
              </Button>
            </Col>
            <Col md={6}>
              <Button
                variant="seconday"
                onClick={() => scrollToRef("contactRef")}
              >
                <i className="fa-solid fa-envelope"></i> <u>contact me </u>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
