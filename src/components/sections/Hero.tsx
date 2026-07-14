import { WaitlistTrigger } from "@/components/WaitlistTrigger";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[92vh] items-center pt-20 text-bone"
      style={{
        background:
          "radial-gradient(120% 120% at 82% 18%, rgba(198,120,92,.35), transparent 60%), linear-gradient(160deg,#2a1224 0%, #3D1A33 55%, #4a2140 100%)",
      }}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 lg:order-1">
          <div className="mb-4 font-display text-xl italic text-soft-sage">
            Built for the biology of women
          </div>
          <h1 className="font-display text-[clamp(38px,5vw,60px)] font-semibold leading-[1.15] text-bone">
            Your body evolves.
            <br />
            Your care should too.
          </h1>
          <p className="my-[22px] max-w-[520px] text-lg text-bone/88">
            The changes you&apos;re feeling aren&apos;t just ageing —
            they&apos;re hormonal. And you&apos;re not alone.
          </p>
          <div className="mb-[30px] flex flex-wrap items-center gap-[18px]">
            <WaitlistTrigger
              label="Join the Waitlist"
              className="bg-terracotta px-10 py-[17px] text-base text-bone hover:bg-[#b3664b]"
            />
            <span className="text-sm text-bone/75">
              Be first when we launch →
            </span>
          </div>
          <div className="mt-[26px] text-[12.5px] text-bone/72">
            ✦ Reviewed by gynaecologists · dermatologists · nutritionists
          </div>
        </div>
        <div
          className="relative order-1 flex aspect-[4/5] max-w-[420px] items-center justify-center rounded-3xl border border-bone/18 lg:order-2 lg:max-w-none"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 35%, rgba(168,181,162,.5), transparent), linear-gradient(140deg, rgba(246,242,237,.14), rgba(198,120,92,.25))",
          }}
        >
          <span className="text-xs font-bold tracking-[.22em] text-bone/70">
            HERO IMAGE — real, warm, natural light
          </span>
          <div className="absolute inset-x-[22px] bottom-[22px] rounded-2xl border border-bone/16 bg-[rgba(42,18,36,0.55)] p-4 text-[13px] text-bone">
            &ldquo;Midlife is not the end of the story. It&apos;s where
            understanding begins.&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
