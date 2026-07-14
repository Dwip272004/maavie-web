const HORMONES = [
  {
    name: "Estrogen",
    role: "The multitasker",
    points: [
      "Helps build collagen & keep skin firm",
      "Keeps the skin barrier strong & hydrated",
      "Holds hair in its growth phase longer",
      "Supports mood, memory & blood-sugar balance",
    ],
  },
  {
    name: "Progesterone",
    role: "The calming one",
    points: [
      "Supports deep, restful sleep",
      "Has a calming effect on the nervous system",
      "Balances estrogen & steadies the cycle",
      "Often the first to decline in perimenopause",
    ],
  },
];

export function WhatsHappening() {
  return (
    <section id="whats-happening" className="mb-11 scroll-mt-5">
      <div className="mb-2 text-xs font-bold uppercase tracking-[.16em] text-terracotta">
        Part 1 · Common to everyone
      </div>
      <h2 className="mb-3.5 font-display text-[clamp(24px,3.4vw,32px)] text-deep-plum">
        What&apos;s happening in your body
      </h2>
      <p className="mb-3.5 text-[17.5px] text-[#333]">
        The changes you&apos;re noticing aren&apos;t random, and they aren&apos;t &ldquo;just
        ageing.&rdquo; They trace back to two hormones shifting — and once you see how they
        connect, the whole picture makes sense.
      </p>

      <div className="my-[22px] grid grid-cols-1 gap-4 sm:grid-cols-2">
        {HORMONES.map((h) => (
          <div key={h.name} className="rounded-2xl border border-[#eadfd4] bg-white p-5">
            <h3 className="mb-1.5 font-display text-lg text-deep-plum">{h.name}</h3>
            <div className="mb-2.5 text-[12.5px] font-bold uppercase tracking-[.05em] text-terracotta">
              {h.role}
            </div>
            <ul>
              {h.points.map((point) => (
                <li key={point} className="relative py-1 pl-5 text-sm text-[#555]">
                  <span className="absolute left-0 top-[11px] h-[7px] w-[7px] rounded-full bg-soft-sage" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mb-3.5 text-base text-[#3f3f3f]">
        As these two hormones fluctuate and fall, the effects show up in more than one place at
        once — skin, hair, sleep, energy, mood and weight. That&apos;s why it can feel like
        everything is changing together. It&apos;s not several separate problems. It&apos;s{" "}
        <strong className="text-deep-plum">one hormonal transition, expressed in many ways.</strong>
      </p>

      <div className="mb-1 mt-2 rounded-2xl bg-sage-tint px-6 py-5 text-base text-[#3e4a3c]">
        <strong className="text-deep-plum">The reassuring part:</strong> because there&apos;s one
        underlying cause, there&apos;s one understandable story — and real, everyday things that
        help. This guide walks you through the areas that matter most for you.
      </div>
    </section>
  );
}
