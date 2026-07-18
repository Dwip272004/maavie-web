import { WaitlistTrigger } from "@/components/WaitlistTrigger";

const experts = [
  { name: "Dr. [Name]", cred: "MD, Obstetrics & Gynaecology", tag: "Gynaecology" },
  { name: "Dr. [Name]", cred: "MD, Dermatology", tag: "Dermatology" },
  { name: "[Name]", cred: "Clinical Nutritionist, RD", tag: "Nutrition" },
  { name: "[Name]", cred: "Certified Menopause Coach", tag: "Coaching" },
];

export function Experts() {
  return (
    <section
      id="experts"
      className="pb-24 pt-20"
      style={{ background: "linear-gradient(200deg, #590515 0%, #7a1530 100%)" }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-plum-tint/60">
          Expert-Led
        </p>
        <h2
          className="mb-5 font-light leading-tight text-bone"
          style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)" }}
        >
          Co-created with
          <br />
          <em className="italic text-plum-tint">Indian Experts.</em>
        </h2>
        <p className="mx-auto max-w-lg text-base font-light text-bone/55">
          Only what your body needs. Nothing more.
        </p>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 pt-16">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 border-t border-bone/15 pt-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
          {experts.map((expert) => (
            <div key={expert.name + expert.cred}>
              <div
                className="mx-auto mb-5 h-[72px] w-[72px] rounded-full border border-bone/20 sm:mx-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(246,242,237,.14), rgba(198,120,92,.2))",
                }}
              />
              <h3 className="font-display text-lg font-medium text-bone">{expert.name}</h3>
              <div className="mt-1 min-h-[34px] text-[13px] text-bone/55">{expert.cred}</div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[.14em] text-terracotta">
                {expert.tag}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-16 text-center">
        <WaitlistTrigger
          label="Join the Waitlist"
          className="bg-bone px-9 py-4 text-[11px] uppercase tracking-[0.18em] text-deep-plum hover:bg-white"
        />
      </div>
    </section>
  );
}
