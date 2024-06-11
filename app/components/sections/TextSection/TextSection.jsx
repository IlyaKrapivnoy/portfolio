import React from "react";

const TextSection = ({ children, column, reversed, title, text }) => {
  return (
    <div
      className={`flex justify-between flex-col lg:flex-row ${reversed ? "lg:flex-row-reverse" : ""} ${column ? "lg:flex-col items-center" : ""} py-20`}
    >
      <div
        className={`font-bold text-3xl lg:text-4xl w-full lg:w-1/2 ${column ? "flex lg:w-full justify-center pr-0" : reversed ? "lg:pl-10" : "lg:pr-10"} leading-relaxed text-center lg:text-left mb-10`}
      >
        {title}
      </div>
      <div
        className={`w-full lg:w-1/2 mb-10 ${column ? "text-center pr-0" : reversed ? "text-justify lg:pr-0" : "text-justify lg:pr-0"}`}
      >
        {text}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TextSection;
