"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconHome,
  IconBuildingBurjAlArab,
  IconCamera,
  IconMicroscope,
} from "@tabler/icons-react";

type Props = {};

function Navbar({}: Props) {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Projects",
      icon: (
        <IconMicroscope className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },

    // {
    //   title: "Designs",
    //   icon: (
    //     <IconBuildingBurjAlArab className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "/architecture-designs",
    // },
    {
      title: "Photography",
      icon: (
        <IconCamera className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/photography",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/aidrinperaira/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/AidrinPeraira",
    },
    {
      title: "Blog",
      icon: (
        <IconBrandMedium className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://medium.com/@aidrin.peraira",
    },
  ];

  return (
    <FloatingDock
      mobileClassName="fixed bottom-8 right-8"
      desktopClassName="fixed bottom-10 left-1/2 -translate-x-1/2"
      items={links}
    />
  );
}

export default Navbar;
