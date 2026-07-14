import type { GuideModule } from "./modules";

export function GuideModuleSection({ module }: { module: GuideModule }) {
  return (
    <section
      id={module.id}
      className="scroll-mt-5 overflow-hidden rounded-[20px] border border-[#eadfd4] bg-white"
    >
      <div
        className="flex items-center gap-3.5 px-7 py-6 text-white"
        style={{ background: module.gradient }}
      >
        <span className="text-[30px]">{module.icon}</span>
        <h2 className="font-display text-2xl text-white">{module.title}</h2>
      </div>
      <div className="px-7 pb-7 pt-6">
        <h3 className="mb-2 text-[12.5px] font-bold uppercase tracking-[.1em] text-deep-plum">
          What&apos;s happening
        </h3>
        <p className="mb-3.5 text-base text-[#3f3f3f]">{module.whatsHappening}</p>

        <h3 className="mb-2 mt-[18px] text-[12.5px] font-bold uppercase tracking-[.1em] text-deep-plum">
          What can help
        </h3>
        <ul>
          {module.checklist.map((item, i) => (
            <li
              key={item}
              className={`relative py-2 pl-7 text-[15px] text-[#444] ${
                i < module.checklist.length - 1 ? "border-b border-[#f2ebe2]" : ""
              }`}
            >
              <span className="absolute left-0 top-2 font-bold text-terracotta">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-4 rounded-xl bg-terra-tint px-4 py-3.5 text-sm text-[#6a4a3c]">
          <b className="text-deep-plum">How Maavie helps:</b> {module.maavieNote}
        </div>

        {module.flag && (
          <div className="mt-3.5 rounded-md border-l-[3px] border-terracotta bg-[#fff4f0] px-3.5 py-2.5 text-[13px] text-[#7a5346]">
            {module.flag}
          </div>
        )}
      </div>
    </section>
  );
}
