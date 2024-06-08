import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom"; // Import Link from React Router
import ce from "../Assets/codeEditor.png";
import tele from "../Assets/teleprecept.gif";
import inpirational from "../Assets/inspirational.gif";
import pushups from "../Assets/pushup.gif";
import movie from "../Assets/movie.gif";
import wireshark from "../Assets/wireshark.gif";
import doge from "../Assets/dogegif.gif";
import "../styles/styles.css"; // Import the styles.css file
import "../styles/variables.css";
import Particle from "../components/Particles";
import ComparisonSlider from "../components/ComparisonSlider";
import beforeImage from "../Assets/Cloverwebsite.png"; // Replace with the path to your before image
import afterImage from "../Assets/Mywebsite.png"; // Replace with the path to your after image

const cardData = [
  {
    media: <img src={tele} alt="Project GIF" width="100%" />,
    title: "TelePreceptMatch",
    sub: "ReactJS, Tailwind CSS, HTML",
    text: "• A website to connect students with preceptors for clinical rotations • Key features were Signup, Login, Password management, and Connect / Message other users.",
    url: "https://github.com/JaredKonop/react-teleprecept", // Specify the URL for this card
  },
  {
    media: <img src={wireshark} alt="Movie Rater GIF" width="100%" />,
    title: "Network Packet Analyzer",
    sub: "JavaScript, Python, HTML, CSS, Wireshark",
    text: "• A user-friendly UI that does packet analysis on a local network • Utilized the application Wireshark for backend functionality",
    url: "https://github.com/JaredKonop/NetworkPacketAnalyzer", // Specify the URL for this card
  },
  {
    media: <img src={doge} alt="Movie Rater GIF" width="100%" />,
    title: "2D Platformer DogeRun",
    sub: "C, C++, CMake, DCL",
    text: "• Programmed a single player 2-Dimensional platform game with several levels and a leaderboard • Ability to create new levels from a simple text file",
    url: "https://github.com/JaredKonop/DogeRun", // Specify the URL for this card
  },
  {
    img: ce,
    title: "Portfolio",
    sub: "ReactJS, Tailwind CSS, CSS, HTML, NPM,  Github",
    text: "• This is the website you are visiting right now. Designed and coded by me! Frequent updates will be made to include by latest projects. ",
    url: "https://github.com/JaredKonop/Portfolio", // Specify the URL for this card
  },
  {
    media: <img src={movie} alt="Movie Rater GIF" width="100%" />,
    title: "Movie Rater",
    sub: "JavaScript, HTML, CSS",
    text: "I love movies and rating them so I can quantiatively remember how much i enjoyed the movie in the future. This was based on my own personal criterial when I consider a movies rating. The categories are weighted differently based off of a survey i took. ",
    url: "https://github.com/JaredKonop/MovieRater", // Specify the URL for this card
  },

  {
    media: <img src={pushups} alt="Pushups GIF" width="100%" />,
    title: "Push-ups",
    sub: "JavaScript, HTML, CSS",
    text: "Working out is a passion of mine, so why not sprinkle it in throughout the day? A few co-workers and myself will rep pushups throughout the day to keep our blood flowing",
    url: "https://github.com/JaredKonop/Pushups", // Specify the URL for this card
  },
  {
    media: <img src={inpirational} alt="Inspirational GIF" width="100%" />,
    title: "Inpirational Quotes",
    sub: "JavaScript, HTML, CSS",
    text: "Who doesn't need a little inpiration every now and then? On a large TV in my office, we display this program which randomly grabs an employees picture and a notable quote and generates it every 30 seconds.",
    url: "https://github.com/JaredKonop/InspirationalQuotes.github.io", // Specify the URL for this card
  },
  {
    media: <ComparisonSlider before={beforeImage} after={afterImage} />,
    title: "Golf Website Revamp",
    sub: "TypeScript, Vite, HTML, CSS",
    text: "This project aims to transform outdated local golfing websites into modern, clean, and user-friendly platforms. The goal is to enhance the online presence of golf courses, clubs, and associations by providing visually appealing, responsive, and feature-rich websites that cater to the needs of both existing members and potential new visitors.",
    url: "https://github.com/JaredKonop/GolfWebsite", // Specify the URL for this card
  },
];

const Projects = () => {
  return (
    // <div className="d-flex justify-content-center align-items-center min-vh-100 pt-5">
    <div className="project">
      <div className="project-title">
        {" "}
        <h1>In Progress...</h1>
      </div>

      <Container className="mt-5">
        <Row
          xs={1}
          md={2}
          className="g-4 justify-content-center align-items-center"
        >
          {cardData.slice(7, 8).map((card, idx) => (
            <Col key={idx} className="d-flex justify-content-center">
              <Card className="custom-card" style={{ width: "30rem" }}>
                <Card.Img variant="top" src={card.img} />
                <Card.Body>
                  {card.media}
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text style={{ color: "red" }}>{card.sub}</Card.Text>
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
      <div className="mini-title">
        {" "}
        <h1>Projects</h1>
      </div>
      <Container className="mt-5">
        <Row
          xs={1}
          md={2}
          className="g-4 justify-content-center align-items-center"
        >
          {cardData.slice(0, 4).map((card, idx) => (
            <Col key={idx} className="d-flex justify-content-center">
              <Card className="custom-card" style={{ width: "30rem" }}>
                <Card.Img variant="top" src={card.img} />
                <Card.Body>
                  {card.media}
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text style={{ color: "red" }}>{card.sub}</Card.Text>
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
      {/* New title above the new row of 3 centered cards */}

      <div className="project-title">
        {" "}
        <h1>Mini Projects</h1>
      </div>
      <Container>
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
