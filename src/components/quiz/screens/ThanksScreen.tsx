import Link from "next/link";

export function ThanksScreen() {
  return (
    <div className="mx-auto max-w-[440px] animate-[rise_0.5s_cubic-bezier(.2,.7,.2,1)] py-6 pb-2 text-center">
      <div className="mb-[22px] font-display text-[30px] italic text-terracotta">maavie</div>
      <h1 className="mb-3.5 font-display text-[34px] font-medium leading-[1.18] text-deep-plum">
        You&apos;re on the list.
      </h1>
      <p className="text-[16.5px] leading-[1.7] text-[#5f574f]">
        Thank you — we&apos;ll be in touch with your personalised guide and the moment we launch.
        Welcome.
      </p>

      <Link
        href="/guide"
        className="mt-8 inline-block rounded-full bg-deep-plum px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-bone transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#450110]"
      >
        View Your Guide
      </Link>

      <Link
        href="/"
        className="fixed bottom-5 left-5 z-40 text-[11px] font-semibold uppercase tracking-[0.14em] text-deep-plum/70 hover:text-deep-plum sm:bottom-7 sm:left-7"
        style={{ bottom: "max(1.25rem, calc(env(safe-area-inset-bottom) + 0.9rem))" }}
      >
        ← Home
      </Link>
    </div>
  );
}
