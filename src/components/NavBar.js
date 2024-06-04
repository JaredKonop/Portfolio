import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import jklogo from "../Assets/jklogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faCode,
  faUserLarge,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar p-2 sticky-top">
      <Container>
        <Navbar.Brand href="/about">
          <img src={jklogo} width="80" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars} className="text-white" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/about"
              className="nav-link text-white d-flex align-items-center"
            >
              <span className="nav-icon">
                <FontAwesomeIcon icon={faUserLarge} className="me-2" />
              </span>
              <span className="nav-text">About Me</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              className="nav-link text-white d-flex align-items-center"
            >
              {" "}
              <span className="nav-icon">
                <FontAwesomeIcon icon={faCode} className="me-2" />
              </span>
              <span className="nav-text">Projects</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/resume"
              className="nav-link text-white d-flex align-items-center"
            >
              <span className="nav-icon">
                <FontAwesomeIcon icon={faStar} className="me-2" />
              </span>
              <span className="nav-text">Resume</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="nav-link text-white d-flex align-items-center"
            >
              <span className="nav-icon">
                <FontAwesomeIcon icon={faUserLarge} className="me-2" />
              </span>
              <span className="nav-text">Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
