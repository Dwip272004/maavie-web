import Link from "next/link";

export function Community() {
  return (
    <section className="w-full">
      <div className="flex flex-col sm:flex-row">
        <div className="flex w-full items-center justify-center bg-deep-plum px-5 py-14 sm:w-1/2 sm:px-8 sm:py-16 lg:py-[65px]">
          <div className="max-w-[438px] text-center">
            <svg className="mx-auto mb-5" width="32" height="32" fill="white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <h2
              className="mb-6 font-light text-bone"
              style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)", lineHeight: "1.1" }}
            >
              You don&rsquo;t have to
              <br />
              <em className="italic">figure this out alone.</em>
            </h2>
            <p className="mb-10 text-base leading-relaxed text-bone/80">
              Join 50,000+ Indian women on WhatsApp — talking honestly about hormonal skin,
              hair changes and everything the beauty industry ignores.
            </p>
            <Link
              href="https://wa.me/message/maavie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-bone px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-deep-plum transition-colors duration-200 hover:bg-terra-tint"
            >
              Join Our WhatsApp Community
            </Link>
          </div>
        </div>

        <div
          className="flex w-full items-center justify-center px-5 py-14 sm:w-1/2 sm:px-8 sm:py-16 lg:py-[65px]"
          style={{ backgroundColor: "#D9C0BA" }}
        >
          <div className="max-w-[438px] text-center">
            <svg
              className="mx-auto mb-5"
              width="32"
              height="32"
              fill="none"
              stroke="#590515"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <h2
              className="mb-6 font-light text-deep-plum"
              style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)", lineHeight: "1.1" }}
            >
              Follow our journey
              <br />
              <em className="italic">@maavie.in</em>
            </h2>
            <p className="mb-10 text-base leading-relaxed text-deep-plum">
              Skincare tips, ingredient deep-dives, real women&rsquo;s stories and honest
              conversation about hormonal skin — all on Instagram.
              <br />
              <br />
              Come say hello.
            </p>
            <Link
              href="https://instagram.com/maavie.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-deep-plum px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-opacity duration-200 hover:opacity-90"
            >
              Follow @maavie.in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
