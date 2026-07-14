const posts = [
  {
    gradient: "linear-gradient(135deg,#C6785C,#93513a)",
    tag: "Energy",
    title: "Why you're exhausted at 45",
    body: "The hormone–blood sugar loop behind midlife fatigue, and what genuinely helps.",
  },
  {
    gradient: "linear-gradient(135deg,#3D1A33,#6a2e57)",
    tag: "Weight",
    title: "Weight that won't budge",
    body: "How the transition changes metabolism — and why it's not about willpower.",
  },
  {
    gradient: "linear-gradient(135deg,#A8B5A2,#6f8069)",
    tag: "Sleep & Mood",
    title: "The 3am wake-up, decoded",
    body: "The hormone–sleep–mood loop, and small shifts that support steadier nights.",
  },
];

export function Learn() {
  return (
    <section id="learn" className="bg-charcoal pb-24 pt-20 text-bone">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center text-xs font-bold uppercase tracking-[.18em] text-terracotta">
          Learn with Maavie
        </div>
        <h2 className="text-center font-display text-[clamp(28px,3.4vw,44px)] font-semibold text-bone">
          Understand your hormones
        </h2>
        <p className="mx-auto mb-11 mt-3.5 max-w-[560px] text-center text-bone/70">
          Clear, science-first reads — so you always know what&apos;s
          happening and why.
        </p>
        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl border border-bone/12 bg-bone/4 transition-transform duration-[180ms] hover:-translate-y-1"
            >
              <div
                className="aspect-[16/10]"
                style={{ background: post.gradient }}
              />
              <div className="px-[22px] py-[26px]">
                <span className="text-[11px] font-bold uppercase tracking-[.1em] text-terracotta">
                  {post.tag}
                </span>
                <h3 className="my-2 font-display text-[19px] font-semibold text-bone">
                  {post.title}
                </h3>
                <p className="text-sm text-bone/68">{post.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
