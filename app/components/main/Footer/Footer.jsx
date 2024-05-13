import React from "react";
import { currentYear } from "@/app/helpers/functions";
import { Email, GitHub, LinkedIn } from "../../../../public/svg";
import SocialLinks from "@/app/components/partials/SocialLinks/SocialLinks";
import { socialLinks } from "@/app/data/socialLinks";

const Footer = () => {
  return (
    <footer className="flex flex-col text-center border-t-[1px] border-white py-16">
      <h2 className="uppercase text-6xl font-black mb-10">Contact</h2>

      <SocialLinks arr={socialLinks} iconWithText sectionStyles="mb-6" />

      <div className="font-bold mb-10">ilya.krapivnoy@gmail.com</div>

      <div className="font-mono opacity-50 mb-6 text-green-400">
        &#39;I create programs as much as programs create me&#39;
      </div>

      <p className="font-extralight opacity-60">
        {currentYear} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
