import React from "react";

const TextSection = ({ reversed, title, text }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${reversed ? "lg:flex-row-reverse" : ""} justify-between gap-10 py-20`}
    >
      <div className="font-bold text-3xl lg:text-4xl w-full lg:w-1/2 leading-relaxed text-center lg:text-left">
        {title}
      </div>
      <div className="w-full lg:w-1/2 text-justify">{text}</div>
    </div>
  );
};

export default TextSection;
