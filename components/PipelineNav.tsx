"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NODES = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function PipelineNav() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    refs.current = NODES.map((n) => document.getElementById(n.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-[#0d1210]/95 backdrop-blur-xl shadow-[0_12px_30px_-16px_rgba(0,0,0,0.55)]"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#hero" className="flex items-center gap-3 rounded-full px-3 py-2 transition hover:bg-white/5">
          <span className="relative h-10 w-10 overflow-hidden rounded-2xl border border-line/50 bg-bg">
            <Image src="/images/logo.png" alt="Portfolio logo" fill className="object-cover" />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-amber">
            Kavindu
          </span>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {NODES.map((node, i) => (
            <a
              key={node.id}
              href={`#${node.id}`}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${active === i
                  ? "border-amber bg-amber/15 text-amber shadow-[0_0_0_1px_rgba(242,184,75,0.25)]"
                  : "border-line/50 text-muted hover:border-amber hover:text-amber"
                }`}
              aria-current={active === i ? "true" : undefined}
            >
              {node.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
