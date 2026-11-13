import Link from "next/link";
import BootTerminal from "@/components/boot-terminal";
import SectionHead from "@/components/section-head";
import { AGENTS, SITE } from "@/data/agents";

const STATS = [
  { value: String(AGENTS.length), label: "Agent 在役" },
  { value: String(AGENTS.filter((a) => a.status === "online").length), label: "已上线服役" },
  { value: String(AGENTS.filter((a) => a.status === "building").length), label: "训练营打磨中" },
  { value: "¥0", label: "月度 API 账单" },
];

const PRODUCTS = [
  {
    name: "存钱本",
    desc: "收支流水、账户净资产月度变化、借条与加密保险箱。数据只存在本机，装到手机桌面后断网也能记账。",
    tags: ["PWA", "离线可用", "本地存储"],
    href: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/savings/`,
  },
  {
    name: "小耳朵",
    desc: "格林童话、伊索寓言、中国寓言点开就听，另配每天 10 分钟英语磨耳朵。音频与记录只存本机，断网也能用。",
    tags: ["PWA", "离线可用", "睡前故事"],
    href: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/story/`,
  },
];

export default function Page() {
  return (
    <main id="top" className="relative z-10 mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <section className="grid items-center gap-10 pt-28 sm:pt-36 lg:grid-cols-[1fr_460px]">
        <div>
          <p className="rise font-mono text-xs font-medium tracking-[0.24em] text-phos text-glow-soft">
            {">"} {SITE.system} · 4 AGENTS IN PRODUCTION
          </p>
          <h1
            className="rise mt-5 font-display text-5xl font-extrabold leading-[1.18] sm:text-6xl lg:text-[68px]"
            style={{ animationDelay: "0.08s" }}
          >
            <span className="gradient-text">欢迎来到浅海鱼的</span>
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
            <Link
              href="/portfolio"
              className="border border-linebright px-6 py-3.5 font-mono text-sm font-medium tracking-wider text-paper/90 transition-all hover:border-phos hover:text-phos"
            >
              看作品集 {"\u2192"}
            </Link>
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

      <section className="mt-20">
        <SectionHead
          index="01"
          en="PRODUCTS"
          title="自研工具"
          sub="不登录、不上传、不收费——打开就能用的小工具。"
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {PRODUCTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="card-glow group flex flex-col border border-line bg-panel/60 p-6 transition-all hover:border-phos/50"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-bold text-paper">{p.name}</h3>
                <span className="font-mono text-[11px] tracking-[0.2em] text-phos">LIVE</span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-mist">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-line px-2 py-0.5 font-mono text-[11px] tracking-wider text-mist"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-5 font-mono text-xs tracking-wider text-phos">打开应用 {"\u2192"}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
