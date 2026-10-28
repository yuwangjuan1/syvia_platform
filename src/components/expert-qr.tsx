const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** 专家 / 技能卡上的「扫码体验」入口：hover / 键盘聚焦时弹出二维码浮层，纯 CSS，不挤动卡片布局 */
export default function ExpertQr({
  name,
  qr,
  tone = "amber",
}: {
  name: string;
  qr: string;
  tone?: "amber" | "violet";
}) {
  const btn =
    tone === "amber"
      ? "border-amber/50 bg-amber/10 text-amber hover:bg-amber/20"
      : "border-violet/50 bg-violet/10 text-violet hover:bg-violet/20";
  return (
    <div className="group/qr relative inline-flex">
      <button
        type="button"
        aria-label={`展示 ${name} 的扫码体验二维码`}
        className={`inline-flex cursor-pointer items-center gap-1.5 border px-4 py-2 font-mono text-sm font-medium transition-all ${btn}`}
      >
        扫码体验 <span aria-hidden>{"\u25b4"}</span>
      </button>
      <div className="invisible absolute bottom-full left-0 z-30 mb-2.5 w-72 translate-y-1.5 border border-linebright bg-ink p-3 opacity-0 shadow-[0_12px_44px_rgba(0,0,0,0.6)] transition-all duration-200 group-focus-within/qr:visible group-focus-within/qr:translate-y-0 group-focus-within/qr:opacity-100 group-hover/qr:visible group-hover/qr:translate-y-0 group-hover/qr:opacity-100">
        <span
          className="absolute left-7 top-full h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-r border-linebright bg-ink"
          aria-hidden
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BP}${qr}`}
          alt={`${name} 扫码体验二维码`}
          className="w-full bg-white p-1"
          loading="lazy"
        />
        <p className="mt-2 text-center font-mono text-[11px] text-mist">
          手机扫码 {"\u00b7"} 直接体验
        </p>
      </div>
    </div>
  );
}
