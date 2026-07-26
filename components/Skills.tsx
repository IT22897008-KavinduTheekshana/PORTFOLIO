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
      <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_1.4fr] gap-10">
        <p className="tag-chip uppercase text-amber">04 · stack</p>
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-8">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
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
      </div>
    </section>
  );
}
