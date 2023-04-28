import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Typed from "react-typed";

const containerStyles = {
  container: {
    display: "flex",
    height: "95vh",
    padding: 120,
    position: "center",
  },
  introText: {
    display: "flex",
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
        <Col md={9}>
          <Row>
            <h3>Hi, I am </h3>
          </Row>
          <Row>
            <div style={containerStyles.typingText}>
              <h1>
                {" "}
                <b>
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
                </b>
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
                <i class="fa-solid fa-envelope"></i> <u>contact me </u>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <Image src={"/logo512.png"} alt={"Photo"} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
