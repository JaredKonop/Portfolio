import React from "react";
import Particle from "../components/Particles";
import "../styles/about.css";
import me from "../Assets/me.jpg";
import me_blacksuit from "../Assets/me_blacksuit.jpg";
import IntroTypewriter from "../components/IntroTypewriter";
import Skills from "../components/Skills";
import Hobby from "../components/Hobby";

//https://letterboxd.com/unclejared/films/by/entry-rating/

//https://www.goodreads.com/review/list/175927632-jared-konop?shelf=read&view=covers

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-text">
          <div className="about-name ">
            <h1>Welcome to my Portfolio!</h1>
          </div>
          <div className="about-typewriter">
            <IntroTypewriter />
          </div>
        </div>
        <div className="about-image ">
          <img className="profile-img" src={me_blacksuit} alt="Your Name" />
        </div>

        <Particle />
      </div>
      <Skills />
      <Hobby />
    </>
  );
};

export default About;
