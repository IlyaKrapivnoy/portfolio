import React from "react";
import SocialLinks from "@/app/components/partials/SocialLinks/SocialLinks";
import { socialLinks } from "@/app/data/socialLinks";

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
      <div>
        <SocialLinks arr={socialLinks} horizontalDisplay />
      </div>
    </div>
  );
};

export default Header;
