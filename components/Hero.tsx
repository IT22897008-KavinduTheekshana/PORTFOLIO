import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-28 pt-28 pb-20"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse" />
            <p className="tag-chip uppercase text-sage">status · open to opportunities</p>
          </div>

          <h1 className="font-display text-[13vw] leading-[0.95] tracking-tight md:text-7xl lg:text-8xl font-medium">
            Kavindu
            <br />
            <span className="text-muted">Theekshana</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg md:text-xl text-muted leading-relaxed">
            A full-stack engineer who treats software like a pipeline: enterprise
            systems in, clean workflows through, and AI-assisted products out.
            One year deep in Angular, ELO ECM, and workflow automation — now
            routing that experience toward RAG and applied ML.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-amber text-bg font-mono text-sm px-6 py-3 hover:bg-[#ffc968] transition-colors"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="rounded-full border border-line text-ink font-mono text-sm px-6 py-3 hover:border-amber hover:text-amber transition-colors"
            >
              View projects
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 tag-chip text-muted uppercase">
            <span>Habarana, Sri Lanka</span>
            <span className="text-line">/</span>
            <span>Kerk Solutions</span>
            <span className="text-line">/</span>
            <span>SLIIT, 2026</span>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0">
          <div className="relative aspect-square w-64 sm:w-80 lg:w-full max-w-sm">
            <svg
              viewBox="0 0 100 100"
              className="absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)]"
              aria-hidden
            >
              <circle
                cx="50"
                cy="50"
                r="47"
                fill="none"
                stroke="#2A3530"
                strokeWidth="0.5"
              />
              <circle
                cx="50"
                cy="50"
                r="47"
                fill="none"
                stroke="#F2B84B"
                strokeWidth="1"
                strokeDasharray="6 14"
                className="flow-dash"
              />
            </svg>
            <div className="absolute inset-0 rounded-full overflow-hidden border border-line">
              <Image
                src="/images/profile.png"
                alt="Portrait of Kavindu Theekshana"
                fill
                priority
                sizes="(max-width: 768px) 256px, 384px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-2 rounded-full bg-surface border border-line px-4 py-2 tag-chip uppercase text-amber">
              node: active
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
