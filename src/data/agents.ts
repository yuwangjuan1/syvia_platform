export type AgentStatus = "online" | "building";

export interface AgentMetric {
  label: string;
  value: string;
}

export interface AgentLink {
  label: string;
  href: string;
}

export interface AgentProject {
  id: string;
  name: string;
  codename: string;
  status: AgentStatus;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  metrics: AgentMetric[];
  links: AgentLink[];
  featured?: boolean;
}

export const SITE = {
  owner: "syvia",
  system: "SYVIA.SYS",
  title: "Agent 工作台",
  gitee: "https://gitee.com/syvia",
  github: "https://github.com/yuwangjuan1",
};

export const AGENTS: AgentProject[] = [
  {
    id: "AGT-001",
    name: "声稿 EchoScribe",
    codename: "echo-scribe",
    status: "online",
    featured: true,
    tagline: "视频转文字在线工具 · 粘贴链接，秒出带时间轴的完整文案",
    description:
      "从 0 到 1 的全栈应用：yt-dlp 解析 900+ 平台视频源，faster-whisper 本地推理生成逐句时间轴，自动产出 AI 摘要与话题标签，支持 TXT / SRT / VTT / MD 四种格式导出。前后端分离架构，SSE 实时推送进度，本地推理零 API 成本。",
    features: [
      "900+ 视频平台链接解析（含微信公众号文章内嵌视频）",
      "本地 Whisper 推理，零外部 API 成本",
      "SSE 实时进度推送 + 轮询兜底，弱网可收敛",
      "AI 摘要 / 编号要点 / 话题标签自动生成",
      "结构化错误码体系，9 类失败场景均有引导与一键重试",
      "文件上传转写 · 批量 100 条 · 四格式导出",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "SSE",
      "Python",
      "faster-whisper",
      "yt-dlp",
    ],
    metrics: [
      { label: "支持平台", value: "900+" },
      { label: "API 成本", value: "0" },
      { label: "导出格式", value: "4" },
      { label: "批量上限", value: "100" },
    ],
    links: [{ label: "查看仓库", href: "https://github.com/yuwangjuan1/echo_scribes" }],
  },
  {
    id: "AGT-002",
    name: "记忆宫殿",
    codename: "memory-palace",
    status: "building",
    tagline: "个人第二大脑 · 捕捉 / 组织 / 回忆知识",
    description:
      "研发中的个人知识管理 Agent：把碎片信息沉淀为可检索、可联想的结构化记忆。",
    features: ["多源信息捕捉与自动归档", "语义检索与关联推荐", "每日回顾与遗忘曲线"],
    stack: ["TypeScript", "Vector Search", "LLM"],
    metrics: [{ label: "状态", value: "BUILDING" }],
    links: [],
  },
  {
    id: "AGT-003",
    name: "侦察猫头鹰",
    codename: "recon-owl",
    status: "building",
    tagline: "行业情报聚合 · 追踪 · 摘要",
    description:
      "研发中的情报分析 Agent：持续追踪指定领域的信息源，自动聚合、去重并生成每日简报。",
    features: ["信息源订阅与轮询", "内容去重与聚类", "每日简报自动生成"],
    stack: ["Node.js", "RSS", "LLM"],
    metrics: [{ label: "状态", value: "BUILDING" }],
    links: [],
  },
];

export const STACK_GROUPS: Array<{ group: string; items: string[] }> = [
  { group: "前端工程", items: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "响应式适配"] },
  { group: "后端工程", items: ["Node.js", "Express", "REST + SSE", "任务队列", "文件存储"] },
  { group: "AI 工程", items: ["faster-whisper", "yt-dlp", "提示词工程", "结构化输出"] },
  { group: "工具链", items: ["Git / Gitee", "Conda", "PowerShell", "静态部署"] },
];

export const MARQUEE = [
  "NEXT.JS",
  "REACT 19",
  "TYPESCRIPT",
  "TAILWIND CSS",
  "NODE.JS",
  "EXPRESS",
  "PYTHON",
  "FASTER-WHISPER",
  "YT-DLP",
  "SSE",
  "REST API",
  "LOCAL INFERENCE",
];
