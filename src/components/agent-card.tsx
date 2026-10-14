import type { AgentAccent, AgentProject } from "@/data/agents";

/** 每个项目的专属主题色：色带 / 箭头 / 角标 / 悬停辉光 */
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
  }
> = {
  phos: {
    strip: "from-phos/80 via-phos/25 to-transparent",
    cardBg: "bg-panel/60",
    arrow: "text-phos",
    corner: "group-hover:border-phos",
    hoverBorder: "hover:border-phos/40",
    hoverGlow: "hover:shadow-[0_0_44px_rgba(127,240,160,0.10)]",
    idText: "text-phos/80",
    metricText: "text-phos text-glow-soft",
  },
  violet: {
    strip: "from-violet/90 via-violet/30 to-transparent",
    cardBg: "bg-gradient-to-br from-panel/80 via-panel/60 to-violet/[0.08]",
    arrow: "text-violet",
    corner: "group-hover:border-violet",
    hoverBorder: "hover:border-violet/60",
    hoverGlow: "hover:shadow-[0_0_48px_rgba(185,147,255,0.14)]",
    idText: "text-violet",
    metricText: "text-violet",
  },
  amber: {
    strip: "from-amber/90 via-amber/30 to-transparent",
    cardBg: "bg-gradient-to-br from-panel/80 via-panel/60 to-amber/[0.07]",
    arrow: "text-amber",
    corner: "group-hover:border-amber",
    hoverBorder: "hover:border-amber/60",
    hoverGlow: "hover:shadow-[0_0_48px_rgba(230,180,80,0.12)]",
    idText: "text-amber",
    metricText: "text-amber",
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

function Metrics({ agent, large = false }: { agent: AgentProject; large?: boolean }) {
  const a = ACCENT[agent.accent ?? "phos"];
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-5">
      {agent.metrics.map((m) => (
        <div key={m.label}>
          <div
            className={`font-mono leading-none ${a.metricText} ${large ? "text-3xl" : "text-2xl"}`}
          >
            {m.value}
          </div>
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

function FeatureList({
  agent,
  cols = 1,
  arrowColor,
}: {
  agent: AgentProject;
  cols?: 1 | 2;
  arrowColor: string;
}) {
  return (
    <ul className={`grid gap-x-8 gap-y-3 ${cols === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
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

  // 旗舰卡（声稿）：全宽横向 + 常驻绿色辉光 + FLAGSHIP 徽章
  if (agent.featured) {
    return (
      <article className="flagship-glow group relative border border-phos/30 bg-gradient-to-br from-panel/90 to-panel2/95 p-7 transition-colors duration-300 hover:border-phos/60 lg:col-span-2 lg:p-9">
        <AccentStrip color={ACCENT.phos.strip} />
        <Corners hoverColor={ACCENT.phos.corner} />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
          <div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.24em] text-mist">{agent.id}</span>
                <span className="border border-amber/50 bg-amber/10 px-2 py-0.5 font-mono text-[11px] font-bold tracking-[0.2em] text-amber">
                  ★ FLAGSHIP
                </span>
              </div>
              <StatusBadge status={agent.status} />
            </div>
            <h3 className="text-glow mt-5 font-display text-4xl font-extrabold text-paper">
              {agent.name}
              <span className="ml-3 font-mono text-base font-normal text-mist">
                {agent.codename}
              </span>
            </h3>
            <p className="mt-3 text-base text-paper/90">{agent.tagline}</p>
            <p className="mt-5 text-[15px] leading-loose text-mist">{agent.description}</p>
            <div className="mt-7">
              <Metrics agent={agent} large />
            </div>
            <div className="mt-6">
              <Stack agent={agent} />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Links agent={agent} />
            </div>
          </div>
          <div className="flex flex-col justify-center border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="font-mono text-xs tracking-[0.24em] text-phos text-glow-soft">
              {"//"} 核心能力
            </p>
            <div className="mt-5">
              <FeatureList agent={agent} cols={2} arrowColor={ACCENT.phos.arrow} />
            </div>
          </div>
        </div>
      </article>
    );
  }

  // 常规卡：等宽纵向，各带专属主题色
  return (
    <article
      className={`group relative flex flex-col border border-line p-7 transition-all duration-300 ${a.cardBg} ${a.hoverBorder} ${a.hoverGlow}`}
    >
      <AccentStrip color={a.strip} />
      <Corners hoverColor={a.corner} />
      <div className="flex items-center justify-between gap-3">
        <span className={`font-mono text-xs font-medium tracking-[0.24em] ${a.idText}`}>
          {agent.id}
        </span>
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
