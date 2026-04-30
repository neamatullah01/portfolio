"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Download,
  Code,
  Database,
  Terminal,
  Globe,
  Cpu,
  Sparkles,
} from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50/50 dark:bg-black/20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left Side: AI Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-[300px] h-[360px] sm:w-[380px] sm:h-[460px] lg:w-[420px] lg:h-[520px]">
              {/* Glassmorphic glowing border */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 blur-3xl rounded-3xl" />
              <div className="absolute -inset-[3px] rounded-[2.5rem] bg-gradient-to-br from-violet-500/50 via-purple-500/30 to-cyan-500/50 opacity-60" />
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/40 dark:border-white/10 shadow-2xl bg-white/10 dark:bg-black/20 backdrop-blur-md">
                <Image
                  src="/about-avatar.png"
                  alt="Neamat Ullah - About"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-4 sm:-left-10 bg-white/90 dark:bg-black/80 border border-black/10 dark:border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md z-10"
              >
                <div className="p-2.5 bg-violet-100 dark:bg-violet-500/20 rounded-xl">
                  <Terminal className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white leading-tight">
                    4th Year
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    CSE Student
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -right-4 sm:-right-8 bg-white/90 dark:bg-black/80 border border-black/10 dark:border-white/10 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md z-10"
              >
                <div className="p-2.5 bg-cyan-100 dark:bg-cyan-500/20 rounded-xl">
                  <Code className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white leading-tight">
                    Full-Stack
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Developer
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 text-gray-600 dark:text-gray-300 order-1 lg:order-2"
          >
            <div className="space-y-5 text-base sm:text-lg leading-relaxed">
              <p>
                I am a{" "}
                <strong className="text-gray-900 dark:text-white font-semibold">
                  Computer Science student
                </strong>{" "}
                passionate about building scalable web applications, solving
                algorithmic challenges, and exploring AI. Currently, I am
                focused on full-stack development and advancing my knowledge in
                artificial intelligence.
              </p>

              <p>
                Outside of tech, I enjoy playing and watching football and
                traveling, which help me stay motivated, disciplined and
                curious, both in life and in learning.
              </p>

              <p>
                I am always looking to collaborate on interesting projects or
                discuss the latest in web tech. Feel free to connect!
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <a
                href="/resume.pdf"
                download
                className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium text-sm sm:text-base overflow-hidden border border-black/15 dark:border-white/10 text-gray-800 dark:text-white shadow-sm transition-all duration-300 hover:shadow-violet-500/20 hover:shadow-lg hover:border-violet-400/50 hover:scale-[1.03]"
              >
                {/* Shimmer sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                {/* Bg fill */}
                <span className="absolute inset-0 bg-black/5 dark:bg-white/5 group-hover:bg-violet-500/10 dark:group-hover:bg-violet-500/15 transition-colors duration-300 rounded-full" />
                <span className="relative z-10">Download Resume</span>
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.4,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
