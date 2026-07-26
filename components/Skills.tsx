const GROUPS = [
  { label: "Languages", items: ["Python", "Java", "JavaScript", "C", "C++"] },
  { label: "Frontend", items: ["Angular", "React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { label: "Backend", items: ["Node.js", "Java Servlets", "REST APIs"] },
  { label: "Databases", items: ["MySQL", "MongoDB", "ChromaDB"] },
  { label: "Enterprise", items: ["ELO ECM", "Idiom Scripting", "M-Files", "Docker", "Portainer"] },
  { label: "AI / ML", items: ["RAG", "LLM Integration", "Prompt Engineering", "NLP", "Scikit-Learn", "Groq API"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-16 lg:px-28 py-28 border-t border-line bg-surface/40"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-amber">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium">
            Technical expertise across frontend, backend, and AI systems.
          </h2>
          <p className="max-w-3xl text-lg text-muted leading-relaxed">
            I work across the full stack with a focus on enterprise-grade applications, modern web interfaces, and practical machine learning workflows.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group) => (
            <div key={group.label} className="highlight-panel">
              <p className="tag-chip uppercase text-muted mb-4">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="tag-chip rounded-full border border-line px-3 py-1.5 text-ink hover:border-sage hover:text-sage transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="highlight-panel">
            <p className="tag-chip uppercase text-amber mb-3">Certifications</p>
            <p className="text-ink">M-Files Solution Engineer</p>
            <p className="text-ink mt-2">Backend Web Development — Node.js, Microsoft Learn</p>
          </div>
          <div className="highlight-panel">
            <p className="tag-chip uppercase text-amber mb-3">Tools</p>
            <p className="text-muted leading-relaxed">
              Docker, Portainer, ChromaDB, Scikit-Learn, and AWS-ready development patterns for production-ready work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
