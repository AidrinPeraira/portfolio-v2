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
    id: "edu-1",
    companyName: "APJ Abdul Kalam Technological University",
    compnayLogo: "KTU",
    logoBg: "bg-rose-100",
    logoColor: "text-rose-800",
    role: "B.Tech - Civil Engineering",
    from: "2018",
    to: "2022",
    description: ["Graduated with a final CGPA of 7.3."],
  },
  {
    id: "edu-2",
    companyName: "CBSE",
    compnayLogo: "12",
    logoBg: "bg-amber-100",
    logoColor: "text-amber-800",
    role: "12th Standard",
    from: "2018",
    to: "",
    description: ["Secured an aggregate of 84% in the final examinations."],
  },
  {
    id: "edu-3",
    companyName: "CBSE",
    compnayLogo: "10",
    logoBg: "bg-teal-100",
    logoColor: "text-teal-800",
    role: "10th Standard",
    from: "2016",
    to: "",
    description: ["Achieved a Cumulative Grade Point Average (CGPA) of 9.2."],
  },
];

type Props = {};

export const Education = (props: Props) => {
  return (
    <div className="flex flex-col justify-between" id="experience">
      <div>
        <div className="text-black text-2xl font-bold tracking-wide">
          Education
        </div>

        <div className="text-black mt-1 font-semibold inline-block w-full md:text-md tracking-wide text-justify pt-2">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
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
