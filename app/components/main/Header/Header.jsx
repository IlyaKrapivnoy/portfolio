"use client";

import React from "react";
import SocialLinks from "@/app/components/partials/SocialLinks/SocialLinks";
import { socialLinks } from "@/app/data/socialLinks";
import ProgressBar from "@ramonak/react-progress-bar";
import useProgressBar from "@/app/hooks/useProgressBar";
import Logo from "@/app/components/main/Footer/Logo";

const Header = () => {
  const progress = useProgressBar();
  return (
    <div className="fixed max-w-inherit w-full top-0 border-b-[1px] border-white bg-[rgb(var(--background-end-rgb))] z-10">
      <ProgressBar
        completed={progress}
        customLabel=" "
        bgColor="#2E8B57"
        baseBgColor="#1c1c1c"
        height="5px"
        borderRadius="0"
        transitionDuration="0"
      />
      <div className="container">
        <div className="flex justify-between items-center w-full py-4">
          <Logo logoStyles="text-2xl md:text-3xl lg:text-4xl font-black" />

          <SocialLinks arr={socialLinks} horizontalDisplay />
        </div>
      </div>
    </div>
  );
};

export default Header;
