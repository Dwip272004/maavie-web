"use client";

import { useState } from "react";
import { WaitlistTrigger } from "@/components/WaitlistTrigger";

const experts = [
  {
    name: "Dr. [Name]",
    cred: "MD, Obstetrics & Gynaecology",
    tag: "Gynaecology",
    quote:
      "Every formula starts with one question: is this safe for a woman's hormones, at any stage of life?",
  },
  {
    name: "Dr. [Name]",
    cred: "MD, Dermatology",
    tag: "Dermatology",
    quote:
      "Melanin-rich skin deserves its own science — not a one-size-fits-all approach borrowed from elsewhere.",
  },
  {
    name: "[Name]",
    cred: "Clinical Nutritionist, RD",
    tag: "Nutrition",
    quote:
      "The right nutrients can genuinely support your body through every hormonal transition.",
  },
  {
    name: "[Name]",
    cred: "Certified Menopause Coach",
    tag: "Coaching",
    quote:
      "You don't have to navigate this alone. Understanding is the first step to feeling like yourself again.",
  },
];

export function Experts() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="experts"
      className="pb-24 pt-20"
      style={{ background: "linear-gradient(200deg, #590515 0%, #7a1530 100%)" }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-plum-tint/60">
          Expert-Led
        </p>
        <h2
          className="mb-5 font-light leading-tight text-bone"
          style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)" }}
        >
          Co-created with
          <br />
          <em className="italic text-plum-tint">Indian Experts.</em>
        </h2>
        <p className="mx-auto max-w-lg text-base font-light text-bone/55">
          Only what your body needs. Nothing more.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[.18em] text-terracotta/80">
          <span className="sm:hidden">Tap a name to hear from them directly</span>
          <span className="hidden sm:inline">Hover a name to hear from them directly</span>
        </p>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 pt-16">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 border-t border-bone/15 pt-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
          {experts.map((expert, i) => {
            const isActive = active === i;
            return (
              <button
                key={expert.name + expert.cred}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(isActive ? null : i)}
                aria-pressed={isActive}
                className="w-full cursor-pointer border-none bg-transparent p-0 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-bone/60 focus-visible:ring-offset-2 focus-visible:ring-offset-deep-plum sm:text-left"
              >
                <div
                  className="mx-auto mb-5 h-[72px] w-[72px] rounded-full border transition-all duration-300 sm:mx-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(246,242,237,.14), rgba(198,120,92,.2))",
                    borderColor: isActive ? "rgba(246,242,237,.55)" : "rgba(246,242,237,.2)",
                    boxShadow: isActive
                      ? "0 0 0 6px rgba(198,120,92,.16), 0 8px 20px rgba(0,0,0,.25)"
                      : "none",
                    transform: isActive ? "scale(1.08)" : "scale(1)",
                  }}
                />
                <h3 className="font-display text-lg font-medium text-bone">{expert.name}</h3>

                <div className="mt-1 min-h-[52px]">
                  {isActive ? (
                    <p className="animate-[rise_0.35s_cubic-bezier(.2,.7,.2,1)] font-display text-[13.5px] italic leading-snug text-bone/85">
                      &ldquo;{expert.quote}&rdquo;
                    </p>
                  ) : (
                    <div className="animate-[rise_0.35s_cubic-bezier(.2,.7,.2,1)]">
                      <div className="text-[13px] text-bone/55">{expert.cred}</div>
                      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[.14em] text-terracotta">
                        {expert.tag}
                      </div>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-16 text-center">
        <WaitlistTrigger
          label="Join the Waitlist"
          className="bg-bone px-9 py-4 text-[11px] uppercase tracking-[0.18em] text-deep-plum hover:bg-white"
        />
      </div>
    </section>
  );
}
