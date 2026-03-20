"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type HeroProps = {
  businessName: string;
  tagline: string;
  description: string;
  primaryCtaHref: string;
  secondaryCtaHref: string;
};

export function Hero({
  businessName,
  tagline,
  description,
  primaryCtaHref,
  secondaryCtaHref,
}: HeroProps) {
  const [firstWord = businessName, ...rest] = businessName.split(" ");
  const secondLine = rest.join(" ");
  const estYear = new Date().getFullYear();

  return (
    <section
      id="top"
      className="hero-grain relative isolate flex min-h-screen items-center overflow-hidden border-b border-[var(--warm-fog)]/40"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=80"
          alt="Warm overhead cafe hero background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="hero-overlay absolute inset-0 z-[1]" />
      <div className="template-container relative z-[3] py-24 md:py-32">
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72 }}
            className="section-eyebrow text-[#C4B8A8]"
          >
            Slow Morning Editorial Warmth
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            className="mt-6 font-heading text-[clamp(5rem,12vw,8.75rem)] leading-[0.88] tracking-[-0.025em] text-[#F7F3EE]"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.74 }}
              className="block"
            >
              {firstWord}
            </motion.span>
            {secondLine ? (
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.74, delay: 0.12 }}
                className="ml-[8vw] block"
              >
                {secondLine}
              </motion.span>
            ) : null}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0, opacity: 0.6 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 h-px w-full max-w-lg origin-left bg-[var(--warm-fog)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg text-[#EDE7DC]"
          >
            {tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.42 }}
            className="mt-5 max-w-2xl text-[#EDE7DC]"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.52 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            <Link href={primaryCtaHref} className="hero-text-link hero-text-link-inverse">
              Explore Menu
            </Link>
            <Link href={secondaryCtaHref} className="hero-text-link hero-text-link-inverse">
              Plan Your Visit
            </Link>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 12, ease: "linear" }}
            className="absolute -right-2 top-4 hidden h-28 w-28 items-center justify-center rounded-full border border-[var(--warm-fog)] text-center text-[0.56rem] uppercase tracking-[0.2em] text-[var(--coffee)] md:flex"
          >
            Est. {estYear} · Specialty Coffee · Made with care ·
          </motion.div>
        </div>
      </div>
    </section>
  );
}
