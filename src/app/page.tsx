import { AboutCard } from "@/components/AboutCard";
import { BackgroundWaves } from "@/components/BackgroundWaves";
import HelloCard from "@/components/HelloCard";
import Navbar from "@/components/Navbar";
import { Experience } from "@/components/Experience";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Home() {
  return (
    <div className="w-full m-auto">
      <BackgroundWaves>
        <div className="max-w-2xl flex flex-col gap-15">
          <HelloCard />
          <AboutCard />
          <Experience />
        </div>
        <Navbar />
      </BackgroundWaves>
    </div>
  );
}
