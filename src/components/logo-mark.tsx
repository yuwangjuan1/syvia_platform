/** SYVIA 站标：芯片轮廓 + 方角 S，currentColor 随父级文字颜色 */
export default function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={className}
      style={{ filter: "drop-shadow(0 0 5px rgba(103,255,157,0.5))" }}
    >
      {/* 芯片引脚 */}
      <g stroke="currentColor" strokeWidth="2">
        <path d="M11 2v5M16 2v5M21 2v5M11 30v-5M16 30v-5M21 30v-5" />
        <path d="M2 11h5M2 16h5M2 21h5M30 11h-5M30 16h-5M30 21h-5" />
      </g>
      {/* 芯片本体 */}
      <rect x="7" y="7" width="18" height="18" stroke="currentColor" strokeWidth="2" />
      {/* 方角 S */}
      <path d="M20.5 11.5h-8V16h8v4.5h-8" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}
