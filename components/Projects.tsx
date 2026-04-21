'use client';

import { Github, ExternalLink, BrainCircuit, BarChart3, LayoutDashboard, Smartphone, Gamepad2, Zap, Database, Layers } from 'lucide-react';
import SectionHead from './SectionHead';

const PROJECTS = [
  {
    id: 'al-selector',
    title: 'A/L Stream Selector',
    subtitle: 'RAG-Powered AI Recommendation System',
    desc: 'Built a Retrieval-Augmented Generation (RAG) pipeline to recommend the most suitable A/L subject stream (Biological Science, Physical Science, Commerce, Art, Technology) for students based on their interests and aptitude. Integrated Groq LLaMA 3.3 70B to generate RAG-grounded MCQs with ~40% calculation-based questions.',
    icon: BrainCircuit,
    grad: 'from-violet-600 to-violet-900',
    glow: '0 0 40px rgba(124,58,237,0.3)',
    featured: true,
    highlights: [
      { icon: Database, label: 'ChromaDB Vector Store' },
      { icon: Zap, label: 'LLaMA 3.3 70B · Groq' },
      { icon: Layers, label: 'Semantic Chunking' },
    ],
    tags: ['Python', 'ChromaDB', 'Sentence Transformers', 'LLaMA 3.3', 'Groq API', 'RAG', 'NLP'],
    github: 'https://github.com/imthadh-ahamed/rp.git',
  },
  {
    id: 'laptop-predictor',
    title: 'Laptop Price Predictor',
    subtitle: 'ML Web Application',
    desc: 'Developed a machine learning web app using Flask and Scikit-Learn to predict laptop prices from hardware specifications. Trained and deployed an ML model with Pandas and NumPy with an interactive frontend for user input.',
    icon: BarChart3,
    grad: 'from-cyan-600 to-cyan-900',
    glow: '0 0 30px rgba(6,182,212,0.2)',
    featured: false,
    highlights: [],
    tags: ['Python', 'Flask', 'Scikit-Learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/IT22897008-KavinduTheekshana/Laptop-Price-Predictor.git',
  },
  {
    id: 'boardme',
    title: 'BoardMe',
    subtitle: 'Content Management System',
    desc: 'Built the contact management module for a co-space booking platform, enabling customer feedback submission and admin dashboard integration using the MERN stack.',
    icon: LayoutDashboard,
    grad: 'from-indigo-600 to-violet-900',
    glow: '0 0 30px rgba(99,102,241,0.2)',
    featured: false,
    highlights: [],
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Gayasri72/BoardMe-Javascript.git',
  },
  {
    id: 'easetask',
    title: 'EaseTask',
    subtitle: 'Task Management Android App',
    desc: 'Designed and developed an Android app for task management with creation, categorisation, and reminder features using Kotlin and Android Studio.',
    icon: Smartphone,
    grad: 'from-emerald-600 to-cyan-800',
    glow: '0 0 30px rgba(16,185,129,0.2)',
    featured: false,
    highlights: [],
    tags: ['Kotlin', 'Android Studio'],
    github: 'https://github.com/IT22897008-KavinduTheekshana/EaseTask.git',
  },
  {
    id: 'gamespot',
    title: 'GameSpot',
    subtitle: 'Gaming Platform',
    desc: 'Built a gaming platform with user authentication, game listings, and a dynamic user library using Java Servlets, JSP, and MySQL backend.',
    icon: Gamepad2,
    grad: 'from-pink-600 to-violet-800',
    glow: '0 0 30px rgba(219,39,119,0.2)',
    featured: false,
    highlights: [],
    tags: ['Java', 'JSP', 'Servlets', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/IT22897008-KavinduTheekshana/GameSpot.git',
  },
];

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured)!;
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 bg-[#020209]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHead tag="// 03. projects" title="Things I&apos;ve Built" />

        <div className="mt-16 space-y-6">

          {/* ── Featured Project ── */}
          <div
            className="glass-card gradient-border-card p-8 lg:p-10 reveal"
            style={{ boxShadow: featured.glow }}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Icon + badge */}
              <div className="shrink-0">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${featured.grad} flex items-center justify-center`}
                  style={{ boxShadow: featured.glow }}
                >
                  <featured.icon size={28} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-violet-600/15 border border-violet-600/25 rounded-full px-3 py-1 text-xs font-semibold text-violet-400 mb-2">
                      ⭐ Featured Project
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100">{featured.title}</h3>
                    <p className="text-violet-400 text-sm font-medium mt-0.5">{featured.subtitle}</p>
                  </div>
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    <Github size={18} /> GitHub
                  </a>
                </div>

                <p className="text-slate-300 leading-relaxed mb-5">{featured.desc}</p>

                {/* Highlights */}
                {featured.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-5">
                    {featured.highlights.map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-2 text-sm text-slate-300"
                      >
                        <Icon size={14} className="text-violet-400" />
                        {label}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span key={t} className="skill-chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Regular Projects Grid ── */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {rest.map((p, i) => (
              <div
                key={p.id}
                className={`glass-card p-6 flex flex-col gap-4 reveal reveal-delay-${(i % 4) + 1}`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.grad} flex items-center justify-center`}
                    style={{ boxShadow: p.glow }}
                  >
                    <p.icon size={20} className="text-white" />
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-slate-100 text-lg">{p.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{p.subtitle}</p>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed flex-1">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="skill-chip text-[11px] px-2.5">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
