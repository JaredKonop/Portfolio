import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom"; // Import Link from React Router
import ce from "../Assets/codeEditor.png";
import tele from "../Assets/tele.mp4";
import telegif from "../Assets/tele.gif";
import "../styles/styles.css"; // Import the styles.css file
import "../styles/variables.css";
import Particle from "../components/Particles";

const cardData = [
  {
    media: <img src={telegif} alt="Project GIF" width="100%" />,
    title: "TelePreceptMatch",
    text: "• Designed and coded a live website to connect students with preceptors for clinical rotations.",
    url: "https://github.com/JaredKonop/react-teleprecept", // Specify the URL for this card
  },
  {
    img: ce,
    title: "Network Packet Analyzer",
    text: "• Developed a user-friendly UI that does packet analysis on a local network.",
    url: "https://github.com/JaredKonop/NetworkPacketAnalyzer", // Specify the URL for this card
  },
  {
    img: ce,
    title: "2D Platformer DogeRun",
    text: "• Programmed a single player 2-Dimensional platform game with several levels and a leaderboard.",
    url: "https://github.com/JaredKonop/DogeRun", // Specify the URL for this card
  },
  {
    img: ce,
    title: "Project 4",
    text: "This is a description of project 4. It includes details about what was done and what technologies were used.",
    url: "/project4", // Specify the URL for this card
  },
];

const Projects = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 pt-5">
      <Container className="mt-5">
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            textAlign: "center",
          }}
        >
          <h2 className="projects-title">Projects</h2>
        </Row>
        <Row
          xs={1}
          md={2}
          className="g-4 justify-content-center align-items-center"
        >
          {cardData.map((card, idx) => (
            <Col key={idx} className="d-flex justify-content-center">
              <Card className="custom-card" style={{ width: "22rem" }}>
                <Card.Img variant="top" src={card.img} />
                <Card.Body>
                  {card.media}
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Link
                    to={card.url}
                    className="btn sourcecode-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
