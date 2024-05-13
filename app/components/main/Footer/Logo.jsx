import React from "react";
import Link from "next/link";

const Logo = ({ logoStyles }) => {
  return (
    <div className={logoStyles}>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/IlyaKrapivnoy"
      >
        Krapivnoy
      </Link>
    </div>
  );
};

export default Logo;
