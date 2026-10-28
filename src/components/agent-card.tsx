import type { CSSProperties } from "react";
import type { AgentAccent, AgentProject } from "@/data/agents";

/** 每个项目的专属主题色 */
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
    leftBorder: string;
  }
> = {
  phos: {
    strip: "from-phos/90 via-phos/30 to-transparent",
    cardBg: "bg-gradient-to-r from-panel/90 via-panel/70 to-phos/[0.05]",
    arrow: "text-phos",
    corner: "group-hover:border-phos",
    hoverBorder: "hover:border-phos/50",
    hoverGlow: "hover:shadow-[0_0_60px_rgba(127,240,160,0.14)]",
    idText: "text-phos",
    metricText: "text-phos text-glow-soft",
    c1: "rgba(127,240,160,0.75)",
    c2: "rgba(230,180,80,0.45)",
    leftBorder: "border-l-phos/70",
  },
  violet: {
    strip: "from-violet/90 via-violet/35 to-transparent",
    cardBg: "bg-gradient-to-r from-panel/90 via-panel/70 to-violet/[0.09]",
    arrow: "text-violet",
    corner: "group-hover:border-violet",
    hoverBorder: "hover:border-violet/70",
    hoverGlow: "hover:shadow-[0_0_60px_rgba(185,147,255,0.18)]",
    idText: "text-violet",
    metricText: "text-violet",
    c1: "rgba(185,147,255,0.8)",
    c2: "rgba(127,240,160,0.4)",
    leftBorder: "border-l-violet/70",
  },
  amber: {
    strip: "from-amber/90 via-amber/35 to-transparent",
    cardBg: "bg-gradient-to-r from-panel/90 via-panel/70 to-amber/[0.08]",
    arrow: "text-amber",
    corner: "group-hover:border-amber",
    hoverBorder: "hover:border-amber/60",
    hoverGlow: "hover:shadow-[0_0_56px_rgba(230,180,80,0.15)]",
    idText: "text-amber",
    metricText: "text-amber",
    c1: "rgba(230,180,80,0.6)",
    c2: "rgba(229,122,99,0.45)",
    leftBorder: "border-l-amber/70",
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
      className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${color}`}
      aria-hidden
    />
  );
}

/** 全宽横卡：左侧身份区（编号/名称/标语）+ 右侧内容区（描述/能力/数据/栈/链接） */
export default function AgentCard({ agent }: { agent: AgentProject }) {
  const a = ACCENT[agent.accent ?? "phos"];
  const isPrimary = agent.primary === true;

  return (
    <article
      style={isPrimary ? ({ "--c1": a.c1, "--c2": a.c2 } as CSSProperties) : undefined}
      className={`group relative w-full border border-line backdrop-blur-sm transition-all duration-300 ${a.cardBg} ${a.hoverBorder} ${a.hoverGlow} ${a.leftBorder} border-l-4 ${
        isPrimary ? "shimmer-border lift" : ""
      }`}
    >
      <AccentStrip color={a.strip} />
      <Corners hoverColor={a.corner} />

      <div className="grid gap-8 p-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-12 lg:p-9">
        {/* 左侧：身份区 */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`font-mono text-xs font-medium tracking-[0.24em] ${a.idText}`}>
              {agent.id}
            </span>
            {agent.badge && (
              <span className="badge-pulse border border-amber/50 bg-amber/10 px-2 py-0.5 font-mono text-[11px] font-bold tracking-[0.2em] text-amber">
                {agent.badge}
              </span>
            )}
            <StatusBadge status={agent.status} />
          </div>
          <h3 className="mt-5 font-display text-4xl font-extrabold leading-tight text-paper">
            {agent.name}
          </h3>
          <p className="mt-1.5 font-mono text-sm text-mist">{agent.codename}</p>
          <p className={`mt-5 text-base font-medium leading-relaxed ${a.metricText}`}>
            {agent.tagline}
          </p>
          <div className="mt-auto hidden pt-7 lg:block">
            <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-5">
              {agent.metrics.map((m) => (
                <div key={m.label}>
                  <div className={`font-mono text-2xl leading-none ${a.metricText}`}>
                    {m.value}
                  </div>
                  <div className="mt-1.5 font-mono text-xs uppercase tracking-[0.18em] text-mist">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧：内容区 */}
        <div className="flex flex-col border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <p className="text-[15px] leading-loose text-mist">{agent.description}</p>
          <p className="mt-6 font-mono text-xs font-medium tracking-[0.24em] text-mist">
            {"//"} 能力清单
          </p>
          <ul className="mt-3 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {agent.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-paper/85">
                <span className={`mt-0.5 shrink-0 font-mono ${a.arrow}`}>&#x25b8;</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {agent.stack.map((s) => (
              <span
                key={s}
                className="border border-linebright/70 bg-panel2/80 px-2.5 py-1 font-mono text-xs text-paper/90"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-6 lg:hidden">
            {agent.metrics.map((m) => (
              <div key={m.label}>
                <div className={`font-mono text-2xl leading-none ${a.metricText}`}>{m.value}</div>
                <div className="mt-1.5 font-mono text-xs uppercase tracking-[0.18em] text-mist">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {agent.links.length === 0 ? (
              <span className="inline-flex items-center border border-line px-4 py-2 font-mono text-sm text-mist">
                仓库整理中
              </span>
            ) : (
              agent.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 border border-phos/40 bg-phos/10 px-4 py-2 font-mono text-sm font-medium text-phos transition-all hover:bg-phos/20 hover:text-glow-soft"
                >
                  {l.label} <span aria-hidden>{"\u2192"}</span>
                </a>
              ))
            )}
          </div>
          {agent.note && (
            <p className="mt-3 font-mono text-xs leading-relaxed text-mist">
              （{agent.note}）
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
