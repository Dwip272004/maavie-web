import { EstrogenBodyDiagram } from "@/components/science/EstrogenBodyDiagram";

export function Science() {
  return (
    <section id="science" className="bg-deep-plum pb-28 pt-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="mx-auto mb-16 max-w-[560px] text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-terracotta">
            The Science
          </div>
          <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-medium text-bone">
            It&apos;s not just ageing.
            <br />
            It&apos;s estrogen.
          </h2>
          <p className="mt-4 text-lg text-bone/55">
            One hormone shifts — and it shows up all over your body. Explore how.
          </p>
        </div>

        <EstrogenBodyDiagram />

        <p className="mx-auto mt-20 max-w-[520px] text-center font-display text-2xl font-light italic leading-snug text-bone">
          &ldquo;One cause, many signals.&rdquo; Skin, hair, energy, weight,
          sleep and mood aren&apos;t separate problems — they&apos;re linked
          expressions of one hormonal transition.
        </p>

        <div className="mx-auto mt-12 max-w-[520px] border-t border-bone/15 pt-6 text-center text-[13px] text-bone/50">
          Educational, not medical advice. Effects vary by individual, dosage
          and duration. Sudden changes deserve a clinician&apos;s eye — iron,
          thyroid and other factors can play a role too.
        </div>
      </div>
    </section>
  );
}
