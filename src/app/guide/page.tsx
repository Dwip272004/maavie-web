import { GuideCover } from "@/components/guide/GuideCover";
import { WhatsHappening } from "@/components/guide/WhatsHappening";
import { GuideModuleSection } from "@/components/guide/GuideModuleSection";
import { GUIDE_MODULES } from "@/components/guide/modules";

export default function GuidePage() {
  return (
    <div className="leading-[1.65]">
      <GuideCover />

      <div className="mx-auto max-w-[760px] px-5 pb-20">
        <WhatsHappening />

        <div className="mb-6 text-xs font-bold uppercase tracking-[.16em] text-terracotta">
          Part 2 · Your focus areas
        </div>

        <div className="flex flex-col gap-11">
          {GUIDE_MODULES.map((module) => (
            <GuideModuleSection key={module.id} module={module} />
          ))}
        </div>

        <div className="mt-5 border-t border-[#e6ddd2] pt-5 text-[12.5px] text-[#8a8a8a]">
          This guide is educational and is not medical advice, diagnosis, or treatment. Product
          statements describe general nutritional and structure-and-function support and are not
          claims to treat, cure, or prevent any condition. If you&apos;re on HRT or medication, or
          have a health concern, please speak with your prescriber or a qualified clinician.
        </div>

        <footer className="pt-8 text-center text-[13px] text-[#8a8a8a]">
          © 2026 Maavie Rituals Pvt. Ltd. · Women&apos;s Hormonal Health · India · Science you can
          feel.
        </footer>
      </div>
    </div>
  );
}
