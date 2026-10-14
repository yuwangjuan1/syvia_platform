import BootTerminal from "@/components/boot-terminal";
import AgentCard from "@/components/agent-card";
import { AGENTS, MARQUEE, PIPELINE, SITE, STACK_GROUPS } from "@/data/agents";

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-display text-lg tracking-wide text-paper">
          {"\u25ae"} {SITE.system}
        </a>
        <nav className="flex items-center gap-4 font-mono text-[11px] tracking-wider sm:gap-6">
          <a href="#agents" className="text-mist transition-colors hover:text-phos">
            项目
          </a>
          <a href="#pipeline" className="text-mist transition-colors hover:text-phos">
            流水线
          </a>
          <a href="#stack" className="text-mist transition-colors hover:text-phos">
            技术
          </a>
          <a href="#contact" className="text-mist transition-colors hover:text-phos">
            联系
          </a>
          <span className="hidden items-center gap-1.5 border border-phos/25 px-2 py-0.5 text-phos sm:inline-flex">
            <span className="blinkdot h-1.5 w-1.5 rounded-full bg-phos" />
            ONLINE
          </span>
        </nav>
      </div>
    </header>
  );
}

function SectionHead({ index, en, title, sub }: { index: string; en: string; title: string; sub?: string }) {
  return (
    <div className="border-b border-line pb-5">
      <p className="font-mono text-[11px] tracking-[0.24em] text-phos">
        {"//"} {index} {en}
      </p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <h2 className="font-display text-3xl text-paper sm:text-4xl">{title}</h2>
        {sub && <p className="max-w-md pb-1 text-sm text-mist">{sub}</p>}
      </div>
    </div>
  );
}

function Marquee() {
  const row = MARQUEE.map((item) => ` ${item} \u25c6`).join("");
  return (
    <div className="mt-14 overflow-hidden border-y border-line py-3" aria-hidden>
      <div className="marquee-track flex w-max whitespace-nowrap font-mono text-[11px] tracking-[0.3em] text-faint">
        <span>{row}</span>
        <span>{row}</span>
      </div>
    </div>
  );
}

const STATS = [
  { value: String(AGENTS.length), label: "AGENT 档案" },
  { value: String(AGENTS.filter((a) => a.status === "online").length), label: "在线运行" },
  { value: String(AGENTS.filter((a) => a.status === "building").length), label: "研发中" },
  { value: "100%", label: "自研自建" },
];

const PRINCIPLES = [
  {
    title: "真实需求驱动",
    detail: "每个 Agent 都源于自己内容生产中的真实痛点，不做玩具，造完就接入日常工作流。",
  },
  {
    title: "本地优先",
    detail: "本地推理 + 本地存储，数据不出门。零 API 成本意味着可以放心高频使用。",
  },
  {
    title: "长期运行",
    detail: "上线不是终点。增量索引、错误兜底、结构化日志，为持续运行而设计。",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />

      <main id="top" className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <section className="grid items-center gap-10 pt-28 sm:pt-36 lg:grid-cols-[1fr_460px]">
          <div>
            <p className="rise font-mono text-xs tracking-[0.24em] text-phos">
              {">"} AGENT WORKBENCH · v2026.10
            </p>
            <h1
              className="rise mt-5 font-display text-5xl leading-[1.15] text-paper sm:text-6xl"
              style={{ animationDelay: "0.08s" }}
            >
              我造 Agent，
              <br />
              然后让它们上线。
            </h1>
            <p
              className="rise mt-6 max-w-xl text-base leading-loose text-mist"
              style={{ animationDelay: "0.16s" }}
            >
              这里是 {SITE.owner} 的 Agent 开发档案馆——每个项目都从真实需求出发，
              在真实环境里长期运行。档案逐份归档，持续更新。
            </p>
            <div
              className="rise mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.24s" }}
            >
              <a
                href="#agents"
                className="bg-phos px-5 py-3 font-mono text-xs tracking-wider text-ink transition-colors hover:bg-paper"
              >
                浏览项目档案 {"\u2193"}
              </a>
              <a
                href="#pipeline"
                className="border border-linebright px-5 py-3 font-mono text-xs tracking-wider text-mist transition-colors hover:border-phos hover:text-phos"
              >
                协同流水线 {"\u2192"}
              </a>
            </div>
          </div>

          <div className="rise" style={{ animationDelay: "0.3s" }}>
            <BootTerminal />
          </div>
        </section>

        <div
          className="rise mt-14 grid grid-cols-2 divide-x divide-line border-y border-line sm:grid-cols-4"
          style={{ animationDelay: "0.36s" }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="px-5 py-5">
              <div className="font-display text-3xl text-paper">{s.value}</div>
              <div className="mt-1.5 font-mono text-[10px] tracking-[0.22em] text-faint">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <Marquee />

        <section id="agents" className="mt-20 scroll-mt-20">
          <SectionHead
            index="01"
            en="ARCHIVE"
            title="项目档案"
            sub="从内容采集到知识检索，每个 Agent 独立成档，也可协同成线。"
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {AGENTS.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </section>

        <section id="pipeline" className="mt-20 scroll-mt-20">
          <SectionHead
            index="02"
            en="PIPELINE"
            title="协同流水线"
            sub="单个 Agent 是工具，连成线才是系统——这是它们协作的方式。"
          />
          <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {PIPELINE.map((p) => (
              <div key={p.step} className="group relative bg-panel/80 p-6 transition-colors hover:bg-panel2">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-3xl text-linebright transition-colors group-hover:text-phos">
                    {p.step}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-faint">
                    {p.codename}
                  </span>
                </div>
                <h3 className="mt-5 font-mono text-sm tracking-wider text-phos">{p.action}</h3>
                <p className="mt-1.5 font-display text-lg text-paper">{p.agent}</p>
                <p className="mt-3 text-[13px] leading-relaxed text-mist">{p.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-line bg-panel/40 px-6 py-4">
            <p className="font-mono text-xs leading-relaxed text-faint">
              {"//"} 采集 <span className="text-phos">→</span> 归档 <span className="text-phos">→</span>{" "}
              检索 <span className="text-phos">→</span> 创作{" "}
              <span className="text-phos">→</span> 发布后的数据反哺下一轮选题，飞轮闭环
            </p>
          </div>
        </section>

        <section id="stack" className="mt-20 scroll-mt-20">
          <SectionHead index="03" en="STACK" title="工具箱" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STACK_GROUPS.map((g) => (
              <div key={g.group} className="border border-line bg-panel/60 p-6">
                <h3 className="font-mono text-xs tracking-[0.2em] text-phos">{g.group}</h3>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-mist">
                      <span className="mt-1.5 h-1 w-1 shrink-0 bg-linebright" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 scroll-mt-20">
          <SectionHead
            index="04"
            en="PRINCIPLES"
            title="构建原则"
            sub="比技术栈更重要的三条约定。"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className="border border-line bg-panel/60 p-6">
                <span className="font-mono text-[11px] tracking-[0.24em] text-phos">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl text-paper">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-24 mt-20 scroll-mt-20">
          <SectionHead index="05" en="CONTACT" title="建立连接" />
          <div className="mt-8 border border-line bg-panel/60 p-6 sm:p-8">
            <p className="max-w-xl text-base leading-loose text-mist">
              对档案里的项目感兴趣，或想聊聊 Agent 的落地场景？通过 GitHub / Gitee 找到我，
              仓库均开放，欢迎交流与共建。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className="border border-phos/30 px-4 py-2 font-mono text-xs text-phos transition-colors hover:bg-phos/10"
              >
                GITHUB · @{SITE.owner} {"\u2192"}
              </a>
              <a
                href={SITE.gitee}
                target="_blank"
                rel="noreferrer"
                className="border border-linebright px-4 py-2 font-mono text-xs text-mist transition-colors hover:border-phos hover:text-phos"
              >
                GITEE · @{SITE.owner} {"\u2192"}
              </a>
            </div>
            <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
              {AGENTS.filter((a) => a.links.length > 0).map((a) => (
                <a
                  key={a.id}
                  href={a.links[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-panel2/80 p-4 transition-colors hover:bg-panel"
                >
                  <p className="font-mono text-[10px] tracking-[0.2em] text-faint">{a.id}</p>
                  <p className="mt-1.5 text-sm text-mist transition-colors group-hover:text-phos">
                    {a.name} <span aria-hidden>{"\u2192"}</span>
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 font-mono text-[11px] text-faint sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>
            {"\u00a9"} 2026 {SITE.system} — 手写，无模板
          </span>
          <span>BUILT WITH NEXT.JS · REACT · TAILWIND</span>
        </div>
      </footer>
    </>
  );
}
