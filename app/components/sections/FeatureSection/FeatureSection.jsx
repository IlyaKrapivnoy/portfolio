import React from "react";
import Image from "next/image";
import bgImg from "@/public/features.jpg";
import { bgImgList } from "@/app/data/lists";

const FeatureSection = () => {
  return (
    <div className="relative">
      <Image
        src={bgImg}
        alt="Picture of the author"
        placeholder="blur"
        className="opacity-40 z-0"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-center">
          {bgImgList.map((item) => (
            <p
              key={item}
              className="sm:font-bold mb-3 md:mb-4 text-[16px] md:text-2xl lg:text-4xl "
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
