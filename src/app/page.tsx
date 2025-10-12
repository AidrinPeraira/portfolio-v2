import { AboutCard } from "@/components/AboutCard";
import { BackgroundWaves } from "@/components/BackgroundWaves";
import HelloCard from "@/components/HelloCard";
import Navbar from "@/components/Navbar";
import { Experience } from "@/components/Experience";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Education } from "@/components/Education";

export default function Home() {
  return (
    <div className="w-full m-auto dark">
      <BackgroundWaves>
        <div className="max-w-2xl flex flex-col gap-15 py-10 md:pb-[150px]">
          <HelloCard />
          <AboutCard />
          <Experience />
          <Education />
        </div>
        <Navbar />
      </BackgroundWaves>
    </div>
  );
}
