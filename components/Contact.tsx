'use client';

import React, { useState } from 'react';
import { Mail, Phone, Github, MapPin, Send, CheckCircle2 } from 'lucide-react';
import SectionHead from './SectionHead';

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kavindutheekshana2000@gmail.com',
    href: 'mailto:kavindutheekshana2000@gmail.com',
    grad: 'from-violet-600 to-violet-800',
    glow: 'rgba(124,58,237,0.2)',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94-71-638-8909',
    href: 'tel:+94716388909',
    grad: 'from-emerald-600 to-cyan-700',
    glow: 'rgba(16,185,129,0.2)',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'KavinduTheekshana',
    href: 'https://github.com/IT22897008-KavinduTheekshana',
    grad: 'from-slate-600 to-slate-800',
    glow: 'rgba(100,116,139,0.2)',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sri Lanka',
    href: undefined,
    grad: 'from-cyan-600 to-cyan-800',
    glow: 'rgba(6,182,212,0.2)',
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "54aac852-6215-4768-9575-79be5f7a8fa8",
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' }); // Clear form
        setTimeout(() => setSent(false), 4000);
      } else {
        console.error("Form submission failed:", result);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#06060f]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHead
          tag="// 06. contact"
          title="Get In Touch"
          subtitle="I'm open to internship extensions and full-time opportunities. Whether you have a project idea or just want to say hi — reach out!"
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-10">

          {/* ── Contact cards ── */}
          <div className="space-y-4 reveal">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, grad, glow }) => (
              <div key={label} className="glass-card flex items-center gap-4 p-5">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${grad} flex items-center justify-center shrink-0`}
                  style={{ boxShadow: `0 0 18px ${glow}` }}
                >
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-slate-200 hover:text-violet-400 transition-colors font-medium text-sm"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-slate-200 font-medium text-sm">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Availability note */}
            <div className="glass-card p-5 border border-violet-600/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                <span className="text-sm font-semibold text-emerald-400">Currently Available</span>
              </div>
              <p className="text-sm text-slate-400">
                Open to full-time roles, internship extensions, freelance projects,
                and AI/ML collaborations. Response time: within 24 hours.
              </p>
            </div>
          </div>

          {/* ── Contact form ── */}
          <form
            onSubmit={handleSubmit}
            className="glass-card p-7 space-y-5 reveal reveal-delay-2"
          >
            <h3 className="font-bold text-slate-100 text-lg">Send a Message</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="form-input"
                placeholder="Project Opportunity"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="form-input resize-none"
                placeholder="Hi Kavindu, I'd like to discuss..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={loading || sent}
              className="btn-grad w-full text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : sent ? (
                <>
                  <CheckCircle2 size={16} /> Message Sent!
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
