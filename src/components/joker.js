import React from "react";
import jokerLegsImage from "../Assets/Joker_person_w_legs.png"; // Adjust the path as needed
import jokerFrontImg from "../Assets/Jonaquin_Phoneix.png";
import jokerTextImage from "../Assets/Joker_text.png"; // Adjust the path as needed
import "../styles/joker.css";

const JokerPoster = () => {
  return (
    <main className="joker">
      <article id="joker_poster">
        <header id="joker_poster__header">
          <img
            src={jokerLegsImage}
            id="joker_poster__header_image"
            alt="Joker legs"
          />
        </header>
        <img
          id="joker_poster__front_img"
          src={jokerFrontImg}
          alt="Joker Front image"
        />
        <img
          id="joker_poster__front_image"
          src={jokerTextImage}
          alt="Joker Text image"
        />
      </article>
    </main>
  );
};

export default JokerPoster;
