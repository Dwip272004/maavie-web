import Link from "next/link";

const lenses = ["Skin", "Hair", "Energy", "Sleep", "Mood"];

export function QuizTeaser() {
  return (
    <section id="quiz" className="bg-bone pb-28 pt-24 text-center">
      <div className="mx-auto max-w-[600px] px-6">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-terracotta">
          Take the Quiz
        </div>
        <h2 className="font-display text-[clamp(30px,3.6vw,44px)] font-medium text-deep-plum">
          What&apos;s your body telling you?
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] text-lg text-charcoal/60">
          A few honest questions across skin, hair, energy, sleep and mood —
          and we&apos;ll help you make sense of where you are.
        </p>

        <div className="mt-9 mb-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[.16em] text-terracotta/70">
          {lenses.map((label, i) => (
            <span key={label} className="flex items-center gap-3">
              {i > 0 && <span className="text-terracotta/25">·</span>}
              {label}
            </span>
          ))}
        </div>

        <Link
          href="/quiz"
          className="inline-block border-b border-deep-plum pb-1 text-base font-semibold text-deep-plum transition-colors hover:border-terracotta hover:text-terracotta"
        >
          Take the Quiz →
        </Link>
      </div>
    </section>
  );
}
