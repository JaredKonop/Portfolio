import React from "react";
import Particle from "../components/Particles";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>About Page</h1>
      </div>
      <Particle />
    </>
  );
};

export default About;
