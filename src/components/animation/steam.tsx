"use client";

import { motion } from "framer-motion";

const wisps = [
  { x: 64, delay: 0, duration: 6.8, drift: -8 },
  { x: 86, delay: 1.2, duration: 7.4, drift: 7 },
  { x: 108, delay: 0.7, duration: 7.1, drift: -5 },
  { x: 76, delay: 2.1, duration: 7.8, drift: 9 },
];

export function SteamEffect() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-24 mx-auto h-72 w-64 opacity-55">
      <svg viewBox="0 0 180 220" className="h-full w-full">
        <defs>
          <linearGradient id="steamGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(250,243,232,0.08)" />
            <stop offset="60%" stopColor="rgba(250,243,232,0.34)" />
            <stop offset="100%" stopColor="rgba(250,243,232,0.02)" />
          </linearGradient>
          <filter id="steamBlur">
            <feGaussianBlur stdDeviation="3.8" />
          </filter>
        </defs>

        {wisps.map((wisp) => (
          <motion.path
            key={wisp.x}
            d={`M ${wisp.x} 188 C ${wisp.x - 14} 162, ${wisp.x + 12} 132, ${wisp.x - 8} 108 C ${wisp.x - 21} 92, ${wisp.x + 8} 68, ${wisp.x - 6} 42`}
            stroke="url(#steamGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            filter="url(#steamBlur)"
            initial={{ pathLength: 0.08, opacity: 0, x: 0, y: 4 }}
            animate={{
              pathLength: [0.08, 0.55, 1],
              opacity: [0, 0.46, 0],
              x: [0, wisp.drift, wisp.drift * 1.2],
              y: [0, -10, -18],
            }}
            transition={{
              duration: wisp.duration,
              delay: wisp.delay,
              ease: [0.45, 0.03, 0.55, 0.95],
              repeat: Infinity,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
