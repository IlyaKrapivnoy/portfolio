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
          <Link
            key={text}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={`Visit ${text}`}
            passHref
          >
            <div className="flex items-center justify-center font-bold gap-2 mb-2 hover:animate-pulse">
              <Image src={svg} alt={`${text} icon`} width={20} height={20} />
              <span>{text}</span>
            </div>
          </Link>
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
