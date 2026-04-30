"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Home, Code2, GraduationCap, FolderGit2, Send, LayoutGrid, Menu, X, User } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Tech Stack", href: "#tech-stack", icon: Code2 },
  { name: "Qualification", href: "#qualification", icon: GraduationCap },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Contact Me", href: "#contact", icon: Send },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center group select-none">
          <svg
            viewBox="0 0 40 28"
            width="48"
            height="34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:scale-110 transition-transform duration-200"
          >
            {/* N — left leg + diagonal */}
            <path
              d="M3 24 L3 4 L17 24 L17 4"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-900 dark:text-white"
            />
            {/* U — shares left leg with N's right leg (x=17), curves at bottom */}
            <path
              d="M17 4 L17 17 Q17 25 27 25 Q37 25 37 17 L37 4"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-900 dark:text-white"
            />
            {/* Violet accent dot at the join point */}
            <circle cx="17" cy="4" r="2" fill="#8b5cf6" />
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-lg">
          {navLinks.slice(0, 5).map((link, index) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-purple-100 dark:bg-white/10 text-purple-700 dark:text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-yellow-500" : ""}`} />
                {link.name}
              </Link>
            );
          })}
          
          {navLinks.length > 5 && (
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <LayoutGrid className="w-4 h-4" />
                More
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-2 w-48 py-2 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 flex flex-col z-50">
                {navLinks.slice(5).map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                        isActive
                          ? "bg-purple-50 dark:bg-white/10 text-purple-700 dark:text-white font-medium"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-yellow-500" : ""}`} />
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4 shrink-0">
          <ThemeToggle />
          <button 
            className="md:hidden p-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 p-4 rounded-2xl bg-white/90 dark:bg-black/80 backdrop-blur-xl border border-black/10 dark:border-white/10 md:hidden flex flex-col gap-2 shadow-xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive
                    ? "bg-purple-100 dark:bg-white/10 text-purple-700 dark:text-white font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-yellow-500" : ""}`} />
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
