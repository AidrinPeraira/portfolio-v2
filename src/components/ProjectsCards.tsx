"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

//data

const projects = [
  {
    title: "LocalShop",
    description:
      "A B2B e-commerce marketplace specifically designed to connect local manufacturers and distributors with retailers.",
    // Note: You should replace this URL with a screenshot of your actual project dashboard
    image:
      "https://res.cloudinary.com/localshopcloudinary/image/upload/v1764970639/LocalShop_xen1ba.jpg",
    liveLink: "https://localshop.aidrinperaira.com",
    githubLink: "https://github.com/AidrinPeraira/local-shop", // Add your actual GitHub link here
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "AWS (EC2)",
    ],
    fullDescription:
      "LocalShop is the digital infrastructure for local supply chains, transforming the chaotic offline process of bulk buying into a streamlined online experience. It solves the problems of fragmented markets, opaque pricing, and tedious manual negotiations by offering a centralized platform for discovery, automated pricing, and secure payments.",
    features: [
      "Smart Discount Logic: Automated tiered pricing (e.g., 'Buy 50, Get 5% Off') calculated in real-time.",
      "Dynamic Product Variants: Combinatorial algorithm to automatically generate SKUs (Size, Color, Grade).",
      "Secure B2B Payments: Integrated Razorpay supporting NEFT/RTGS for high-value wholesale transactions.",
      "Role-Based Access: Dedicated dashboards for Admin (Controller), Sellers, and Buyers.",
      "Scalable Infrastructure: Deployed on AWS EC2 with MongoDB for flexible data modeling.",
    ],
  },
];

export default function ProjectsCards() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActive(null);
      }
    };

    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm h-full w-full z-50"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white hover:bg-gray-100 rounded-full h-8 w-8 shadow-lg z-50"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              className="w-full max-w-3xl max-h-[90vh] flex flex-col bg-white/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </motion.div>

              <div className="overflow-y-auto">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div className="flex-1">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-gray-900 text-2xl md:text-3xl mb-2"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-gray-600 text-base md:text-lg"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <div className="flex gap-3 flex-wrap md:flex-nowrap">
                      {active.liveLink && (
                        <motion.a
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          href={active.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 text-sm rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors whitespace-nowrap"
                        >
                          View Live
                        </motion.a>
                      )}
                      {active.githubLink && (
                        <motion.a
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          href={active.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 text-sm rounded-lg font-semibold bg-gray-800 hover:bg-gray-900 text-white transition-colors whitespace-nowrap"
                        >
                          GitHub
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-3">
                        About
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {active.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {active.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {active.features && active.features.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {active.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-600 mr-2 mt-1">•</span>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className="w-full flex flex-col gap-4">
        {projects.map((project) => (
          <motion.div
            layoutId={`card-${project.title}-${id}`}
            key={project.title}
            onClick={() => setActive(project)}
            className="group cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200/50"
          >
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-6">
              <motion.div
                layoutId={`image-${project.title}-${id}`}
                className="w-full sm:w-48 md:w-56 flex-shrink-0"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-full object-cover"
                />
              </motion.div>

              <div className="flex-1 p-5 sm:py-5 sm:pr-5 sm:pl-0 flex flex-col justify-center">
                <motion.h3
                  layoutId={`title-${project.title}-${id}`}
                  className="font-bold text-gray-900 text-xl md:text-2xl mb-2 transition-colors"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${project.description}-${id}`}
                  className="text-gray-600 text-sm md:text-base mb-3 line-clamp-2"
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-gray-100/80 text-gray-600 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 bg-gray-100/80 text-gray-600 rounded-md text-xs font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                <p className="text-blue-600 text-sm font-medium group-hover:underline">
                  View Details →
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

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
      className="h-5 w-5 text-gray-700"
    >
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
