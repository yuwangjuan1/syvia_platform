import type { Metadata } from "next";
import AgentCard from "@/components/agent-card";
import SectionHead from "@/components/section-head";
import { AGENTS } from "@/data/agents";

export const metadata: Metadata = {
  title: "Agent 档案 · 浅海鱼",
  description: "正在服役的数字员工：声稿 EchoScribe、记忆宫殿、青选、侦察猫头鹰。",
};

export default function AgentsPage() {
  return (
    <main className="relative z-10 mx-auto min-h-[70vh] max-w-6xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
      <section id="agents">
        <SectionHead
          index="01"
          en="AGENT ARCHIVE"
          title="Agent"
          sub="点开任意一份档案，认识一位正在服役的数字员工。"
        />
        {/* 一行一张全宽横卡，纵向排列 */}
        <div className="mt-8 flex flex-col gap-6">
          {AGENTS.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>
    </main>
  );
}
