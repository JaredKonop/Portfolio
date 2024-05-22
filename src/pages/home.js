import React from "react";
import { CgAirplane, CgSelectR } from "react-icons/cg";
import IntroTypewriter from "../components/IntroTypewriter";
import Typewriter from "typewriter-effect";
import "./styles.css";
import Particle from "../components/Particles";

const Home = () => {
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
        <IntroTypewriter />
      </div>
      <Particle />
    </>
  );
};

export default Home;
