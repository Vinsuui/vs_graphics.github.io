import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Logo from "../../assets/logo.png";
import "./navbar.css";

function Topbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand onClick={scrollToTop}>
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              className="navText firstNav"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset to avoid overlapping with content
            >
              About
            </Link>
            <Link
              className="navText"
              to="tech-stack"
              spy={true}
              smooth={true}
              offset={-70}
            >
              Stacks
            </Link>
            <Link
              className="navText"
              to="experiences"
              spy={true}
              smooth={true}
              offset={-70}
            >
              Experiences
            </Link>
            <Link
              className="navText"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
            >
              Projects
            </Link>
            <Link
              className="navText"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
