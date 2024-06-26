import React from "react";
import "../styles/hobby.css";
import JP from "../Assets/Joker/Jonaquin_Phoneix.png";
import Person from "../Assets/Joker/Joker_person_w_legs.png";
import Joker from "../Assets/Joker/Joker_text.png";
import kid from "../Assets/Up/Kid.png";
import house from "../Assets/Up/House.png";
import old_guy from "../Assets/Up/Old guy.png";
import dog from "../Assets/Up/Dog.png";
import up from "../Assets/Up/UP.png";
import Book from "../components/Book";
import Cast from "../Assets/Oppenheimer/cast.png";
import oppenheimer from "../Assets/Oppenheimer/oppenheimer.png";
import chris from "../Assets/Oppenheimer/chris.png";
import tommy from "../Assets/Oppenheimer/Tommy.png";
import specs from "../Assets/Oppenheimer/specs.png";
import specs1 from "../Assets/Oppenheimer/specs1.png";

const Hobby = () => {
  return (
    <div className="hobby-container">
      <div className="hobby-title">
        {" "}
        <h1>Hobbies</h1>
      </div>
      <div className="movie-section">
        <div className="letterbox">
          <h1>⦿ Movies</h1>
          <a
            href="https://letterboxd.com/unclejared/films/by/entry-rating/"
            target="_blank"
            class="movie-hover-link"
          >
            <h2>My Letterboxd</h2>
          </a>
        </div>
        <div className="movies">
          <article id="joker_poster">
            <header id="joker_poster__header">
              <img src={Person} id="joker_poster__header" />
            </header>
            <img
              id="joker_poster__front_img"
              src={JP}
              alt="joker Front image"
            />

            <img
              id="joker_poster__front_image"
              src={Joker}
              alt="joker Front image"
            />
          </article>
          <article id="up_poster">
            <header id="up_poster__header">
              <img src={house} id="up_poster__header" />
            </header>
            <img id="kid" src={kid} alt="kid" />
            <img id="up" src={up} alt="UP" />
            <img id="dog" src={dog} alt="dog" />
            <img id="old_guy" src={old_guy} alt="old_guy" />
          </article>
          <article id="oppenheimer_poster">
            <img id="cast" src={Cast} alt="Cast" />
            <img id="specs" src={specs} alt="Specs" />
            <img id="specs2" src={specs} alt="Specs2" />
            <img id="specs3" src={specs} alt="Specs3" />
            <img id="specs4" src={specs} alt="Specs4" />
            <img id="specs5" src={specs} alt="Specs5" />
            <img id="specs1" src={specs1} alt="Specs1" />
            <img id="oppenheimer" src={oppenheimer} alt="Title" />
            <img id="chris" src={chris} alt="Chris" />
            <img id="tom" src={tommy} alt="Cillian Murphy" />
          </article>
        </div>
      </div>

      <div className="books-section">
        <div className="book-shelf">
          <Book />
        </div>
        <div className="goodreads">
          <h1>⦿ Books</h1>
          <a
            href="https://www.goodreads.com/review/list/175927632-jared-konop?shelf=read&view=covers"
            target="_blank"
            class="book-hover-link"
          >
            <h2>My Goodreads</h2>
          </a>
        </div>
      </div>
      <div className="three-column-layout">
        <div className="hobby-column">
          <p>⦿ Golfing</p>
        </div>
        <div className="hobby-column">
          <p>⦿ Weight Lifting</p>
        </div>
        <div className="hobby-column">
          <p>⦿ Running</p>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
