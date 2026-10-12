import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SYVIA · Agent 工作台",
  description: "syvia 的 Agent 开发档案：全部自研 Agent 项目的展示、技术栈与在线入口。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="relative min-h-full">{children}</body>
    </html>
  );
}
