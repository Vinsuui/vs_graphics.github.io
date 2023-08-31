import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

import Logo from "../../assets/logo.png";
import "./navbar.css";

function Topbar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="navText"
              as={Link}
              to="about"
              smooth={true}
              spy={true}
              activeClass="active"
            >
              About
            </Nav.Link>
            <Nav.Link
              className="navText"
              as={Link}
              to="tech-stack"
              smooth={true}
            >
              Stacks
            </Nav.Link>
            <Nav.Link
              className="navText"
              as={Link}
              to="experiences"
              smooth={true}
            >
              Experiences
            </Nav.Link>
            <Nav.Link
              className="navText"
              as={Link}
              to="projects"
              smooth={true}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className="navText"
              as={Link}
              to="contact"
              smooth={true}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
