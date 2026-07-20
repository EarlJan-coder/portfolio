"use client";

import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only on devices with a fine pointer (mouse)
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    let raf = 0;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...pos };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.12;
      pos.y += (target.y - pos.y) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.x - 250}px, ${pos.y - 250}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[2] h-[500px] w-[500px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, var(--color-accent-glow) 0%, transparent 60%)",
        opacity: 0.5,
        mixBlendMode: "screen",
        willChange: "transform",
      }}
    />
  );
}
