import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";

const Intro = ({ scrollToRef }) => {
  return (
    <Container style={{ padding: "30px" }}>
      <Row>
        <Col md={3}>
          <Image src={"/logo512.png"} alt={"Photo"} fluid />
        </Col>

        <Col md={8}>
          <Container>
            <Row>
              <h3>Hello, my name is</h3>
            </Row>
            <Row>
              <h1>
                {" "}
                <b>Raphael Becker</b>
              </h1>
            </Row>
            <Row>
              <h5>
                I am a Software engineer with a passion for digital
                transformation. Skilled in full-stack software engineering,
                agile IT management and always eager to take on challenging
                projects. In my spare time, I enjoy developing tools and
                algorithms to streamline investments and automate tedious tasks.
              </h5>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="primary"
                  onClick={() => scrollToRef("contactRef")}
                >
                  {" "}
                  Hire me
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
