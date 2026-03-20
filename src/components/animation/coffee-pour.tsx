"use client";

import { motion } from "framer-motion";

type CoffeePourProps = {
  active?: boolean;
};

export function CoffeePour({ active = false }: CoffeePourProps) {
  const flowDuration = active ? 2.8 : 4.2;

  return (
    <div className="pointer-events-none absolute -right-1 top-1 hidden h-48 w-40 md:block">
      <svg viewBox="0 0 180 210" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="coffeeFlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8f603b" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#6f4428" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#55311b" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="coffeeHighlight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#efd8bc" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#efd8bc" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d="M96 32 C112 30, 122 37, 126 50"
          stroke="#dcc3a3"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          initial={{ opacity: 0, pathLength: 0.2 }}
          animate={{ opacity: active ? 0.92 : 0.72, pathLength: 1 }}
          transition={{ duration: 1.1, ease: [0.3, 0.05, 0.35, 1] }}
        />
        <motion.circle
          cx="127"
          cy="50"
          r="4.2"
          fill="#dcc3a3"
          animate={{ opacity: active ? [0.7, 1, 0.7] : [0.45, 0.7, 0.45] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d="M126 50 C124 68, 118 90, 112 115"
          stroke="#d8c2a4"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.2 }}
          whileInView={{ pathLength: 1, opacity: 0.55 }}
          viewport={{ once: false, amount: 0.4 }}
          animate={{ opacity: active ? 0.75 : 0.45 }}
          transition={{ duration: 1.5, ease: [0.3, 0.05, 0.35, 1] }}
        />

        <motion.path
          d="M123 51 C121 70, 116 92, 109 124"
          stroke="url(#coffeeFlow)"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          animate={{
            pathLength: active ? [0.35, 0.95, 0.55, 1, 0.42] : [0.2, 0.56, 0.28],
            opacity: active ? [0.68, 1, 0.86, 1, 0.7] : [0.36, 0.64, 0.42],
            strokeWidth: active ? [8.5, 10, 8.8, 9.6, 8.5] : [7.5, 8.3, 7.5],
          }}
          transition={{
            duration: flowDuration,
            ease: [0.35, 0.01, 0.3, 1],
            repeat: Infinity,
          }}
        />

        <motion.path
          d="M121 53 C119 72, 114 95, 107 122"
          stroke="url(#coffeeHighlight)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          animate={{
            opacity: active ? [0.3, 0.68, 0.4, 0.62, 0.3] : [0.16, 0.35, 0.2],
          }}
          transition={{ duration: flowDuration, ease: "easeInOut", repeat: Infinity }}
        />

        <motion.circle
          cx="107"
          cy="126"
          r="2.2"
          fill="#7a4a2a"
          animate={{
            y: active ? [0, 10, 0] : [0, 7, 0],
            opacity: active ? [0, 0.85, 0] : [0, 0.45, 0],
            scale: active ? [0.7, 1.1, 0.7] : [0.7, 0.95, 0.7],
          }}
          transition={{
            duration: active ? 1.2 : 1.9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />

        <ellipse
          cx="86"
          cy="166"
          rx="42"
          ry="9"
          fill="rgba(66,42,24,0.12)"
        />

        <motion.path
          d="M48 126 h74 a21 21 0 0 1 0 42 h-74 a21 21 0 0 1 0 -42 z"
          fill="#f6ead9"
          stroke="#cab091"
          strokeWidth="3.4"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.95, ease: [0.23, 1, 0.32, 1] }}
        />

        <motion.path
          d="M121 136 C138 136, 141 156, 124 158"
          fill="none"
          stroke="#cab091"
          strokeWidth="3.2"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        />

        <motion.ellipse
          cx="84"
          cy="145"
          rx="26"
          ry="7"
          fill="#7d4c2a"
          animate={{
            scaleX: active ? [0.88, 1.03, 0.9, 1.01, 0.88] : [0.84, 0.94, 0.84],
            scaleY: active ? [0.98, 1.05, 0.97, 1.03, 0.98] : [0.98, 1.02, 0.98],
            opacity: active ? [0.78, 0.97, 0.84, 0.95, 0.78] : [0.66, 0.8, 0.66],
          }}
          transition={{ duration: flowDuration, repeat: Infinity, ease: [0.3, 0.05, 0.35, 1] }}
        />

        <motion.ellipse
          cx="90"
          cy="142"
          rx="10"
          ry="2.4"
          fill="#e8c9a3"
          animate={{
            opacity: active ? [0.16, 0.34, 0.2, 0.3, 0.16] : [0.1, 0.22, 0.1],
            x: active ? [0, 1.6, 0, -1.2, 0] : [0, 0.8, 0],
          }}
          transition={{ duration: flowDuration, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
