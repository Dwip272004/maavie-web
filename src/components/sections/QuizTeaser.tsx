import Image from "next/image";
import Link from "next/link";

const lenses = ["Skin", "Hair", "Energy", "Sleep", "Mood"];

export function QuizTeaser() {
  return (
    <section id="quiz" className="overflow-hidden bg-bone">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-12 px-6 py-24 lg:flex-row lg:gap-16 lg:py-28">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[340px] shrink-0 overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(89,5,21,0.18)] lg:mx-0 lg:w-[38%]">
          <Image
            src="/images/take-the-quiz.jpeg"
            alt="Take a quiz — what does your body need?"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 340px, 38vw"
          />
        </div>

        <div className="max-w-[480px] text-center lg:text-left">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-terracotta">
            Take the Quiz
          </div>
          <h2 className="font-display text-[clamp(30px,3.6vw,44px)] font-medium text-deep-plum">
            What&apos;s your body telling you?
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-lg text-charcoal/60 lg:mx-0">
            A few honest questions across skin, hair, energy, sleep and mood —
            and we&apos;ll help you make sense of where you are.
          </p>

          <div className="mt-9 mb-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[.16em] text-terracotta/70 lg:justify-start">
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
      </div>
    </section>
  );
}
