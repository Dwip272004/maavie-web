import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="py-[52px] pb-[30px] text-bone/75"
      style={{
        background: "#26040A",
        borderTop: "1px solid rgba(198,120,92,0.25)",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-24 gap-y-[30px] px-6">
        <div>
          <Image
            src="/images/maavie-footer-logo.png"
            alt="Maavie — Built for the Biology of Women"
            width={810}
            height={587}
            className="h-[92px] w-auto"
          />
          <p className="mt-3.5 max-w-[280px] text-[13px]">
            Understand your hormones. Change your life.
          </p>
        </div>
        <div className="flex flex-wrap gap-14">
          <div>
            <h4 className="mb-3 text-[13px] uppercase tracking-[.08em] text-bone">
              Explore
            </h4>
            <Link href="#science" className="mb-2 block text-sm hover:text-bone">
              The Science
            </Link>
            <Link href="#experts" className="mb-2 block text-sm hover:text-bone">
              Our Experts
            </Link>
            <Link href="#learn" className="mb-2 block text-sm hover:text-bone">
              Blog
            </Link>
            <Link href="/quiz" className="mb-2 block text-sm hover:text-bone">
              Take the Quiz
            </Link>
          </div>
          <div>
            <h4 className="mb-3 text-[13px] uppercase tracking-[.08em] text-bone">
              Company
            </h4>
            <Link href="#story" className="mb-2 block text-sm hover:text-bone">
              Our Story
            </Link>
            <Link href="#waitlist" className="mb-2 block text-sm hover:text-bone">
              Join the Waitlist
            </Link>
            <Link href="/privacy" className="mb-2 block text-sm hover:text-bone">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mt-10 border-t border-bone/12 pt-5 text-xs text-bone/50">
          © 2026 Maavie Rituals Pvt. Ltd. · Women&apos;s Hormonal Health ·
          India · maavie.com · @maavie.in
          <br />
          Educational content, not medical advice.
        </div>
      </div>
    </footer>
  );
}
