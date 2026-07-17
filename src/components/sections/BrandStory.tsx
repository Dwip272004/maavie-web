import Image from "next/image";
import { WaitlistTrigger } from "@/components/WaitlistTrigger";

export function BrandStory() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="flex min-h-[600px] flex-col lg:flex-row">
        <div className="flex w-full items-center px-6 py-14 sm:px-10 sm:py-20 lg:w-[52%] lg:px-16 lg:py-24 xl:px-24">
          <div className="max-w-[520px]">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-deep-plum">
              Our Story
            </p>
            <h2
              className="mb-6 font-light leading-[1.05] text-[#231F20]"
              style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)" }}
            >
              Embodying
              <br />
              <em className="italic text-plum-accent">Change.</em>
            </h2>
            <div className="mb-8 h-px w-10 bg-deep-plum" style={{ opacity: 0.35 }} />
            <p
              className="mb-5 leading-[1.75] text-[#231F20]"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)" }}
            >
              Your body deserves to be honoured at every stage of life.
            </p>
            <p className="mb-5 text-base leading-relaxed text-[#4F4242]">
              We exist to champion your changing body — naturally. Arming you with the
              knowledge, products, and community you need to thrive at every stage of womanhood.
            </p>
            <p className="mb-12 text-base leading-relaxed text-[#4F4242]">
              From hormonal pigmentation to hair thinning and skin sensitivity, our formulas
              support your body&rsquo;s every evolution.
            </p>
            <WaitlistTrigger
              label="Join the Waitlist"
              className="bg-deep-plum px-9 py-4 text-[11px] uppercase tracking-[0.18em] text-white hover:bg-[#450110]"
            />
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:w-[48%]">
          <Image
            src="/images/graphi.jpeg"
            alt="Maavie — every stage of womanhood"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
          <div className="absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-white to-transparent lg:block" />
        </div>
      </div>
    </section>
  );
}
