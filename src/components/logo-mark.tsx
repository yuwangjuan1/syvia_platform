/** 浅海鱼站标：像素眼小鱼（棱角尾 + 背鳍），currentColor 随父级文字颜色 */
export default function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={className}
      style={{ filter: "drop-shadow(0 0 5px rgba(103,255,157,0.5))" }}
    >
      {/* 鱼尾 */}
      <path d="M11 16 4.5 11v10L11 16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* 鱼身 */}
      <path
        d="M10.8 16c1.6-4 5-6.5 9-6.5 4.6 0 8.1 2.7 9.4 6.5-1.3 3.8-4.8 6.5-9.4 6.5-4 0-7.4-2.5-9-6.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* 背鳍 */}
      <path d="M16.8 9.9l2.4-4.1 3 3.8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* 像素眼 */}
      <rect x="22.4" y="13.6" width="3.2" height="3.2" fill="currentColor" />
    </svg>
  );
}
