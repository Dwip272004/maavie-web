import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "88vh" }}
    >
      <Image
        src="/images/hero-banner.png"
        alt="Maavie — Built for the biology of women."
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
            background: "rgba(89, 5, 21, 0.4)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h1
            className="mb-5 font-display leading-tight text-bone"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 500 }}
          >
            Built for the
            <br />
            biology of women.
          </h1>
          <p className="mb-10 text-lg font-light text-bone/80">
            Science-backed hormonal care for every stage of womanhood.
          </p>
          <a
            href="https://www.instagram.com/maavie.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer rounded-full bg-bone px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-deep-plum transition-transform duration-150 hover:-translate-y-0.5 hover:bg-terra-tint"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
