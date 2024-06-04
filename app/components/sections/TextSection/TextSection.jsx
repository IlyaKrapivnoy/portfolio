import React from "react";

const TextSection = ({ column, reversed, title, text }) => {
  return (
    <div
      className={`flex justify-between flex-col lg:flex-row ${reversed ? "lg:flex-row-reverse" : ""} ${column ? "lg:flex-col items-center" : ""}  gap-10 py-20`}
    >
      <div
        className={`font-bold text-3xl lg:text-4xl w-full lg:w-1/2 ${column ? "flex lg:w-full justify-center" : ""} leading-relaxed text-center lg:text-left`}
      >
        {title}
      </div>
      <div
        className={`w-full lg:w-1/2 ${column ? "text-center" : "text-justify"}`}
      >
        {text}
      </div>
    </div>
  );
};

export default TextSection;
