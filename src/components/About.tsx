"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { SectionWrapper } from "@/components/SectionWrapper";

type AboutProps = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

export function About({ title, body, image, imageAlt }: AboutProps) {
  return (
    <SectionWrapper id="about" title={title}>
      <div className="relative grid gap-12 lg:grid-cols-[38%_62%] lg:items-center">
        <p className="pointer-events-none absolute -left-14 top-1 hidden text-[10px] uppercase tracking-[0.2em] text-[var(--terracotta)] md:block [writing-mode:vertical-rl]">
          ABOUT
        </p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="max-w-sm text-[var(--color-muted)]">{body}</p>
        </motion.div>
        <div className="relative">
          <div className="absolute -left-10 -top-10 h-[72%] w-[60%] bg-[var(--linen)]" />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative -mt-10 ml-8 h-80 overflow-hidden rounded-[6px_6px_0_6px] border border-[var(--warm-fog)]/65 md:h-[30rem]"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 62vw, 100vw"
            />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
