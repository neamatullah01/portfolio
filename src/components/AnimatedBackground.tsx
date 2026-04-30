"use client";

import { useEffect, useRef } from "react";

const PARTICLES = [
  { left: "10%", delay: "0s",  duration: "12s", size: 3 },
  { left: "25%", delay: "3s",  duration: "18s", size: 2 },
  { left: "40%", delay: "6s",  duration: "14s", size: 4 },
  { left: "55%", delay: "1s",  duration: "20s", size: 2 },
  { left: "70%", delay: "8s",  duration: "15s", size: 3 },
  { left: "85%", delay: "4s",  duration: "17s", size: 2 },
  { left: "15%", delay: "11s", duration: "13s", size: 3 },
  { left: "60%", delay: "7s",  duration: "19s", size: 2 },
  { left: "90%", delay: "2s",  duration: "16s", size: 4 },
  { left: "35%", delay: "9s",  duration: "11s", size: 2 },
];

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* ── Dark mode orbs ── */}
      <div className="dark:block hidden absolute inset-0">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>

      {/* ── Light mode orbs ── */}
      <div className="dark:hidden block absolute inset-0">
        <div className="orb orb-light-1" />
        <div className="orb orb-light-2" />
        <div className="orb orb-light-3" />
        <div className="orb orb-light-4" />
      </div>

      {/* ── Animated dot grid ── */}
      <div className="dot-grid" />

      {/* ── Floating particles ── */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: p.left,
            bottom: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* ── Radial vignette overlay ── */}
      <div
        className="absolute inset-0 dark:opacity-60 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, var(--background) 100%)",
        }}
      />
    </div>
  );
}
