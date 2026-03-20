"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { fadeUp } from "@/lib/animations";

type VisitProps = {
  title: string;
  intro: string;
  address: string;
  phone: string;
  hours: string[];
  mapEmbedUrl: string;
};

export function Visit({
  title,
  intro,
  address,
  phone,
  hours,
  mapEmbedUrl,
}: VisitProps) {
  return (
    <SectionWrapper id="visit" eyebrow="visit" title={title} intro={intro}>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="card p-6"
        >
          <h3 className="font-heading text-2xl">Contact</h3>
          <p className="mt-4 text-[var(--color-muted)]">{address}</p>
          <a href={`tel:${phone}`} className="mt-2 block font-semibold">
            {phone}
          </a>
          <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            Opening Hours
          </h4>
          <ul className="mt-3 space-y-2">
            {hours.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="card overflow-hidden"
        >
          <iframe
            title="Business location map"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-80 w-full border-0"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
