import BootTerminal from "@/components/boot-terminal";
import AgentCard from "@/components/agent-card";
import { AGENTS, DEVLOG, MARQUEE, PIPELINE, SITE, STACK_GROUPS } from "@/data/agents";

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-display text-lg tracking-wide text-paper">
          {"\u25ae"} {SITE.system}
        </a>
        <nav className="flex items-center gap-5 font-mono text-sm font-medium tracking-wide sm:gap-7">
          <a href="#agents" className="text-paper/90 transition-colors hover:text-phos hover:text-glow-soft">
            项目
          </a>
          <a href="#pipeline" className="text-paper/90 transition-colors hover:text-phos hover:text-glow-soft">
            流水线
          </a>
          <a href="#stack" className="text-paper/90 transition-colors hover:text-phos hover:text-glow-soft">
            技术
          </a>
          <a href="#devlog" className="text-paper/90 transition-colors hover:text-phos hover:text-glow-soft">
            日志
          </a>
          <a href="#contact" className="text-paper/90 transition-colors hover:text-phos hover:text-glow-soft">
            联系
          </a>
          <span className="hidden items-center gap-1.5 border border-phos/40 bg-phos/10 px-2.5 py-1 text-xs font-medium text-phos text-glow-soft sm:inline-flex">
            <span className="blinkdot h-2 w-2 rounded-full bg-phos" />
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

export default function Page() {
  return (
    <>
      <Navbar />

      {/* 极光光斑：缓慢漂移的氛围色雾 */}
      <div className="aurora h-[440px] w-[440px] bg-phos" style={{ top: "-100px", left: "-140px" }} aria-hidden />
      <div
        className="aurora h-[400px] w-[400px] bg-violet"
        style={{ top: "32%", right: "-140px", animationDelay: "-7s" }}
        aria-hidden
      />
      <div
        className="aurora h-[360px] w-[360px] bg-amber"
        style={{ bottom: "-80px", left: "32%", animationDelay: "-13s" }}
        aria-hidden
      />

      <main id="top" className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <section className="grid items-center gap-10 pt-28 sm:pt-36 lg:grid-cols-[1fr_460px]">
          <div>
            <p className="rise font-mono text-xs font-medium tracking-[0.24em] text-phos text-glow-soft">
              {">"} SYVIA.SYS · 3 AGENTS IN PRODUCTION
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
              <a
                href="#agents"
                className="bg-phos px-6 py-3.5 font-mono text-sm font-bold tracking-wider text-ink shadow-[0_0_36px_rgba(127,240,160,0.35)] transition-all hover:bg-paper hover:shadow-[0_0_44px_rgba(234,241,235,0.4)]"
              >
                认识我的 Agent {"\u2193"}
              </a>
              <a
                href="#pipeline"
                className="border border-linebright px-6 py-3.5 font-mono text-sm font-medium tracking-wider text-paper/90 transition-all hover:border-phos hover:text-phos"
              >
                它们怎么协作 {"\u2192"}
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

        <section id="agents" className="mt-20 scroll-mt-20">
          <SectionHead
            index="01"
            en="ARCHIVE"
            title="项目档案"
            sub="点开任意一份档案，认识一位正在服役的数字员工。"
          />
          {/* 一行一张全宽横卡，纵向排列 */}
          <div className="mt-8 flex flex-col gap-6">
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
            sub="单个 Agent 是工具，连成线才是系统——从一条视频到一篇爆款，全自动接力。"
          />
          <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {PIPELINE.map((p) => (
              <div key={p.step} className="card-glow group relative bg-panel/80 p-6 transition-colors hover:bg-panel2">
                <div className="flex items-baseline justify-between">
                  <span className="text-glow-soft font-mono text-4xl font-bold text-linebright transition-colors group-hover:text-phos">
                    {p.step}
                  </span>
                  <span className="font-mono text-xs tracking-[0.18em] text-mist">
                    {p.codename}
                  </span>
                </div>
                <h3 className="text-glow-soft mt-5 font-mono text-base font-bold tracking-wider text-phos">{p.action}</h3>
                <p className="mt-1.5 font-display text-xl font-bold text-paper">{p.agent}</p>
                <p className="mt-3 text-sm leading-relaxed text-mist">{p.detail}</p>
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
                <h3 className="font-mono text-sm font-bold tracking-[0.2em] text-phos">{g.group}</h3>
                <ul className="mt-4 space-y-3">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[15px] text-paper/85">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-phos/70" />
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

        <section id="devlog" className="mt-20 scroll-mt-20">
          <SectionHead
            index="05"
            en="DEV LOG"
            title="开发日志"
            sub="舰队的航海日志——每一次启航与进港，都记录在案。"
          />
          <div className="mt-8 border border-line bg-panel/60">
            {DEVLOG.map((d, i) => (
              <div
                key={`${d.date}-${d.event}`}
                className={`grid gap-2 px-6 py-5 sm:grid-cols-[110px_120px_1fr_auto] sm:items-center sm:gap-6 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <span className="font-mono text-sm font-bold text-phos text-glow-soft">
                  {d.date}
                </span>
                <span className="font-display text-lg font-bold text-paper">{d.event}</span>
                <span className="text-sm leading-relaxed text-mist">{d.detail}</span>
                <span
                  className={`justify-self-start border px-2.5 py-0.5 font-mono text-[11px] font-medium tracking-[0.18em] sm:justify-self-end ${
                    d.tag === "RELEASE"
                      ? "border-phos/40 bg-phos/10 text-phos"
                      : d.tag === "INFRA"
                        ? "border-linebright bg-panel2 text-paper/80"
                        : "border-amber/40 bg-amber/10 text-amber"
                  }`}
                >
                  {d.tag}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-24 mt-20 scroll-mt-20">
          <SectionHead
            index="06"
            en="CONTACT"
            title="建立连接"
            sub="对哪位 Agent 感兴趣？仓库全部开放，随时来围观代码或聊聊 Agent 落地。"
          />
          <div className="mt-8 border border-line bg-panel/60 p-6 sm:p-8">
            <p className="max-w-xl text-base leading-loose text-mist">
              每一个 Agent 都从真实需求中来，也乐意去解决你的同类问题。
              通过 GitHub / Gitee 找到我，源码全公开，欢迎交流、共建、提 issue。
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
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-[1fr_auto]">
            <div>
              <p className="font-display text-lg font-bold text-paper">
                {"\u25ae"} {SITE.system}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist">
                声明：本站为个人 Agent 项目的展示档案馆，全部作品自研自建，仅供技术交流与学习参考。
                视频转写相关功能请遵守各目标平台的服务条款，仅处理有权访问的公开内容；
                转写与检索产生的文案、笔记内容版权归原权利人所有。
              </p>
            </div>
            <div className="space-y-2.5 font-mono text-xs">
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className="block text-mist transition-colors hover:text-phos"
              >
                GITHUB {"\u2192"} github.com/yuwangjuan1
              </a>
              <a
                href={SITE.gitee}
                target="_blank"
                rel="noreferrer"
                className="block text-mist transition-colors hover:text-phos"
              >
                GITEE {"\u2192"} gitee.com/syvia
              </a>
              <p className="text-faint">F:\2026project\smart_brain —— 第二大脑运转中</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2 border-t border-line pt-5 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
            <span>
              {"\u00a9"} 2026 {SITE.system} — 手写，无模板
            </span>
            <span>BUILT WITH NEXT.JS · REACT · TAILWIND · DEPLOYED ON GITHUB PAGES</span>
          </div>
        </div>
      </footer>
    </>
  );
}
