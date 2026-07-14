const cards = [
  {
    title: "Skin",
    body: "Falling estrogen means less collagen and a weaker moisture barrier — so skin feels drier, thinner and less firm.",
  },
  {
    title: "Hair",
    body: "Estrogen keeps hair growing longer. As it drops, more strands shed early — so hair thins gradually, all over.",
  },
  {
    title: "Energy & Fatigue",
    body: "Shifting hormones and blood sugar leave many women drained and foggy — the tiredness that sleep doesn't fix.",
  },
  {
    title: "Weight & Metabolism",
    body: "Changes in insulin and estrogen make weight easier to gain — especially around the middle — even when nothing else changed.",
  },
  {
    title: "Sleep",
    body: "Night waking and lighter sleep are common as hormones fluctuate — which feeds straight into mood and energy.",
  },
  {
    title: "Mood & Brain Fog",
    body: "Mood swings, low patches and that \"where did that word go?\" feeling are real — and hormonal, not a character flaw.",
  },
];

export function Science() {
  return (
    <section id="science" className="bg-bone pb-28">
      <div className="mx-auto max-w-[880px] px-6">
        <div className="mb-16 max-w-[560px]">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-terracotta">
            The Science
          </div>
          <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-medium text-deep-plum">
            It&apos;s not just ageing.
            <br />
            It&apos;s estrogen.
          </h2>
          <p className="mt-4 text-lg text-charcoal/60">
            One hormone shifts — and it shows up all over your body.
          </p>
        </div>

        <div className="border-t border-charcoal/10">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="grid grid-cols-[52px_1fr] gap-x-8 border-b border-charcoal/10 py-8 sm:grid-cols-[88px_1fr]"
            >
              <div className="font-display text-3xl font-light text-deep-plum/25">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-deep-plum">
                  {card.title}
                </h3>
                <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-charcoal/65">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-[520px] text-center font-display text-2xl font-light italic leading-snug text-deep-plum">
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
