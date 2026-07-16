"use client";

import { useState } from "react";

const SIGNALS = [
  {
    title: "Skin",
    body: "Falling estrogen means less collagen and a weaker moisture barrier — so skin feels drier, thinner and less firm.",
  },
  {
    title: "Hair",
    body: "Estrogen keeps hair growing longer. As it drops, more strands shed early — so hair thins gradually, all over.",
  },
  {
    title: "Energy",
    body: "Shifting hormones and blood sugar leave many women drained and foggy — the tiredness that sleep doesn't fix.",
  },
  {
    title: "Weight",
    body: "Changes in insulin and estrogen make weight easier to gain — especially around the middle — even when nothing else changed.",
  },
  {
    title: "Sleep",
    body: "Night waking and lighter sleep are common as hormones fluctuate — which feeds straight into mood and energy.",
  },
  {
    title: "Mood",
    body: "Mood swings, low patches and that \"where did that word go?\" feeling are real — and hormonal, not a character flaw.",
  },
];

const RADIUS = 38;
const NODE_POSITIONS = SIGNALS.map((_, i) => {
  const angle = ((-90 + i * (360 / SIGNALS.length)) * Math.PI) / 180;
  return {
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  };
});

export function Science() {
  const [active, setActive] = useState(0);

  return (
    <section id="science" className="bg-bone pb-28">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="mx-auto mb-16 max-w-[560px] text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-terracotta">
            The Science
          </div>
          <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-medium text-deep-plum">
            It&apos;s not just ageing.
            <br />
            It&apos;s estrogen.
          </h2>
          <p className="mt-4 text-lg text-charcoal/60">
            One hormone shifts — and it shows up all over your body. Explore how.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,460px)_1fr] lg:gap-16">
          <div className="relative mx-auto aspect-square w-full max-w-[420px] sm:max-w-[460px]">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {NODE_POSITIONS.map((pos, i) => (
                <line
                  key={i}
                  x1={50}
                  y1={50}
                  x2={pos.x}
                  y2={pos.y}
                  pathLength={1}
                  strokeDasharray={1}
                  strokeDashoffset={1}
                  stroke={active === i ? "#590515" : "#2F3136"}
                  strokeOpacity={active === i ? 0.9 : 0.12}
                  strokeWidth={active === i ? 0.6 : 0.4}
                  style={{
                    transition: "stroke 0.3s, stroke-opacity 0.3s, stroke-width 0.3s",
                    animation: `draw-line 1s ease-out ${i * 0.08}s backwards`,
                  }}
                />
              ))}
            </svg>

            <div
              className="absolute flex flex-col items-center justify-center rounded-full bg-deep-plum text-center shadow-[0_12px_30px_rgba(89,5,21,0.25)]"
              style={{
                left: "50%",
                top: "50%",
                width: "27%",
                aspectRatio: "1",
                transform: "translate(-50%, -50%)",
              }}
            >
              <span className="font-display text-[13px] italic leading-tight text-bone sm:text-base">
                Estrogen
              </span>
            </div>

            {SIGNALS.map((signal, i) => {
              const pos = NODE_POSITIONS[i];
              const isActive = active === i;
              return (
                <button
                  key={signal.title}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`absolute flex flex-col items-center justify-center rounded-full border text-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-plum focus-visible:ring-offset-2 ${
                    isActive
                      ? "border-deep-plum bg-deep-plum text-bone"
                      : "border-charcoal/15 bg-bone text-charcoal hover:border-deep-plum/40"
                  }`}
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    width: "19%",
                    aspectRatio: "1",
                    transform: `translate(-50%, -50%) scale(${isActive ? 1.08 : 1})`,
                  }}
                >
                  <span className="font-display text-[11px] font-medium sm:text-[13px]">
                    {signal.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            key={active}
            className="animate-[rise_0.4s_cubic-bezier(.2,.7,.2,1)] border-t border-charcoal/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12"
          >
            <div className="mb-2 text-xs font-semibold uppercase tracking-[.18em] text-terracotta">
              {String(active + 1).padStart(2, "0")} / {String(SIGNALS.length).padStart(2, "0")}
            </div>
            <h3 className="mb-3 font-display text-2xl font-medium text-deep-plum sm:text-3xl">
              {SIGNALS[active].title}
            </h3>
            <p className="max-w-md text-[16px] leading-relaxed text-charcoal/65">
              {SIGNALS[active].body}
            </p>
          </div>
        </div>

        <p className="mx-auto mt-20 max-w-[520px] text-center font-display text-2xl font-light italic leading-snug text-deep-plum">
          &ldquo;One cause, many signals.&rdquo; Skin, hair, energy, weight,
          sleep and mood aren&apos;t separate problems — they&apos;re linked
          expressions of one hormonal transition.
        </p>

        <div className="mx-auto mt-12 max-w-[520px] border-t border-charcoal/10 pt-6 text-center text-[13px] text-charcoal/50">
          Educational, not medical advice. Sudden changes deserve a
          clinician&apos;s eye — iron, thyroid and other factors can play a
          role too.
        </div>
      </div>
    </section>
  );
}
