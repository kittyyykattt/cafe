"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export type NavLink = { id: string; label: string; href: string };

type NavbarProps = {
  businessName: string;
  links: NavLink[];
};

/** Bar: light text on dark scrim. Mobile drawer: dark text on cream (#F7F3EE). */
export function Navbar({ businessName, links }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const barText = "text-[#F7F3EE]";
  const barShadow = "[text-shadow:0_1px_10px_rgba(26,13,5,0.65)]";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[var(--warm-fog)]/35 bg-[rgba(26,13,5,0.92)] shadow-[0_1px_0_rgba(26,13,5,0.25)] backdrop-blur-[8px]"
          : "border-b border-transparent bg-gradient-to-b from-[rgba(26,13,5,0.72)] via-[rgba(26,13,5,0.5)] to-[rgba(26,13,5,0.12)]"
      }`}
    >
      <nav className="template-container flex items-center justify-between gap-3 py-3 md:py-4" aria-label="Main">
        <Link
          href="#top"
          className={`min-w-0 shrink font-heading text-[clamp(1.2rem,4.5vw,2.2rem)] tracking-[-0.02em] !text-[#F7F3EE] visited:!text-[#F7F3EE] hover:!text-[#F7F3EE] ${barShadow}`}
        >
          {businessName}
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 md:gap-4">
          <ul className={`hidden items-center gap-6 md:flex ${barText}`}>
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={`editorial-nav-link !text-[#F7F3EE] ${barShadow} after:!bg-[#F7F3EE]/85 hover:after:!bg-[#F7F3EE]`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-[#F7F3EE] bg-[rgba(26,13,5,0.45)] md:hidden ${barText}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <span className="text-2xl font-light leading-none" aria-hidden>
                ×
              </span>
            ) : (
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span className="block h-0.5 w-5 bg-[#F7F3EE]" />
                <span className="block h-0.5 w-5 bg-[#F7F3EE]" />
                <span className="block h-0.5 w-5 bg-[#F7F3EE]" />
              </span>
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`md:hidden ${menuOpen ? "pointer-events-auto border-t border-[#C4B8A8]" : "pointer-events-none border-transparent"} overflow-hidden bg-[#F7F3EE] transition-[max-height] duration-300 ease-out ${menuOpen ? "max-h-[min(75vh,32rem)]" : "max-h-0"}`}
        aria-hidden={!menuOpen}
      >
        <ul className="template-container flex flex-col gap-0 py-2">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="block border-b border-[#C4B8A8]/70 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#1A0D05]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
