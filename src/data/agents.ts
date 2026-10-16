export type AgentStatus = "online" | "building";
export type AgentAccent = "phos" | "violet" | "amber";

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
  /** 主题色：phos 绿（默认/旗舰）· violet 紫 · amber 琥珀 */
  accent?: AgentAccent;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  metrics: AgentMetric[];
  links: AgentLink[];
  /** 主卡：流光边框 + 悬停浮起 */
  primary?: boolean;
  /** 卡片角标：如 ★ FLAGSHIP / ✦ NEW */
  badge?: string;
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
    detail: "对标账号一更新，声稿 10 分钟啃完 2 小时视频——逐句时间轴，金句自动提炼",
  },
  {
    step: "02",
    agent: "第二大脑",
    codename: "smart_brain",
    action: "沉淀归档",
    detail: "拆解结论直接进 Obsidian 知识库：对标库、错题集、选题库，元数据统一管理",
  },
  {
    step: "03",
    agent: "记忆宫殿",
    codename: "memory-palace",
    action: "语义检索",
    detail: "写作卡壳？一句话，记忆宫殿毫秒级翻遍全库 217 篇笔记，旧积累随叫随到",
  },
  {
    step: "04",
    agent: "内容飞轮",
    codename: "content-flywheel",
    action: "创作发布",
    detail: "一次沉淀多种产出：人设帖 → 知识卡 → 季度复盘，同一批素材反复创造价值",
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
    accent: "phos",
    badge: "★ FLAGSHIP",
    primary: true,
    tagline: "2 小时的视频，10 分钟读完。900+ 平台链接扔进来，秒出带时间轴的完整文案。",
    description:
      "为内容创作者打造的转写引擎：yt-dlp 解析 900+ 平台，faster-whisper 本地推理零 API 成本，AI 自动提炼摘要、要点与金句。SSE 实时进度推送，9 类失败场景人话引导——从追更到拆解对标，一步到位。",
    features: [
      "900+ 平台直链解析，微信公众号内嵌视频也能拆",
      "本地 Whisper 推理，转写不花一分钱",
      "AI 摘要 / 编号要点 / 话题标签一键生成",
      "SSE 实时进度 + 弱网兜底，转完秒知道",
      "9 类失败场景人话引导，一键重试",
      "批量 100 条 · TXT / SRT / VTT / MD 四格式导出",
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
      { label: "API 成本", value: "¥0" },
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
    accent: "violet",
    badge: "✦ NEW",
    primary: true,
    tagline: "217 篇笔记，毫秒级检索。你的第二大脑，AI 终于读得懂了。",
    description:
      "Obsidian 本地语义检索 MCP Server：bge-m3 本地向量化 + sqlite-vec 毫秒召回。四工具协议（search / remember / link / review）即插即用——问「被套 30% 怎么办」，它能翻出你当初记的那条错题。全链路本地运行，笔记永不出门。",
    features: [
      "MCP 标准协议，Trae / Claude 等客户端即插即用",
      "语义级召回——换个问法照样命中，20 题回归 90%",
      "本地 bge-m3 向量化，1024 维语义不缩水",
      "search 检索 · remember 归档 · link 关联 · review 唤醒",
      "增量索引，改哪算哪，秒级同步",
      "SQLite 单文件存储，备份就是复制一个文件",
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
      { label: "在库笔记", value: "217" },
      { label: "语义块", value: "3196" },
      { label: "检索命中", value: "90%" },
      { label: "检索延迟", value: "41ms" },
    ],
    links: [{ label: "查看仓库", href: "https://github.com/yuwangjuan1/memory-palace" }],
  },
  {
    id: "AGT-003",
    name: "侦察猫头鹰",
    codename: "recon-owl",
    status: "building",
    accent: "amber",
    tagline: "行业动静，它比你先知道。",
    description:
      "研发中的情报官：订阅信息源全天轮询，自动去重聚类，每天一份浓缩简报——只看值得看的，把刷信息流的时间还给你。",
    features: [
      "多信息源订阅与轮询，全天值守",
      "内容去重聚类，拒绝信息噪音",
      "每日简报自动生成，只读精华",
    ],
    stack: ["Node.js", "RSS", "LLM"],
    metrics: [{ label: "状态", value: "打磨中" }],
    links: [],
  },
];

/** 出品：WorkBuddy 开放平台的技能 */
export const SKILLS: Array<{
  name: string;
  version: string;
  desc: string;
  highlights: string[];
  href: string;
  status: "LISTED" | "REVIEW" | "DEV";
}> = [
  {
    name: "第二大脑建造师",
    version: "v1.0.0",
    desc: "从零搭建 Obsidian 第二大脑：3 套目录方案、元数据三态生长模型、错题集方法论、领域包 D2 五步流程。",
    highlights: ["3 套目录方案", "错题集方法论", "领域包 D2 流程"],
    href: "https://github.com/yuwangjuan1/smart_brain_skills",
    status: "LISTED",
  },
  {
    name: "利弊决策技能",
    version: "v1.0.0",
    desc: "用「五步决策手术」把纠结的决策拆开：定诊类型、展开选项、事前验尸、偏差解毒，输出决策备忘卡；内置道法术器四层透视。",
    highlights: ["五步决策手术", "道法术器四层透视", "偏差解毒七查"],
    href: "https://github.com/yuwangjuan1/smart_brain_skills",
    status: "LISTED",
  },
  {
    name: "儿童情绪解读技能",
    version: "v1.0.0",
    desc: "把孩子的哭闹、顶嘴、拖延、粘人翻译成情绪信号：先解码行为背后的感受与需求，先接情绪再立规矩，附行为对照密码本。",
    highlights: ["四步情绪解码", "行为对照密码本", "跨轮解码档案"],
    href: "https://github.com/yuwangjuan1/smart_brain_skills",
    status: "LISTED",
  },
  {
    name: "成长型思维养育技能",
    version: "v1.0.0",
    desc: "把「你真聪明」「你看看人家」改造成指向过程与成长的语言：捕捉固定型话术、夸具体策略与进步，附表扬话术改造表与考砸话术。",
    highlights: ["表扬话术改造表", "贴标签自证预言", "考砸场景话术"],
    href: "https://github.com/yuwangjuan1/smart_brain_skills",
    status: "LISTED",
  },
  {
    name: "亲子沟通技能",
    version: "v1.0.0",
    desc: "先接情绪、再处理事情的对话四步：闭嘴听、译感受、接情绪、议事情，替代说教与吼叫，附非暴力沟通亲子版与倾听陷阱清单。",
    highlights: ["对话四步顺序", "七大倾听陷阱", "对话复盘单"],
    href: "https://github.com/yuwangjuan1/smart_brain_skills",
    status: "LISTED",
  },
  {
    name: "学习习惯养成技能",
    version: "v1.0.0",
    desc: "诊断作业大战的真实卡点：启动难、分心、畏难还是真不会；设计提示-程序-奖励的小习惯回路并外置工具，家长五周逐步退出。",
    highlights: ["四类卡点诊断", "习惯回路设计表", "家长退出计划"],
    href: "https://github.com/yuwangjuan1/smart_brain_skills",
    status: "LISTED",
  },
];

/** 出品：WorkBuddy 开放平台的专家 */
export const EXPERTS: Array<{
  name: string;
  version: string;
  desc: string;
  highlights: string[];
  href: string;
  status: "LISTED" | "REVIEW" | "DEV";
}> = [
  {
    name: "青黛 · 投资心理专家",
    version: "v1.0.0",
    desc: "只管心态不管买卖的投资心理专家：复盘情绪化操作，识别损失厌恶、沉没成本与追涨偏差，建立投资纪律。",
    highlights: ["三大偏差诊断", "认知卡教学", "跨轮记忆档案"],
    href: "https://github.com/yuwangjuan1/smart_brain_skills",
    status: "LISTED",
  },
];

/** 开发日志：里程碑时间线 */
export const DEVLOG: Array<{
  date: string;
  event: string;
  detail: string;
  tag: "RELEASE" | "INFRA" | "PLANNED";
}> = [
  {
    date: "2026.09",
    event: "声稿 EchoScribe 上线",
    detail: "900+ 平台链接转写 · 本地 Whisper 零成本 · SSE 实时进度 · Agent 分析",
    tag: "RELEASE",
  },
  {
    date: "2026.10",
    event: "展示站部署 GitHub Pages",
    detail: "Next.js 静态构建 · GitHub Actions 自动部署 · 双仓库镜像（Gitee / GitHub）",
    tag: "INFRA",
  },
  {
    date: "2026.10",
    event: "记忆宫殿建成接入",
    detail: "MCP 四工具 · 217 篇笔记 → 3196 语义块 · 20 题检索回归 90% 通过",
    tag: "RELEASE",
  },
  {
    date: "2026.10",
    event: "首个技能上架 WorkBuddy 开放平台",
    detail: "《第二大脑建造师》已上架 · 源码开源 smart_brain_skills 仓库 · 技能出海第一步",
    tag: "RELEASE",
  },
  {
    date: "2026.10",
    event: "首个专家上架 WorkBuddy 开放平台",
    detail: "《青黛·投资心理专家》已上架 · 金融投教方向 · 只管心态不管买卖",
    tag: "RELEASE",
  },
  {
    date: "2026.10",
    event: "利弊决策技能上架 WorkBuddy 开放平台",
    detail: "五步决策手术 · 道法术器四层透视 · 偏差解毒七查 · 源码同步开源",
    tag: "RELEASE",
  },
  {
    date: "2026.10",
    event: "育儿技能四件套发布",
    detail: "儿童情绪解读 · 成长型思维养育 · 亲子沟通 · 学习习惯养成，技能工厂批量生产",
    tag: "RELEASE",
  },
  {
    date: "NEXT",
    event: "侦察猫头鹰 · 情报 Agent",
    detail: "信息源订阅轮询 · 内容去重聚类 · 每日简报自动生成",
    tag: "PLANNED",
  },
  {
    date: "NEXT",
    event: "声稿 → 第二大脑一键归档",
    detail: "转写成果直写知识库，协同流水线的最后一块拼图",
    tag: "PLANNED",
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
