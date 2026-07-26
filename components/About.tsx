export default function About() {
  const strengths = [
    "Enterprise workflow automation with ELO ECM and Idiom scripting.",
    "Modern Angular, web, and full-stack feature delivery for business users.",
    "Retrieval pipelines, prompt design, and applied AI products with Python.",
  ];

  return (
    <section id="about" className="px-6 md:px-16 lg:px-28 py-28 border-t border-line">
      <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_1.4fr] gap-10">
        <p className="tag-chip uppercase text-amber">01 · context</p>
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-8">
            Summary
          </h2>
          <p className="text-lg md:text-xl text-muted leading-relaxed">
            I&apos;m a motivated software engineer with a year of hands-on
            industry experience building enterprise software and web
            applications. I recently completed a BSc (Honours) in Information
            Technology at SLIIT, and I&apos;ve spent the last year inside ELO
            Enterprise Content Management, designing Idiom workflow scripts
            and shipping Angular features for real business processes.
          </p>
          <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
            Outside the day job, I build with Python and LLMs — retrieval
            pipelines, prompt engineering, and small ML products — because
            the same instinct that makes a good workflow (clear inputs,
            predictable steps, reliable output) makes a good AI system.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="highlight-panel">
              <p className="tag-chip uppercase text-amber mb-3">Focus</p>
              <p className="text-ink leading-relaxed">
                Enterprise apps, workflow automation, and AI-powered tools that
                reduce friction and keep teams moving.
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

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "1+", label: "years industry" },
              { value: "4", label: "shipped projects" },
              { value: "2", label: "certifications" },
              { value: "∞", label: "curiosity" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-line bg-surface/80 p-5">
                <p className="font-display text-3xl md:text-4xl text-ink">
                  {stat.value}
                </p>
                <p className="tag-chip uppercase text-muted mt-1">
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
