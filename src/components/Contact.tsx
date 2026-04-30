"use client";

import { motion } from "framer-motion";
import { Mail, Send, ArrowRight } from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const contactCards = [
  {
    title: "EMAIL",
    value: "neamat.ullah.dev@gmail.com",
    href: "mailto:neamat.ullah.dev@gmail.com",
    icon: Mail,
    color: "text-red-400",
  },
  {
    title: "LINKEDIN",
    value: "neamatullah01",
    href: "https://www.linkedin.com/in/neamatullah01",
    icon: FaLinkedin,
    color: "text-blue-500",
  },
  {
    title: "TWITTER",
    value: "@01neamat",
    href: "https://x.com/01neamat",
    icon: FaTwitter,
    color: "text-sky-400",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 w-full max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
          Contact Me
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Column: Talk to me */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center w-full">
            Talk to me
          </h3>

          <div className="flex flex-col gap-4 w-full max-w-[280px] sm:max-w-xs mx-auto">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <a
                  key={index}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center p-5 rounded-3xl bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <div className="mb-3 p-2.5 rounded-2xl bg-gray-100 dark:bg-black/20">
                    <Icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <h4 className="text-sm font-semibold tracking-wider text-gray-900 dark:text-white mb-1">
                    {card.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">
                    {card.value}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Write me <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Write me your project */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center w-full">
            Write me your project
          </h3>

          <form className="w-full max-w-sm mx-auto flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            {/* Name Input */}
            <div className="relative">
              <label className="absolute -top-3 left-4 bg-white dark:bg-[#0a0a0a] px-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                Name
              </label>
              <input
                type="text"
                placeholder="Insert your Name"
                className="w-full bg-transparent border border-gray-300 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-purple-500 dark:focus:border-purple-500 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <label className="absolute -top-3 left-4 bg-white dark:bg-[#0a0a0a] px-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                Email
              </label>
              <input
                type="email"
                placeholder="Insert your email"
                className="w-full bg-transparent border border-gray-300 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-purple-500 dark:focus:border-purple-500 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600"
              />
            </div>

            {/* Project Input */}
            <div className="relative">
              <label className="absolute -top-3 left-4 bg-white dark:bg-[#0a0a0a] px-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                Project
              </label>
              <textarea
                placeholder="Write your project"
                rows={5}
                className="w-full bg-transparent border border-gray-300 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-purple-500 dark:focus:border-purple-500 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gray-900 dark:bg-white/5 border border-transparent dark:border-white/10 hover:border-purple-500 dark:hover:border-purple-500/50 text-white transition-all duration-300 w-fit mt-4 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
