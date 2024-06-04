"use client";

import ScrollToTop from "react-scroll-to-top";
import Image from "next/image";
import { Up } from "@/public/svg";
import TextSection from "@/app/components/sections/TextSection/TextSection";
import List from "@/app/components/partials/List/List";
import { arrListOne, arrListTwo } from "@/app/data/lists";
import FeatureSection from "@/app/components/sections/FeatureSection/FeatureSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container">
        content
        <TextSection
          title="I'M A FRONT-END DEVELOPER WITH 4+ YEARS OF EXPERIENCE"
          text="Greetings, let's delve into my background. Originally from Ukraine, I
        now reside in Warsaw. Fluent in English, and Polish is on my radar - I'm
        bilingual, with Russian and Ukrainian as my mother tongues.
        Professionally, I've worked with prominent companies and startups, and I
        have experience as a freelancer. When it comes to delivering results,
        you can rely on me - I am dependable, adaptable, and committed to
        meeting my clients' needs. There's no coding challenge I can't handle."
        />
      </div>

      <FeatureSection />

      <div className="container">
        <TextSection
          reversed
          title="I CAN TURN YOUR IDEAS INTO WEBSITE"
          text="Looking to boost your business with a catchy landing page, or perhaps craft a web app that not only looks good but also brings in revenue? I'm here to lend a hand!
                Just shoot me an email detailing your vision, and I'll provide you with an estimate, outline the technical requirements, offer some handy advice on bringing your idea to life."
        />

        <TextSection
          column
          title="STACK"
          text="Below, I've listed the main technologies I work with. The actual list of technologies is constantly expanding because I'm always learning something new."
        >
          <div className="flex text-center gap-20 lg:gap-40">
            <List arr={arrListOne} />
            <List arr={arrListTwo} />
          </div>
        </TextSection>

        <ScrollToTop
          style={{
            background: "none",
            boxShadow: "none",
          }}
          className="text-[var(--black)] font-bold sm:mb-20 -mb-6"
          smooth
          component={<Image src={Up} alt="arrow" width={40} height={40} />}
        />
      </div>
    </main>
  );
}
