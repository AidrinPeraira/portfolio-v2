"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { useOutsideClick } from "@/hooks/useOtsideClick";
import Image from "next/image"; // Import Next.js Image

const BLUR_FADE_DELAY = 0.04;

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black dark:text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

export default function ProjectsPage() {
  const [active, setActive] = useState<(typeof DATA.projects)[number] | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="projects" className="py-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px]">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications.
            </p>
          </div>
        </div>
      </BlurFade>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-10"
            />
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] h-fit max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden z-[100] shadow-2xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                {/* Replaced img with Image */}
                <Image
                  src={active.image || "/placeholder-project.png"}
                  alt={active.title}
                  width={600}
                  height={400}
                  className="w-full h-64 lg:h-80 object-cover object-top"
                />
              </motion.div>

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-800 dark:text-neutral-200 text-2xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`dates-${active.title}-${id}`}
                      className="text-neutral-500 dark:text-neutral-400 text-sm mb-4"
                    >
                      {active.dates}
                    </motion.p>
                  </div>

                  <div className="flex gap-2">
                    {active.links.map((link, idx) => (
                      <motion.a
                        key={idx}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={link.href}
                        target="_blank"
                        className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base"
                >
                  <p className="mb-4">{active.description}</p>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {active.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-semibold bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ul className="max-w-[1000px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {DATA.projects.map((project, index) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 2 + index * 0.05}
          >
            <motion.div
              layoutId={`card-${project.title}-${id}`}
              onClick={() => setActive(project)}
              className="group flex flex-col bg-card hover:bg-accent/50 border rounded-xl cursor-pointer overflow-hidden transition-all duration-300"
            >
              <motion.div
                layoutId={`image-${project.title}-${id}`}
                className="overflow-hidden relative h-48 w-full"
              >
                {/* Replaced img with Image */}
                <Image
                  src={project.image || "/placeholder-project.png"}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <div className="p-4 flex flex-col gap-2">
                <motion.h3
                  layoutId={`title-${project.title}-${id}`}
                  className="font-semibold text-foreground text-lg"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  layoutId={`dates-${project.title}-${id}`}
                  className="text-muted-foreground text-xs"
                >
                  {project.dates}
                </motion.p>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] bg-secondary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] text-muted-foreground self-center">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </BlurFade>
        ))}
      </ul>
    </section>
  );
}
