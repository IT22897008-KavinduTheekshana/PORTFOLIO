'use client';

import { Building2, Calendar, ChevronRight } from 'lucide-react';
import SectionHead from './SectionHead';

const BULLETS = [
  'Developing and maintaining web application features using Angular for frontend development.',
  'Working with ELO (Enterprise Content Management) platform to build and integrate document management solutions.',
  'Building workflows and business process automation using Idiom scripting within the ELO ecosystem.',
  'Collaborating in an agile team environment with real-world code reviews and delivery workflows.',
];

const TAGS = ['Angular', 'ELO ECM', 'Idiom Scripting', 'Agile / SCRUM', 'TypeScript'];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#06060f]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHead tag="// 02. experience" title="Where I've Worked" />

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative pl-10">
            {/* Vertical line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-violet-600 via-cyan-600 to-transparent" />

            {/* Timeline item */}
            <div className="relative reveal">
              {/* Dot */}
              <div className="timeline-dot absolute -left-[28px] top-1.5" />

              {/* Card */}
              <div className="glass-card p-7 gradient-border-card">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">Intern Software Engineer</h3>
                    <div className="flex items-center gap-2 mt-1.5 text-slate-400">
                      <Building2 size={14} className="text-violet-400" />
                      <span className="text-sm font-medium text-violet-400">Kerk Solutions</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-violet-600/10 border border-violet-600/20 rounded-full px-4 py-1.5">
                    <Calendar size={13} className="text-violet-400" />
                    <span className="text-xs font-semibold text-violet-400">Aug 2024 – Present · 8 months</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6">
                  {BULLETS.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                      <ChevronRight size={15} className="text-violet-400 shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((t) => (
                    <span key={t} className="skill-chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
