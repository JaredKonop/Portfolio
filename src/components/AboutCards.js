import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import CardFlip from "react-card-flip";
import imageBack from "../Assets/image-back.png"; // Import your back image
import "../styles/styles.css"; // Import your CSS file for styling

function AboutCards() {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container">
      <CardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="card">
          {/* Front side content */}
          <img
            src={faJs}
            alt="Front"
            className="card-image"
            onClick={handleClick}
          />
        </div>
        <div className="card">
          {/* Back side content */}
          <img
            src={imageBack}
            alt="Back"
            className="card-image"
            onClick={handleClick}
          />
          <div className="icon-container">
            {/* Display JavaScript logo */}
            <FontAwesomeIcon icon={faJs} className="icon" />
          </div>
        </div>
      </CardFlip>
    </div>
  );
}

export default AboutCards;
