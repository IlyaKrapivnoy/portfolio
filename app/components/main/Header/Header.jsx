import React from "react";
import SocialLinks from "@/app/components/partials/SocialLinks/SocialLinks";
import { socialLinks } from "@/app/data/socialLinks";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container">
      <div className="fixed max-w-inherit flex justify-between items-center z-50 w-full bg-[rgb(var(--background-end-rgb))] py-4">
        <div className="text-4xl font-black">
          <Link href="https://github.com/IlyaKrapivnoy">Krapivnoy</Link>
        </div>
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
    </div>
  );
};

export default Header;
