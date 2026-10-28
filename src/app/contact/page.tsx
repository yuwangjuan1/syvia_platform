import type { Metadata } from "next";
import SectionHead from "@/components/section-head";
import { AGENTS, SITE } from "@/data/agents";

export const metadata: Metadata = {
  title: "建立连接 · 浅海鱼",
  description: "源码全公开，欢迎交流、共建、提 issue。",
};

export default function ContactPage() {
  return (
    <main className="relative z-10 mx-auto min-h-[70vh] max-w-6xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
      <section id="contact">
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
  );
}
