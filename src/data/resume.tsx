import { HomeIcon, NotebookIcon } from "lucide-react";
import { Icons } from "@/components/icons";

import React from "react";

// 1. Define the shape of your data
interface ResumeData {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: readonly string[]; // readonly because we will use 'as const'
  navbar: readonly {
    href: string;
    icon: React.ComponentType<any>; // For icons passed as component references (e.g., HomeIcon)
    label: string;
  }[];
  contact: {
    email: string;
    tel: string;
    social: Record<
      string,
      {
        name: string;
        url: string;
        icon: React.ComponentType<any>;
        navbar: boolean;
      }
    >;
  };
  work: readonly {
    company: string;
    href: string;
    badges: readonly string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string; // or string[] based on your usage
  }[];
  education: readonly {
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
  }[];
  projects: readonly {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: string;
    technologies: readonly string[];
    links: readonly {
      type: string;
      href: string;
      icon: React.ReactNode; // For icons passed as JSX (e.g., <Icons.globe />)
    }[];
    image: string;
    video: string;
  }[];
  hackathons: readonly any[]; // You can define a specific Hackathon type if needed
}

export const DATA = {
  name: "Aidrin Peraira",
  initials: "AP",
  url: "https://github.com/aidrin",
  location: "Kerala, India",
  locationLink: "https://www.google.com/maps/place/Kerala",
  description:
    "From blueprints to bytes. A Full Stack Developer and Civil Engineer constructing efficient and user-centric digital solutions.",
  summary:
    "I'm a Full Stack Developer with a unique foundation in Civil Engineering and entrepreneurship. My journey into tech was born from a practical need to automate my own business operations, which sparked a passion for solving problems with code. This background gives me a distinct perspective on project management, client needs, and end-to-end execution. I build full-stack applications using modern technologies including React, Node.js, TypeScript, and SQL.",
  avatarUrl:
    "https://res.cloudinary.com/localshopcloudinary/image/upload/v1765989688/Portfolio_zoyojz.png",
  skills: [
    "React",
    "Node.js",
    "TypeScript",
    "SQL",
    "Express.js",
    "MongoDB",
    "Next.js",
    "AutoCAD",
    "Revit",
    "Lumion",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aidrin@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aidrin",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/aidrin",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Brototype (Brocamp)",
      href: "",
      badges: [],
      location: "Kochi, Kerala",
      title: "Full Stack Developer Trainee & Communication Coordinator",
      logoUrl:
        "https://res.cloudinary.com/localshopcloudinary/image/upload/v1765987885/brototypelogo._ugsqyk.png",
      start: "Oct 2024",
      end: "Present",
      description:
        "Undergoing an intensive, project-based full-stack development program focused on the MERN stack (MongoDB, Express.js, React, Node.js), SQL, and TypeScript. Developed 'Local Shop', a full-stack B2B e-commerce platform for bulk purchases, from concept to deployment. Currently architecting and building a car-pooling web application as a major project. Serve as a Senior Communication Coordinator, mentoring and assisting in the training of other students in the program.",
    },
    {
      company: "Navam Architecture",
      href: "",
      badges: [],
      location: "Kerala",
      title: "Founder & Civil Engineer",
      logoUrl:
        "https://res.cloudinary.com/localshopcloudinary/image/upload/v1765991121/Navam_Logo_w4mhnl.png",
      start: "Oct 2023",
      end: "Sept 2024",
      description:
        "Founded and managed a freelance civil engineering practice, overseeing all aspects from client acquisition to project completion. Designed architectural plans, elevations, and 3D models for residential projects using AutoCAD, Revit, and Lumion. Conducted lead generation through digital marketing and handled sales and client negotiations to secure projects. Managed end-to-end project execution, including cost estimation, material procurement, labor management, and on-site supervision. Prepared and submitted all necessary technical drawings and documentation to government departments for permits and approvals.",
    },
    {
      company: "Onesto & Mercado Pvt. Ltd.",
      href: "",
      badges: [],
      location: "Kerala",
      title: "Site Engineer",
      logoUrl:
        "https://res.cloudinary.com/localshopcloudinary/image/upload/v1765987892/OmcLogo_bez9ns.png",
      start: "Sept 2021",
      end: "Sept 2023",
      description:
        "Supervised the end-to-end construction of more than five residential building and interior projects across Kerala. Resolved on-site technical conflicts and enforced quality control to ensure all work met project specifications and standards. Managed site logistics, including the timely procurement and availability of construction materials to prevent project delays. Maintained detailed records of purchases, material usage, and labor, contributing to waste reduction and accurate financial tracking. Collaborated with architects, designers, and contractors to ensure seamless project execution and compliance with regulations.",
    },
  ],
  education: [
    {
      school: "APJ Abdul Kalam Technological University",
      href: "",
      degree: "B.Tech - Civil Engineering",
      logoUrl:
        "https://res.cloudinary.com/localshopcloudinary/image/upload/v1765990903/KtuLogo_ex6fux.jpg",
      start: "2018",
      end: "2022",
    },
    {
      school: "CBSE",
      href: "",
      degree: "12th Standard",
      logoUrl:
        "https://res.cloudinary.com/localshopcloudinary/image/upload/v1765990903/CBSE-logo_nlocoj.jpg",
      start: "2018",
      end: "2018",
    },
    {
      school: "CBSE",
      href: "",
      degree: "10th Standard",
      logoUrl:
        "https://res.cloudinary.com/localshopcloudinary/image/upload/v1765990903/CBSE-logo_nlocoj.jpg",
      start: "2016",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Local Shop",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "A full-stack B2B e-commerce platform designed for bulk purchases, built from concept to deployment.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Car-Pooling App",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description:
        "Currently architecting and building a car-pooling web application as a major project.",
      technologies: ["React", "TypeScript", "SQL"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as ResumeData;
