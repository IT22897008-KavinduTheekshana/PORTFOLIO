'use client';

import { Github, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020209] border-t border-white/[0.05] py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <a href="#" className="font-mono text-2xl font-black">
            <span className="text-violet-400">&lt;</span>
            <span className="gradient-text">KT</span>
            <span className="text-violet-400">/&gt;</span>
          </a>

          {/* Copyright */}
          <p className="flex items-center gap-1.5 text-sm text-slate-500 text-center">
            © {new Date().getFullYear()} Kavindu Theekshana. Built with{' '}
            <Heart size={13} className="text-rose-500 fill-rose-500" />{' '}
            and lots of ☕
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/KavinduTheekshana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-600/40 transition-all"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:kavindutheekshana2000@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-600/40 transition-all"
            >
              <Mail size={16} />
            </a>
            <a
              href="tel:+94716388909"
              aria-label="Phone"
              className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-600/40 transition-all"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-wrap justify-center gap-6 text-xs text-slate-600">
          {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-slate-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
