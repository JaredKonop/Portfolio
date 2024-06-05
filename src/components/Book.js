import React, { useState } from "react";
import "../styles/book.css";

const Book = () => {
  const [items, setItems] = useState([
    { id: 1, pos: -4, img: "/images/1.jpg" },
    { id: 2, pos: -3, img: "/images/2.jpg" },
    { id: 3, pos: -2, img: "/images/3.jpg" },
    { id: 4, pos: -1, img: "/images/4.jpg" },
    { id: 5, pos: 0, img: "/images/5.jpg" },
    { id: 6, pos: 1, img: "/images/6.jpg" },
    { id: 7, pos: 2, img: "/images/7.jpg" },
    { id: 8, pos: 3, img: "/images/8.jpg" },
    { id: 9, pos: 4, img: "/images/9.jpg" },
  ]);

  const update = (newActivePos) => {
    setItems(
      items.map((item) => {
        let diff = item.pos - newActivePos;
        if (Math.abs(item.pos - newActivePos) > 4) {
          return { ...item, pos: -item.pos };
        }
        return { ...item, pos: diff };
      })
    );
  };

  const handleClick = (id) => {
    const newActive = items.find((item) => item.id === id);
    if (newActive.pos === 0) return;
    update(newActive.pos);
  };

  return (
    <div className="carousel">
      <ul className="carousel__list">
        {items.map((item) => (
          <li
            key={item.id}
            className={`carousel__item`}
            data-pos={item.pos}
            onClick={() => handleClick(item.id)}
          >
            <img src={item.img} alt={`Carousel ${item.id}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
