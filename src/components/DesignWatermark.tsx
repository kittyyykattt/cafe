/**
 * Subtle design attribution — readable on light sections, hero, and dark footer.
 */
export function DesignWatermark() {
  return (
    <aside
      className="pointer-events-none fixed bottom-4 right-4 z-40 max-w-[min(100vw-2rem,15rem)] md:bottom-6 md:right-6"
      aria-label="Design credit"
    >
      <div className="pointer-events-auto rounded-sm border border-[var(--warm-fog)]/55 bg-[color-mix(in_srgb,var(--cream)_92%,transparent)] px-2.5 py-2 shadow-[0_1px_12px_rgba(26,13,5,0.08)] backdrop-blur-[6px]">
        <p className="text-right text-[0.58rem] font-semibold uppercase leading-snug tracking-[0.16em] text-[var(--espresso)] opacity-80 md:text-[0.62rem] md:tracking-[0.18em]">
          Design · Katya Serechenko
        </p>
        <a
          href="mailto:yserechenko@gmail.com?subject=Website%20design%20inquiry"
          className="mt-1 block text-right text-[0.58rem] tracking-[0.04em] text-[var(--terracotta)] underline decoration-[var(--terracotta)]/35 underline-offset-2 transition-opacity hover:opacity-100 hover:decoration-[var(--terracotta)] md:text-[0.6rem]"
        >
          yserechenko@gmail.com
        </a>
      </div>
    </aside>
  );
}
