"use client";
import React from "react";
import { currentYear } from "@/app/helpers/functions";
import SocialLinks from "@/app/components/partials/SocialLinks/SocialLinks";
import { socialLinks } from "@/app/data/socialLinks";
import WordAnimation from "@/app/components/partials/WordAnimation/WordAnimation";

const Footer = () => {
  return (
    <div className="relative md:fixed max-w-inherit w-full bottom-0 border-t-[1px] border-white bg-[rgb(var(--background-end-rgb))]">
      <div className="container">
        <footer className="flex flex-col md:flex-row md:justify-between text-center py-16 md:py-4">
          <h2 className="uppercase text-4xl font-black mb-10 md:mb-0">
            <WordAnimation word="Contacts" />
          </h2>

          <SocialLinks
            arr={socialLinks}
            iconWithText
            sectionStyles="mb-6 md:mb-0"
          />

          <div className="text-center">
            <p className="font-bold mb-2">ilya.krapivnoy@gmail.com</p>
            <p className="font-extralight opacity-60 cursor-default">
              {currentYear} All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
