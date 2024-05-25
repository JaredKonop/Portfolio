import React from "react";
import { useState } from "react";
import "../styles/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CIcon from "@coreui/icons-react";
import { cibPostman, cibAdobe } from "@coreui/icons";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import {
  DiBootstrap,
  DiNodejsSmall,
  DiMysql,
  DiWordpress,
} from "react-icons/di";

import {
  faJs,
  faJava,
  faHtml5,
  faCss3Alt,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const [showText, setShowText] = useState({
    javascript: false,
    java: false,
    html5: false,
    react: false,
    css3: false,
    python: false,
    bootstrap: false,
    node: false,
    sql: false,
    wordpress: false,
    postman: false,
    adobe: false,
  });

  const toggleText = (skill) => {
    setShowText((prevShowText) => ({
      ...prevShowText,
      [skill]: !prevShowText[skill],
    }));
  };

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <h3>Languages</h3>
      <div className="skills-grid-container">
        {/* You can repeat this card component for each of your 6 cards */}
        <div className="skills-card" onClick={() => toggleText("javascript")}>
          {showText.javascript ? "JavaScript" : <FontAwesomeIcon icon={faJs} />}
        </div>
        <div className="skills-card" onClick={() => toggleText("java")}>
          {showText.java ? "Java" : <FontAwesomeIcon icon={faJava} />}
        </div>
        <div className="skills-card" onClick={() => toggleText("html5")}>
          {showText.html5 ? "HTML5" : <FontAwesomeIcon icon={faHtml5} />}
        </div>
        <div className="skills-card" onClick={() => toggleText("react")}>
          {showText.react ? "React" : <FontAwesomeIcon icon={faReact} />}
        </div>
        <div className="skills-card" onClick={() => toggleText("css3")}>
          {showText.css3 ? "CSS" : <FontAwesomeIcon icon={faCss3Alt} />}
        </div>
        <div className="skills-card" onClick={() => toggleText("python")}>
          {showText.python ? "Python" : <FontAwesomeIcon icon={faPython} />}
        </div>
      </div>

      <h3>Tools</h3>
      <div className="skills-grid-container">
        {/* You can repeat this card component for each of your 6 cards */}
        <div className="skills-card" onClick={() => toggleText("bootstrap")}>
          {showText.bootstrap ? "Bootstrap" : <DiBootstrap />}
        </div>
        <div className="skills-card" onClick={() => toggleText("node")}>
          {showText.node ? "Node JS" : <DiNodejsSmall />}
        </div>
        <div className="skills-card" onClick={() => toggleText("sql")}>
          {showText.sql ? "SQL" : <DiMysql />}
        </div>
        <div className="skills-card" onClick={() => toggleText("sql")}>
          {showText.sql ? "SQL" : <DiMysql />}
        </div>
        <div className="skills-card" onClick={() => toggleText("adobe")}>
          {showText.adobe ? "Adobe" : <CIcon icon={cibAdobe} />}
        </div>
        <div className="skills-card" onClick={() => toggleText("wordpress")}>
          {showText.wordpress ? "WordPress" : <DiWordpress />}
        </div>
      </div>
    </div>
  );
};

export default Skills;
