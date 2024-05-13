import React from "react";
import Link from "next/link";
import Image from "next/image";

const SocialLinks = ({ arr, sectionStyles }) => {
  return (
    <div className={sectionStyles}>
      {arr.map(({ text, svg, href }) => (
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
  );
};

export default SocialLinks;
