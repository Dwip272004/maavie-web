"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BlogFab() {
  const pathname = usePathname();
  if (pathname?.startsWith("/blog")) return null;

  return (
    <Link
      href="/blog"
      className="fixed right-5 z-40 inline-block rounded-full bg-deep-plum px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone shadow-[0_10px_28px_rgba(89,5,21,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#450110] sm:right-7 sm:px-6 sm:py-[15px] sm:text-[12px]"
      style={{ bottom: "max(1.25rem, calc(env(safe-area-inset-bottom) + 0.9rem))" }}
    >
      Read Our Blogs
    </Link>
  );
}
