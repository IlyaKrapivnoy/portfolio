import React from "react";
import Link from "next/link";
import Image from "next/image";
import { currentYear } from "@/app/helpers/functions";
import { Email, GitHub, LinkedIn } from "../../../public/svg";

const Footer = () => {
  const socialLinks = [
    {
      svg: LinkedIn,
      href: "https://linkedin.com/in/ilya-krapivnoy-ba53162aa",
      text: "LinkedIn",
    },
    {
      svg: GitHub,
      href: "https://github.com/IlyaKrapivnoy",
      text: "GitHub",
    },
    {
      svg: Email,
      href: "mailto:ilya.krapivnoy@gmail.com",
      text: "ilya.krapivnoy@gmail.com",
    },
  ];

  return (
    <footer className="flex flex-col text-center border-t-[1px] border-white py-16">
      <h2 className="uppercase text-6xl font-black mb-10">Contact</h2>

      <div className="mb-6">
        {socialLinks.map(({ text, svg, href }) => (
          <div
            className="flex items-center justify-center gap-2 mb-2 cursor-pointer hover:animate-pulse"
            key={text}
          >
            <Image src={svg} alt="Send me email icon" width={20} height={20} />
            <Link className="font-bold" href={href}>
              {text}
            </Link>
          </div>
        ))}
      </div>

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
