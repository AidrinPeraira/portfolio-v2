import { BackgroundWaves } from "@/components/BackgroundWaves";
import Navbar from "@/components/Navbar";
import ProjectsCards from "@/components/ProjectsCards";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Aidrin",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function Projects() {
  return (
    <div className="w-full m-auto dark">
      <BackgroundWaves>
        <div className="max-w-2xl flex flex-col gap-15 py-10 md:pb-[150px]">
          <TextGenerateEffect
            words={"What I've been working on"}
            className="text-black inline-block text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
          />
          <TextGenerateEffect
            words={
              "I have worked on few projects. Here are some which I found intersting to share."
            }
            duration={0.1}
            className="text-black font-medium inline-block max-w-full] md:text-xl"
          />

          <ProjectsCards />
        </div>
        <Navbar />
      </BackgroundWaves>
    </div>

    //need to rework the scroll layout. not good.
    // <div className="w-full  h-screen m-auto">
    //   <ProjectScroll />
    //   <Navbar />
    // </div>
  );
}
