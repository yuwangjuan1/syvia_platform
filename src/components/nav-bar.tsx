"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/data/agents";

const NAV = [
  { href: "/agents", label: "Agent" },
  { href: "/skills", label: "Skills" },
  { href: "/experts", label: "专家" },
  { href: "/contact", label: "联系" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-[17px] pb-[12px] sm:px-6">
        <Link href="/" className="font-display text-lg tracking-wide text-paper">
          {"\u25ae"} {SITE.system}
        </Link>
        <nav className="flex items-center gap-5 font-mono text-sm font-medium tracking-wide sm:gap-7">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
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
          <span className="hidden items-center gap-1.5 border border-phos/40 bg-phos/10 px-2.5 py-1 text-xs font-medium text-phos text-glow-soft sm:inline-flex">
            <span className="blinkdot h-2 w-2 bg-phos" />
            ONLINE
          </span>
        </nav>
      </div>
    </header>
  );
}
