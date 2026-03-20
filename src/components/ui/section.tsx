import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 md:py-32 lg:py-36 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">{children}</div>
    </section>
  );
}
