const HIGHLIGHTS = [
  "Developed enterprise web application features using Angular and JavaScript within the ELO Enterprise Content Management (ECM) platform.",
  "Designed and customized business workflows using Idiom scripting; supported enterprise demo projects and upgrade activities.",
  "Contributed across frontend and backend — feature builds, testing, debugging, and issue resolution.",
  "Used Docker and Portainer for containerized deployment inside an Agile team.",
  "Earned the M-Files Solution Engineer Certification and an overall \u201cGood\u201d performance evaluation from the Industrial Supervisor.",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-16 lg:px-28 py-28 border-t border-line bg-surface/40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_1.4fr] gap-10">
        <p className="tag-chip uppercase text-amber">02 · runtime</p>
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
            Experience
          </h2>
          <div className="grid gap-8 sm:grid-cols-[0.55fr_1fr]">
            <div className="highlight-panel">
              <p className="tag-chip uppercase text-amber mb-4">Kerk Solutions</p>
              <h3 className="font-display text-2xl text-ink">
                Intern Software Engineer
              </h3>
              <p className="text-muted mt-2">May 2025 — May 2026</p>
              <p className="mt-6 text-muted leading-relaxed">
                Delivered enterprise workflow features for internal and client-facing systems,
                combining Angular frontends with backend automation and containerized tooling.
              </p>
            </div>
            <div className="highlight-panel">
              <ul className="space-y-4">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex gap-3 text-muted leading-relaxed">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
