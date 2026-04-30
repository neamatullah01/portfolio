"use client";

import { motion } from "framer-motion";
import { Send, ArrowDown, Sparkles, FolderGit2 } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/neamatullah01",
    label: "LinkedIn",
    className: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: FaGithub,
    href: "https://github.com/neamatullah01",
    label: "GitHub",
    className: "text-gray-800 dark:text-gray-100",
  },
  {
    icon: FaTwitter,
    href: "https://x.com/01neamat",
    label: "X / Twitter",
    className: "text-sky-500 dark:text-sky-400",
  },
];

const roles = ["Web Developer", "Problem Solver", "AI Enthusiast"];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayText(currentRole.slice(0, displayText.length - 1)),
        50,
      );
    } else {
      timeout = setTimeout(
        () => setDisplayText(currentRole.slice(0, displayText.length + 1)),
        80,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      <div className="container relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 xl:gap-12 items-center">
        {/* Left Social Bar — hidden on mobile, shown on lg+ */}
        <motion.div
          initial={mounted ? { opacity: 0, x: -50 } : false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:flex flex-col gap-5 absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20"
        >
          {socialLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <Link
                key={idx}
                href={link.href}
                aria-label={link.label}
                className="w-11 h-11 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center hover:scale-110 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                <Icon className={`w-5 h-5 ${link.className}`} />
              </Link>
            );
          })}
        </motion.div>

        {/* Left Content */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 50 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 z-10 text-center lg:text-left lg:pl-32 xl:pl-40"
        >
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-medium text-gray-500 dark:text-gray-300 mb-2 flex items-center gap-3 justify-center lg:justify-start">
              Hey, I&apos;m
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="inline-block text-xl md:text-2xl"
              >
                👋
              </motion.span>
            </h2>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold tracking-tight mb-3 whitespace-nowrap">
              Neamat Ullah
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-400">
              I am a{" "}
              <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                {displayText}
                <span className="animate-blink ml-[1px] inline-block w-[2px] h-[1em] bg-gradient-to-b from-blue-400 to-cyan-400 align-middle rounded-sm" />
              </span>
            </p>
          </div>

          <div className="space-y-1 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            <p>🚀 Turning ideas into Stunning Websites 💻</p>
            <p>| Available for projects and collaborations 🌟</p>
          </div>

          {/* Mobile social links */}
          <div className="flex items-center gap-3 justify-center lg:hidden">
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <Link
                  key={idx}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center hover:scale-110 transition-all duration-200"
                >
                  <Icon className={`w-4 h-4 ${link.className}`} />
                </Link>
              );
            })}
          </div>

          {/* Animated Say Hello Button */}
          <div className="pt-2 flex justify-center lg:justify-start">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium text-sm sm:text-base overflow-hidden border border-black/15 dark:border-white/10 text-gray-800 dark:text-white shadow-sm transition-all duration-300 hover:shadow-violet-500/20 hover:shadow-lg hover:border-violet-400/50 hover:scale-[1.03]"
            >
              {/* Shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              {/* Bg fill */}
              <span className="absolute inset-0 bg-black/5 dark:bg-white/5 group-hover:bg-violet-500/10 dark:group-hover:bg-violet-500/15 transition-colors duration-300 rounded-full" />
              <span className="relative z-10">Say Hello</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.span>
            </a>
          </div>
        </motion.div>

        {/* Right Content — Profile Image & Stats */}
        <motion.div
          initial={mounted ? { opacity: 0, scale: 0.8 } : false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center min-h-[380px] sm:min-h-[440px] md:min-h-[500px]"
        >
          <div className="relative w-[260px] h-[310px] sm:w-[300px] sm:h-[360px] md:w-[360px] md:h-[420px] lg:w-[380px] lg:h-[440px]">
            {/* Subtle animated glowing ring matching the blob shape */}
            <motion.div
              animate={{ scale: [1, 1.03, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -inset-2 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-cyan-500/30 blur-xl"
            />
            {/* Solid white/glass glowing border edge for the blob shape */}
            <div className="absolute -inset-[3px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-white/50 dark:bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.4)] dark:shadow-[0_0_20px_rgba(255,255,255,0.15)]" />

            {/* Profile container */}
            <div className="relative inset-0 w-full h-full bg-gradient-to-br from-gray-100/90 to-white/80 dark:from-gray-900/80 dark:to-black/80 backdrop-blur-md rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-2xl overflow-hidden border border-white/20 dark:border-white/10">
              <Image
                src="/profile-v2.png"
                alt="Neamat Ullah"
                fill
                className="object-cover object-bottom"
                priority
              />
            </div>

            {/* Stat Badge — Top Right */}
            <motion.div
              initial={mounted ? { opacity: 0, x: 50 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute top-6 -right-4 sm:-right-8 md:-right-2 lg:-right-8 bg-white/80 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-xl z-20"
            >
              <svg
                className="w-5 h-5 text-gray-700 dark:text-white shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
              <div className="flex flex-col items-center">
                <div className="font-bold text-xl leading-none text-gray-900 dark:text-white">
                  120
                </div>
                <div className="text-[11px] leading-tight text-gray-500 dark:text-gray-400 font-medium">
                  Problem
                  <br />
                  Solving
                </div>
              </div>
            </motion.div>

            {/* Stat Badge — Left */}
            <motion.div
              initial={mounted ? { opacity: 0, x: -50 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute top-1/2 -left-12 sm:-left-16 md:-left-12 lg:-left-20 -translate-y-1/2 bg-white/80 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 px-3 py-2 rounded-xl flex items-center gap-2 shadow-xl z-20"
            >
              <Sparkles className="w-5 h-5 text-violet-500 shrink-0" />
              <div>
                <div className="font-bold text-lg leading-none text-gray-900 dark:text-white">
                  Fresher
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Enthusiastic
                  <br />
                  Learner
                </div>
              </div>
            </motion.div>

            {/* Stat Badge — Bottom */}
            <motion.div
              initial={mounted ? { opacity: 0, y: 50 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute -bottom-8 right-6 sm:right-12 md:right-8 lg:right-12 bg-white/80 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 px-3 py-2 rounded-xl flex items-center gap-2 shadow-xl z-20"
            >
              <FolderGit2 className="w-5 h-5 text-cyan-500 shrink-0" />
              <div>
                <div className="font-bold text-lg leading-none text-gray-900 dark:text-white">
                  30+
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Finished
                  <br />
                  Projects
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={mounted ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 flex items-center gap-2 text-gray-400 dark:text-gray-400 text-sm"
      >
        <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-gray-400 rounded-full"
          />
        </div>
        <span>
          Scroll Down <ArrowDown className="inline w-3 h-3" />
        </span>
      </motion.div>
    </section>
  );
}
