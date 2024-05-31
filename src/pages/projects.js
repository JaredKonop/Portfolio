import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom"; // Import Link from React Router
import ce from "../Assets/codeEditor.png";
import tele from "../Assets/tele.mp4";
import inpirational from "../Assets/inspirational.gif";
import pushups from "../Assets/pushup.gif";
import movie from "../Assets/movie.gif";
import "../styles/styles.css"; // Import the styles.css file
import "../styles/variables.css";
import Particle from "../components/Particles";

const cardData = [
  {
    media: <img src={tele} alt="Project GIF" width="100%" />,
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
    title: "Portfolio",
    text: "• This is the website you are visiting right now!",
    url: "https://github.com/JaredKonop/Portfolio", // Specify the URL for this card
  },
  {
    media: <img src={movie} alt="Movie Rater GIF" width="100%" />,
    title: "Movie Rater",
    text: "I love movies and rating them so I can quantiatively remember how much i enjoyed the movie in the future. This was based on my own personal criterial when I consider a movies rating. The categories are weighted differently based off of a survey i took. ",
    url: "https://github.com/JaredKonop/MovieRater", // Specify the URL for this card
  },

  {
    media: <img src={pushups} alt="Pushups GIF" width="100%" />,
    title: "Push-ups",
    text: "Working out is a passion of mine, so why not sprinkle it in throughout the day? A few co-workers and myself will rep pushups throughout the day to keep our blood flowing",
    url: "https://github.com/JaredKonop/Pushups", // Specify the URL for this card
  },
  {
    media: <img src={inpirational} alt="Inspirational GIF" width="100%" />,
    title: "Inpirational Quotes",
    text: "Who doesn't need a little inpiration every now and then? On a large TV in my office, we display this program which randomly grabs an employees picture and a notable quote and generates it every 30 seconds.",
    url: "https://github.com/JaredKonop/InspirationalQuotes.github.io", // Specify the URL for this card
  },
];

const Projects = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 pt-5">
      <Container className="mt-5">
        <div className="project-title">
          {" "}
          <h1>Projects</h1>
        </div>

        <Row
          xs={1}
          md={2}
          className="g-4 justify-content-center align-items-center"
        >
          {cardData.slice(0, 4).map((card, idx) => (
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
        {/* New title above the new row of 3 centered cards */}

        <div className="mini-title">
          {" "}
          <h1>Mini Projects</h1>
        </div>

        {/* New row of 3 centered cards */}
        <Row
          xs={1}
          md={3}
          className="g-4 justify-content-center align-items-center mt-4"
        >
          {cardData.slice(4, 7).map((card, idx) => (
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
      <Particle />
    </div>
  );
};
export default Projects;
