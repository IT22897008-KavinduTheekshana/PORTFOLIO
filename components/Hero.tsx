'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Github, Mail, ChevronDown } from 'lucide-react';

const ROLES = [
  'Full-Stack Developer',
  'AI & LLM Engineer',
  'RAG Pipeline Builder',
  'Problem Solver',
];

const TECH_CHIPS = [
  { label: 'Python', icon: '🐍', cls: 'float-a', pos: 'top-[8%]  left-[3%]' },
  { label: 'React', icon: '⚛️', cls: 'float-b', pos: 'top-[18%] right-[2%]' },
  { label: 'LLM/RAG', icon: '🧠', cls: 'float-c', pos: 'bottom-[30%] left-[1%]' },
  { label: 'Angular', icon: '🔺', cls: 'float-d', pos: 'bottom-[18%] right-[4%]' },
  { label: 'Node.js', icon: '💚', cls: 'float-e', pos: 'top-[50%]  right-[0%]' },
];

const STATS = [
  { num: '5+', label: 'Projects' },
  { num: '8mo', label: 'Experience' },
  { num: '10+', label: 'Technologies' },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  /* ── Particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.4 + 0.4,
      o: Math.random() * 0.4 + 0.1,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,58,237,${p.o})`;
        ctx.fill();
      });

      /* connections */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,58,237,${(1 - d / 110) * 0.09})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  /* ── Typewriter ── */
  useEffect(() => {
    const full = ROLES[roleIdx];
    let i = displayed.length;
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (i < full.length) {
        timeout = setTimeout(() => setDisplayed(full.slice(0, i + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (i > 0) {
        timeout = setTimeout(() => setDisplayed(full.slice(0, i - 1)), 35);
      } else {
        setRoleIdx((prev) => (prev + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg hero-glow"
    >
      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Radial purple glow center */}
      <div className="absolute inset-0 bg-gradient-radial from-violet-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left content ── */}
          <div className="space-y-6">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/[0.05] border border-white/[0.08] rounded-full px-4 py-1.5 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
              <span className="text-slate-300 font-medium">Available for opportunities</span>
            </div>

            {/* Name */}
            <div>
              <p className="text-slate-400 text-lg font-medium mb-1">Hi, I&apos;m</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="gradient-text">Kavindu</span>
                <br />
                <span className="text-slate-100">Theekshana</span>
              </h1>
            </div>

            {/* Typewriter roles */}
            <div className="flex items-center gap-1 text-xl md:text-2xl font-medium text-slate-300 h-8">
              <span className="text-slate-500">I build&nbsp;</span>
              <span className="gradient-text">{displayed}</span>
              <span className="cursor gradient-text text-2xl">|</span>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-base leading-relaxed max-w-lg">
              Full-Stack Developer &amp; AI/LLM Enthusiast — crafting intelligent applications powered
              by RAG pipelines, vector databases, and modern LLM APIs.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn-grad inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl"
              >
                View My Work <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="btn-ghost inline-flex items-center gap-2 text-slate-300 font-semibold px-6 py-3 rounded-xl"
              >
                <Mail size={16} /> Get In Touch
              </a>
              <a
                href="https://github.com/IT22897008-KavinduTheekshana"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2 text-slate-300 font-semibold px-4 py-3 rounded-xl"
              >
                <Github size={16} />
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-2">
              {STATS.map((s, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold gradient-text">{s.num}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                  </div>
                  {i < STATS.length - 1 && (
                    <div className="w-px h-10 bg-white/[0.08]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: orbital avatar ── */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-80 h-80">

              {/* Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="ring-cw2 absolute w-72 h-72 rounded-full"
                  style={{ border: '1px solid rgba(124,58,237,0.12)' }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="ring-cw absolute w-60 h-60 rounded-full"
                  style={{ border: '1px solid rgba(124,58,237,0.22)' }}
                >
                  {/* orbit dot */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_10px_#7c3aed]" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="ring-ccw absolute w-44 h-44 rounded-full"
                  style={{ border: '1px solid rgba(6,182,212,0.25)' }}
                >
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]" />
                </div>
              </div>

              {/* Avatar core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-700 to-cyan-600 p-0.5 pulse-glow">
                  <div className="w-full h-full rounded-full bg-[#0a0a1a] flex items-center justify-center">
                    <span className="font-mono text-3xl font-black gradient-text">KT</span>
                  </div>
                </div>
              </div>

              {/* Floating tech chips */}
              {TECH_CHIPS.map((c) => (
                <div
                  key={c.label}
                  className={`tech-chip absolute ${c.cls} ${c.pos}`}
                >
                  <span>{c.icon}</span>
                  {c.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <a href="#about" className="flex flex-col items-center gap-1 hover:text-slate-400 transition-colors">
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ChevronDown size={18} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
