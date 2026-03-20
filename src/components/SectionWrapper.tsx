"use client";

import { useEffect, useRef, type ReactNode } from "react";

type SectionWrapperProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
  children: ReactNode;
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  intro,
  className = "",
  children,
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) node.classList.add("is-visible");
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`section-spacing reveal-section ${className}`}
    >
      <div className="template-container md:grid md:grid-cols-[3.2rem_minmax(0,1fr)] md:gap-8">
        <div className="hidden md:block">
          {eyebrow ? (
            <p className="section-eyebrow sticky top-28 text-center [writing-mode:vertical-rl]">
              {eyebrow}
            </p>
          ) : null}
        </div>
        <div>
          {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
          <h2 className="section-title">{title}</h2>
          {intro ? <p className="section-intro">{intro}</p> : null}
          <div className="mt-10 md:mt-14">{children}</div>
        </div>
      </div>
    </section>
  );
}
