"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Reading your answers",
  "Seeing the whole picture",
  "Connecting the signals",
  "Almost there",
];

type LoadingScreenProps = {
  onComplete: () => void;
};

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [pct, setPct] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    let p = 0;
    let m = 0;
    const iv = setInterval(() => {
      p += 25;
      setPct(p);
      setMsgIndex(Math.min(m++, MESSAGES.length - 1));
      if (p >= 100) {
        clearInterval(iv);
        setTimeout(onComplete, 550);
      }
    }, 640);
    return () => clearInterval(iv);
    // this screen is remounted via `key={stepIndex}` in QuizEngine, so the
    // interval is scoped to a single loading screen's lifetime
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto max-w-[460px] animate-[rise_0.5s_cubic-bezier(.2,.7,.2,1)] py-6 pb-2 text-center">
      <div className="mb-[22px] text-[11px] font-semibold uppercase tracking-[.26em] text-terracotta">
        One moment
      </div>
      <h2 className="mb-[34px] font-display text-[30px] font-medium leading-[1.25] text-deep-plum">
        Preparing your snapshot
      </h2>
      <div className="mx-auto mb-[18px] h-0.5 max-w-[240px] overflow-hidden rounded-full bg-[#E2D7CA]">
        <div
          className="h-full bg-deep-plum transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="min-h-[18px] text-[13px] font-medium uppercase tracking-[.08em] text-[#a99]">
        {MESSAGES[msgIndex]}
      </div>
    </div>
  );
}
