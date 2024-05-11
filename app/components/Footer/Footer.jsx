import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={"flex flex-col text-center border-t-[1px] border-white py-16"}
    >
      <h2 className={"uppercase text-6xl font-black mb-10"}>Contact</h2>
      <Link
        className={"font-extralight mb-1"}
        href="mailto:ilya.krapivnoy@gmail.com"
      >
        ilya.krapivnoy@gmail.com
      </Link>
      <p className={"font-extralight opacity-60"}>
        &copy; {currentYear} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
