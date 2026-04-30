"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const educationData = [
  {
    title: "SSC",
    subtitle: "Telihaty High School",
    date: "2009 - 2019",
  },
  {
    title: "HSC",
    subtitle: "Notre Dame College Mymensingh",
    date: "2019 - 2021",
  },
  {
    title: "B.Sc in CSE",
    subtitle: "Daffodil International University",
    date: "2022 - 2026",
  },
];

const experienceData = [
  {
    title: "Full-Stack Web Developer",
    subtitle: "Freelance & Open Source",
    date: "2023 - Present",
  },
  {
    title: "Competitive Programmer",
    subtitle: "Problem Solving & Algorithms",
    date: "2022 - Present",
  },
];

export default function Qualification() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");

  const currentData = activeTab === "education" ? educationData : experienceData;

  return (
    <section id="qualification" className="py-24 px-4 md:px-8 w-full max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Qualification
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-10">
          My personal journey
        </p>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-6 sm:gap-12">
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2 text-xl md:text-2xl font-medium transition-all duration-300 ${
              activeTab === "experience"
                ? "text-purple-600 dark:text-purple-400"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            <Briefcase className="w-6 h-6 md:w-8 md:h-8" />
            Experience
          </button>

          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 text-xl md:text-2xl font-medium transition-all duration-300 ${
              activeTab === "education"
                ? "text-purple-600 dark:text-purple-400"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />
            Education
          </button>
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="relative mt-12 md:mt-20">
        {/* Central Vertical Line (hidden on small screens to place items on one side, but let's make it alternating on md+ and left-aligned on sm) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-white/20 -translate-x-1/2 rounded-full" />

        <div className="flex flex-col gap-12">
          {currentData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.title + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center w-full ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                } justify-start`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-white dark:border-[#0a0a0a] -translate-x-1/2 shadow-[0_0_0_4px_rgba(168,85,247,0.2)] z-10" />

                {/* Content Card */}
                <div
                  className={`w-[calc(100%-3rem)] md:w-[45%] ml-12 md:ml-0 ${
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 mb-3 text-sm md:text-base">
                    {item.subtitle}
                  </p>
                  <div
                    className={`flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-500 ${
                      isLeft ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
