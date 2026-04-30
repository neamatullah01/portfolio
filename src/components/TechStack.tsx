"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Server, Database, Wrench, Cloud, GitBranch, Code2, PenTool } from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiVite,
  SiVercel,
  SiNetlify,
  SiPython,
  SiCplusplus,
  SiC,
  SiElementor,
  SiTypescript,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";

// Complete Data Structure matching the video layout and your skills
const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    categoryIcon: <Layout className="w-4 h-4" />,
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-[#E34F26]" />,
        color: "border-[#E34F26]/30 bg-[#E34F26]/10",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-[#1572B6]" />,
        color: "border-[#1572B6]/30 bg-[#1572B6]/10",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#38B2AC]" />,
        color: "border-[#38B2AC]/30 bg-[#38B2AC]/10",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-[#F7DF1E]" />,
        color: "border-[#F7DF1E]/30 bg-[#F7DF1E]/10",
      },
      {
        name: "React",
        icon: <FaReact className="text-[#61DAFB]" />,
        color: "border-[#61DAFB]/30 bg-[#61DAFB]/10",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black dark:text-white" />,
        color: "border-black/10 bg-black/5 dark:border-white/30 dark:bg-white/5",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    categoryIcon: <Server className="w-4 h-4" />,
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-[#339933]" />,
        color: "border-[#339933]/30 bg-[#339933]/10",
      },
      {
        name: "Express",
        icon: <SiExpress className="text-black dark:text-white" />,
        color: "border-black/10 bg-black/5 dark:border-white/30 dark:bg-white/5",
      },
    ],
  },
  {
    id: "database",
    name: "Database & Cloud",
    categoryIcon: <Database className="w-4 h-4" />,
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-[#47A248]" />,
        color: "border-[#47A248]/30 bg-[#47A248]/10",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-[#4169E1]" />,
        color: "border-[#4169E1]/30 bg-[#4169E1]/10",
      },
      {
        name: "Prisma",
        icon: <SiPrisma className="text-black dark:text-white" />,
        color: "border-black/10 bg-black/5 dark:border-white/30 dark:bg-white/5",
      },
    ],
  },
  {
    id: "tools",
    name: "Development Tools",
    categoryIcon: <Wrench className="w-4 h-4" />,
    skills: [
      {
        name: "Vite",
        icon: <SiVite className="text-[#646CFF]" />,
        color: "border-[#646CFF]/30 bg-[#646CFF]/10",
      },
    ],
  },
  {
    id: "hosting",
    name: "Hosting & Deployment",
    categoryIcon: <Cloud className="w-4 h-4" />,
    skills: [
      {
        name: "Vercel",
        icon: <SiVercel className="text-black dark:text-white" />,
        color: "border-black/10 bg-black/5 dark:border-white/30 dark:bg-white/5",
      },
      {
        name: "Netlify",
        icon: <SiNetlify className="text-[#00C7B7]" />,
        color: "border-[#00C7B7]/30 bg-[#00C7B7]/10",
      },
      {
        name: "Render",
        icon: <Cloud className="text-blue-500" />,
        color: "border-blue-500/30 bg-blue-500/10",
      },
    ],
  },
  {
    id: "version",
    name: "Version Control",
    categoryIcon: <GitBranch className="w-4 h-4" />,
    skills: [
      {
        name: "Git",
        icon: <BsGit className="text-[#F05032]" />,
        color: "border-[#F05032]/30 bg-[#F05032]/10",
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-black dark:text-white" />,
        color: "border-black/10 bg-black/5 dark:border-white/30 dark:bg-white/5",
      },
    ],
  },
  {
    id: "languages",
    name: "Languages",
    categoryIcon: <Code2 className="w-4 h-4" />,
    skills: [
      {
        name: "Python",
        icon: <SiPython className="text-[#3776AB]" />,
        color: "border-[#3776AB]/30 bg-[#3776AB]/10",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-[#3178C6]" />,
        color: "border-[#3178C6]/30 bg-[#3178C6]/10",
      },
      {
        name: "C",
        icon: <SiC className="text-[#A8B9CC]" />,
        color: "border-[#A8B9CC]/30 bg-[#A8B9CC]/10",
      },
      {
        name: "C++",
        icon: <SiCplusplus className="text-[#00599C]" />,
        color: "border-[#00599C]/30 bg-[#00599C]/10",
      },
    ],
  },
  {
    id: "design",
    name: "Design Tools",
    categoryIcon: <PenTool className="w-4 h-4" />,
    skills: [
      {
        name: "Figma",
        icon: <FaFigma className="text-[#F24E1E]" />,
        color: "border-[#F24E1E]/30 bg-[#F24E1E]/10",
      },
    ],
  },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  // Get skills for the currently active category
  const activeSkills =
    skillCategories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="tech-stack" className="py-24 px-4 md:px-8 w-full max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16 flex flex-col items-center">
        <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase mb-3">
          My Expertise
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Skills & Technologies
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl">
          A comprehensive toolkit for building modern, scalable web applications
          and exploring AI.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 max-w-5xl mx-auto">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`
              px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300
              border flex items-center gap-3 backdrop-blur-sm cursor-pointer
              ${
                activeCategory === category.id
                  ? "bg-purple-100/80 border-purple-500 text-purple-700 dark:bg-purple-600/20 dark:text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                  : "bg-gray-100/50 border-black/10 text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-200/50 dark:bg-white/5 dark:border-white/10 dark:text-gray-400 dark:hover:text-white dark:hover:border-gray-500 dark:hover:bg-white/10"
              }
            `}
          >
            {category.categoryIcon}
            <span>{category.name}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
                activeCategory === category.id
                  ? "bg-purple-200 text-purple-800 dark:bg-purple-500/30 dark:text-purple-200"
                  : "bg-black/10 text-gray-600 dark:bg-black/50 dark:text-gray-400"
              }`}
            >
              {category.skills.length}
            </span>
          </button>
        ))}
      </div>

      {/* Animated Skill Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {activeSkills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              layout
              className={`
                flex flex-col items-center justify-center p-6 rounded-2xl
                border backdrop-blur-md transition-transform hover:-translate-y-2 cursor-pointer
                ${skill.color}
              `}
            >
              <div className="text-4xl md:text-5xl mb-4 drop-shadow-lg">
                {skill.icon}
              </div>
              <h3 className="text-gray-900 dark:text-white font-medium text-sm md:text-base text-center">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
