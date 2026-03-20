type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-stone-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 font-serif text-4xl leading-[1.12] text-stone-900 md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
