const pillars = [
  { icon: "🔬", bg: "bg-plum-accent text-bone", title: "Biology", body: "The hormone, not the hype." },
  { icon: "📖", bg: "bg-soft-sage text-charcoal", title: "Science", body: "Evidence, never exaggeration." },
  { icon: "🤍", bg: "bg-terracotta text-bone", title: "Care", body: "Warm, judgement-free guidance." },
  { icon: "✦", bg: "bg-deep-plum text-bone", title: "Assurance", body: "No fear. Just honesty." },
];

export function Promise() {
  return (
    <section id="promise" className="bg-charcoal pb-24 pt-20 text-bone">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center text-xs font-bold uppercase tracking-[.18em] text-soft-sage">
          Our Promise
        </div>
        <h2 className="text-center font-display text-[clamp(28px,3.4vw,44px)] font-semibold text-bone">
          What you can count on
        </h2>
        <p className="mx-auto mb-[46px] mt-3.5 max-w-[620px] text-center text-bone/70">
          Science as our foundation. Care as our heart.
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-bone/12 bg-bone/5 px-[22px] py-7 text-center"
            >
              <div
                className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-2xl ${pillar.bg}`}
              >
                {pillar.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-bone">
                {pillar.title}
              </h3>
              <p className="text-sm text-bone/72">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
