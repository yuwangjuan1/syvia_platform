import type { Metadata } from "next";
import LogoMark from "@/components/logo-mark";
import NavBar from "@/components/nav-bar";
import { SITE } from "@/data/agents";
import "./globals.css";

export const metadata: Metadata = {
  title: "SYVIA · Agent 工作台",
  description: "syvia 的 Agent 开发档案：全部自研 Agent 项目的展示、技术栈与在线入口。",
};

function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-[1fr_auto]">
          <div>
            <p className="flex items-center gap-2 font-display text-lg font-bold text-paper">
              <LogoMark className="h-[22px] w-[22px] shrink-0 text-phos" />
              {SITE.system}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist">
              声明：本站为个人 Agent 项目的展示档案馆，全部作品自研自建，仅供技术交流与学习参考。
              视频转写相关功能请遵守各目标平台的服务条款，仅处理有权访问的公开内容；
              转写与检索产生的文案、笔记内容版权归原权利人所有。
            </p>
          </div>
          <div className="space-y-2.5 font-mono text-xs">
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="block text-mist transition-colors hover:text-phos"
            >
              GITHUB {"\u2192"} github.com/yuwangjuan1
            </a>
            <a
              href={SITE.gitee}
              target="_blank"
              rel="noreferrer"
              className="block text-mist transition-colors hover:text-phos"
            >
              GITEE {"\u2192"} gitee.com/syvia
            </a>
            <p className="text-faint">F:\2026project\smart_brain —— 第二大脑运转中</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-5 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            {"\u00a9"} 2026 {SITE.system} — 手写，无模板
          </span>
          <span>BUILT WITH NEXT.JS · REACT · TAILWIND · DEPLOYED ON GITHUB PAGES</span>
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
