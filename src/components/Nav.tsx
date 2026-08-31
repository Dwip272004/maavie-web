"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
      className={`fixed inset-x-4 top-4 z-50 mx-auto flex max-w-[1080px] items-center justify-between rounded-full px-5 py-2.5 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 sm:inset-x-6 sm:top-5 sm:px-6 ${
        solid
          ? "border border-black/[0.06] bg-bone/90 shadow-[0_10px_34px_rgba(89,5,21,0.12)]"
          : "border border-bone/25 bg-black/15"
      }`}
    >
      <Link href="/" className="block">
        <Image
          src="/images/logo.png"
          alt="Maavie — Built for the biology of women"
          width={895}
          height={489}
          priority
          className="h-9 w-auto transition-[filter] duration-300"
          style={!solid ? { filter: "brightness(0) invert(1)" } : undefined}
        />
      </Link>
      <a
        href="https://www.instagram.com/maavie.in/"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block cursor-pointer rounded-full font-sans text-[13px] font-semibold transition-colors duration-150 px-5 py-2 ${
          solid
            ? "bg-deep-plum text-bone hover:bg-[#450110]"
            : "border border-bone/50 bg-transparent text-bone hover:bg-bone/15"
        }`}
      >
        Join the Community
      </a>
    </nav>
  );
}
