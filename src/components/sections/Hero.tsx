import Image from "next/image";
import { WaitlistTrigger } from "@/components/WaitlistTrigger";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "88vh" }}
    >
      <Image
        src="/images/banner.png"
        alt="Maavie — Bodies evolve. Your care should too."
        fill
        priority
        className="object-cover object-right"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

      <div
        className="relative z-10 mx-auto flex max-w-[1200px] items-center px-6 sm:px-10 lg:px-12"
        style={{ minHeight: "88vh" }}
      >
        <div
          className="w-full max-w-[500px] px-6 py-8 sm:px-10 sm:py-12"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            background: "rgba(61, 26, 51, 0.4)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h1
            className="mb-5 font-display leading-tight text-bone"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 500 }}
          >
            Bodies change,
            <br />
            Care should too.
          </h1>
          <p className="mb-10 text-lg font-light text-bone/80">
            Science-backed hormonal care for every stage of womanhood.
          </p>
          <WaitlistTrigger
            label="Join the Waitlist"
            className="bg-bone px-9 py-4 text-[11px] uppercase tracking-[0.18em] text-deep-plum hover:bg-terra-tint"
          />
        </div>
      </div>
    </section>
  );
}
