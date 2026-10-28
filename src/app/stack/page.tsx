import type { Metadata } from "next";
import SectionHead from "@/components/section-head";
import { STACK_GROUPS } from "@/data/agents";

export const metadata: Metadata = {
  title: "工具箱 · SYVIA",
  description: "支撑整个 Agent 实验室的技术栈与工具链。",
};

export default function StackPage() {
  return (
    <main className="relative z-10 mx-auto min-h-[70vh] max-w-6xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
      <section id="stack">
        <SectionHead index="05" en="STACK" title="工具箱" />
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
    </main>
  );
}
