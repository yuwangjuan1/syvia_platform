import Link from "next/link";
import BootTerminal from "@/components/boot-terminal";
import SectionHead from "@/components/section-head";
import { AGENTS, DEVLOG, MARQUEE, PIPELINE, STACK_GROUPS } from "@/data/agents";

function Marquee() {
  const row = MARQUEE.map((item) => ` ${item} \u25c6`).join("");
  return (
    <div className="mt-14 overflow-hidden border-y border-line py-3" aria-hidden>
      <div className="marquee-track flex w-max whitespace-nowrap font-mono text-xs tracking-[0.3em] text-mist">
        <span>{row}</span>
        <span>{row}</span>
      </div>
    </div>
  );
}

const STATS = [
  { value: String(AGENTS.length), label: "Agent 在役" },
  { value: String(AGENTS.filter((a) => a.status === "online").length), label: "已上线服役" },
  { value: String(AGENTS.filter((a) => a.status === "building").length), label: "训练营打磨中" },
  { value: "¥0", label: "月度 API 账单" },
];

const PRINCIPLES = [
  {
    title: "真实需求驱动",
    detail: "不追热点、不做 demo——每个 Agent 都为解决自己的真实痛点而生，造完第一天就投入实战。",
  },
  {
    title: "本地优先",
    detail: "数据不出门，账单不进门。本地推理 + 本地存储，隐私和成本双保险。",
  },
  {
    title: "长期运行",
    detail: "上线才是开始。增量索引、错误兜底、结构化日志，为 7×24 不打烊而设计。",
  },
];

function LabNotes() {
  return (
    <section id="lab-notes" className="mt-20">
      <SectionHead
        index="05"
        en="LAB NOTES"
        title="实验室底账"
        sub="怎么协作、用什么造、走过哪些里程碑——一屏看完，不占地方。"
      />

      {/* 协作流水线：一行流 */}
      <div className="mt-8 border border-line bg-panel/60 px-6 py-5">
        <p className="font-mono text-xs font-medium tracking-[0.2em] text-phos">{"//"} PIPELINE</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2.5">
          {PIPELINE.map((p, i) => (
            <span key={p.step} className="flex items-center gap-3">
              {i > 0 && <span className="text-linebright" aria-hidden>{"\u2192"}</span>}
              <span className="text-sm text-paper/90">
                <span className="mr-1.5 font-mono text-xs font-bold text-phos">{p.step}</span>
                {p.action}
                <span className="ml-1.5 text-xs text-faint">{p.agent}</span>
              </span>
            </span>
          ))}
          <span className="flex items-center gap-3">
            <span className="text-linebright" aria-hidden>{"\u2192"}</span>
            <span className="text-sm text-mist">数据反哺下一轮选题，飞轮闭环</span>
          </span>
        </div>
      </div>

      {/* 工具箱：分组一行一项 */}
      <div className="mt-4 border border-line bg-panel/60 px-6 py-5">
        <p className="font-mono text-xs font-medium tracking-[0.2em] text-phos">{"//"} STACK</p>
        <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {STACK_GROUPS.map((g) => (
            <p key={g.group} className="text-sm leading-relaxed">
              <span className="mr-3 font-mono text-xs font-bold tracking-wider text-mist">
                {g.group}
              </span>
              <span className="text-paper/85">{g.items.join(" \u00b7 ")}</span>
            </p>
          ))}
        </div>
      </div>

      {/* 开发日志：压缩行 */}
      <div className="mt-4 border border-line bg-panel/60 px-6 py-5">
        <p className="font-mono text-xs font-medium tracking-[0.2em] text-phos">{"//"} DEV LOG</p>
        <div className="mt-2 divide-y divide-line/60">
          {DEVLOG.map((d) => (
            <p key={`${d.date}-${d.event}`} className="flex flex-wrap items-baseline gap-x-4 py-2.5 text-sm">
              <span className="font-mono text-xs font-bold text-phos text-glow-soft">{d.date}</span>
              <span className="font-medium text-paper/90">{d.event}</span>
              <span className="text-mist">{d.detail}</span>
              <span
                className={`ml-auto border px-1.5 py-0.5 font-mono text-[10px] tracking-[0.15em] ${
                  d.tag === "RELEASE"
                    ? "border-phos/40 bg-phos/10 text-phos"
                    : d.tag === "INFRA"
                      ? "border-linebright bg-panel2 text-paper/80"
                      : "border-amber/40 bg-amber/10 text-amber"
                }`}
              >
                {d.tag}
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main id="top" className="relative z-10 mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <section className="grid items-center gap-10 pt-28 sm:pt-36 lg:grid-cols-[1fr_460px]">
        <div>
          <p className="rise font-mono text-xs font-medium tracking-[0.24em] text-phos text-glow-soft">
            {">"} SYVIA.SYS · 4 AGENTS IN PRODUCTION
          </p>
          <h1
            className="rise mt-5 font-display text-5xl font-extrabold leading-[1.18] sm:text-6xl lg:text-[68px]"
            style={{ animationDelay: "0.08s" }}
          >
            <span className="gradient-text">欢迎来到 Syvia 的</span>
            <br />
            <span className="text-paper text-glow">Agent 实验室。</span>
          </h1>
          <p
            className="rise mt-7 max-w-xl text-lg leading-loose text-mist"
            style={{ animationDelay: "0.16s" }}
          >
            全部自研自建，源码开放，长期运行。想解决什么问题，就造什么样的 Agent。
          </p>
          <div
            className="rise mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.24s" }}
          >
            <Link
              href="/agents"
              className="bg-phos px-6 py-3.5 font-mono text-sm font-bold tracking-wider text-ink shadow-[0_0_36px_rgba(127,240,160,0.35)] transition-all hover:bg-paper hover:shadow-[0_0_44px_rgba(234,241,235,0.4)]"
            >
              认识我的 Agent {"\u2192"}
            </Link>
            <a
              href="#lab-notes"
              className="border border-linebright px-6 py-3.5 font-mono text-sm font-medium tracking-wider text-paper/90 transition-all hover:border-phos hover:text-phos"
            >
              它们怎么协作 {"\u2193"}
            </a>
          </div>
        </div>

        <div className="rise floaty" style={{ animationDelay: "0.3s" }}>
          <BootTerminal />
        </div>
      </section>

      <div
        className="rise mt-14 grid grid-cols-2 divide-x divide-line border-y border-line sm:grid-cols-4"
        style={{ animationDelay: "0.36s" }}
      >
        {STATS.map((s, i) => (
          <div key={s.label} className="popin px-5 py-6" style={{ animationDelay: `${0.4 + i * 0.08}s` }}>
            <div className="text-glow font-display text-4xl font-extrabold text-phos">{s.value}</div>
            <div className="mt-2 font-mono text-xs font-medium tracking-[0.2em] text-mist">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <Marquee />

      <section className="mt-20">
        <SectionHead
          index="04"
          en="PRINCIPLES"
          title="构建原则"
          sub="三条军规，刻在每个 Agent 的骨子里。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <div key={p.title} className="card-glow border border-line bg-panel/60 p-6 hover:border-linebright">
              <span className="text-glow-soft font-mono text-2xl font-bold text-phos">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-paper">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mist">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <LabNotes />
    </main>
  );
}
