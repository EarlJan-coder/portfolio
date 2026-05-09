"use client";

import { motion } from "framer-motion";
import { Tag } from "@/components/ui/Tag";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  color: "pink" | "blue" | "yellow" | "orange" | "purple";
  index: number;
  link: string;
}

export const ProjectCard = ({ title, description, tags, color, index, link }: ProjectCardProps) => {
  const shadows = {
    pink: "shadow-[6px_6px_0px_#FF2E63] hover:shadow-[10px_10px_0px_#FF2E63]",
    blue: "shadow-[6px_6px_0px_#3B82F6] hover:shadow-[10px_10px_0px_#3B82F6]",
    yellow: "shadow-[6px_6px_0px_#FFD60A] hover:shadow-[10px_10px_0px_#FFD60A]",
    orange: "shadow-[6px_6px_0px_#FB5607] hover:shadow-[10px_10px_0px_#FB5607]",
    purple: "shadow-[6px_6px_0px_#8338EC] hover:shadow-[10px_10px_0px_#8338EC]",
  };

  const bgHover = {
    pink: "hover:bg-hot-pink hover:text-white",
    blue: "hover:bg-electric-blue hover:text-white",
    yellow: "hover:bg-sun-yellow",
    orange: "hover:bg-vivid-orange hover:text-white",
    purple: "hover:bg-playful-purple hover:text-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "bg-white border-4 border-border-black p-6 flex flex-col gap-4 transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1",
        shadows[color]
      )}
    >
      <h3 className="text-3xl font-black uppercase tracking-tight">{title}</h3>
      <p className="font-mono text-muted-gray leading-relaxed flex-grow">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className={cn(
          "inline-flex items-center gap-2 font-black uppercase border-2 border-black px-4 py-2 w-fit transition-colors",
          bgHover[color]
        )}>
          View Project <ArrowRight size={20} />
        </div>
      </Link>
    </motion.div>
  );
};
