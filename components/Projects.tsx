import Image from "next/image";

const PROJECTS = [
  {
    name: "A/L Stream Selector",
    kind: "AI-Powered Recommendation System (RAG)",
    desc: "A Retrieval-Augmented Generation system that recommends the most suitable GCE A/L stream using semantic search over a PDF knowledge base and LLM-based reasoning.",
    stack: [
      "Python",
      "ChromaDB",
      "Sentence Transformers",
      "Llama 3.3",
      "Groq API",
      "pdfplumber",
    ],
    image: "/projects/AL Stream Selector.png",
    url: "https://github.com/IT22897008-KavinduTheekshana/rp",
  },
  {
    name: "Laptop Price Predictor",
    kind: "Machine Learning Web Application",
    desc: "A regression-based ML web app that predicts laptop prices from hardware specifications, from data cleaning through deployment.",
    stack: ["Python", "Flask", "Scikit-Learn", "Pandas", "NumPy"],
    image: "/projects/Laptop Price Predictor.png",
    url: "https://github.com/IT22897008-KavinduTheekshana/Laptop-Price-Predictor",
  },
  {
    name: "Travalia",
    kind: "Travel Planning Web Application",
    desc: "Implemented user management features in the Travalia personalized travel planning app, including authentication, profile controls, and role-based access.",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    url: "https://github.com/IT22897008-KavinduTheekshana/Travalia",
  },
  {
    name: "GameSpot",
    kind: "Gaming Management Platform",
    desc: "A gaming website built with Java, JSP, and Servlets that supports user authentication, game discovery, and download management.",
    stack: ["Java", "JSP", "Servlets", "MySQL", "Bootstrap"],
    image: "/projects/GAMESPOT.png",
    url: "https://github.com/IT22897008-KavinduTheekshana/GameSpot",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-16 lg:px-28 py-28 border-t border-line"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10">
        {/* Section Heading */}
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-amber">
            Projects
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-medium">
            A curated selection of ideas shipped end-to-end.
          </h2>

          <p className="max-w-2xl text-lg text-muted leading-relaxed">
            These projects highlight practical execution across AI, web
            development, and enterprise systems, with a focus on clean delivery
            and effective UX.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-[2rem] border border-line/70 bg-surface/85 shadow-[0_24px_60px_-42px_rgba(0,0,0,0.75)] transition duration-300 hover:-translate-y-1 hover:border-amber/60"
            >
              {p.image && (
                <div className="relative overflow-hidden bg-[#08120f]">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={p.image}
                      alt={`${p.name} screenshot`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 900px) 100vw, 900px"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d1210]/90 via-transparent to-transparent" />
                </div>
              )}

              <div className="p-7 sm:p-8">
                <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-sage">
                  {p.kind}
                </p>

                <h3 className="mb-4 font-display text-2xl text-ink">
                  {p.name}
                </h3>

                <p className="mb-6 text-muted leading-relaxed">{p.desc}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line px-3 py-1.5 text-sm text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-amber/30 bg-amber/10 px-5 py-3 text-sm font-mono uppercase tracking-[0.2em] text-amber transition hover:bg-amber/15"
                  >
                    View Repository
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}