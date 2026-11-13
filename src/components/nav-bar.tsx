"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "@/components/logo-mark";
import { SITE } from "@/data/agents";

const NAV = [
  { href: "/portfolio", label: "作品集" },
  { href: "/agents", label: "Agent" },
  { href: "/experts", label: "专家" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "联系" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // 路由变化时收起菜单
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Esc 关闭
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 pt-[17px] pb-[12px] sm:px-6">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 font-display text-base tracking-wide text-paper sm:text-lg"
          >
            <LogoMark className="h-5 w-5 shrink-0 text-phos sm:h-[22px] sm:w-[22px]" />
            <span className="truncate">{SITE.system}</span>
          </Link>

          {/* 桌面端导航 */}
          <nav className="hidden items-center gap-7 font-mono text-sm font-medium tracking-wide sm:flex">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? "text-phos text-glow-soft"
                      : "text-paper/90 transition-colors hover:text-phos hover:text-glow-soft"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
            <span className="hidden items-center gap-1.5 border border-phos/40 bg-phos/10 px-2.5 py-1 text-xs font-medium text-phos text-glow-soft lg:inline-flex">
              <span className="blinkdot h-2 w-2 bg-phos" />
              ONLINE
            </span>
          </nav>

          {/* 移动端三横按钮 */}
          <button
            type="button"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="relative -mr-1 flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] text-paper sm:hidden"
          >
            <span
              className={`h-[1.5px] w-5 bg-current transition-transform duration-200 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-current transition-transform duration-200 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* 移动端菜单面板 */}
        <div
          id="mobile-nav"
          className={`overflow-hidden border-line bg-ink/95 backdrop-blur transition-[max-height,opacity] duration-300 ease-out sm:hidden ${
            open ? "max-h-96 border-t opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto max-w-6xl px-4 py-1.5">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between border-b border-line/60 py-3.5 font-mono text-[15px] tracking-wide last:border-0 ${
                    active ? "text-phos text-glow-soft" : "text-paper/90"
                  }`}
                >
                  {item.label}
                  <span className={active ? "text-phos" : "text-faint"}>{"\u2192"}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* 遮罩：点空白处收起 */}
      {open && (
        <button
          type="button"
          aria-label="关闭菜单"
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 cursor-default bg-ink/60 sm:hidden"
        />
      )}
    </>
  );
}
