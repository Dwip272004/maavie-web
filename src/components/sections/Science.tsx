const cards = [
  {
    icon: "🌿",
    tint: "bg-plum-tint",
    title: "Skin",
    body: "Falling estrogen means less collagen and a weaker moisture barrier — so skin feels drier, thinner and less firm.",
  },
  {
    icon: "💇‍♀️",
    tint: "bg-terra-tint",
    title: "Hair",
    body: "Estrogen keeps hair growing longer. As it drops, more strands shed early — so hair thins gradually, all over.",
  },
  {
    icon: "🔋",
    tint: "bg-sage-tint",
    title: "Energy & Fatigue",
    body: "Shifting hormones and blood sugar leave many women drained and foggy — the tiredness that sleep doesn't fix.",
  },
  {
    icon: "⚖️",
    tint: "bg-terra-tint",
    title: "Weight & Metabolism",
    body: "Changes in insulin and estrogen make weight easier to gain — especially around the middle — even when nothing else changed.",
  },
  {
    icon: "😴",
    tint: "bg-sage-tint",
    title: "Sleep",
    body: "Night waking and lighter sleep are common as hormones fluctuate — which feeds straight into mood and energy.",
  },
  {
    icon: "🧠",
    tint: "bg-plum-tint",
    title: "Mood & Brain Fog",
    body: "Mood swings, low patches and that \"where did that word go?\" feeling are real — and hormonal, not a character flaw.",
  },
];

export function Science() {
  return (
    <section id="science" className="bg-bone pb-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-[50px] max-w-[740px] text-center">
          <div className="mb-3.5 text-xs font-bold uppercase tracking-[.18em] text-terracotta">
            The Science
          </div>
          <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-semibold text-deep-plum">
            It&apos;s not just ageing. It&apos;s estrogen.
          </h2>
          <p className="mt-3.5 text-lg text-[#575757]">
            One hormone shifts — and it shows up all over your body.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[18px] border border-[#ece5dc] bg-white p-6 px-6 transition-[transform,box-shadow] duration-[180ms] hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(61,26,51,0.08)]"
            >
              <div
                className={`mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-2xl text-[23px] ${card.tint}`}
              >
                {card.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-deep-plum">
                {card.title}
              </h3>
              <p className="mt-2 text-[14.5px] text-[#585858]">{card.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-[26px] rounded-2xl bg-sage-tint px-7 py-6 text-center text-[15.5px] text-[#3e4a3c]">
          <strong className="text-deep-plum">One cause, many signals.</strong>{" "}
          Skin, hair, energy, weight, sleep and mood aren&apos;t separate
          problems — they&apos;re linked expressions of one hormonal
          transition. That&apos;s why we treat the whole woman.
        </div>
        <div className="mt-6 rounded-md border-l-[3px] border-soft-sage bg-black/3 px-3.5 py-2.5 text-[12.5px] text-[#6b6b6b]">
          Educational, not medical advice. Sudden changes deserve a
          clinician&apos;s eye — iron, thyroid and other factors can play a
          role too.
        </div>
      </div>
    </section>
  );
}
