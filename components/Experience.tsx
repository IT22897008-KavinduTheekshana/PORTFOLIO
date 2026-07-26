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
      <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-2 lg:items-start">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.3em] text-amber">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium">
            Delivering workflow-first web experiences.
          </h2>
          <p className="max-w-2xl text-lg text-muted leading-relaxed">
            I bring practical delivery experience from enterprise content management and full-stack web builds. My focus is reliable feature delivery, low-friction operations, and scalable automation across both frontend and backend systems.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="highlight-panel rounded-[2rem] p-8">
            <p className="tag-chip uppercase text-amber mb-4">Kerk Solutions</p>
            <h3 className="font-display text-2xl text-ink">Intern Software Engineer</h3>
            <p className="text-muted mt-2">May 2025 — May 2026</p>
            <p className="mt-6 text-muted leading-relaxed">
              Delivered enterprise workflow features for internal and client-facing systems, combining Angular frontends with backend automation and containerized tooling.
            </p>
          </div>
          <div className="highlight-panel rounded-[2rem] p-8">
            <ul className="space-y-5">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex gap-3 text-muted leading-relaxed">
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
