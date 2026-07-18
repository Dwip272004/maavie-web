const posts = [
  {
    tone: "#8f5b48",
    tag: "Energy",
    title: "Why you're exhausted at 45",
    body: "The hormone–blood sugar loop behind midlife fatigue, and what genuinely helps.",
  },
  {
    tone: "#6b2530",
    tag: "Weight",
    title: "Weight that won't budge",
    body: "How the transition changes metabolism — and why it's not about willpower.",
  },
  {
    tone: "#5f6d5a",
    tag: "Sleep & Mood",
    title: "The 3am wake-up, decoded",
    body: "The hormone–sleep–mood loop, and small shifts that support steadier nights.",
  },
];

export function Learn() {
  return (
    <section id="learn" className="bg-deep-plum pb-28 pt-24 text-bone">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="mb-16 max-w-[560px]">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-terracotta">
            Learn with Maavie
          </div>
          <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-medium text-bone">
            Understand your hormones
          </h2>
          <p className="mt-4 text-lg text-bone/55">
            Clear, science-first reads — so you always know what&apos;s
            happening and why.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 border-t border-bone/15 pt-12 sm:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title}>
              <div
                className="mb-5 aspect-[4/3]"
                style={{ backgroundColor: post.tone }}
              />
              <span className="text-[11px] font-semibold uppercase tracking-[.14em] text-terracotta">
                {post.tag}
              </span>
              <h3 className="mt-2 font-display text-xl font-medium text-bone">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone/55">
                {post.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
