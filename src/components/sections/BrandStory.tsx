import Image from "next/image";

export function BrandStory() {
  return (
    <section id="story" className="overflow-hidden bg-plum-tint">
      <div className="flex min-h-[600px] flex-col lg:flex-row">
        <div className="flex w-full items-center px-6 py-14 sm:px-10 sm:py-20 lg:w-[52%] lg:px-16 lg:py-24 xl:px-24">
          <div className="max-w-[520px]">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-deep-plum">
              Our Story
            </p>
            <h2
              className="mb-3 font-light leading-[1.05] text-[#231F20]"
              style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)" }}
            >
              Why we built <em className="italic text-plum-accent">Maavie.</em>
            </h2>
            <div className="mb-5 text-sm font-semibold text-plum-accent">
              Nupur · Founder
            </div>
            <div className="mb-8 h-px w-10 bg-deep-plum" style={{ opacity: 0.35 }} />
            <p className="mb-5 text-base leading-relaxed text-[#4F4242]">
              Nupur watched her mother move through perimenopause in silence, then watched
              her sister, a doctor, face the same shift — but with answers, and saw how much
              that changed. Hormones shifting, and no one there to help.
            </p>
            <p className="mb-12 text-base leading-relaxed text-[#4F4242]">
              So we built what our mothers never had and we needed ourselves: science
              explained plainly, care without judgement — so no woman feels like she&rsquo;s
              losing herself, alone.
            </p>
            <a
              href="https://www.instagram.com/maavie.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer rounded-full bg-deep-plum px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#450110]"
            >
              Join the Waitlist
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:w-[48%]">
          <Image
            src="/images/nupur-kaudan.jpeg"
            alt="Nupur Kaudan, Founder of Maavie"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
          <div className="absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-plum-tint to-transparent lg:block" />
        </div>
      </div>
    </section>
  );
}
