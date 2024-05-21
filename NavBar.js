import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import jklogo from "../Assets/jklogo.png";
import "../tailwind.css";
import "../pages/styles.css";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-customColor p-2">
      <Container>
        <Navbar.Brand href="#home">
          <img src={jklogo} width="80" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-xl">
            <Nav.Link as={Link} to="/home" className="text-white text-lg">
              <CIcon icon={icon.cilList} size="xxl" />
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="text-white text-lg">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" className="text-white text-lg">
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white text-xl">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
