"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import triplanceImg from "../../assets/triplance.png";
import foodhubImg from "../../assets/Foodhub.png";
import rentcarImg from "../../assets/RentCar.jpg";

// Data extracted from your GitHub repos and portfolio context
const projects = [
  {
    id: 1,
    title: "Triplance – Travel Agency Management Portal",
    description:
      "A comprehensive travel agency portal featuring complex database relationships, booking management, and an interactive UI. Built with a focus on robust architecture and seamless user experience.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Express",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "stripe",
    ],
    githubLink: "https://github.com/neamatullah01/triplance",
    liveLink: "https://triplanceworld.vercel.app", 
    image: triplanceImg, 
  },
  {
    id: 2,
    title: "FoodHub – Multi-Vendor Food Delivery Platform",
    description:
      "A full-stack food delivery application equipped with role-based dashboards (Admin, Vendor, User), secure authentication, and real-time order tracking capabilities.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    githubLink: "https://github.com/neamatullah01/foodhub-fullstack",
    liveLink: "https://foodhub-delivery.vercel.app",
    image: foodhubImg,
  },
  {
    id: 3,
    title: "Vehicle Rental Architecture & Database Design",
    description:
      "A robust backend-focused project showcasing advanced database design. Includes comprehensive Entity-Relationship Diagrams (ERD) and complex SQL queries optimized for a scalable vehicle rental system.",
    techStack: ["TypeScript", "Express", "Prisma", "PostgreSQL"],
    githubLink:
      "https://github.com/neamatullah01/vehicle-rental-system-database-design-sql-queries",
    liveLink: null,
    image: rentcarImg,
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-20 flex flex-col items-center">
        <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase mb-3">
          Portfolio
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl">
          Showcasing my best work in full-stack web development, database
          architecture, and design.
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-24">
        {projects.map((project, index) => {
          // Determine if the layout should be reversed (even index = normal, odd index = reversed)
          const isReversed = index % 2 !== 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col gap-8 items-center ${
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Project Image Container */}
              <div className="w-full lg:w-1/2 group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 aspect-video flex items-center justify-center">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  placeholder="blur"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                /> 
              </div>

              {/* Project Details Container */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <div className="bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-xl mb-6 backdrop-blur-sm">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white font-medium transition-all"
                  >
                    <FaGithub className="text-lg" />
                    Code
                  </a>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 bg-purple-100 hover:bg-purple-200 dark:bg-purple-600/20 dark:hover:bg-purple-600/40 border border-purple-200 dark:border-purple-500/50 rounded-lg text-purple-700 dark:text-white font-medium transition-all"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
