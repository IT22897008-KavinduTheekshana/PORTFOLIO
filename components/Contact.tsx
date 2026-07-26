export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 lg:px-28 py-28 border-t border-line">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.6fr_1.4fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-amber">05 · connect</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-ink">
            Let&apos;s build the
            <br />
            <span className="text-muted">next pipeline together.</span>
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            Open to full-time roles, freelance builds, and AI-integrated products.
            Reach out directly — I reply quickly and keep every conversation practical.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-line/70 bg-surface/90 p-8 shadow-[0_40px_100px_-70px_rgba(0,0,0,0.8)]">
            <p className="text-sm uppercase tracking-[0.28em] text-amber">Contact details</p>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted">Email</p>
                <a
                  href="mailto:kavindutheekshana2000@gmail.com"
                  className="mt-2 block text-ink text-lg font-medium hover:text-amber transition-colors"
                >
                  kavindutheekshana2000@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted">Phone</p>
                <a
                  href="tel:+94716388909"
                  className="mt-2 block text-ink text-lg font-medium hover:text-amber transition-colors"
                >
                  +94 71 638 8909
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-line/70 bg-surface/90 p-8 shadow-[0_40px_100px_-70px_rgba(0,0,0,0.8)]">
            <p className="text-sm uppercase tracking-[0.28em] text-amber">Connect online</p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="https://www.linkedin.com/in/kavindu-theekshana-400b5925a/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-mono text-ink transition hover:border-amber hover:text-amber"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/IT22897008-KavinduTheekshana"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-mono text-ink transition hover:border-amber hover:text-amber"
              >
                GitHub
              </a>
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.22em] text-muted">
              Habarana, Sri Lanka
            </p>
          </div>
        </div>
      </div>

      <div className="mt-28 pt-8 border-t border-line flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">
          © {new Date().getFullYear()} Kavindu Theekshana
        </p>
        <p className="text-xs uppercase tracking-[0.22em] text-muted">
          Built with Next.js
        </p>
      </div>
    </section>
  );
}
