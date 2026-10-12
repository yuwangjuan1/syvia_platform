import BootTerminal from "@/components/boot-terminal";
import AgentCard from "@/components/agent-card";
import { AGENTS, MARQUEE, SITE, STACK_GROUPS } from "@/data/agents";

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-display text-lg tracking-wide text-paper">
          {"\u25ae"} {SITE.system}
        </a>
        <nav className="flex items-center gap-4 font-mono text-[11px] tracking-wider sm:gap-6">
          <a href="#agents" className="text-mist transition-colors hover:text-phos">
            项目
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

function SectionHead({ index, en, title }: { index: string; en: string; title: string }) {
  return (
    <div className="border-b border-line pb-4">
      <p className="font-mono text-[11px] tracking-[0.24em] text-phos">
        {"//"} {index} {en}
      </p>
      <h2 className="mt-2 font-display text-3xl text-paper sm:text-4xl">{title}</h2>
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
              className="rise mt-6 max-w-xl text-[15px] leading-relaxed text-mist"
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
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className="border border-linebright px-5 py-3 font-mono text-xs tracking-wider text-mist transition-colors hover:border-phos hover:text-phos"
              >
                GITHUB {"\u2192"}
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
          <SectionHead index="01" en="ARCHIVE" title="项目档案" />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {AGENTS.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </section>

        <section id="stack" className="mt-20 scroll-mt-20">
          <SectionHead index="02" en="STACK" title="工具箱" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STACK_GROUPS.map((g) => (
              <div key={g.group} className="border border-line bg-panel/60 p-5">
                <h3 className="font-mono text-xs tracking-[0.2em] text-phos">{g.group}</h3>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((item) => (
                    <li key={item} className="font-mono text-[13px] text-mist">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-24 mt-20 scroll-mt-20">
          <SectionHead index="03" en="CONTACT" title="建立连接" />
          <div className="mt-8 border border-line bg-panel/60 p-6 sm:p-8">
            <p className="max-w-xl text-[15px] leading-relaxed text-mist">
              对档案里的项目感兴趣，或想聊聊 Agent 的落地场景？通过 GitHub 找到我。
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
            </div>
            <p className="mt-5 font-mono text-[11px] text-faint">{"//"} 更多联系方式整理中</p>
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
