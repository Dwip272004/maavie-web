"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      <Link href="/" className="block">
        <Image
          src="/images/logo.png"
          alt="Maavie — Built for the biology of women"
          width={895}
          height={489}
          priority
          className="h-11 w-auto transition-[filter] duration-300"
          style={!solid ? { filter: "brightness(0) invert(1)" } : undefined}
        />
      </Link>
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
