"use client";

import { useEffect, useState } from "react";

export default function InteractiveUI() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // --- EFFECT: Mouse Tracking & Hover Detection ---
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if the element being hovered is a link, button, or input
      const target = e.target as HTMLElement;
      const isClickable = target.closest(
        'a, button, input, textarea, [role="button"]',
      );

      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // --- EFFECT: Scroll Tracking ---
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);

      setIsVisible(totalScroll > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circleRadius = 22;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <>
      {/* 1. CUSTOM CURSOR */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center transition-all duration-300 ease-out
          ${
            isHovering
              ? // CHANGED: Removed backdrop-blur, made background transparent, thickened border slightly
                "w-16 h-16 bg-transparent border-[1.5px] border-white/80"
              : "w-4 h-4 bg-white/90"
          }
        `}
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* 2. SCROLL TO TOP PROGRESS BUTTON */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[9000] flex items-center justify-center w-14 h-14 rounded-full bg-slate-900/50 backdrop-blur-md text-white transition-all duration-300 hover:bg-slate-800 hover:scale-110 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 absolute"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>

        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="28"
            cy="28"
            r={circleRadius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="28"
            cy="28"
            r={circleRadius}
            stroke="white"
            strokeWidth="3"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-150 ease-out"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </>
  );
}
