import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header({ scrollToRef }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">RB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#linkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </Nav.Link>
            <Nav.Link href="#instagram">
              <i className="fa-brands fa-instagram"></i>
            </Nav.Link>
            <Nav.Link href="#twitter">
              <i className="fa-brands fa-twitter"></i>
            </Nav.Link>
            <Nav.Link href="#youtube">
              <i className="fa-brands fa-youtube"></i>
            </Nav.Link>
            <Nav.Link href="#github">
              <i className="fa-brands fa-github"></i>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" onClick={() => scrollToRef("aboutRef")}>
              About
            </Nav.Link>
            <Nav.Link href="#bio">Bio</Nav.Link>
            <Nav.Link href="#" onClick={() => scrollToRef("projectsRef")}>
              Projects
            </Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#" onClick={() => scrollToRef("contactRef")}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
