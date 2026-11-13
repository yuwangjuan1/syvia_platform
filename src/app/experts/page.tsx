import type { Metadata } from "next";
import ExpertQr from "@/components/expert-qr";
import SectionHead from "@/components/section-head";
import { EXPERTS } from "@/data/agents";

export const metadata: Metadata = {
  title: "专家 · 浅海鱼",
  description: "WorkBuddy 开放平台的专家：人设 + 方法论 + 工具链的角色化封装。",
};

const STATUS_TEXT: Record<string, string> = {
  LISTED: "已上架",
  REVIEW: "审核中",
  BUILDING: "打磨中",
};

const STATUS_CLASS: Record<string, string> = {
  LISTED: "border-phos/40 bg-phos/10 text-phos",
  REVIEW: "border-amber/40 bg-amber/10 text-amber",
  BUILDING: "border-linebright bg-panel2 text-paper/80",
};

export default function ExpertsPage() {
  return (
    <main className="relative z-10 mx-auto min-h-[70vh] max-w-6xl px-4 pb-24 pt-24 sm:px-6 sm:pt-32">
      <section id="experts">
        <SectionHead
          index="03"
          en="EXPERTS"
          title="专家"
          sub="人设 + 方法论 + 工具链的角色化封装——不是工具，是一位随叫随到的私人顾问。"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
          {EXPERTS.map((s) => (
            <div
              key={s.name}
              style={
                {
                  "--c1": "rgba(230,180,80,0.85)",
                  "--c2": "rgba(192,139,255,0.4)",
                } as React.CSSProperties
              }
              className="shimmer-border lift card-glow relative border border-amber/40 bg-gradient-to-br from-panel/90 via-panel/70 to-amber/[0.09] p-5 transition-all duration-300 hover:border-amber hover:shadow-[0_0_60px_rgba(230,180,80,0.2)] sm:p-7"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber/90 via-amber/35 to-transparent"
                aria-hidden
              />
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`whitespace-nowrap border px-2 py-0.5 font-mono text-[11px] font-medium tracking-[0.18em] ${
                    STATUS_CLASS[s.status] ?? STATUS_CLASS.BUILDING
                  }`}
                >
                  {STATUS_TEXT[s.status] ?? s.status}
                </span>
                <span className="font-mono text-[11px] tracking-wider text-faint">{s.version}</span>
              </div>

              <h3 className="mt-3.5 font-display text-xl font-bold leading-snug text-paper sm:text-2xl">
                {s.name}
              </h3>
              <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-amber/90">
                WORKBUDDY OPEN PLATFORM
              </p>

              <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-mist sm:text-[15px]">
                {s.desc}
              </p>

              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {s.highlights.map((h) => (
                  <span
                    key={h}
                    className="border border-linebright/70 bg-panel2/80 px-2 py-0.5 font-mono text-[11px] text-paper/85"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-start gap-2.5">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 border border-phos/40 bg-phos/10 px-3.5 py-2 font-mono text-[13px] font-medium text-phos transition-all hover:bg-phos/20 hover:text-glow-soft"
                >
                  查看源码 <span aria-hidden>{"\u2192"}</span>
                </a>
                {s.qr && <ExpertQr name={s.name} qr={s.qr} tone="amber" />}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
