import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Photography | Aidrin Peraira",
  description: "Explore Aidrin's hobby photography.",
};

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="space-y-8 dark">{children}</main>;
}
