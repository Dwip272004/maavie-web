import Link from "next/link";

const lenses = [
  { icon: "🌿", label: "Skin" },
  { icon: "💇", label: "Hair" },
  { icon: "🔋", label: "Energy" },
  { icon: "😴", label: "Sleep" },
  { icon: "🧠", label: "Mood" },
];

export function QuizTeaser() {
  return (
    <section id="quiz" className="bg-terra-tint pb-24 pt-20 text-center">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-3.5 text-xs font-bold uppercase tracking-[.18em] text-terracotta">
          Take the Quiz
        </div>
        <h2 className="font-display text-[clamp(30px,3.6vw,44px)] font-semibold text-deep-plum">
          What&apos;s your body telling you?
        </h2>
        <p className="mx-auto my-4 max-w-[560px] text-lg text-[#6a5147]">
          A few honest questions across skin, hair, energy, sleep and mood —
          and we&apos;ll help you make sense of where you are.
        </p>
        <div className="mb-8 flex flex-wrap justify-center gap-3.5">
          {lenses.map((lens) => (
            <span
              key={lens.label}
              className="rounded-full border border-[#ecd8cd] bg-white px-[22px] py-2.5 text-sm text-[#6a5147]"
            >
              {lens.icon} {lens.label}
            </span>
          ))}
        </div>
        <Link
          href="/quiz"
          className="inline-block rounded-full bg-deep-plum px-10 py-[17px] text-base font-semibold text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#582546]"
        >
          Take the Quiz
        </Link>
      </div>
    </section>
  );
}
