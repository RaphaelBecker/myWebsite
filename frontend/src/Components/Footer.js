import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container style={{ marginTop: "60px" }}>
      <footer>
        <Container>
          <Row>
            <Col md={4}>
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus ex a quam rhoncus, vel fringilla orci bibendum.{" "}
              </p>
            </Col>
            <Col md={4}>
              <h4>Navigation</h4>
              <ul className="list-unstyled">
                <li key={"1"}>
                  <a href="/">Home</a>
                </li>
                <li key={"2"}>
                  <a href="/about">About Us</a>
                </li>
                <li key={"3"}>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h4>Contact Us</h4>
              <p>
                123 Main St, Suite 1<br />
                Anytown, USA 12345
              </p>
              <p>
                Phone: (123) 456-7890
                <br />
                Email: info@example.com
              </p>
            </Col>
          </Row>
          <hr />
          <p className="text-center">© 2023 Company Name</p>
        </Container>
      </footer>
    </Container>
  );
};

export default Footer;
