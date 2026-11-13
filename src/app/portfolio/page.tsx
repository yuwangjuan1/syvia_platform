import Link from "next/link";
import SectionHead from "@/components/section-head";
import { SITE } from "@/data/agents";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata = {
  title: `作品集 · ${SITE.owner}`,
  description:
    "前端工程师 / 独立构建者。三个线上产品，从需求、设计到上线部署全部自己完成：存钱本、小耳朵、公众号发布流水线。",
};

type Project = {
  id: string;
  name: string;
  en: string;
  tagline: string;
  detail: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  href?: string;
  status: string;
};

const PROJECTS: Project[] = [
  {
    id: "01",
    name: "存钱本",
    en: "SAVINGS",
    tagline: "记账软件缺的不是功能，是让人愿意打开。",
    detail:
      "一屏只放三个数字：净资产、这个月存下多少、最近一笔。多账户、月度流水、借条记录，外加一个本机加密的保险箱。数据不出设备，装到桌面后断网也能记。",
    metrics: [
      { value: "0", label: "服务器" },
      { value: "AES-GCM", label: "本地加密" },
      { value: "100%", label: "离线可用" },
    ],
    stack: ["PWA", "IndexedDB", "Web Crypto", "Service Worker"],
    href: `${BASE}/savings/`,
    status: "LIVE",
  },
  {
    id: "02",
    name: "小耳朵",
    en: "STORY",
    tagline: "给女儿做的睡前故事机，用户只有一个人。",
    detail:
      "62 个故事、每天 10 分钟英语磨耳朵。断点续播、定时渐弱、长按 0.8 秒才退出的儿童锁。音频与学习记录只存本机，熄灯后断网也能接着听。",
    metrics: [
      { value: "62", label: "故事" },
      { value: "5 词", label: "每日词量" },
      { value: "0", label: "网络依赖" },
    ],
    stack: ["PWA", "MediaSession", "IndexedDB", "Cache API"],
    href: `${BASE}/story/`,
    status: "LIVE",
  },
  {
    id: "03",
    name: "发布流水线",
    en: "PUBLISHER",
    tagline: "把两小时的排版，压成一条命令。",
    detail:
      "Markdown 进，公众号草稿出：自动排版、金句卡、图片上传、封面裁切、SEO 元数据，图片按公众号要求自动换成可引用的地址。写完 push，GitHub Actions 自动发布站点。",
    metrics: [
      { value: "1 条", label: "命令发布" },
      { value: "2h→3min", label: "排版耗时" },
      { value: "0", label: "手动上传" },
    ],
    stack: ["Node.js", "微信 API", "GitHub Actions", "Markdown 解析"],
    status: "INTERNAL",
  },
  {
    id: "04",
    name: "Agent 工具链",
    en: "AGENT STACK",
    tagline: "让 AI 有记忆、有技能、有工作流。",
    detail:
      "MCP 记忆宫殿做跨会话长期记忆；领域包生成器按模板产出完整知识体系；二十余个技能包覆盖投资分析、批判性思维、学习方法。全部本地运行，零 API 账单。",
    metrics: [
      { value: "20+", label: "技能包" },
      { value: "MCP", label: "记忆服务" },
      { value: "¥0", label: "月度账单" },
    ],
    stack: ["MCP", "Prompt 工程", "Agent 编排", "本地推理"],
    status: "RUNNING",
  },
];

const CAPABILITIES = [
  {
    group: "前端",
    items: ["HTML/CSS", "JavaScript (ES2022)", "TypeScript", "React / Next.js", "Tailwind CSS", "响应式与安全区适配"],
  },
  {
    group: "PWA / 离线",
    items: ["Service Worker 缓存策略", "IndexedDB", "桌面安装", "离线回落", "MediaSession"],
  },
  {
    group: "工程化",
    items: ["Node.js 脚本", "GitHub Actions", "静态导出部署", "接口签名与鉴权", "自动化发布"],
  },
  {
    group: "AI 应用",
    items: ["MCP 服务", "Prompt 工程", "Agent 编排", "知识结构化", "本地模型推理"],
  },
  {
    group: "设计",
    items: ["设计 token", "信息层级", "手写视觉系统", "移动端细节（圆角/阴影/动效）"],
  },
];

const WORKING = [
  {
    title: "先做能用的，再做愿意用的",
    detail:
      "功能齐了才敢回头看它的样子。审美不是装饰——它决定这个东西有没有人愿意第二次打开。",
  },
  {
    title: "需求来自真实用户",
    detail:
      "两个产品的用户，一个是我女儿，一个是我自己。真实用户会告诉你哪里啰嗦、哪里多余，比需求文档诚实。",
  },
  {
    title: "上线才算完成",
    detail:
      "本地跑通只是开始。缓存版本、离线回落、失败兜底、自动发布，全部兜住之后，这东西才算能交给别人用。",
  },
];

const CARD_CLASS =
  "card-glow group flex flex-col border border-line bg-panel/60 p-5 transition-all hover:border-phos/50 sm:p-6";

function ProjectInner({ p }: { p: Project }) {
  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs tracking-[0.2em] text-faint">{p.id}</span>
        <span
          className={`border px-1.5 py-0.5 font-mono text-[10px] tracking-[0.15em] ${
            p.status === "LIVE"
              ? "border-phos/40 bg-phos/10 text-phos"
              : "border-linebright bg-panel2 text-paper/80"
          }`}
        >
          {p.status}
        </span>
      </div>
      <h3 className="mt-3 flex items-baseline gap-3 font-display text-2xl font-bold text-paper">
        {p.name}
        <span className="font-mono text-[11px] font-medium tracking-[0.18em] text-faint">{p.en}</span>
      </h3>
      <p className="mt-2 text-[15px] font-medium text-phos/90">{p.tagline}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-mist">{p.detail}</p>

      <div className="mt-5 grid grid-cols-3 divide-x divide-line/70 border-y border-line/70">
        {p.metrics.map((m) => (
          <div key={m.label} className="min-w-0 px-2.5 py-3 first:pl-0 last:pr-0 sm:px-3">
            <div className="whitespace-nowrap font-display text-[15px] font-extrabold leading-tight text-paper sm:text-lg">
              {m.value}
            </div>
            <div className="mt-0.5 text-[11px] tracking-wide text-faint">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="border border-line px-2 py-0.5 font-mono text-[11px] tracking-wider text-mist"
          >
            {s}
          </span>
        ))}
      </div>
      <span className="mt-5 font-mono text-xs tracking-wider text-phos opacity-80 transition-opacity group-hover:opacity-100">
        {p.href ? "打开应用 \u2192" : "内部工具 · 可演示"}
      </span>
    </>
  );
}

function ProjectCard({ p }: { p: Project }) {
  if (p.href) {
    return (
      <a href={p.href} className={CARD_CLASS}>
        <ProjectInner p={p} />
      </a>
    );
  }
  return (
    <div className={CARD_CLASS}>
      <ProjectInner p={p} />
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-36">
      <section className="grid items-end gap-8 sm:gap-10 lg:grid-cols-[1fr_380px]">
        <div>
          <p className="rise font-mono text-xs font-medium tracking-[0.24em] text-phos text-glow-soft">
            {">"} FRONTEND ENGINEER · 独立构建者
          </p>
          <h1
            className="rise mt-5 font-display text-[32px] font-extrabold leading-[1.28] sm:text-5xl sm:leading-[1.22] lg:text-[56px]"
            style={{ animationDelay: "0.08s" }}
          >
            <span className="gradient-text">把想法，做成</span>
            <br />
            <span className="text-paper text-glow">能用的东西。</span>
          </h1>
          <p
            className="rise mt-6 max-w-xl text-[15px] leading-loose text-mist sm:mt-7 sm:text-lg"
            style={{ animationDelay: "0.16s" }}
          >
            前端工程师。手上有三个线上产品，全部一个人走完：需求、设计、实现、部署、复盘。
            两个给女儿用，一个给自己用——所以每个细节都得经得起每天打开。
          </p>
          <div className="rise mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4" style={{ animationDelay: "0.24s" }}>
            <a
              href="#projects"
              className="flex w-full items-center justify-center bg-phos px-6 py-3.5 font-mono text-sm font-bold tracking-wider text-ink shadow-[0_0_36px_rgba(127,240,160,0.35)] transition-all hover:bg-paper hover:shadow-[0_0_44px_rgba(234,241,235,0.4)] sm:w-auto"
            >
              看四个项目 {"\u2193"}
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center border border-linebright px-6 py-3.5 font-mono text-sm font-medium tracking-wider text-paper/90 transition-all hover:border-phos hover:text-phos sm:w-auto"
            >
              GitHub {"\u2197"}
            </a>
          </div>
        </div>

        <div
          className="rise border border-line bg-panel/60 px-5 py-4 sm:px-6 sm:py-5"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="font-mono text-xs font-medium tracking-[0.2em] text-phos">{"//"} QUICK FACTS</p>
          <dl className="mt-4 divide-y divide-line/60">
            {[
              ["定位", "前端工程 · AI 应用 · 独立交付"],
              ["交付", "3 个线上产品，全流程独做"],
              ["偏好", "PWA / 离线优先 / 本地存储"],
              ["协作", "AI 承担实现，我负责判断与验收"],
              ["状态", "可远程 · 可全职"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-4 py-2.5">
                <dt className="w-14 shrink-0 font-mono text-xs tracking-wider text-faint">{k}</dt>
                <dd className="text-sm text-paper/90">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="projects" className="mt-16 scroll-mt-24 sm:mt-24">
        <SectionHead
          index="01"
          en="PROJECTS"
          title="四个项目"
          sub="每一个都在线上跑着，链接可以点开。技术栈写在下面，难点写在句子里。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <SectionHead
          index="02"
          en="CAPABILITIES"
          title="能做什么"
          sub="按能力分组，不按熟练度打分——打分没意义，项目里有证据。"
        />
        <div className="mt-8 grid gap-x-10 gap-y-4 border border-line bg-panel/60 px-5 py-5 sm:px-6 sm:py-6 sm:grid-cols-2">
          {CAPABILITIES.map((g) => (
            <p key={g.group} className="text-sm leading-relaxed">
              <span className="mr-3 font-mono text-xs font-bold tracking-wider text-phos">
                {g.group}
              </span>
              <span className="text-paper/85">{g.items.join(" \u00b7 ")}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <SectionHead
          index="03"
          en="HOW I WORK"
          title="怎么做事"
          sub="三条，都是做完这些东西之后才总结出来的。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {WORKING.map((w, i) => (
            <div
              key={w.title}
              className="card-glow border border-line bg-panel/60 p-5 hover:border-linebright sm:p-6"
            >
              <span className="text-glow-soft font-mono text-2xl font-bold text-phos">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-paper">{w.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mist">{w.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <SectionHead index="04" en="CONTACT" title="聊聊" sub="看项目、问细节、谈合作，都可以直接来。" />
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Link
            href="/contact"
            className="flex items-center justify-center bg-phos px-6 py-3.5 font-mono text-sm font-bold tracking-wider text-ink shadow-[0_0_36px_rgba(127,240,160,0.35)] transition-all hover:bg-paper sm:w-auto"
          >
            联系方式 {"\u2192"}
          </Link>
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center border border-linebright px-6 py-3.5 font-mono text-sm font-medium tracking-wider text-paper/90 transition-all hover:border-phos hover:text-phos sm:w-auto"
          >
            github.com/yuwangjuan1 {"\u2197"}
          </a>
          <a
            href={SITE.gitee}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center border border-line px-6 py-3.5 font-mono text-sm font-medium tracking-wider text-mist transition-all hover:border-phos hover:text-phos sm:w-auto"
          >
            gitee.com/syvia {"\u2197"}
          </a>
        </div>
      </section>
    </main>
  );
}
