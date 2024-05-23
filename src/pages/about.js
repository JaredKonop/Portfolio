import React from "react";
import Particle from "../components/Particles";
import "../styles/about.css";
import me from "../Assets/me.jpg";

//https://letterboxd.com/unclejared/films/by/entry-rating/

//https://www.goodreads.com/review/list/175927632-jared-konop?shelf=read&view=covers

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="about-image">
        <img src={me} alt="Your Name" />
      </div>
      <Particle />
    </div>
  );
};

export default About;
