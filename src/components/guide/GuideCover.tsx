const JUMP_LINKS = [
  { href: "#whats-happening", label: "What's happening" },
  { href: "#mood", label: "Mood & brain fog" },
  { href: "#sleep", label: "Sleep" },
  { href: "#energy", label: "Energy & fatigue" },
  { href: "#skin", label: "Skin" },
  { href: "#hair", label: "Hair" },
];

export function GuideCover() {
  return (
    <>
      <div
        className="px-6 pb-14 pt-16 text-center text-bone"
        style={{
          background:
            "radial-gradient(120% 100% at 80% 10%, rgba(198,120,92,.4), transparent 55%), linear-gradient(160deg,#2a0509,#590515)",
        }}
      >
        <div className="mb-6 font-display text-2xl font-bold italic">
          maavie<span className="text-terracotta">.</span>
        </div>
        <h1 className="mb-3 font-display text-[clamp(32px,5vw,46px)] text-bone">
          Your Hormone Guide
        </h1>
        <p className="mx-auto max-w-[520px] text-[17px] text-bone/85">
          The honest, science-first version of what&apos;s happening in your body — and what you
          can actually do about it.
        </p>
        <div className="mt-[18px] font-display italic text-soft-sage">Science you can feel.</div>
      </div>

      <div className="relative z-10 mx-auto -mt-8 max-w-[720px] rounded-[18px] border border-[#eadfd4] bg-white px-7 py-[26px] shadow-[0_14px_40px_rgba(89,5,21,0.08)]">
        <h3 className="mb-3 text-lg text-deep-plum">How this guide works</h3>
        <p className="mb-4 text-[14.5px] text-[#555]">
          Everyone gets <b>Part 1 — what&apos;s happening in your body</b>, because it&apos;s
          common to us all. Then we add the areas that stood out most for you from your quiz.
          Jump to yours:
        </p>
        <div className="flex flex-wrap gap-2.5">
          {JUMP_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full bg-plum-tint px-3.5 py-2 text-[13px] font-semibold text-deep-plum no-underline hover:bg-deep-plum hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
