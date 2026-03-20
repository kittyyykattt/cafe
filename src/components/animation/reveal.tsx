"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  preset?: "default" | "slow" | "gentle";
};

const EASE_STANDARD = [0.23, 1, 0.32, 1] as const;
const EASE_GENTLE = [0.25, 0.9, 0.35, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  preset = "default",
}: RevealProps) {
  const config =
    preset === "slow"
      ? { duration: 1.15, ease: EASE_GENTLE }
      : preset === "gentle"
        ? { duration: 0.95, ease: EASE_GENTLE }
        : { duration: 0.88, ease: EASE_STANDARD };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ ...config, delay }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

export function Stagger({ children, className }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.16,
            delayChildren: 0.12,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: EASE_STANDARD },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
