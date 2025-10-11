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
    companyName: "Innovate Solutions Inc.",
    compnayLogo: "I",
    role: "Senior Software Engineer",
    from: "Feb 2024",
    to: "Present",
    description: [
      "Architected and developed scalable microservices using Go and gRPC, handling over 1 million daily requests.",
      "Led the migration of a monolithic application to a cloud-native architecture on Google Cloud Platform (GCP), resulting in a 40% reduction in operational costs.",
      "Implemented a CI/CD pipeline using Jenkins and Docker, automating testing and deployment processes and reducing deployment time by 75%.",
      "Mentored junior developers, conducted code reviews, and established best practices for software development within the team.",
      "Designed and implemented a real-time data processing pipeline using Apache Kafka and Flink.",
    ],
  },
  {
    companyName: "Tech Solutions Global",
    compnayLogo: "T",
    role: "Software Engineer",
    from: "Jun 2022",
    to: "Jan 2024",
    description: [
      "Developed and maintained a customer-facing web application using a MERN stack (MongoDB, Express.js, React, Node.js).",
      "Integrated third-party APIs like Stripe for payment processing and Twilio for SMS notifications.",
      "Wrote comprehensive unit and integration tests using Jest and React Testing Library, achieving 90% code coverage.",
      "Collaborated with product managers and designers in an Agile environment to deliver new features on a bi-weekly sprint cycle.",
      "Optimized database queries in MongoDB, improving API response times by an average of 200ms.",
    ],
  },
  {
    companyName: "Digital Creations",
    compnayLogo: "D",
    role: "Junior Web Developer",
    from: "May 2021",
    to: "May 2022",
    description: [
      "Assisted in the development of client websites using HTML, CSS, JavaScript, and WordPress.",
      "Fixed bugs and implemented minor features on existing web applications.",
      "Participated in daily stand-ups and contributed to sprint planning sessions.",
      "Gained experience with version control systems, primarily Git and GitHub.",
      "Created responsive web layouts using CSS Flexbox and Grid.",
    ],
  },
  {
    companyName: "Academic University",
    compnayLogo: "A",
    role: "Research Assistant",
    from: "Sep 2020",
    to: "Apr 2021",
    description: [
      "Developed data analysis scripts in Python using Pandas and NumPy to process experimental results.",
      "Contributed to a research paper on machine learning algorithms for pattern recognition.",
      "Maintained the lab's computational resources and software environment.",
    ],
  },
];

type Props = {};

export const Experience = (props: Props) => {
  return (
    <div className="flex  flex-col  justify-between" id="experience">
      <div>
        <div className="text-black text-2xl font-bold tracking-wide">
          My Experience
        </div>

        <div className="text-black mt-1 font-semibold inline-block w-full md:text-md tracking-wide text-justify pt-2">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Product Information</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Shipping Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express
                  shipping ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track
                  your shipment in real-time through our dedicated tracking
                  portal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Return Policy</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
