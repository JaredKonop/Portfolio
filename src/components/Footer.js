import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Particle from "./Particles";
import "../styles/styles.css";
import "..//App.css";

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
    <footer className="text-center transparent-background">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating rounded-circle m-1"
            style={buttonStyles.linkedin}
            href="https://www.linkedin.com/in/jared-konop"
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating rounded-circle m-1"
            style={buttonStyles.github}
            href={"https://github.com/JaredKonop/"}
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating rounded-circle m-1"
            style={buttonStyles.facebook}
            href="https://www.facebook.com/jared.konop/"
            role="button"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating rounded-circle m-1"
            style={buttonStyles.instagram}
            href="https://www.instagram.com/jaredkonop/"
            role="button"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating rounded-circle m-1"
            style={buttonStyles.twitter}
            href="https://x.com/jared_konop"
            role="button"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </section>
      </div>
      <div className="text-center p-0 footer-text">
        Portfolio By:{" "}
        <a
          style={{ color: "white" }}
          href="https://github.com/JaredKonop/Portfolio"
        >
          Jared M Konop
        </a>
        <Particle />
      </div>
    </footer>
  );
}

export default Footer;
