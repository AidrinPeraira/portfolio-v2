"use client";

import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";

type Props = {};

const title = "About Me";

export const AboutCard = (props: Props) => {
  return (
    <div className="flex  flex-col  justify-between" id="about-me">
      <div>
        <TextGenerateEffect
          words={title}
          className="text-black text-2xl font-bold tracking-wide"
        />

        <div className="text-gray-500 mt-1 font-semibold inline-block w-full md:text-md tracking-wide text-justify pt-2">
          "I'm a <b className="text-black">Software Engineer</b> with 4 years of
          experience, currently working in the Platform Engineering team at
          Humanforce. I specialise in building scalable systems, and solving
          platform-wide productivity and performance challenges across products
          like Humanforce HR, and Workforce Management - used by 600,000+ users.
          I hold a Bachelor's degree in Computer Science from Queensland
          University of Technology. I enjoy exploring new tech in my free
          time.";
        </div>
      </div>
    </div>
  );
};
