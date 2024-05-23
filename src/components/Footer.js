import React from "react";
import Home from "../pages/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Particle from "./Particles";

function Footer() {
  const buttonStyles = {
    facebook: {
      backgroundColor: "#3b5998",
    },
    twitter: {
      backgroundColor: "#55acee",
    },
    google: {
      backgroundColor: "#dd4b39",
    },
    instagram: {
      backgroundColor: "#ac2bac",
    },
    linkedin: {
      backgroundColor: "#0082ca",
    },
    github: {
      backgroundColor: "#333333",
    },
  };

  return (
    <footer className="bg-body-tertiary text-center">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={buttonStyles.github}
            href={"https://github.com/JaredKonop/"}
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={buttonStyles.twitter}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={buttonStyles.google}
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={buttonStyles.instagram}
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={buttonStyles.linkedin}
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={buttonStyles.github}
            href="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Portfolio By:{" "}
        <a className="text-body" href="https://mdbootstrap.com/">
          Jared M Konop
        </a>
        <Particle />
      </div>
    </footer>
  );
}

export default Footer;
