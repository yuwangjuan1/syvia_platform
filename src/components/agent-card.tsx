import type { AgentProject } from "@/data/agents";

function StatusBadge({ status }: { status: AgentProject["status"] }) {
  if (status === "online") {
    return (
      <span className="inline-flex items-center gap-1.5 border border-phos/30 bg-phos/[0.06] px-2.5 py-1 font-mono text-[11px] tracking-wider text-phos">
        <span className="blinkdot inline-block h-1.5 w-1.5 rounded-full bg-phos" />
        ONLINE
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 border border-amber/30 bg-amber/[0.06] px-2.5 py-1 font-mono text-[11px] tracking-wider text-amber">
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

function Metrics({ agent }: { agent: AgentProject }) {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-5">
      {agent.metrics.map((m) => (
        <div key={m.label}>
          <div className="font-mono text-2xl leading-none text-paper">{m.value}</div>
          <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function Stack({ agent }: { agent: AgentProject }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {agent.stack.map((s) => (
        <span key={s} className="border border-line bg-panel2/60 px-2.5 py-1 font-mono text-[11px] text-mist">
          {s}
        </span>
      ))}
    </div>
  );
}

function Links({ agent }: { agent: AgentProject }) {
  if (agent.links.length === 0) {
    return (
      <span className="inline-flex items-center border border-line px-3 py-1.5 font-mono text-xs text-faint">
        仓库整理中
      </span>
    );
  }
  return (
    <>
      {agent.links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 border border-phos/30 px-3.5 py-1.5 font-mono text-xs text-phos transition-colors hover:bg-phos/10"
        >
          {l.label} <span aria-hidden>{"\u2192"}</span>
        </a>
      ))}
    </>
  );
}

function FeatureList({ agent, cols = 1 }: { agent: AgentProject; cols?: 1 | 2 }) {
  return (
    <ul className={`grid gap-x-8 gap-y-2.5 ${cols === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
      {agent.features.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-mist">
          <span className="mt-0.5 shrink-0 font-mono text-phos">{"\u25b8"}</span>
          {f}
        </li>
      ))}
    </ul>
  );
}

export default function AgentCard({ agent }: { agent: AgentProject }) {
  // featured 卡：全宽横向布局（左叙述 / 右特性），其余为等宽纵向卡
  if (agent.featured) {
    return (
      <article className="group relative border border-line bg-panel/60 p-7 transition-colors duration-200 hover:border-linebright lg:col-span-2 lg:p-9">
        <Corners />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
          <div>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] tracking-[0.24em] text-faint">{agent.id}</span>
              <StatusBadge status={agent.status} />
            </div>
            <h3 className="mt-5 font-display text-3xl text-paper">
              {agent.name}
              <span className="ml-3 font-mono text-sm font-normal text-faint">{agent.codename}</span>
            </h3>
            <p className="mt-2 text-[15px] text-mist">{agent.tagline}</p>
            <p className="mt-5 text-sm leading-loose text-mist">{agent.description}</p>
            <div className="mt-7">
              <Metrics agent={agent} />
            </div>
            <div className="mt-6">
              <Stack agent={agent} />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Links agent={agent} />
            </div>
          </div>
          <div className="flex flex-col justify-center border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="font-mono text-[11px] tracking-[0.24em] text-phos">{"//"} 核心能力</p>
            <div className="mt-5">
              <FeatureList agent={agent} cols={2} />
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex flex-col border border-line bg-panel/60 p-7 transition-colors duration-200 hover:border-linebright">
      <Corners />
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] tracking-[0.24em] text-faint">{agent.id}</span>
        <StatusBadge status={agent.status} />
      </div>
      <h3 className="mt-5 font-display text-2xl text-paper">
        {agent.name}
        <span className="ml-3 font-mono text-xs font-normal text-faint">{agent.codename}</span>
      </h3>
      <p className="mt-2 text-sm text-mist">{agent.tagline}</p>
      <p className="mt-4 text-sm leading-loose text-mist">{agent.description}</p>
      <div className="mt-5 flex-1">
        <FeatureList agent={agent} />
      </div>
      <div className="mt-6">
        <Metrics agent={agent} />
      </div>
      <div className="mt-6">
        <Stack agent={agent} />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Links agent={agent} />
      </div>
    </article>
  );
}
