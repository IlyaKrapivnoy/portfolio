import React from "react";
import "./WordAnimation.css";

const Animation = ({ word }) => {
  const handleMouseOver = (event) => {
    event.target.classList.add("animate");
  };

  const handleAnimationEnd = (event) => {
    event.target.classList.remove("animate");
  };

  const renderLetters = () => {
    return word.split("").map((letter, index) => (
      <span
        key={index}
        className="animate"
        onMouseOver={handleMouseOver}
        onAnimationEnd={handleAnimationEnd}
      >
        {letter}
      </span>
    ));
  };

  return <div className="animation">{renderLetters()}</div>;
};

export default Animation;
