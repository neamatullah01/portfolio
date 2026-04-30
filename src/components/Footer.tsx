import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/neamatullah01",
    label: "LinkedIn",
    className: "hover:text-blue-500",
  },
  {
    icon: FaGithub,
    href: "https://github.com/neamatullah01",
    label: "GitHub",
    className: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    icon: FaTwitter,
    href: "https://x.com/01neamat",
    label: "Twitter",
    className: "hover:text-sky-400",
  },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Qualification", href: "#qualification" },
  { name: "Projects", href: "#projects" },
];

export function Footer() {
  return (
    <footer className="w-full bg-white/50 dark:bg-black/20 backdrop-blur-lg border-t border-gray-200 dark:border-white/10 pt-16 pb-8 mt-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo / Name */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="#home" className="flex items-center gap-2 group select-none">
              <svg
                viewBox="0 0 40 28"
                width="36"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:scale-110 transition-transform duration-300"
              >
                {/* N */}
                <path
                  d="M3 24 L3 4 L17 24 L17 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-900 dark:text-white"
                />
                {/* U */}
                <path
                  d="M17 4 L17 17 Q17 25 27 25 Q37 25 37 17 L37 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-900 dark:text-white"
                />
                <circle cx="17" cy="4" r="2" fill="#8b5cf6" />
              </svg>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Neamat Ullah
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left max-w-xs">
              Full-Stack Web Developer & AI Enthusiast building modern digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-gray-400 transition-colors duration-300 ${social.className}`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200 dark:border-white/10 text-sm text-gray-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Neamat Ullah. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-purple-500">♥</span> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
