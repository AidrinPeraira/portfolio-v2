"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const myExp = [
  {
    id: "item-1",
    companyName: "Brototype (Brocamp)",
    compnayLogo: "B",
    logoBg: "bg-yellow-100",
    logoColor: "text-yellow-800",
    role: "Full Stack Developer Trainee & Communication Coordinator",
    from: "Oct 2024",
    to: "Present",
    description: [
      "Undergoing an intensive, project-based full-stack development program focused on the MERN stack (MongoDB, Express.js, React, Node.js), SQL, and TypeScript.",
      "Developed 'Local Shop', a full-stack B2B e-commerce platform for bulk purchases, from concept to deployment.",
      "Currently architecting and building a car-pooling web application as a major project.",
      "Serve as a Senior Communication Coordinator, mentoring and assisting in the training of other students in the program.",
    ],
  },
  {
    id: "item-2",
    companyName: "Navam Architecture (Founder / Freelance)",
    compnayLogo: "N",
    logoBg: "bg-blue-100",
    logoColor: "text-blue-800",
    role: "Founder & Civil Engineer",
    from: "Oct 2023",
    to: "Sept 2024",
    description: [
      "Founded and managed a freelance civil engineering practice, overseeing all aspects from client acquisition to project completion.",
      "Designed architectural plans, elevations, and 3D models for residential projects using AutoCAD, Revit, and Lumion.",
      "Conducted lead generation through digital marketing and handled sales and client negotiations to secure projects.",
      "Managed end-to-end project execution, including cost estimation, material procurement, labor management, and on-site supervision.",
      "Prepared and submitted all necessary technical drawings and documentation to government departments for permits and approvals.",
    ],
  },
  {
    id: "item-3",
    companyName: "Onesto & Mercado Pvt. Ltd.",
    compnayLogo: "O",
    logoBg: "bg-green-100",
    logoColor: "text-green-800",
    role: "Site Engineer",
    from: "Sept 2021",
    to: "Sept 2023",
    description: [
      "Supervised the end-to-end construction of more than five residential building and interior projects across Kerala.",
      "Resolved on-site technical conflicts and enforced quality control to ensure all work met project specifications and standards.",
      "Managed site logistics, including the timely procurement and availability of construction materials to prevent project delays.",
      "Maintained detailed records of purchases, material usage, and labor, contributing to waste reduction and accurate financial tracking.",
      "Collaborated with architects, designers, and contractors to ensure seamless project execution and compliance with regulations.",
    ],
  },
];
type Props = {};

export const Experience = (props: Props) => {
  return (
    <div className="flex flex-col justify-between" id="experience">
      <div>
        <div className="text-black text-2xl font-bold tracking-wide">
          Work Experience
        </div>

        <div className="text-black mt-1 font-semibold inline-block w-full md:text-md tracking-wide text-justify pt-2">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue=""
          >
            {myExp.map((exp) => (
              <AccordionItem value={exp.id} key={exp.id}>
                <AccordionTrigger className="hover:no-underline text-md">
                  <div className="flex justify-between w-full items-center">
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-11 w-11 rounded-full flex items-center justify-center font-bold text-md ${exp.logoBg} ${exp.logoColor}`}
                      >
                        {exp.compnayLogo}
                      </div>
                      <div className="text-left">
                        <p className="font-bold">{exp.companyName}</p>
                        <p className="text-sm text-neutral-500">{exp.role}</p>
                      </div>
                    </div>
                    <div className="text-sm text-neutral-500 text-right">
                      <p>
                        {exp.from} - {exp.to}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-[60px]">
                  <ul className="list-disc space-y-2 text-neutral-600">
                    {exp.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
