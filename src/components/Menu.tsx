"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { MenuCategory } from "@/data/siteConfig";

type MenuProps = {
  title: string;
  intro: string;
  categories: MenuCategory[];
};

export function Menu({ title, intro, categories }: MenuProps) {
  return (
    <SectionWrapper id="menu" eyebrow="menu" title={title} intro={intro}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-16"
      >
        {categories.map((category) => (
          <motion.article key={category.id} variants={fadeUp} className="grid gap-8 lg:grid-cols-[30%_70%]">
            <h3 className="font-heading text-6xl tracking-[-0.02em] text-[var(--coffee)] opacity-[0.15] lg:justify-self-start">
              {category.title}
            </h3>
            <ul className="space-y-0">
              {category.items.map((item) => (
                <li
                  key={`${category.id}-${item.name}`}
                  className="group border-b border-[#C4B8A8] py-4"
                >
                  <div className="flex items-center justify-between gap-3 text-[0.98rem]">
                    <p className="relative inline-flex font-medium text-[var(--espresso)]">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[var(--terracotta)] transition-transform duration-300 group-hover:scale-x-100" />
                    </p>
                    <span className="dot-leader" />
                    <p className="font-price text-[0.9rem] font-medium text-[#B85C38]">
                      {item.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
