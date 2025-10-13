import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Projects | Aidrin Peraira",
  description: "Explore Aidrin's development projects.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="space-y-8">{children}</main>;
}
