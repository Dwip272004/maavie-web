"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    label: "Trying to Conceive",
    image: "/images/woman-oil.png",
    headline: "Your skin is already responding to the journey — even before it begins.",
    description:
      "Hormonal shifts, cycle tracking, stress, supplements — your body is working hard. Skin sensitivity, breakouts, and pigmentation can all flare during this season. Maavie supports you with formulas that are safe, gentle, and hormone-aware from day one.",
  },
  {
    label: "Pregnancy & Postpartum",
    image: "/images/pregnancy-postpartum.png",
    headline: "Your body is doing something extraordinary. And your skin feels every part of it.",
    description:
      'Pigmentation, dryness, sensitivity, sudden changes you never expected — all while the world tells you to "just enjoy the glow." We believe mothers deserve more than that. They deserve care, understanding, and products made for this season of life.',
  },
  {
    label: "Perimenopause",
    image: "/images/perimenopause.png",
    headline: "One day your skincare works. The next, your skin feels completely different.",
    description:
      "Unexpected dryness. Fine lines. Hormonal breakouts returning years later. Perimenopause changes more than we talk about — and your skincare should change with you.",
  },
  {
    label: "Menopause",
    image: "/images/menopause.png",
    headline: "Your skin is changing because your body is changing.",
    description:
      'Thinner skin. Less bounce. More dryness. More sensitivity. This isn\'t something to "fix." It\'s a new season that deserves softer, smarter support.',
  },
];

export function ShopByNeed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tabs[activeIndex];

  return (
    <section className="bg-bone">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 pb-6 pt-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="shrink-0 text-2xl font-light text-charcoal sm:text-3xl">
          What does <em className="italic">your</em> body need?
        </h2>
        <nav className="scrollbar-hide flex items-center gap-5 overflow-x-auto pb-1 sm:gap-7">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`shrink-0 whitespace-nowrap border-b pb-0.5 text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-200 ${
                i === activeIndex
                  ? "border-charcoal text-charcoal"
                  : "border-transparent text-charcoal/35 hover:text-charcoal/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex min-h-[480px] flex-col lg:flex-row">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-terra-tint lg:aspect-auto lg:w-[42%]">
          <Image
            key={active.image}
            src={active.image}
            alt={active.label}
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
        <div className="flex w-full items-center bg-bone px-10 py-16 sm:px-14 lg:w-[58%] lg:px-20">
          <div className="max-w-lg">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-plum-accent">
              {active.label}
            </p>
            <h3 className="mb-5 font-display text-xl leading-snug text-charcoal sm:text-2xl">
              {active.headline}
            </h3>
            <p className="mb-10 text-base leading-relaxed text-charcoal/70">
              {active.description}
            </p>
            <Link
              href="/quiz"
              className="inline-block bg-deep-plum px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-[#450110]"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
