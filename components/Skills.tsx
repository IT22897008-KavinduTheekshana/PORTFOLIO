'use client';

import { CheckCircle2, BrainCircuit, Globe, BarChart2, Code2, Database, Wrench } from 'lucide-react';
import SectionHead from './SectionHead';

const CATEGORIES = [
  {
    icon: BrainCircuit,
    title: 'AI & LLM',
    grad: 'from-violet-600 to-violet-800',
    glow: 'rgba(124,58,237,0.2)',
    skills: [
      'RAG Pipelines',
      'Prompt Engineering',
      'LLM Integrations (Claude, Groq)',
      'NLP & Sentiment Analysis',
      'ChromaDB / FAISS',
      'Sentence Transformers',
    ],
  },
  {
    icon: Globe,
    title: 'Web Development',
    grad: 'from-cyan-600 to-cyan-800',
    glow: 'rgba(6,182,212,0.2)',
    skills: [
      'React.js',
      'Angular',
      'Node.js',
      'Flask',
      'HTML / CSS / Tailwind',
      'REST APIs',
    ],
  },
  {
    icon: BarChart2,
    title: 'ML / Data Science',
    grad: 'from-indigo-600 to-violet-700',
    glow: 'rgba(99,102,241,0.2)',
    skills: [
      'Scikit-Learn',
      'Pandas & NumPy',
      'HuggingFace',
      'Sentence Transformers',
    ],
  },
  {
    icon: Code2,
    title: 'Languages',
    grad: 'from-emerald-600 to-cyan-700',
    glow: 'rgba(16,185,129,0.2)',
    skills: ['Python', 'JavaScript / TypeScript', 'Java', 'Kotlin', 'C / C++'],
  },
  {
    icon: Database,
    title: 'Databases',
    grad: 'from-orange-600 to-pink-700',
    glow: 'rgba(249,115,22,0.2)',
    skills: ['MySQL', 'MongoDB', 'ChromaDB', 'FAISS (familiar)'],
  },
  {
    icon: Wrench,
    title: 'Dev Tools',
    grad: 'from-slate-600 to-slate-800',
    glow: 'rgba(100,116,139,0.2)',
    skills: ['Git & GitHub', 'Docker', 'Android Studio', 'Agile / SCRUM'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#06060f]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHead tag="// 04. skills" title="Technical Arsenal" />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map(({ icon: Icon, title, grad, glow, skills }, i) => (
            <div
              key={title}
              className={`glass-card p-6 reveal reveal-delay-${(i % 3) + 1}`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${grad} flex items-center justify-center shrink-0`}
                  style={{ boxShadow: `0 0 20px ${glow}` }}
                >
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-100">{title}</h3>
              </div>

              {/* Skills list */}
              <ul className="space-y-2.5">
                {skills.map((s) => (
                  <li key={s} className="flex items-center gap-2.5">
                    <CheckCircle2 size={14} className="text-violet-400 shrink-0" />
                    <span className="text-sm text-slate-300">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
