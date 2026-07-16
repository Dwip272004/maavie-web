export function Story() {
  return (
    <section id="story" className="bg-bone pb-24 pt-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div
          className="flex aspect-square items-center justify-center border border-charcoal/10 text-[11px] font-semibold tracking-[.2em] text-charcoal/40"
          style={{
            background:
              "linear-gradient(135deg, rgba(168,181,162,.18), rgba(89,5,21,.1))",
          }}
        >
          FOUNDERS PHOTO
        </div>
        <div>
          <div className="mb-3.5 text-xs font-bold uppercase tracking-[.18em] text-terracotta">
            Our Story
          </div>
          <h2 className="mb-2 font-display text-[clamp(28px,3.4vw,40px)] font-semibold text-deep-plum">
            Why we built Maavie
          </h2>
          <div className="mb-5 text-sm font-semibold text-terracotta">
            Nupur &amp; Shivani · Founders
          </div>
          <p className="mb-4 font-display text-base italic text-[#4a4a4a]">
            &ldquo;It started with our own questions — the sleep that broke,
            the weight that crept on, the energy that vanished, the hair in
            the brush. We went looking for honest answers built for Indian
            women, and found fragments and fear instead.&rdquo;
          </p>
          <p className="font-display text-base italic text-[#4a4a4a]">
            &ldquo;So we built the thing we wished existed: science explained
            plainly, care without judgement, and support made for the biology
            we actually live in.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
