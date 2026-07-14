"use client";

import { useEffect, useState } from "react";
import type { QuestionStep } from "../types";

type QuestionScreenProps = {
  step: QuestionStep;
  onAnswerSingle: (optionIndex: number) => void;
  onAnswerMulti: (optionIndices: number[]) => void;
};

export function QuestionScreen({ step, onAnswerSingle, onAnswerMulti }: QuestionScreenProps) {
  const multi = step.type === "multi";
  const [picked, setPicked] = useState<Set<number>>(new Set());
  const [selectedSingle, setSelectedSingle] = useState<number | null>(null);

  useEffect(() => {
    if (selectedSingle === null) return;
    const t = setTimeout(() => onAnswerSingle(selectedSingle), 280);
    return () => clearTimeout(t);
  }, [selectedSingle, onAnswerSingle]);

  function handlePick(i: number) {
    if (multi) {
      setPicked((prev) => {
        const next = new Set(prev);
        if (next.has(i)) next.delete(i);
        else next.add(i);
        return next;
      });
    } else if (selectedSingle === null) {
      setSelectedSingle(i);
    }
  }

  return (
    <div className="flex flex-1 animate-[rise_0.5s_cubic-bezier(.2,.7,.2,1)] flex-col justify-center py-6 pb-2">
      <div className="mb-5 text-[11px] font-semibold uppercase tracking-[.24em] text-terracotta">
        {step.label}
      </div>
      <h1 className="mb-3 font-display text-[clamp(26px,4.4vw,34px)] font-medium leading-[1.18] tracking-[-.01em] text-deep-plum">
        {step.title}
      </h1>
      {step.help && (
        <p className="mb-[34px] max-w-[440px] text-[15px] leading-[1.6] text-[#7a7168]">
          {step.help}
        </p>
      )}
      <div className="flex flex-col gap-[11px]">
        {step.options.map((opt, i) => {
          const selected = multi ? picked.has(i) : selectedSingle === i;
          return (
            <button
              key={opt.t}
              type="button"
              onClick={() => handlePick(i)}
              className={`flex w-full items-center gap-[18px] rounded-sm border px-[22px] py-[19px] text-left font-sans text-[16.5px] text-[#3a3238] transition-[border-color,background,box-shadow,transform] duration-200 active:translate-y-px ${
                selected
                  ? "border-deep-plum bg-plum-tint"
                  : "border-[#E2D7CA] bg-white/50 hover:border-deep-plum hover:bg-white hover:shadow-[0_6px_22px_rgba(61,26,51,0.06)]"
              }`}
            >
              <span
                className={`flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full border font-display text-xs font-semibold tracking-[.02em] transition-all duration-200 ${
                  selected
                    ? "border-deep-plum bg-deep-plum text-bone"
                    : "border-[#E2D7CA] text-deep-plum"
                }`}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{opt.t}</span>
              {multi && (
                <span
                  className={`ml-auto flex h-[18px] w-[18px] flex-none items-center justify-center rounded-sm border text-[11px] text-white transition-all duration-200 ${
                    selected ? "border-deep-plum bg-deep-plum" : "border-[#cfc3b6]"
                  }`}
                >
                  {selected && "✓"}
                </span>
              )}
            </button>
          );
        })}
      </div>
      {multi && (
        <>
          <button
            type="button"
            disabled={picked.size === 0}
            onClick={() => onAnswerMulti([...picked])}
            className="mt-8 w-full cursor-pointer rounded-sm border-none bg-deep-plum px-[18px] py-[18px] font-sans text-[13px] font-semibold uppercase tracking-[.14em] text-bone transition-[background,opacity] duration-[250ms] hover:bg-[#57264a] disabled:cursor-not-allowed disabled:opacity-35"
          >
            Continue
          </button>
          <div className="mt-4 text-center text-[12.5px] tracking-[.02em] text-[#a99]">
            Select all that apply
          </div>
        </>
      )}
    </div>
  );
}
