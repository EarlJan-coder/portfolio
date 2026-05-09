"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Blue Collar Inventory",
    description: "An inventory management system tailored for small businesses, featuring real-time stock tracking and automated reorder alerts.",
    tags: ["PostgreSQL", "Node.js", "Next.js", "React", "Typescript", "Tailwind CSS"],
    color: "pink" as const,
    link: "https://blue-collar-ims.vercel.app",
  },
];

export const Projects = () => {
  return (
    <section id="work" className="py-24 px-4 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="02" label="WORK" variant="pink" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
