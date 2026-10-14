"use client";

import { useEffect, useRef, useState } from "react";

const BOOT_LINES = [
  "$ syvia --init workbench",
  "loading agent registry ............ ok",
  "mounting /workbench ............... ok",
  "[AGT-001] echo-scribe ........... ONLINE",
  "[AGT-002] memory-palace ......... ONLINE",
  "[AGT-003] recon-owl ............. BUILDING",
  "runtime: node 24 / python 3.10 / cuda off",
  "status: 2 online / 1 building -- all systems nominal",
];

const LOG_POOL = [
  "[q] task t_1f2a 转写完成 · 12.4s · zh · 35 segments",
  "[q] 字幕导出 srt ok · t_1f2a",
  "[hc] engine faster-whisper · latency 41ms",
  "[q] 收到新链接 · platform=bilibili",
  "[q] memory-palace 语义检索 · top1 41ms · dist 0.74",
  "[q] memory-palace 增量索引 · +3 blocks · mtime sync",
  "[hc] ollama bge-m3 · dims 1024 · uptime 99.9%",
  "[hc] 全系统状态正常 · uptime 99.9%",
  "[q] 批量任务 x8 入队 · 预计 96s",
];

function lineClass(line: string): string {
  if (line.startsWith("$")) return "text-paper";
  if (line.includes("BUILDING")) return "text-amber";
  if (line.includes("ONLINE") || line.endsWith(" ok")) return "text-phos";
  if (line.startsWith("[hc]")) return "text-faint";
  return "text-mist";
}

export default function BootTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const [booted, setBooted] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const logIdx = useRef(0);

  useEffect(() => {
    let li = 0;
    let ci = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const line = BOOT_LINES[li];
      ci += 1 + (Math.random() > 0.7 ? 1 : 0);
      if (ci >= line.length) {
        setLines((prev) => [...prev, line]);
        setCurrent("");
        li += 1;
        ci = 0;
        if (li >= BOOT_LINES.length) {
          setBooted(true);
          return;
        }
        timer = setTimeout(tick, 140);
      } else {
        setCurrent(line.slice(0, ci));
        timer = setTimeout(tick, 16 + Math.random() * 26);
      }
    };
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!booted) return;
    const id = setInterval(() => {
      const next = LOG_POOL[logIdx.current % LOG_POOL.length];
      logIdx.current += 1;
      setLines((prev) => [...prev.slice(-7), next]);
    }, 3200);
    return () => clearInterval(id);
  }, [booted]);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, current]);

  return (
    <div className="border border-line bg-panel2/90 text-left shadow-[0_0_60px_rgba(127,240,160,0.05)]">
      <div className="flex items-center justify-between border-b border-line px-4 py-2">
        <span className="font-mono text-[11px] text-mist">syvia@workbench: ~/agents</span>
        <span className="font-mono text-[11px] text-faint">TTY-01</span>
      </div>
      <div
        ref={bodyRef}
        className="scanlines relative h-[300px] overflow-y-auto px-4 py-3 sm:h-[320px]"
      >
        <div className="font-mono text-[12px] leading-[1.9] sm:text-[13px]">
          {lines.map((line, i) => (
            <div key={i} className={lineClass(line)}>
              {line.startsWith("$") ? (
                <>
                  <span className="mr-2 text-phos">$</span>
                  {line.slice(2)}
                </>
              ) : (
                line
              )}
            </div>
          ))}
          <div className="text-paper">
            {booted && <span className="mr-2 text-phos">$</span>}
            {current}
            <span className="caret ml-0.5 inline-block h-[14px] w-[7px] translate-y-[2px] bg-phos" />
          </div>
        </div>
      </div>
    </div>
  );
}
