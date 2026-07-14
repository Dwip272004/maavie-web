"use client";

import { useEffect, useState } from "react";
import { WaitlistTrigger } from "@/components/WaitlistTrigger";

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setSolid(!entry.isIntersecting),
      { rootMargin: "-90px 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-[background,box-shadow] duration-300 ${
        solid ? "bg-bone shadow-[0_2px_18px_rgba(0,0,0,0.07)]" : ""
      }`}
    >
      <div
        className={`font-display text-[26px] font-bold italic ${
          solid ? "text-deep-plum" : "text-bone"
        }`}
      >
        maavie<span className="text-terracotta">.</span>
      </div>
      <WaitlistTrigger
        label="Join the Waitlist"
        className={`px-6 py-[11px] text-sm hover:-translate-y-0 ${
          solid
            ? "bg-deep-plum text-bone hover:bg-[#582546]"
            : "border-[1.5px] border-bone/60 bg-transparent text-bone hover:bg-bone/15"
        }`}
      />
    </nav>
  );
}
