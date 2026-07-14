import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Maavie",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[720px] px-6 py-20">
      <Link href="/" className="text-sm font-semibold text-deep-plum hover:text-terracotta">
        ← Back to Maavie
      </Link>

      <div className="mt-8 mb-10 rounded-md border-l-[3px] border-soft-sage bg-black/3 px-4 py-3 text-[13px] leading-relaxed text-charcoal/70">
        <b>Draft — pending legal review.</b> This is a placeholder privacy policy written to
        reflect what the product actually does today. It has not been reviewed by counsel and
        must be finalised before real user data is collected at launch.
      </div>

      <h1 className="mb-2 font-display text-4xl text-deep-plum">Privacy Policy</h1>
      <p className="mb-10 text-sm text-charcoal/60">Last updated: 2026</p>

      <div className="flex flex-col gap-8 text-[15px] leading-relaxed text-charcoal/85">
        <section>
          <h2 className="mb-2 font-display text-xl text-deep-plum">What we collect</h2>
          <p>
            When you join the waitlist, we collect your <b>email address</b> and, optionally, your{" "}
            <b>first name</b>. If you take the Hormone Snapshot Quiz, we also collect your{" "}
            <b>quiz answers</b> — your age band, cycle pattern, and the symptoms and goals you
            select — so we can send you the two guide modules most relevant to you.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-xl text-deep-plum">How we use it</h2>
          <p>We use what you share to:</p>
          <ul className="mt-2 flex flex-col gap-1.5 pl-5">
            <li className="list-disc">Send your personalised educational guide.</li>
            <li className="list-disc">Tell you when Maavie launches.</li>
            <li className="list-disc">Send occasional waitlist updates — nothing else.</li>
          </ul>
          <p className="mt-2">
            Your quiz result is <b>not a diagnosis</b>. It is an educational snapshot based on
            your own answers — see the disclaimer on the quiz result and guide pages for details.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-xl text-deep-plum">What we don&apos;t do</h2>
          <ul className="flex flex-col gap-1.5 pl-5">
            <li className="list-disc">We don&apos;t sell your data to anyone.</li>
            <li className="list-disc">
              We don&apos;t share your quiz answers with advertisers or third parties for
              marketing purposes.
            </li>
            <li className="list-disc">
              We don&apos;t use your health-related answers for anything beyond personalising the
              guide we send you.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 font-display text-xl text-deep-plum">Your choices</h2>
          <p>
            You can ask us to delete your email and quiz data at any time by writing to{" "}
            <span className="text-deep-plum">privacy@maavie.com</span>. Every email we send
            includes an unsubscribe link.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-xl text-deep-plum">Cookies &amp; analytics</h2>
          <p>
            This site does not currently use tracking cookies or third-party analytics. If that
            changes before launch, this section will be updated to describe what&apos;s collected
            and how to opt out.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-xl text-deep-plum">Contact</h2>
          <p>
            Questions about this policy or your data can be sent to{" "}
            <span className="text-deep-plum">privacy@maavie.com</span>.
          </p>
        </section>
      </div>
    </main>
  );
}
