import type { Metadata } from "next";
import ExpertQr from "@/components/expert-qr";
import SectionHead from "@/components/section-head";
import { SKILLS } from "@/data/agents";

export const metadata: Metadata = {
  title: "技能 · SYVIA",
  description: "把方法论封装成可复用的技能，上架 WorkBuddy 开放平台。",
};

export default function SkillsPage() {
  return (
    <main className="relative z-10 mx-auto min-h-[70vh] max-w-6xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
      <section id="skills">
        <SectionHead
          index="02"
          en="SKILLS"
          title="技能"
          sub="把方法论封装成可复用的技能，上架 WorkBuddy 开放平台——实验室的对外输出。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {SKILLS.map((s) => (
            <div
              key={s.name}
              style={{
                "--c1": "rgba(192,139,255,0.8)",
                "--c2": "rgba(103,255,157,0.4)",
              } as React.CSSProperties}
              className="shimmer-border lift card-glow relative border border-violet/40 bg-gradient-to-br from-panel/90 via-panel/70 to-violet/[0.09] p-7 transition-all duration-300 hover:border-violet hover:shadow-[0_0_60px_rgba(192,139,255,0.18)]"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet/90 via-violet/35 to-transparent"
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
              <p className="mt-1.5 font-mono text-xs text-violet">
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
                {s.qr && <ExpertQr name={s.name} qr={s.qr} tone="violet" />}
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center border border-dashed border-line p-6 text-center">
            <p className="text-sm text-mist">
              更多技能打磨中
              <br />
              <span className="font-mono text-xs text-faint">// 敬请期待</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
