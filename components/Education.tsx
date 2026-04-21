'use client';

import { University, BookOpen, Book, BadgeCheck, Shield, TreePine } from 'lucide-react';
import SectionHead from './SectionHead';

const EDUCATION = [
  {
    icon: University,
    degree: 'BSc (Hons) in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT), Malabe',
    badge: '4th Year, 2nd Semester — Current',
    grad: 'from-violet-600 to-violet-800',
    glow: 'rgba(124,58,237,0.2)',
  },
  {
    icon: BookOpen,
    degree: 'GCE Advanced Level',
    institution: 'Mathematics Stream, 2020',
    badge: 'Royal College Polonnaruwa',
    grad: 'from-cyan-600 to-cyan-800',
    glow: 'rgba(6,182,212,0.2)',
  },
  {
    icon: Book,
    degree: 'GCE Ordinary Level',
    institution: '2016',
    badge: 'Royal College Polonnaruwa',
    grad: 'from-indigo-600 to-violet-700',
    glow: 'rgba(99,102,241,0.2)',
  },
];

const CERTS = [
  {
    icon: BadgeCheck,
    title: 'Backend Web Development using Node.js',
    sub: 'Microsoft Learn Student Ambassador',
    grad: 'from-violet-600 to-violet-800',
    glow: 'rgba(124,58,237,0.2)',
  },
  {
    icon: Shield,
    title: 'Prefect',
    sub: 'Royal College Polonnaruwa (2015–2019)',
    grad: 'from-emerald-600 to-cyan-700',
    glow: 'rgba(16,185,129,0.2)',
  },
  {
    icon: TreePine,
    title: 'Scout Group Member',
    sub: 'Royal College Polonnaruwa (2011–2019)',
    grad: 'from-amber-600 to-orange-700',
    glow: 'rgba(245,158,11,0.2)',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 bg-[#020209]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHead tag="// 05. education" title="Academic Journey" />

        <div className="mt-16 grid lg:grid-cols-2 gap-12">

          {/* Education column */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-mono font-semibold text-violet-400 uppercase tracking-widest mb-6">
              <University size={14} /> Education
            </h3>
            <div className="space-y-4">
              {EDUCATION.map(({ icon: Icon, degree, institution, badge, grad, glow }, i) => (
                <div
                  key={degree}
                  className={`glass-card p-5 flex gap-4 reveal reveal-delay-${i + 1}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${grad} flex items-center justify-center shrink-0`}
                    style={{ boxShadow: `0 0 16px ${glow}` }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100 leading-snug">{degree}</h4>
                    <p className="text-sm text-slate-400 mt-0.5">{institution}</p>
                    <span className="inline-block mt-2 bg-violet-600/10 border border-violet-600/20 text-violet-400 text-xs font-medium px-3 py-1 rounded-full">
                      {badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certs & Activities column */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-6">
              <BadgeCheck size={14} /> Certifications &amp; Activities
            </h3>
            <div className="space-y-4">
              {CERTS.map(({ icon: Icon, title, sub, grad, glow }, i) => (
                <div
                  key={title}
                  className={`glass-card p-5 flex gap-4 reveal reveal-delay-${i + 1}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${grad} flex items-center justify-center shrink-0`}
                    style={{ boxShadow: `0 0 16px ${glow}` }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100 leading-snug">{title}</h4>
                    <p className="text-sm text-slate-400 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
