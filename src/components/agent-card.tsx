import type { CSSProperties } from "react";
import type { AgentAccent, AgentProject } from "@/data/agents";

/** 每个项目的专属主题色：色带 / 箭头 / 角标 / 悬停辉光 / 流光颜色 */
const ACCENT: Record<
  AgentAccent,
  {
    strip: string;
    cardBg: string;
    arrow: string;
    corner: string;
    hoverBorder: string;
    hoverGlow: string;
    idText: string;
    metricText: string;
    c1: string;
    c2: string;
  }
> = {
  phos: {
    strip: "from-phos/80 via-phos/25 to-transparent",
    cardBg: "bg-panel/60",
    arrow: "text-phos",
    corner: "group-hover:border-phos",
    hoverBorder: "hover:border-phos/50",
    hoverGlow: "hover:shadow-[0_0_48px_rgba(127,240,160,0.13)]",
    idText: "text-phos/80",
    metricText: "text-phos text-glow-soft",
    c1: "rgba(127,240,160,0.65)",
    c2: "rgba(230,180,80,0.4)",
  },
  violet: {
    strip: "from-violet/90 via-violet/30 to-transparent",
    cardBg: "bg-gradient-to-br from-panel/80 via-panel/60 to-violet/[0.08]",
    arrow: "text-violet",
    corner: "group-hover:border-violet",
    hoverBorder: "hover:border-violet/70",
    hoverGlow: "hover:shadow-[0_0_52px_rgba(185,147,255,0.17)]",
    idText: "text-violet",
    metricText: "text-violet",
    c1: "rgba(185,147,255,0.7)",
    c2: "rgba(127,240,160,0.35)",
  },
  amber: {
    strip: "from-amber/90 via-amber/30 to-transparent",
    cardBg: "bg-gradient-to-br from-panel/80 via-panel/60 to-amber/[0.07]",
    arrow: "text-amber",
    corner: "group-hover:border-amber",
    hoverBorder: "hover:border-amber/60",
    hoverGlow: "hover:shadow-[0_0_48px_rgba(230,180,80,0.13)]",
    idText: "text-amber",
    metricText: "text-amber",
    c1: "rgba(230,180,80,0.55)",
    c2: "rgba(229,122,99,0.4)",
  },
};

function StatusBadge({ status }: { status: AgentProject["status"] }) {
  if (status === "online") {
    return (
      <span className="inline-flex items-center gap-1.5 border border-phos/40 bg-phos/10 px-3 py-1 font-mono text-xs font-medium tracking-wider text-phos text-glow-soft">
        <span className="blinkdot inline-block h-2 w-2 rounded-full bg-phos" />
        ONLINE
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 border border-amber/40 bg-amber/10 px-3 py-1 font-mono text-xs font-medium tracking-wider text-amber">
      <span className="inline-block h-2 w-2 rounded-full bg-amber" />
      BUILDING
    </span>
  );
}

function Corners({ hoverColor }: { hoverColor: string }) {
  const base =
    "pointer-events-none absolute h-3 w-3 border-linebright transition-colors duration-200";
  const c = `${base} ${hoverColor}`;
  return (
    <>
      <span className={`${c} left-0 top-0 border-l-2 border-t-2`} />
      <span className={`${c} right-0 top-0 border-r-2 border-t-2`} />
      <span className={`${c} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${c} bottom-0 right-0 border-b-2 border-r-2`} />
    </>
  );
}

function AccentStrip({ color }: { color: string }) {
  return (
    <div
      className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${color}`}
      aria-hidden
    />
  );
}

function Metrics({ agent }: { agent: AgentProject }) {
  const a = ACCENT[agent.accent ?? "phos"];
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-5">
      {agent.metrics.map((m) => (
        <div key={m.label}>
          <div className={`font-mono text-2xl leading-none ${a.metricText}`}>{m.value}</div>
          <div className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-mist">
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
        <span
          key={s}
          className="border border-linebright/70 bg-panel2/80 px-2.5 py-1 font-mono text-xs text-paper/90"
        >
          {s}
        </span>
      ))}
    </div>
  );
}

function Links({ agent }: { agent: AgentProject }) {
  if (agent.links.length === 0) {
    return (
      <span className="inline-flex items-center border border-line px-4 py-2 font-mono text-sm text-mist">
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
          className="inline-flex items-center gap-1.5 border border-phos/40 bg-phos/10 px-4 py-2 font-mono text-sm font-medium text-phos transition-all hover:bg-phos/20 hover:text-glow-soft"
        >
          {l.label} <span aria-hidden>{"\u2192"}</span>
        </a>
      ))}
    </>
  );
}

function FeatureList({ agent, arrowColor }: { agent: AgentProject; arrowColor: string }) {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-3">
      {agent.features.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-mist">
          <span className={`mt-0.5 shrink-0 font-mono ${arrowColor}`}>&#x25b8;</span>
          {f}
        </li>
      ))}
    </ul>
  );
}

export default function AgentCard({ agent }: { agent: AgentProject }) {
  const a = ACCENT[agent.accent ?? "phos"];
  const isPrimary = agent.primary === true;

  return (
    <article
      style={isPrimary ? ({ "--c1": a.c1, "--c2": a.c2 } as CSSProperties) : undefined}
      className={`group relative flex w-[540px] max-w-full flex-col border border-line p-7 transition-all duration-300 ${a.cardBg} ${a.hoverBorder} ${a.hoverGlow} ${
        isPrimary ? "shimmer-border lift" : ""
      }`}
    >
      <AccentStrip color={a.strip} />
      <Corners hoverColor={a.corner} />
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={`font-mono text-xs font-medium tracking-[0.24em] ${a.idText}`}>
            {agent.id}
          </span>
          {agent.badge && (
            <span className="badge-pulse border border-amber/50 bg-amber/10 px-2 py-0.5 font-mono text-[11px] font-bold tracking-[0.2em] text-amber">
              {agent.badge}
            </span>
          )}
        </div>
        <StatusBadge status={agent.status} />
      </div>
      <h3 className="mt-5 font-display text-3xl font-extrabold text-paper">
        {agent.name}
        <span className="ml-3 font-mono text-sm font-normal text-mist">{agent.codename}</span>
      </h3>
      <p className="mt-2 text-[15px] text-paper/85">{agent.tagline}</p>
      <p className="mt-4 text-sm leading-loose text-mist">{agent.description}</p>
      <div className="mt-5 flex-1">
        <FeatureList agent={agent} arrowColor={a.arrow} />
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
