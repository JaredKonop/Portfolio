// AnimatedCircle.js
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Ensure SVG doesn't interfere with image click events */
`;

const GRAVITY = 49.8;

const Golf = ({ start, reset }) => {
  const [position, setPosition] = useState({
    x: 10,
    y: window.innerHeight / 2,
  });
  const circleRef = useRef(null);
  const startTime = useRef(new Date().getTime());
  const xv = useRef(20);
  const yv = useRef(9.8);

  useEffect(() => {
    if (reset) {
      setPosition({ x: 10, y: window.innerHeight / 2 });
      xv.current = 20;
      yv.current = 9.8;
      startTime.current = new Date().getTime();
    }
  }, [reset]);

  useEffect(() => {
    if (!start) return;

    const updatePosition = () => {
      let newX = position.x + xv.current;
      let newY = position.y + yv.current;

      if (newX >= window.innerWidth - 20 || newX <= 0) {
        xv.current = -xv.current;
      }
      if (newY >= window.innerHeight - 20 || newY <= 0) {
        yv.current = -yv.current;
      }

      xv.current *= 0.995;
      yv.current *= 0.995;

      const now = (startTime.current - new Date().getTime()) / 1000;
      yv.current += GRAVITY * (now * now) * 0.001;
      newY = Math.min(newY, window.innerHeight - 20);

      setPosition({ x: newX, y: newY });
    };

    const render = () => {
      if (circleRef.current) {
        circleRef.current.setAttribute(
          "transform",
          `translate(${position.x},${position.y})`
        );
      }
    };

    const redraw = () => {
      updatePosition();
      render();
      requestAnimationFrame(redraw);
    };

    redraw();
  }, [start, position]);

  return (
    <Svg>
      <circle ref={circleRef} cx="10" cy="10" r="10" fill="#FFF"></circle>
    </Svg>
  );
};

export default Golf;
