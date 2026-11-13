"use client";

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

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 pt-[17px] pb-[12px] sm:gap-6 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 font-display text-base tracking-wide text-paper sm:text-lg"
        >
          <LogoMark className="h-5 w-5 shrink-0 text-phos sm:h-[22px] sm:w-[22px]" />
          <span className="hidden sm:inline">{SITE.system}</span>
        </Link>
        <nav className="flex flex-1 items-center gap-4 overflow-x-auto font-mono text-[13px] font-medium tracking-wide [&::-webkit-scrollbar]:hidden sm:justify-end sm:gap-7 sm:text-sm [scrollbar-width:none]">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "shrink-0 whitespace-nowrap text-phos text-glow-soft"
                    : "shrink-0 whitespace-nowrap text-paper/90 transition-colors hover:text-phos hover:text-glow-soft"
                }
              >
                {item.label}
              </Link>
            );
          })}
          <span className="hidden items-center gap-1.5 border border-phos/40 bg-phos/10 px-2.5 py-1 text-xs font-medium text-phos text-glow-soft sm:inline-flex">
            <span className="blinkdot h-2 w-2 bg-phos" />
            ONLINE
          </span>
        </nav>
      </div>
    </header>
  );
}
