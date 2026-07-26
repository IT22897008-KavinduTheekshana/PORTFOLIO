export default function About() {
  const strengths = [
    "Enterprise workflow automation with ELO ECM and Idiom scripting.",
    "Modern Angular, web, and full-stack feature delivery for business users.",
    "Retrieval pipelines, prompt design, and applied AI products with Python.",
  ];

  return (
    <section id="about" className="px-6 md:px-16 lg:px-28 py-28 border-t border-line">
      <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-2 lg:items-start">
        <div className="space-y-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-amber">About</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium mt-4">
              Building enterprise-ready workflows with reliability in mind.
            </h2>
            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed">
              I&apos;m a motivated software engineer with a year of hands-on industry experience building enterprise software and web applications. I recently completed a BSc (Honours) in Information Technology at SLIIT, and I&apos;ve spent the last year inside ELO Enterprise Content Management, designing Idiom workflow scripts and shipping Angular features for real business processes.
            </p>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
              Outside the day job, I build with Python and LLMs — retrieval pipelines, prompt engineering, and small ML products — because the same instinct that makes a good workflow (clear inputs, predictable steps, reliable output) makes a good AI system.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="highlight-panel">
              <p className="tag-chip uppercase text-amber mb-3">Focus</p>
              <p className="text-ink leading-relaxed">
                Enterprise apps, workflow automation, and AI-powered tools that reduce friction and keep teams moving.
              </p>
            </div>
            <div className="highlight-panel">
              <p className="tag-chip uppercase text-amber mb-3">Approach</p>
              <ul className="space-y-3 text-muted">
                {strengths.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-line/70 bg-surface/80 p-8 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.55)]">
            <p className="tag-chip uppercase text-amber mb-4">Summary</p>
            <p className="text-lg leading-relaxed text-muted">
              I deliver enterprise workflows with clear inputs, dependable steps, and predictable outputs. My work blends modern web applications with automation practices that support business users and data-driven teams.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { value: "1+", label: "Years industry" },
              { value: "4", label: "Shipped projects" },
              { value: "2", label: "Certifications" },
              { value: "∞", label: "Curiosity" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-line bg-surface/80 p-6 text-center">
                <p className="font-display text-3xl md:text-4xl text-ink">
                  {stat.value}
                </p>
                <p className="tag-chip uppercase text-muted mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
