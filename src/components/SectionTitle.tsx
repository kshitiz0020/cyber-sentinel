export function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-[#00F5D4] mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]" /> {eyebrow}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {sub && <p className="mt-3 text-white/60 max-w-2xl">{sub}</p>}
    </div>
  );
}