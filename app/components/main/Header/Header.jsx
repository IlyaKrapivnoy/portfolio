import React from "react";

const Header = () => {
  return (
    <div className="fixed flex justify-between items-center w-full">
      <div className="text-4xl font-black">Krapivnoy</div>
      <div>
        <ul className="flex gap-10">
          <li>about</li>
          <li>stack</li>
          <li>projects</li>
        </ul>
      </div>
      <div>links</div>
    </div>
  );
};

export default Header;
