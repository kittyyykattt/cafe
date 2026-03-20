"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_30%)]"
    >
      {children}
    </motion.main>
  );
}
