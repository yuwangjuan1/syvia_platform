import type { AgentProject } from "@/data/agents";

function StatusBadge({ status }: { status: AgentProject["status"] }) {
  if (status === "online") {
    return (
      <span className="inline-flex items-center gap-1.5 border border-phos/30 bg-phos/[0.06] px-2 py-0.5 font-mono text-[10px] tracking-wider text-phos">
        <span className="blinkdot inline-block h-1.5 w-1.5 rounded-full bg-phos" />
        ONLINE
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 border border-amber/30 bg-amber/[0.06] px-2 py-0.5 font-mono text-[10px] tracking-wider text-amber">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber" />
      BUILDING
    </span>
  );
}

function Corners() {
  const base =
    "pointer-events-none absolute h-2.5 w-2.5 border-linebright transition-colors duration-200 group-hover:border-phos";
  return (
    <>
      <span className={`${base} left-0 top-0 border-l border-t`} />
      <span className={`${base} right-0 top-0 border-r border-t`} />
      <span className={`${base} bottom-0 left-0 border-b border-l`} />
      <span className={`${base} bottom-0 right-0 border-b border-r`} />
    </>
  );
}

export default function AgentCard({ agent }: { agent: AgentProject }) {
  return (
    <article
      className={`group relative border border-line bg-panel/60 p-6 transition-colors duration-200 hover:border-linebright ${
        agent.featured ? "lg:col-span-2" : ""
      }`}
    >
      <Corners />
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] tracking-[0.2em] text-faint">{agent.id}</span>
        <StatusBadge status={agent.status} />
      </div>

      <h3 className="mt-5 font-display text-2xl text-paper">
        {agent.name}
        <span className="ml-3 font-mono text-xs font-normal text-faint">{agent.codename}</span>
      </h3>
      <p className="mt-1.5 text-sm text-mist">{agent.tagline}</p>

      <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-mist">{agent.description}</p>

      <ul
        className={`mt-5 grid gap-x-8 gap-y-2 ${agent.featured ? "sm:grid-cols-2" : "grid-cols-1"}`}
      >
        {agent.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[13px] leading-relaxed text-mist">
            <span className="mt-px shrink-0 font-mono text-phos">{"\u25b8"}</span>
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-4">
        {agent.metrics.map((m) => (
          <div key={m.label}>
            <div className="font-mono text-lg leading-none text-paper">{m.value}</div>
            <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-1.5">
        {agent.stack.map((s) => (
          <span
            key={s}
            className="border border-line px-2 py-0.5 font-mono text-[10px] text-mist"
          >
            {s}
          </span>
        ))}
      </div>

      {agent.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3">
          {agent.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border border-phos/30 px-3 py-1.5 font-mono text-xs text-phos transition-colors hover:bg-phos/10"
            >
              {l.label} <span aria-hidden>{"\u2192"}</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
