"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

export function BackgroundWaves({ children }: { children: React.ReactNode }) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col pt-10 gap-4 px-4 bg-transparent"
      >
        {children}
      </motion.div>
    </AuroraBackground>
  );
}
