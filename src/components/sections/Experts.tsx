const experts = [
  { name: "Dr. [Name]", cred: "MD, Obstetrics & Gynaecology", tag: "Gynaecology" },
  { name: "Dr. [Name]", cred: "MD, Dermatology", tag: "Dermatology" },
  { name: "[Name]", cred: "Clinical Nutritionist, RD", tag: "Nutrition" },
  { name: "[Name]", cred: "Certified Menopause Coach", tag: "Coaching" },
];

export function Experts() {
  return (
    <section id="experts" className="bg-sage-tint pb-24 pt-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-[46px] max-w-[680px] text-center">
          <div className="mb-3.5 text-xs font-bold uppercase tracking-[.18em] text-terracotta">
            Made by women, for women
          </div>
          <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-semibold text-deep-plum">
            The experts behind every word
          </h2>
          <p className="mt-3.5 text-[#4c584a]">
            Our content and science are reviewed by real specialists —
            because credibility is the reason to believe everything else.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {experts.map((expert) => (
            <div
              key={expert.name + expert.cred}
              className="rounded-[18px] border border-[#dfe6db] bg-white px-[22px] py-7 text-center"
            >
              <div
                className="mx-auto mb-4 flex h-[104px] w-[104px] items-center justify-center rounded-full text-[10px] font-bold tracking-[.15em] text-white/80"
                style={{
                  background: "linear-gradient(135deg,#3D1A33,#C6785C)",
                }}
              >
                PHOTO
              </div>
              <h3 className="font-display text-lg font-semibold text-deep-plum">
                {expert.name}
              </h3>
              <div className="min-h-[34px] text-[13px] text-[#666]">
                {expert.cred}
              </div>
              <span className="mt-3 inline-block rounded-full bg-plum-tint px-3 py-[5px] text-[11px] font-bold uppercase tracking-[.06em] text-deep-plum">
                {expert.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
