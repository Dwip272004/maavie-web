const experts = [
  { name: "Dr. [Name]", cred: "MD, Obstetrics & Gynaecology", tag: "Gynaecology" },
  { name: "Dr. [Name]", cred: "MD, Dermatology", tag: "Dermatology" },
  { name: "[Name]", cred: "Clinical Nutritionist, RD", tag: "Nutrition" },
  { name: "[Name]", cred: "Certified Menopause Coach", tag: "Coaching" },
];

export function Experts() {
  return (
    <section id="experts" className="bg-bone pb-28 pt-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="mb-16 max-w-[560px]">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-terracotta">
            Made by women, for women
          </div>
          <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-medium text-deep-plum">
            The experts behind every word
          </h2>
          <p className="mt-4 text-lg text-charcoal/60">
            Our content and science are reviewed by real specialists —
            because credibility is the reason to believe everything else.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 border-t border-charcoal/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {experts.map((expert) => (
            <div key={expert.name + expert.cred}>
              <div
                className="mb-5 h-[72px] w-[72px] rounded-full border border-deep-plum/15"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(89,5,21,.12), rgba(198,120,92,.12))",
                }}
              />
              <h3 className="font-display text-lg font-medium text-deep-plum">
                {expert.name}
              </h3>
              <div className="mt-1 min-h-[34px] text-[13px] text-charcoal/55">
                {expert.cred}
              </div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[.14em] text-terracotta">
                {expert.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
