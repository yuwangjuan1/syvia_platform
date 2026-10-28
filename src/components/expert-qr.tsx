"use client";

import { useState } from "react";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** 专家 / 技能卡上的「扫码体验」入口：点击展开二维码浮层 */
export default function ExpertQr({
  name,
  qr,
  tone = "amber",
}: {
  name: string;
  qr: string;
  tone?: "amber" | "violet";
}) {
  const [open, setOpen] = useState(false);
  const btn =
    tone === "amber"
      ? "border-amber/50 bg-amber/10 text-amber hover:bg-amber/20"
      : "border-violet/50 bg-violet/10 text-violet hover:bg-violet/20";
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`inline-flex cursor-pointer items-center gap-1.5 border px-4 py-2 font-mono text-sm font-medium transition-all ${btn}`}
      >
        扫码体验 <span aria-hidden>{open ? "\u25b2" : "\u25bc"}</span>
      </button>
      {open && (
        <div className="mt-3 w-48 border border-linebright bg-ink p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BP}${qr}`}
            alt={`${name} 扫码体验二维码`}
            className="w-full bg-white p-1.5"
            loading="lazy"
          />
          <p className="mt-2 text-center font-mono text-[11px] leading-relaxed text-mist">
            手机扫码 {"\u00b7"} 直接体验
          </p>
        </div>
      )}
    </div>
  );
}
