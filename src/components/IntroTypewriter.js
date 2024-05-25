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
        height: "10vh",
        color: "white",
      }}
    >
      <div className="large-text">
        <h1>I am a&nbsp;</h1>

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
