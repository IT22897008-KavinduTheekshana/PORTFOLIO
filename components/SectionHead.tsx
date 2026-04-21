'use client';

interface Props {
  tag: string;
  title: string;
  subtitle?: string;
}

export default function SectionHead({ tag, title, subtitle }: Props) {
  return (
    <div className="text-center">
      <p className="section-tag mb-3">{tag}</p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
