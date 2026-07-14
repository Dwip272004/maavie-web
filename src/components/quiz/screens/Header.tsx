import { FLOW, answeredCount, isQuestion, totalQuestions } from "../flow";

type HeaderProps = {
  step: number;
  canGoBack: boolean;
  onBack: () => void;
};

export function Header({ step, canGoBack, onBack }: HeaderProps) {
  const s = FLOW[step];
  const barWidth = Math.min(100, (step / (FLOW.length - 1)) * 100);
  const showBack = canGoBack && s.type !== "loading" && s.type !== "result";
  const showCount = isQuestion(s);
  const n = answeredCount(step) + 1;

  return (
    <>
      <div className="flex items-center justify-between py-[26px] pb-[22px]">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className={`w-[26px] cursor-pointer border-none bg-none text-left text-xl text-deep-plum opacity-60 transition-opacity hover:opacity-100 ${
            showBack ? "visible" : "invisible"
          }`}
        >
          ‹
        </button>
        <div className="font-display text-[22px] font-semibold italic tracking-[.01em] text-deep-plum">
          maavie
        </div>
        <div
          className={`text-xs font-medium tracking-[.22em] text-[#a99] tabular-nums ${
            showCount ? "visible" : "invisible"
          }`}
        >
          {String(n).padStart(2, "0")} / {String(totalQuestions).padStart(2, "0")}
        </div>
      </div>
      <div className="mb-2 h-0.5 overflow-hidden rounded-full bg-[#E2D7CA]">
        <div
          className="h-full bg-deep-plum transition-[width] duration-[450ms] ease-[cubic-bezier(.4,0,.2,1)]"
          style={{ width: `${barWidth}%` }}
        />
      </div>
    </>
  );
}
