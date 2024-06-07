import React, { useRef, useState, useCallback } from "react";
import "../styles/comparisonslider.css";

const ComparisonSlider = ({ before, after }) => {
  const containerRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = useCallback((position) => {
    setSliderPosition(Math.max(0, Math.min(100, position)));
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const position =
        ((e.clientX - containerRect.left) / containerRect.width) * 100;
      handleMove(position);
    },
    [handleMove]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const position =
        ((touch.clientX - containerRect.left) / containerRect.width) * 100;
      handleMove(position);
    },
    [handleMove]
  );

  const handleMouseDown = useCallback(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  }, [handleMouseMove]);

  const handleTouchStart = useCallback(() => {
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", () => {
      document.removeEventListener("touchmove", handleTouchMove);
    });
  }, [handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className="comparison-slider"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div
        className="comparison-image comparison-before"
        style={{ backgroundImage: `url(${before})` }}
      />
      <div
        className="comparison-image comparison-after"
        style={{
          backgroundImage: `url(${after})`,
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
        }}
      />
      <div className="comparison-handle" style={{ left: `${sliderPosition}%` }}>
        <div className="comparison-handle-line" />
      </div>
    </div>
  );
};

export default ComparisonSlider;
