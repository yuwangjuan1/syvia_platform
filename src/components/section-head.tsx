export default function SectionHead({
  index,
  en,
  title,
  sub,
}: {
  index: string;
  en: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="border-b border-line pb-5">
      <p className="font-mono text-xs font-medium tracking-[0.24em] text-phos text-glow-soft">
        {"//"} {index} {en}
      </p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <h2 className="font-display text-3xl text-paper sm:text-4xl">{title}</h2>
        {sub && <p className="max-w-lg pb-1 text-[15px] leading-relaxed text-mist">{sub}</p>}
      </div>
    </div>
  );
}
