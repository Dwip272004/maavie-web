import { WaitlistTrigger } from "@/components/WaitlistTrigger";

export function Waitlist() {
  return (
    <section
      id="waitlist"
      className="pb-24 pt-20 text-center text-bone"
      style={{
        background: "linear-gradient(160deg,#9D6E6B,#590515)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="font-display text-[clamp(30px,3.8vw,48px)] font-semibold text-bone">
          Be part of the beginning
        </h2>
        <p className="mx-auto my-4 max-w-[520px] text-lg text-bone/85">
          Join the waitlist and be first to know when Maavie launches — with
          the honest, science-first version, straight to your inbox.
        </p>
        <WaitlistTrigger
          label="Join the Waitlist"
          className="bg-bone px-10 py-[17px] text-base text-deep-plum hover:bg-white"
        />
      </div>
    </section>
  );
}
