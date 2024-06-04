import React from "react";
import Home from "../pages/home";
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

function AddMe() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 mb-16">
      <div className="text-center p-4">
        <div className="flex justify-center space-x-8 p-4 mt-5">
          <a
            href="https://www.linkedin.com/in/jared-konop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 p-5"
          >
            <FontAwesomeIcon icon={faLinkedin} size="10x" />
          </a>
          <a
            href="https://github.com/JaredKonop/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 p-5"
          >
            <FontAwesomeIcon icon={faGithub} size="10x" />
          </a>
          <a
            href="https://www.facebook.com/jared.konop/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-800 p-5"
          >
            <FontAwesomeIcon icon={faFacebook} size="10x" />
          </a>

          <a
            href="https://www.instagram.com/jaredkonop/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 p-5"
          >
            <FontAwesomeIcon icon={faInstagram} size="10x" />
          </a>

          <a
            href="https://x.com/jared_konop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 p-5"
          >
            <FontAwesomeIcon icon={faTwitter} size="10x" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default AddMe;
