'use client';

import { MapPin, GraduationCap, Briefcase, Phone, BrainCircuit, Globe, BarChart2, Smartphone } from 'lucide-react';
import SectionHead from './SectionHead';

const INFO = [
  { icon: MapPin, text: 'Sri Lanka' },
  { icon: GraduationCap, text: 'BSc IT — SLIIT, 4th Year' },
  { icon: Briefcase, text: 'Intern Software Engineer @ Kerk Solutions' },
  { icon: Phone, text: '+94-71-638-8909' },
];

const CARDS = [
  {
    icon: BrainCircuit,
    title: 'AI & LLM',
    desc: 'RAG pipelines, prompt engineering, and LLM integrations with Claude, Groq/LLaMA.',
    grad: 'from-violet-600 to-violet-800',
    glow: 'rgba(124,58,237,0.15)',
  },
  {
    icon: Globe,
    title: 'Full-Stack Web',
    desc: 'End-to-end development with React, Angular, Node.js, and modern databases.',
    grad: 'from-cyan-600 to-cyan-800',
    glow: 'rgba(6,182,212,0.15)',
  },
  {
    icon: BarChart2,
    title: 'Data & ML',
    desc: 'ML model training with Scikit-Learn, Pandas, and HuggingFace transformers.',
    grad: 'from-violet-600 to-cyan-700',
    glow: 'rgba(99,102,241,0.15)',
  },
  {
    icon: Smartphone,
    title: 'Mobile Dev',
    desc: 'Android application development using Kotlin and Android Studio.',
    grad: 'from-emerald-600 to-cyan-700',
    glow: 'rgba(16,185,129,0.15)',
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#020209]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHead tag="// 01. about me" title="Who I Am" />

        <div className="grid lg:grid-cols-2 gap-16 items-start mt-16">

          {/* Left — text */}
          <div className="reveal space-y-5">
            <p className="text-slate-300 leading-relaxed">
              I&apos;m a{' '}
              <span className="text-violet-400 font-semibold">motivated Software Developer and AI enthusiast</span>{' '}
              with hands-on experience in full-stack web development, RAG pipelines, and LLM integrations.
              Currently interning at{' '}
              <span className="text-violet-400 font-semibold">Kerk Solutions</span> while pursuing my
              BSc in Information Technology at SLIIT.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I&apos;m passionate about building AI-powered applications that solve real problems — from designing
              semantic retrieval systems with{' '}
              <span className="text-cyan-400 font-medium">ChromaDB</span> and{' '}
              <span className="text-cyan-400 font-medium">Sentence Transformers</span> to deploying
              production web apps using Angular, React, and Node.js.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I thrive at the intersection of{' '}
              <span className="text-violet-400 font-medium">web development</span> and{' '}
              <span className="text-violet-400 font-medium">artificial intelligence</span>,
              constantly exploring the latest in prompt engineering, NLP, and retrieval-augmented generation.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {INFO.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl p-3"
                >
                  <Icon size={16} className="text-violet-400 shrink-0" />
                  <span className="text-sm text-slate-300">{text}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:kavindutheekshana2000@gmail.com"
                className="btn-grad inline-flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-xl text-sm"
              >
                Send Email
              </a>
              <a
                href="https://github.com/IT22897008-KavinduTheekshana"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2 text-slate-300 font-semibold px-5 py-2.5 rounded-xl text-sm"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Right — cards */}
          <div className="grid grid-cols-2 gap-4">
            {CARDS.map(({ icon: Icon, title, desc, grad, glow }, i) => (
              <div
                key={title}
                className={`glass-card p-5 reveal reveal-delay-${i + 1} flex flex-col gap-3`}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${grad} flex items-center justify-center`}
                  style={{ boxShadow: `0 0 20px ${glow}` }}
                >
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-100">{title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
