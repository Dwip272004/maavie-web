"use client";

import { useEffect, useState } from "react";
import type { InterStep } from "../types";

type InterstitialScreenProps = {
  step: InterStep;
  onComplete: () => void;
};

export function InterstitialScreen({ step, onComplete }: InterstitialScreenProps) {
  const [filled, setFilled] = useState(false);
  const dur = step.dur ?? 5200;

  useEffect(() => {
    const raf = requestAnimationFrame(() => setFilled(true));
    const t = setTimeout(onComplete, dur + 200);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
    // step is remounted via `key={stepIndex}` in QuizEngine, so this effect
    // is scoped to a single interstitial's lifetime regardless of onComplete identity
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dur]);

  return (
    <div className="mx-auto flex max-w-[500px] animate-[rise_0.5s_cubic-bezier(.2,.7,.2,1)] flex-col justify-center py-6 pb-2 text-center">
      <div className="mb-[26px] text-[11px] font-semibold uppercase tracking-[.26em] text-terracotta">
        {step.kicker}
      </div>
      <h2 className="mb-2 font-display text-[clamp(28px,4.6vw,38px)] font-medium leading-[1.2] text-deep-plum">
        {step.title}
      </h2>
      {step.chips ? (
        <div className="mx-auto mb-1 mt-[30px] flex justify-between border-y border-[#E2D7CA]">
          {step.chips.map((c) => (
            <div key={c.cl} className="flex-1 border-l border-[#E2D7CA] px-2 py-5 first:border-l-0">
              <span className="font-display text-base italic text-deep-plum">{c.cl}</span>
              {c.cs && (
                <span className="mt-[5px] block font-sans text-[11px] uppercase tracking-[.12em] text-[#a99]">
                  {c.cs}
                </span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="mx-auto my-6 h-px w-[38px] bg-terracotta" />
      )}
      {step.body.map((b) => (
        <p key={b} className="mx-auto max-w-[420px] text-[16.5px] leading-[1.7] text-[#5f574f]">
          {b}
        </p>
      ))}
      <div className="mt-10">
        <div className="mx-auto h-0.5 max-w-[60px] overflow-hidden rounded-full bg-[#E2D7CA]">
          <div
            className="h-full bg-deep-plum ease-linear"
            style={{
              width: filled ? "100%" : "0%",
              transitionProperty: "width",
              transitionDuration: `${dur}ms`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
