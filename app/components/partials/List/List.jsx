import React from "react";

const List = ({ arr }) => {
  return (
    <ul>
      {arr?.map((item) => (
        <li className="pb-4" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
