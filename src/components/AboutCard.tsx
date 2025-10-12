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
          I'm a <b className="text-black">Full Stack Developer</b> with a unique
          foundation in <b className="text-black">Civil Engineering</b> and
          entrepreneurship. My journey into tech was born from a practical need
          to automate my own business operations, which sparked a passion for
          solving problems with code. This background gives me a distinct
          perspective on project management, client needs, and end-to-end
          execution. <br /> <br /> I build full-stack applications using modern
          technologies including{" "}
          <b className="text-black">React, Node.js, TypeScript, and SQL</b>. My
          projects, such as a multi-vendor e-commerce platform, demonstrate my
          ability to develop complex, scalable, and user-focused solutions.
        </div>
      </div>
    </div>
  );
};
