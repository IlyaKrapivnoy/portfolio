"use client";

import React from "react";
import SocialLinks from "@/app/components/partials/SocialLinks/SocialLinks";
import { socialLinks } from "@/app/data/socialLinks";
import Link from "next/link";
import ProgressBar from "@ramonak/react-progress-bar";
import useProgressBar from "@/app/hooks/useProgressBar";

const Header = () => {
  const progress = useProgressBar();
  return (
    <div className="relative md:fixed max-w-inherit w-full top-0 border-b-[1px] border-white bg-[rgb(var(--background-end-rgb))]">
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
        <div className="flex justify-between items-center z-50 w-full py-4">
          <div className="text-4xl font-black">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/IlyaKrapivnoy"
            >
              Krapivnoy
            </Link>
          </div>

          <div>
            <SocialLinks arr={socialLinks} horizontalDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
