"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => {
        // Read directly from the DOM to bypass all React state delays
        const isCurrentlyDark = document.documentElement.classList.contains("dark");
        setTheme(isCurrentlyDark ? "light" : "dark");
      }}
      aria-label="Toggle theme"
      className="relative flex items-center justify-center w-10 h-10 rounded-full border-[1.5px] border-purple-600/60 dark:border-purple-400/60 bg-purple-600/10 dark:bg-purple-400/15 transition-all shrink-0 z-50 cursor-pointer hover:scale-110 shadow-none dark:shadow-[0_0_10px_rgba(168,85,247,0.2)] hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
    >
      {/* Sun icon is visible only in dark mode via Tailwind 'dark:' variants */}
      <Sun className="w-5 h-5 text-yellow-400 absolute transition-all duration-300 scale-0 -rotate-90 dark:scale-100 dark:rotate-0" />
      
      {/* Moon icon is visible only in light mode via Tailwind 'dark:' variants */}
      <Moon className="w-5 h-5 text-purple-700 absolute transition-all duration-300 scale-100 rotate-0 dark:scale-0 dark:rotate-90" />
    </button>
  );
}
