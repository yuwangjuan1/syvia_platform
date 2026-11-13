import type { Metadata } from "next";
import NavBar from "@/components/nav-bar";
import { SITE } from "@/data/agents";
import "./globals.css";

export const metadata: Metadata = {
  title: "浅海鱼 · Agent 工作台",
  description: "浅海鱼（deepsea-coder）的 Agent 开发档案：全部自研 Agent 项目的展示、技术栈与在线入口。",
};

function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>{"\u00a9"} 2026 · 手写，无模板</span>
        <div className="flex gap-5">
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-phos"
          >
            GITHUB {"\u2197"}
          </a>
          <a
            href={SITE.gitee}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-phos"
          >
            GITEE {"\u2197"}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="relative min-h-full">
        <NavBar />

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

        {children}
        <Footer />
      </body>
    </html>
  );
}
