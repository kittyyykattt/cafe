"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "12%", delay: 0, duration: 18 },
  { left: "28%", delay: 3, duration: 16 },
  { left: "43%", delay: 1.5, duration: 20 },
  { left: "67%", delay: 2.2, duration: 17 },
  { left: "82%", delay: 0.9, duration: 19 },
];

export function AtmosphereLayer() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.left}
          className="absolute -bottom-12 h-2 w-2 rounded-full bg-amber-100/40 blur-[1px]"
          style={{ left: particle.left }}
          animate={{
            y: [0, -700],
            x: [0, 8, -6, 4],
            opacity: [0, 0.35, 0.2, 0],
            scale: [0.8, 1.2, 0.9],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
