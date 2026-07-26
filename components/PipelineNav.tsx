"use client";

import { useEffect, useRef, useState } from "react";

const NODES = [
  { id: "hero", label: "input" },
  { id: "about", label: "context" },
  { id: "experience", label: "runtime" },
  { id: "projects", label: "output" },
  { id: "skills", label: "stack" },
  { id: "contact", label: "connect" },
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
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:flex"
    >
      <div className="relative flex flex-col items-center gap-3 rounded-full border border-line/70 bg-[#0d1210]/85 p-4 shadow-[0_30px_80px_-48px_rgba(0,0,0,0.55)]">
        <div
          className="trace-line absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px"
          aria-hidden
        />
        {NODES.map((node, i) => (
          <a
            key={node.id}
            href={`#${node.id}`}
            className="group relative flex items-center justify-center rounded-full p-2"
            aria-current={active === i ? "true" : undefined}
          >
            <span
              className={`trace-node relative z-10 h-3.5 w-3.5 rounded-full border border-line bg-bg transition-all duration-300 ${active === i ? "is-active scale-110" : ""
                }`}
            />
            <span
              className={`tag-chip absolute left-12 whitespace-nowrap uppercase transition-all duration-300 ${active === i ? "opacity-100 text-amber" : "opacity-0 group-hover:opacity-70 text-muted"
                }`}
            >
              {node.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
