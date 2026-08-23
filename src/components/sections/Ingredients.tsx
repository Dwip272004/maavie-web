"use client";

import { useState } from "react";

const CONCERNS = [
  {
    title: "Skin Dryness",
    type: "Topical",
    hook: "Skin suddenly drier, tighter, flakier?",
    explanation:
      "As estrogen drops, skin loses the fats and water-binding molecules that keep it soft.",
    ingredients: [
      { name: "Hyaluronic acid", desc: "draws water back into skin and holds it there" },
      { name: "Ceramides", desc: "rebuild the barrier that stops moisture escaping" },
      { name: "Omega-3", desc: "1–2 g/day, hydrates and calms from the inside" },
    ],
    trust: "Chosen for skin changing with menopause. Comfort in days, not weeks.",
  },
  {
    title: "Hair Thinning",
    type: "Topical + Oral",
    hook: "Seeing more hair in the brush?",
    explanation:
      "Shifting hormones shorten your hair's growing phase, so it sheds faster than it regrows.",
    ingredients: [
      { name: "Rosemary oil (2%)", desc: "studied head-to-head with a leading regrowth medicine" },
      { name: "Marine hair-protein complex", desc: "supports density and thickness" },
      { name: "Iron", desc: "only if your levels are low, so get tested first" },
    ],
    trust:
      "Studied in women over 40. The most proven option is minoxidil — but it's a medicine, so talk to your doctor.",
  },
  {
    title: "Collagen Loss",
    type: "Topical",
    hook: "Skin feels less firm, more crepey?",
    explanation:
      "You can lose up to a third of your skin's collagen in the first few years around menopause.",
    ingredients: [
      { name: "Genistein", desc: "the soy active with the best proof in postmenopausal women" },
      { name: "Peptides", desc: "signal your skin to make more of its own collagen" },
      {
        name: "Bakuchiol",
        desc: "a gentle plant alternative to retinol, proven comparable with less irritation",
      },
    ],
    trust: "Chosen for skin changing with menopause. Firmness builds over months.",
  },
  {
    title: "Fatigue",
    type: "Oral",
    hook: "Tired in a way that sleep doesn't fix?",
    explanation:
      "Hormone changes drain both the nutrients and the energy reserves your body runs on.",
    ingredients: [
      { name: "Vitamin D (with K2)", desc: "most women over 40 run low, and low D means low energy" },
      { name: "Magnesium (glycinate)", desc: "for energy, calm, and recovery" },
      { name: "Korean Red Ginseng", desc: "a studied root that supports energy and stamina in menopause" },
    ],
    trust:
      "Studied in women over 40. Get your vitamin D checked; check with your doctor before ginseng if you're on medication.",
  },
  {
    title: "Sleeplessness",
    type: "Oral",
    hook: "Wide awake at 3 a.m.?",
    explanation:
      "When estrogen and progesterone shift, they disturb the chemistry that keeps you asleep.",
    ingredients: [
      { name: "Magnesium (glycinate)", desc: "helps your body wind down before bed" },
      { name: "L-theanine", desc: "200 mg, calm without grogginess" },
      { name: "Glycine", desc: "3 g before bed, helps you fall and stay asleep" },
    ],
    trust: "Studied in women over 40. No sedatives, no dependency.",
  },
];

export function Ingredients() {
  const [active, setActive] = useState(0);
  const concern = CONCERNS[active];

  return (
    <section id="ingredients" className="bg-bone pb-28 pt-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="mx-auto mb-16 max-w-[560px] text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-terracotta">
            The Ingredients
          </div>
          <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-medium text-deep-plum">
            Chosen for what you&apos;re
            <br />
            actually feeling.
          </h2>
          <p className="mt-4 text-lg text-charcoal/60">
            Every formula starts with a concern, not a trend. Pick yours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:border-r lg:border-charcoal/10 lg:pb-0 lg:pr-8">
            {CONCERNS.map((c, i) => {
              const isActive = active === i;
              return (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-3 text-left text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-plum lg:w-full lg:rounded-none lg:border-none lg:border-l-2 lg:px-0 lg:py-3 lg:pl-5 lg:text-base ${
                    isActive
                      ? "border-deep-plum bg-plum-tint text-deep-plum lg:border-l-deep-plum lg:bg-transparent"
                      : "border-charcoal/15 text-charcoal/60 hover:text-deep-plum lg:border-l-transparent"
                  }`}
                >
                  {c.title}
                </button>
              );
            })}
          </div>

          <div key={active} className="animate-[rise_0.4s_cubic-bezier(.2,.7,.2,1)]">
            <div className="mb-1 text-xs font-semibold uppercase tracking-[.18em] text-terracotta">
              {concern.type}
            </div>
            <h3 className="mb-3 font-display text-2xl font-medium text-deep-plum sm:text-3xl">
              {concern.hook}
            </h3>
            <p className="mb-8 max-w-lg text-[15px] leading-relaxed text-charcoal/65">
              {concern.explanation}
            </p>

            <div className="mb-8 flex flex-col gap-5 border-t border-charcoal/10 pt-6">
              {concern.ingredients.map((ing) => (
                <div key={ing.name} className="flex gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  <div>
                    <span className="font-display text-lg text-deep-plum">{ing.name}</span>
                    <span className="text-[15px] text-charcoal/60"> — {ing.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-md bg-sage-tint px-5 py-4 text-sm text-[#3e4a3c]">
              {concern.trust}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
