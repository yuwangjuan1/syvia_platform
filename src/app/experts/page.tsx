import type { Metadata } from "next";
import ExpertQr from "@/components/expert-qr";
import SectionHead from "@/components/section-head";
import { EXPERTS } from "@/data/agents";

export const metadata: Metadata = {
  title: "专家 · 浅海鱼",
  description: "WorkBuddy 开放平台的专家：人设 + 方法论 + 工具链的角色化封装。",
};

export default function ExpertsPage() {
  return (
    <main className="relative z-10 mx-auto min-h-[70vh] max-w-6xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
      <section id="experts">
        <SectionHead
          index="03"
          en="EXPERTS"
          title="专家"
          sub="人设 + 方法论 + 工具链的角色化封装——不是工具，是一位随叫随到的私人顾问。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {EXPERTS.map((s) => (
            <div
              key={s.name}
              style={{
                "--c1": "rgba(230,180,80,0.85)",
                "--c2": "rgba(192,139,255,0.4)",
              } as React.CSSProperties}
              className="shimmer-border lift card-glow relative border border-amber/40 bg-gradient-to-br from-panel/90 via-panel/70 to-amber/[0.09] p-7 transition-all duration-300 hover:border-amber hover:shadow-[0_0_60px_rgba(230,180,80,0.2)]"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber/90 via-amber/35 to-transparent"
                aria-hidden
              />
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-extrabold text-paper">{s.name}</h3>
                <span
                  className={`border px-2 py-0.5 font-mono text-[11px] font-medium tracking-[0.18em] ${
                    s.status === "LISTED"
                      ? "border-phos/40 bg-phos/10 text-phos"
                      : s.status === "REVIEW"
                        ? "border-amber/40 bg-amber/10 text-amber"
                        : "border-linebright bg-panel2 text-paper/80"
                  }`}
                >
                  {s.status === "LISTED" ? "已上架" : s.status === "REVIEW" ? "审核中" : "打磨中"}
                </span>
              </div>
              <p className="mt-1.5 font-mono text-xs text-amber">
                {s.version} {"\u00B7"} WORKBUDDY OPEN PLATFORM
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-mist">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.highlights.map((h) => (
                  <span key={h} className="border border-linebright/70 bg-panel2/80 px-2 py-0.5 font-mono text-xs text-paper/85">
                    {h}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-start gap-3">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 border border-phos/40 bg-phos/10 px-4 py-2 font-mono text-sm font-medium text-phos transition-all hover:bg-phos/20 hover:text-glow-soft"
                >
                  查看源码 <span aria-hidden>{"\u2192"}</span>
                </a>
                {s.qr && <ExpertQr name={s.name} qr={s.qr} tone="amber" />}
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center border border-dashed border-line p-6 text-center">
            <p className="text-sm text-mist">
              更多专家打磨中
              <br />
              <span className="font-mono text-xs text-faint">// 敬请期待</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
