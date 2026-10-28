import type { Metadata } from "next";
import SectionHead from "@/components/section-head";
import { PIPELINE } from "@/data/agents";

export const metadata: Metadata = {
  title: "协同流水线 · SYVIA",
  description: "单个 Agent 是工具，连成线才是系统——从一条视频到一篇爆款，全自动接力。",
};

export default function PipelinePage() {
  return (
    <main className="relative z-10 mx-auto min-h-[70vh] max-w-6xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
      <section id="pipeline">
        <SectionHead
          index="04"
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
    </main>
  );
}
