"use client";

import ScrollToTop from "react-scroll-to-top";
import Image from "next/image";
import { Up } from "@/public/svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      content
      <ScrollToTop
        style={{
          background: "none",
          boxShadow: "none",
        }}
        className="text-[var(--black)] font-bold sm:mb-20 -mb-6"
        smooth
        component={<Image src={Up} alt="arrow" width={40} height={40} />}
      />
    </main>
  );
}
