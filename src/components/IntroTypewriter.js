import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/styles.css";

const IntroTypewriter = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "white",
      }}
    >
      <h1 className="large-text">I am a&nbsp;</h1>
      <div className="large-text">
        <Typewriter
          options={{
            strings: [
              " Frontend Developer",
              " Backend Developer",
              " Web Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    </div>
  );
};

export default IntroTypewriter;
