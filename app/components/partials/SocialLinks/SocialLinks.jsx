import React from "react";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

const SocialLinks = ({
  arr = [],
  sectionStyles = "",
  iconWithText = false,
  horizontalDisplay = false,
}) => {
  return (
    <div className={cn(sectionStyles, { "flex gap-6": horizontalDisplay })}>
      {arr.map(({ text, svg, href }) => (
        <Link
          key={text}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          aria-label={`Visit ${text}`}
          passHref
        >
          <div
            className={cn(
              "flex items-center justify-center font-bold gap-2  hover:animate-pulse",
              { "mb-2": !horizontalDisplay },
            )}
          >
            <Image src={svg} alt={`${text} icon`} width={20} height={20} />
            <span
              className={cn("text-[14px] lg:text-[16px]", {
                hidden: !iconWithText,
              })}
            >
              {text}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
