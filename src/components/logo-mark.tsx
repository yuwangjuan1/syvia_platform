/** 浅海鱼站标：圆徽 + 波浪 + 小渔，currentColor 随父级文字颜色 */
export default function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={className}
      style={{ filter: "drop-shadow(0 0 5px rgba(103,255,157,0.5))" }}
    >
      {/* 圆徽 */}
      <circle cx="16" cy="16" r="12.5" stroke="currentColor" strokeWidth="2" />
      {/* 小渔：身体 + 尾 */}
      <path
        d="M13.2 12.8c1.7-2.2 4.9-2.2 6.6 0-1.7 2.2-4.9 2.2-6.6 0Z"
        fill="currentColor"
      />
      <path d="M13.2 12.8l-2.5-1.7v3.4Z" fill="currentColor" />
      {/* 渔眼 */}
      <circle cx="18.3" cy="12.3" r=".9" fill="#0a0e0c" />
      {/* 浅海波浪 */}
      <path
        d="M7 19.2q3-2.8 6 0t6 0t6 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
