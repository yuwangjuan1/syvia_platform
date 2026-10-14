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

/** 协同流水线：三个项目连成的个人内容生产闭环 */
export const PIPELINE: Array<{
  step: string;
  agent: string;
  codename: string;
  action: string;
  detail: string;
}> = [
  {
    step: "01",
    agent: "声稿 EchoScribe",
    codename: "echo-scribe",
    action: "采集转写",
    detail: "批量解析对标账号的财经视频（900+ 平台），本地转写为带时间轴全文，Agent 自动提炼观点与金句",
  },
  {
    step: "02",
    agent: "第二大脑",
    codename: "smart_brain",
    action: "沉淀归档",
    detail: "拆解结论写入 Obsidian 知识库：对标拆解、错题集、人设线选题，frontmatter 统一元数据",
  },
  {
    step: "03",
    agent: "记忆宫殿",
    codename: "memory-palace",
    action: "语义检索",
    detail: "增量索引全库笔记为语义块，写作时 AI 按主题毫秒级召回相关积累，随叫随到",
  },
  {
    step: "04",
    agent: "内容飞轮",
    codename: "content-flywheel",
    action: "创作发布",
    detail: "同一批知识多形态复用：旗舰文人设帖 → 知识卡 → 季度复盘，素材一次沉淀、反复变现",
  },
];

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
    name: "记忆宫殿 Memory Palace",
    codename: "memory-palace",
    status: "online",
    tagline: "给第二大脑装一个 AI 能读懂的检索层 · MCP 语义记忆服务",
    description:
      "Obsidian 笔记库的本地语义检索 MCP Server：markdown 按标题感知分块，bge-m3 本地向量化后存入 sqlite-vec，AI 提问时毫秒级召回最相关笔记块。四工具协议（search / remember / link / review）即插即用，全链路本地运行，笔记永不出门、零 API 成本。",
    features: [
      "MCP 标准协议，Trae / Claude 等客户端即插即用",
      "语义检索：问法不同也能命中，实测 20 题回归 90% 通过",
      "本地 Ollama + bge-m3 向量化，1024 维，隐私零泄露",
      "四工具：search 检索 · remember 归档 · link 关联 · review 唤醒",
      "mtime 增量索引，改动秒级同步，无需重建",
      "217 篇笔记 → 3196 语义块，SQLite 单文件存储",
    ],
    stack: [
      "TypeScript",
      "MCP",
      "sqlite-vec",
      "better-sqlite3",
      "Ollama",
      "bge-m3",
    ],
    metrics: [
      { label: "索引笔记", value: "217" },
      { label: "语义块", value: "3196" },
      { label: "检索命中率", value: "90%" },
      { label: "API 成本", value: "0" },
    ],
    links: [{ label: "查看仓库", href: "https://github.com/yuwangjuan1/memory-palace" }],
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
  { group: "AI 工程", items: ["faster-whisper", "yt-dlp", "MCP Server", "sqlite-vec 向量检索", "Ollama 本地推理", "结构化输出"] },
  { group: "工具链", items: ["Git / Gitee", "Conda", "PowerShell", "GitHub Actions", "静态部署"] },
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
  "MCP",
  "SQLITE-VEC",
  "OLLAMA",
  "BGE-M3",
  "LOCAL INFERENCE",
];
