const pillars = [
  { title: "Biology", body: "The hormone, not the hype." },
  { title: "Science", body: "Evidence, never exaggeration." },
  { title: "Care", body: "Warm, judgement-free guidance." },
  { title: "Assurance", body: "No fear. Just honesty." },
];

export function Promise() {
  return (
    <section id="promise" className="bg-deep-plum pb-28 pt-24 text-bone">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="mb-16 max-w-[520px]">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-terracotta">
            Our Promise
          </div>
          <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-medium text-bone">
            What you can count on
          </h2>
          <p className="mt-4 text-lg text-bone/55">
            Science as our foundation. Care as our heart.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-12 border-t border-bone/15 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="border-b border-bone/15 py-8">
              <h3 className="font-display text-2xl font-medium text-bone">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-bone/50">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
