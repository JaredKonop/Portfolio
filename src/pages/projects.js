import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ce from "../Assets/codeEditor.png";
import "./styles.css"; // Import the styles.css file
import "./variables.css";
import Particle from "../components/Particles";

const Projects = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <Row
        xs={1}
        md={2}
        lg={2}
        className="g-4 justify-content-center align-items-center"
      >
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card className="custom-card">
              <Card.Img variant="top" src={ce} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Particle />
    </div>
  );
};

export default Projects;
