"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const pointerRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || !cursorRef.current) return;

    const cursor = cursorRef.current;

    const move = (event: MouseEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      cursor.style.opacity = "1";
    };

    const enterInteractive = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("a, button, [role='button'], [data-clickable='true']")) {
        cursor.classList.add("is-hover");
      } else {
        cursor.classList.remove("is-hover");
      }
    };
    const leaveInteractive = () => cursor.classList.remove("is-hover");

    const tick = () => {
      pointerRef.current.x += (targetRef.current.x - pointerRef.current.x) * 0.12;
      pointerRef.current.y += (targetRef.current.y - pointerRef.current.y) * 0.12;
      cursor.style.left = `${pointerRef.current.x}px`;
      cursor.style.top = `${pointerRef.current.y}px`;
      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", enterInteractive);
    window.addEventListener("mouseout", leaveInteractive);
    window.addEventListener("blur", leaveInteractive);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", enterInteractive);
      window.removeEventListener("mouseout", leaveInteractive);
      window.removeEventListener("blur", leaveInteractive);
    };
  }, []);

  return <div ref={cursorRef} aria-hidden className="cursor-dot hidden md:block" />;
}
