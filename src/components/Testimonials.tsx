"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import type { Testimonial } from "@/data/siteConfig";

type TestimonialsProps = {
  title: string;
  intro: string;
  items: Testimonial[];
};

export function Testimonials({ title, intro, items }: TestimonialsProps) {
  return (
    <SectionWrapper
      id="testimonials"
      eyebrow="testimonials"
      title={title}
      intro={intro}
    >
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
        {items.map((item, index) => (
          <article
            key={`${item.author}-${index}`}
            className="relative min-w-[85%] snap-start border border-[var(--warm-fog)] bg-[var(--linen)] p-6 md:min-w-[48%] lg:min-w-[38%]"
          >
            <p className="pointer-events-none absolute left-1 top-0 font-heading text-[180px] leading-none text-[#2C1A0E] opacity-[0.07]">
              &quot;
            </p>
            <p className="relative text-[1.125rem] leading-relaxed text-[var(--espresso)]">
              {item.quote}
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.16em] text-[var(--terracotta)]">
              {item.author}
            </p>
            <p className="text-sm text-[var(--color-muted)]">{item.role}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
