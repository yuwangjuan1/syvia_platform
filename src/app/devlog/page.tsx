import type { Metadata } from "next";
import SectionHead from "@/components/section-head";
import { DEVLOG } from "@/data/agents";

export const metadata: Metadata = {
  title: "开发日志 · SYVIA",
  description: "舰队的航海日志——每一次启航与进港，都记录在案。",
};

export default function DevlogPage() {
  return (
    <main className="relative z-10 mx-auto min-h-[70vh] max-w-6xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
      <section id="devlog">
        <SectionHead
          index="07"
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
    </main>
  );
}
